<script setup lang="ts">
const title = ref('餃子フェス®企画 展開店舗')
useHead({
  title,
  meta: [
    { property: 'og:title', content: title },
  ],
})
</script>

<template>
  <article class="pt-12">
    <header class="hero relative w-full text-white" style="background-image: url(/img/common/visual-main_bg@pc.png)">
      <h1 class="py-20 text-2xl sm:text-3xl">{{ title }}</h1>
    </header>

    <section class="mt-10 container max-w-xl mx-auto p-4">

      <section class="mt-8 flex flex-col gap-y-4 p-4 bg-white text-sm">
        <h2 class="text-xl">餃子フェス&reg;</h2>
        <p>
          全国各地の逸品餃子の中から、旬・話題の餃子をセレクトしたものをスーパーマーケットの冷凍餃子コーナーに並べる「餃子フェス&reg;」企画。
        </p>
        <p>
          不定期に商品の入れ替えや、店舗ごとにラインナップの違いがございますので、ご了承ください。
        </p>
        <p class="text-xs">
          「餃子フェス&reg;」はしかけ株式会社の登録商標です（登録番号 第6023253号）
        </p>
      </section>

      <section>
        <h2 class="mt-12 text-xl">カスミ・BLANDE</h2>
        <dl>
          <dt>茨城県</dt>
          <dd>
            <ul>
              <li><a href="https://www.kasumi.co.jp/tenpotop/ibaraki-south/tsukuba/2008/" target="_blank">BLANDE つくば並木店</a></li>
              <li><a href="https://www.kasumi.co.jp/tenpotop/ibaraki-south/tsukuba/2046/" target="_blank">BLANDE 研究学園店</a></li>
              <li><a href="https://www.kasumi.co.jp/tenpotop/ibaraki-west/yukigun/325/" target="_blank">カスミ 八千代店</a></li>
              <li><a href="https://www.kasumi.co.jp/tenpotop/ibaraki-west/koga/2245/" target="_blank">カスミ フードスクエア 古河諸川店</a></li>
              <li><a href="https://www.kasumi.co.jp/tenpotop/ibaraki-south/tsukuba/294/" target="_blank">カスミ フードスクエアガーデンみどりの店</a></li>
            </ul>
          </dd>
          <dt>千葉県</dt>
          <dd>
            <ul>
              <li><a href="https://www.kasumi.co.jp/tenpotop/chiba-ken/chiba/338/" target="_blank">カスミ フードスクエア 稲毛海岸店</a></li>
            </ul>
          </dd>
          <dt>栃木県</dt>
          <dd>
            <ul>
              <li><a href="https://www.kasumi.co.jp/tenpotop/tochigi-ken/kanuma/411/" target="_blank">カスミ 鹿沼店</a></li>
            </ul>
          </dd>
        </dl>
      </section>

      <section>
        <h2 class="mt-12 text-xl">マックスバリュ・マルエツ
        </h2>
        <dl>
          <dt>千葉県</dt>
          <dd>
            <ul>
              <li><a href="https://www.mv-kanto.co.jp/stores/206/" target="_blank">マックスバリュ 東習志野店</a></li>
              <li><a href="https://www.mv-kanto.co.jp/stores/75/" target="_blank">マックスバリュ おゆみ野店</a></li>
              <li><a href="https://www.mv-kanto.co.jp/stores/189/" target="_blank">マックスバリュ 木更津請西店</a></li>
              <li><a href="https://www.mv-kanto.co.jp/stores/610/" target="_blank">マックスバリュエクスプレス 幕張店</a></li>
            </ul>
          </dd>
          <dt>東京都</dt>
          <dd>
            <ul>
              <li><a href="https://www.mv-kanto.co.jp/stores/132/" target="_blank">マックスバリュ 田無芝久保店</a></li>
              <li><a href="https://www.maruetsu.co.jp/store/9320/" target="_blank">マルエツ 清澄白河店</a></li>
              <li><a href="https://www.maruetsu.co.jp/store/9659/" target="_blank">マルエツ 板橋南町店</a></li>
            </ul>
          </dd>
          <dt>神奈川県</dt>
          <dd>
            <ul>
              <li><a href="https://www.mv-kanto.co.jp/stores/168/" target="_blank">マックスバリュ 津田山店</a></li>
              <li><a href="https://www.maruetsu.co.jp/store/9437/" target="_blank">マルエツ 長津田駅前店</a></li>
              <li><a href="https://www.maruetsu.co.jp/store/9136/" target="_blank">マルエツ 井土ヶ谷店</a></li>
              <li><a href="https://www.maruetsu.co.jp/store/9248/" target="_blank">マルエツ 瀬谷店</a></li>
            </ul>
          </dd>
        </dl>
      </section>

      <section>
        <h2 class="mt-12 text-xl">平和堂</h2>
        <dl>
          <dt>滋賀県</dt>
          <dd>
            <ul>
              <li><a href="http://www.hatosen.jp/shop/shiga/higashiomi/23" target="_blank">アル・プラザ 八日市店</a></li>
            </ul>
          </dd>
          <dt>福井県</dt>
          <dd>
            <ul>
              <li><a href="http://www.hatosen.jp/shop/fukui/tsuruga/114" target="_blank">アル・プラザ敦賀店</a></li>
            </ul>
          </dd>
          <dt>大阪府</dt>
          <dd>
            <ul>
              <li><a href="http://www.hatosen.jp/shop/osaka/osaka/74" target="_blank">フレンドマート 深江橋店</a></li>
            </ul>
          </dd>
        </dl>
      </section>




    </section>

  </article>
</template>

<style scoped lang="postcss">
dt {
  @apply mt-4 p-1 leading-relaxed border-b-2 border-amber-50;
}
dd {
  @apply p-1;
}
ul {
  @apply p-1;
}
a:hover {
  @apply underline decoration-dashed underline-offset-4 decoration-amber-50;
}
</style>