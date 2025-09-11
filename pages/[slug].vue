<script setup lang="ts">
const route = useRoute()
const key = route.path

// ハイドレーション不一致を防ぐため、useLazyAsyncDataを使用
const { data, pending, error } = await useLazyAsyncData(key, async () => {
  try {
    // パスを正規化（末尾のスラッシュを除去）
    const normalizedKey = key.endsWith('/') && key !== '/' ? key.slice(0, -1) : key
    
    // まず正規化されたパスでコンテンツを取得
    const content = await queryContent(normalizedKey).findOne()
    
    if (content) {
      return content
    }
    
    // フォールバック1: 元のパスで試行
    if (normalizedKey !== key) {
      const originalContent = await queryContent(key).findOne()
      
      if (originalContent) {
        return originalContent
      }
    }
    
    // フォールバック2: パスから直接コンテンツファイルを読み込む
    const contentPath = normalizedKey === '/' ? '/index' : normalizedKey
    const fallbackContent = await queryContent(contentPath).findOne()
    
    if (fallbackContent) {
      return fallbackContent
    }
    
    // フォールバック3: パスを正規化して再試行
    const pathWithoutSlash = normalizedKey.startsWith('/') ? normalizedKey.slice(1) : normalizedKey
    const normalizedContent = await queryContent(pathWithoutSlash).findOne()
    
    return normalizedContent
  } catch (error) {
    console.warn(`Failed to load content for ${key}:`, error)
    return null
  }
}, {
  // ハイドレーション不一致を防ぐための設定
  default: () => null
})

// 型安全なアクセスのためのcomputed
const contentData = computed(() => data.value as any)
</script>

<template>
  <div>
    <!-- ローディング状態 -->
    <div v-if="pending" class="flex justify-center items-center py-8">
      <div class="text-lg">読み込み中...</div>
    </div>
    
    <!-- エラー状態 -->
    <div v-else-if="error" class="flex justify-center items-center py-8">
      <div class="text-lg text-red-600">ページが見つかりません</div>
    </div>
    
    <!-- コンテンツ表示 -->
    <template v-else-if="data">
      <ContentRenderer :value="data">
        <NuxtLayout name="markdown" :title="contentData?.title" :description="contentData?.description">
          <ContentRendererMarkdown :value="data" class="contents" />
        </NuxtLayout>
      </ContentRenderer>

      <HomeEntry v-if="key==='/entry'"></HomeEntry>

      <AppShare class="mt-8" :title="contentData?.title"></AppShare>

      <LazyAppContact id="contact" v-if="contentData?.contact"></LazyAppContact>
    </template>
  </div>
</template>