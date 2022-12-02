<script setup lang="ts">
const config = useRuntimeConfig()

useHead({
  titleTemplate: titleChunk => {
    return titleChunk ? `${titleChunk} - ${config.public.title}` : config.public.title
  }
})
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>

    <footer class="mt-20 footer p-10 bg-base-200 text-base-content">
      <div>
        <NuxtLink to="/"><img src="/img/common/symbol.png" alt="" class="w-16" /></NuxtLink>
        <p>一般社団法人焼き餃子協会</p>
        <p>〒140-0004 東京都品川区<br />南品川二丁目９番２５号<br />扇田ビル３０８号室</p>
        <p>TEL 03-4446-6137</p>
      </div> 
      <div>
        <span class="footer-title">協会概要</span> 
        <a class="link link-hover" href="/#about">焼き餃子協会について</a> 
        <a class="link link-hover" href="/#entry">入会案内</a> 
        <a class="link link-hover" href="/#contact">お問い合わせ</a> 
      </div> 
      <div>
        <span class="footer-title">Legal</span>
        <a class="link link-hover">定款</a>
        <a class="link link-hover">会員規約</a>
        <a class="link link-hover">プライバシーポリシー</a>
        <NuxtLink to="/transactionlaw/" class="link link-hover">特定商取引法に基づく表示</NuxtLink>
      </div>

      <div>
        <span class="footer-title">Social</span> 
        <div class="grid grid-flow-col gap-4">
          <a href="https://twitter.com/YakiGyozaJapan" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a> 
          <a href="https://www.facebook.com/yaki.gyoza.japan/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
        </div>
      </div>
    </footer>
  </div>
</template>
