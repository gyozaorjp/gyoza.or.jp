<script setup lang="ts">
const title = ref('焼き餃子協会について')
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
        <h2 class="text-xl">一般社団法人焼き餃子協会とは</h2>
        <p>
          世界には餃子（またはそれに似た料理）がさまざまにありますが、 日本では焼き餃子が独自に発達し、多様な材料を包み込んだ餃子が全国各地で開発されてきました。現在、通販で購入できる数だけでも1500種類以上存在しています。
        </p>
        <p>
          一般社団法人焼き餃子協会は、美味しい餃子を楽しむことができる社会を目指して、餃子や油・調味料そして調理器具など餃子に関連する業界の発展を支援し、また消費者にも美味しい餃子の焼き方や食べ方などの情報提供を行って参ります。
        </p>
      </section>

      <section class="mt-12 p-4 border-4 border-white">
        <h2 class="text-xl">ミッション</h2>
        <p class="mt-2 text-lg">日本の焼き餃子文化を世界へ広める</p>

        <h2 class="mt-8 text-xl">ビジョン</h2>
        <ul class="list-decimal ml-6 mt-2">
          <li>全国各地で地元の餃子理解を深め、餃子愛の発信者を増やしていく</li>
          <li>日本の餃子の焼き方を、義務教育の一部とする</li>
          <li>酒やラーメンのように、餃子の「作り手」をブランド認知させる</li>
        </ul>
      </section>

      <h2 class="mt-12 text-xl">一般社団法人 焼き餃子協会</h2>

      <table class="table table-compact">
        <tr>
          <th>所在地</th>
          <td>
            <p>〒140-0004<br />
              東京都 品川区 南品川二丁目9番25号<br />
              扇田ビル308号室
            </p>
          </td>
        </tr>
        <tr>
          <th>設立日</th>
          <td>
            <p>
              2018年（平成30年）1月5日
            </p>
          </td>
        </tr>
        <tr>
          <th>決算月</th>
          <td>
            <p>
              12月
            </p>
          </td>
        </tr>
        <tr>
          <th>代表者</th>
          <td>
            <p>代表理事 小野寺 力</p>
          </td>
        </tr>
        <tr>
          <th>理事</th>
          <td>
            <ul>
              <li>小野寺 力<br class="sm:hidden" />
                <span class="text-xs">（しかけ株式会社 代表取締役 / ギョウザジョッキー）</span></li>
              <li>小田 誠</li>
              <li>恒吉 浩之<br class="sm:hidden" />
                <span class="text-xs">（宮崎ギョーザ王子）</span></li>
            </ul>
          </td>
        </tr>
        <tr>
          <th>監事</th>
          <td>
            <ul>
              <li>勝又 喜久男<br class="sm:hidden" />
                <span class="text-xs">（株式会社ふじのくに 代表取締役 / 行政書士）</span></li>
            </ul>
          </td>
        </tr>
      </table>

      <table class="mt-12 table table-compact">
        <tr>
          <th>Mail</th>
          <td>
            <p>info@gyoza.or.jp</p>
          </td>
        </tr>
        <tr>
          <th>電話番号</th>
          <td>
            <p>
              03-4446-6137
            </p>
            <ul class="text-xs mt-1">
              <li>AIにより伝言を承り、お返事は平日10:00～18:00に行います</li>
            </ul>
          </td>
        </tr>
        <tr>
          <th>事務局</th>
          <td>
            <p>
              <a href="https://www.shikake.com/" target="_blank">しかけ株式会社</a><br />
              〒150-0021<br />
              東京都 渋谷区 恵比寿西1-33-6<br />JP noie 恵比寿西1F co-ba ebisu
            </p>
          </td>
        </tr>
      </table>


      <h2 class="mt-12 text-xl">支部</h2>
      <dl>
        <dt>宮崎支部</dt>
        <dd>
          <table class="table table-compact">
            <tr>
              <th>支部長</th>
              <td>
                <p>
                  <a href="https://twitter.com/nakahi" target="_blank">恒吉浩之</a>
                </p>
              </td>
            </tr>
            <tr>
              <th>Mail</th>
              <td>miyazaki@gyoza.or.jp</td>
            </tr>
          </table>
        </dd>

        <dt>鹿児島支部</dt>
        <dd>
          <table class="table table-compact">
            <tr>
              <th>支部長</th>
              <td>
                <p>
                  <a href="https://note.com/gyoza_journey" target="_blank">カタオカマナミ</a>
                </p>
              </td>
            </tr>
            <tr>
              <th>事務局</th>
              <td>
                <p>
                  <a href="https://www.bigfive-shop.com/" target="_blank">株式会社ビッグファイブ</a></p>
                <p>〒891-0115 鹿児島県鹿児島市東開町4-74</p>
              </td>
            </tr>
            <tr>
              <th>Mail</th>
              <td>kagoshima@gyoza.or.jp</td>
            </tr>
          </table>
        </dd>
      </dl>

    </section>

  </article>
</template>

<style scoped lang="postcss">
dt {
  @apply mt-4 p-1 leading-relaxed border-b-2 border-amber-50;
}
dd {
  @apply ml-4 p-1;
}
th {
  @apply whitespace-nowrap;
}
td {
  @apply whitespace-normal;
}
</style>