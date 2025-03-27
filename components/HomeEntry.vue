<script setup lang="ts">
import { useElementVisibility } from '@vueuse/core'
const target = ref(null)
const isVisible = useElementVisibility(target)
</script>

<template>
  <section ref="target" class="relative container mx-auto p-4 sm:p-8 flex flex-col items-center gap-y-4">
    <HeaderAun
      :left="'/img/common/ic_h_entry_01.png'"
      :right="'/img/common/ic_h_entry_02.png'"
      class="mt-4">
      <h1 class="font-serif font-bold text-xl sm:text-5xl">入会のご案内</h1>
    </HeaderAun>
    <p class="text-left">
      焼き餃子協会は、焼き餃子に関連する技術・情報の共有を通して、<br />日本の焼き餃子文化を世界の人々に楽しんでもらうことを目指しています。
    </p>

    <h2 class="mt-8 text-3xl">会員種別と特典について</h2>
    <div class="mt-4 max-w-xl flex flex-col gap-y-8 divide-y divide-orange-900">
      <article class="flex gap-x-4">
        <div class="min-w-12">
          <img src="/img/common/ic_medal_01.png" alt="" />
        </div>
        <dl>
          <dt class="text-xl font-bold">会報メール</dt>
          <dd class="text-lg">
            <p>焼き餃子協会の活動を毎月の会報メールでご報告いたします</p>
            <p class="text-base font-thin text-black">（法人賛助会員は複数のメールアドレスをご登録頂けます）</p>
          </dd>
        </dl>
      </article>

      <article class="pt-8 flex gap-x-4">
        <div class="min-w-12">
          <img src="/img/common/ic_medal_01.png" alt="" />
        </div>
        <dl class="w-full">
          <dt class="text-xl font-bold">逸品ぎょうざ頒布会の参加</dt>
          <dd class="text-lg">
            <p>全国の逸品餃子を工場から毎月直送します</p>
            <p class="text-base font-thin text-black">（頒布会会費 3,960円/月）</p>
          </dd>
          <dd class="mt-2">
            <p class="text-right">
              <a href="https://share.hsforms.com/27A4W-cmMSgaob5EoaHTCCgd8bov" target="_blank">
              → 逸品ぎょうざ頒布会 参加お申込
              </a>
            </p>
          </dd>
        </dl>
      </article>

      <article class="pt-8 flex gap-x-4">
        <div class="min-w-12">
          <img src="/img/common/ic_medal_01.png" alt="" />
        </div>
        <dl>
          <dt class="text-xl font-bold">会員限定グッズの購入</dt>
          <dd class="text-lg">
            <p>会員証など会員限定グッズを購入できます</p>
          </dd>
        </dl>
      </article>

      <article class="pt-8 flex gap-x-4">
        <div class="min-w-12">
          <img src="/img/common/ic_medal_01.png" alt="" />
        </div>
        <dl>
          <dt class="text-xl font-bold">焼き餃子協会アワードの投票</dt>
          <dd class="text-lg">
            <p>今年の餃界の顔を決める焼き餃子協会アワードに投票いただけます</p>
          </dd>
          <!--
          <dd class="mt-4 p-3 bg-orange-50 text-sm">
            <p class="py-2">これまでの受賞者</p>
            <ul class="flex flex-col gap-y-2">
              <li>
                <p class="text-lg"><a href="https://prtimes.jp/main/html/rd/p/000000006.000056065.html" target="_blank">2022年</a></p>
                <ul class="ml-2">
                  <li><span class="font-thin mr-6">大賞</span> パラダイス山元 様</li>
                  <li><span class="font-thin mr-6">金賞</span> クック井上。 様</li>
                  <li><span class="font-thin mr-1">新人賞</span> 「くいれぽ餃子」松田 萌々子 様</li>
                </ul>
              </li>
              <li>
                <p class="text-lg"><a href="https://prtimes.jp/main/html/rd/p/000000011.000056065.html" target="_blank">2023年</a></p>
                <ul class="ml-2">
                  <li><span class="font-thin mr-6">大賞</span> 味の素冷凍食品株式会社 様 <span class="block ml-12">「冷凍餃子フライパンチャレンジ」プロジェクト</span></li>
                  <li><span class="font-thin mr-6">金賞</span> 宮崎県ひなた餃子連合会 様</li>
                </ul>
              </li>
            </ul>
          </dd>
          -->
        </dl>
      </article>

      <article class="pt-8 flex gap-x-4">
        <div class="min-w-12">
          <img src="/img/common/ic_medal_01.png" alt="" />
        </div>
        <dl>
          <dt class="text-xl font-bold">会員限定イベントの優先ご案内</dt>
          <dd class="text-lg">
            <p>焼き餃子協会アワード発表会、工場見学ツアーなど、焼き餃子協会が主催・共催するイベントを優先的にご案内いたします</p>
          </dd>
        </dl>
      </article>

      <article class="pt-8 flex gap-x-4">
        <div class="min-w-12">
          <img src="/img/common/ic_medal_01.png" alt="" />
        </div>
        <dl>
          <dt class="text-xl font-bold">
            焼き餃子協会ロゴ等のご利用<br />（5口以上の法人賛助会員限定）
          </dt>
          <dd class="text-lg">
            <p>焼き餃子協会のロゴ等を商品やPOPにご利用頂けます</p>
            <p class="text-base font-thin text-black">（ご利用内容は事前承認が必要です）</p>
          </dd>
        </dl>
      </article>

      <article class="pt-8 flex gap-x-4">
        <div class="min-w-12">
          <img src="/img/common/ic_medal_01.png" alt="" />
        </div>
        <dl>
          <dt class="text-xl font-bold">
            「餃子フェス&reg;」商標のご利用
          </dt>
          <dd class="text-lg">
            <p>法人賛助会員が主催・参加するイベントや催事では、「餃子フェス&reg;」商標をご利用いただけます</p>
            <p class="text-base font-thin text-black">（ご利用にあたっては、焼き餃子協会事務局に事前にご相談ください）</p>
          </dd>
          <dd class="mt-2">
            <p class="text-right">
              <a href="https://www.j-platpat.inpit.go.jp/c1801/TR/JP-2017-164522/40/ja" target="_blank">「餃子フェス」 商標登録番号 6023253</a>
            </p>
          </dd>
        </dl>
      </article>

      <article class="pt-8">
        <p class="text-center">そのほか、ご要望がございましたらお気軽にご相談ください！</p>
      </article>
    </div>


    <h2 class="mt-8 text-2xl sm:text-4xl py-4">入会お申し込みはこちらから</h2>

    <div class="w-full max-w-4xl mx-auto grid sm:grid-cols-2 gap-8">
      <EntryBusiness></EntryBusiness>
      <EntryPersonal></EntryPersonal>
    </div>
    <div class="flex flex-col">
      <p>※年度途中ご入会の場合、年会費は日割精算いたします。翌年度以降は1月決済となります。</p>
      <p>※逸品ぎょうざ頒布会は入会後にご案内申し上げます。</p>
    </div>

    <div class="mt-8 flex flex-col justify-center items-center">
      <h2 class="mt-8 text-xl sm:text-2xl py-4">オプションサービス</h2>
      <a href="https://share.hsforms.com/27A4W-cmMSgaob5EoaHTCCgd8bov" target="_blank" class="block w-full p-4 rounded-xl bg-white text-orange-800 text-center text-xl sm:text-lg hover:scale-105 transition-transform duration-300">
        逸品ぎょうざ頒布会 3,960円 /月会費
      </a>
      <p class="mt-2 text-sm">決済方法はクレジットカード決済のみ</p>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
.isVisible {
  @apply translate-x-0;
}
</style>