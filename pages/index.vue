<script setup lang="ts">
import dayjs from 'dayjs'

const config = useRuntimeConfig()
const {data:posts} = await useFetch(config.NOTE_API)

const yyyymmdd = (datetime?: string) => {
  return datetime ? dayjs(datetime).format('YYYY/MM/DD') : null
}
</script>

<template>
  <article>
    <header class="hero relative h-screen w-screen" style="background-image: url(/img/top/visual-top_img@pc.jpg)">
      <div
        class="hero-content w-68 px-7 py-10 flex flex-col justify-center items-center gap-8 text-white"
        style="background-image: url(/img/top/visual-top_bg@pc.png)">
        <picture >
          <source media="(min-width: 640px)" srcset="/img/top/visual-top_h@pc.png" />
          <img src="/img/top/visual-top_h@sp.png" alt="" />
        </picture>
        <p class="text-center text-sm leading-relaxed">
          焼き餃子協会は、美味しい餃子を<br />作る人と、美味しく焼く人、美味しく<br />食べる人をつなげる団体です。
        </p>
        <ul class="flex flex-col items-center gap-2 text-xl">
          <li>
            <a role="button" href="" class="btn btn-wide btn-primary text-white">焼き餃子協会について</a>
          </li>
          <li>
            <a role="button" href="" class="btn btn-wide btn-primary text-white">入会案内</a>
          </li>
        </ul>
      </div>
    </header>

    <section class="container mx-auto mt-16 p-4 flex flex-col items-center">
      <header class="flex justify-center items-center gap-4">
        <img src="/img/common/ic_h_news_01.png" class="h-24 sm:h-36" alt="" />
        <h1 class="text-2xl sm:text-5xl">お知らせ</h1>
        <img src="/img/common/ic_h_news_02.png" class="h-24 sm:h-36" alt="" />
      </header>
      <ul class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <li class="note relative flex flex-col sm:p-0" v-for="post in posts.data.section.contents" :key="post.id">
          <div class="overflow-hidden w-full">
            <img :src="post.eyecatch" alt="" />
          </div>
          <p class="mt-2 text-xs">
            {{ yyyymmdd(post.publish_at) }}
          </p>
          <p class="mt-1 text-md">
            {{ post.name }}
          </p>
          <a :href="`https://note.com/ch1cala/n/${post.key}?magazine_key=m6c8cc8ac407b`"
            target="_blank"
            class="absolute inset-0"></a>
        </li>
      </ul>
      <p class="mt-4">
        <a
          href="https://note.com/yaki_gyoza/m/m6c8cc8ac407b"
          target="_blank"
          class="btn btn-outline btn-wide">お知らせを全て見る</a>
      </p>
    </section>

    <section class="mt-20 hero sm:h-screen bg-cover" style="background-image:url(/img/top/about_bg@pc.jpg)">
      <div class="hero-overlay bg-opacity-70 bg-stone-900/70"></div>
      <div class="hero-content flex-col sm:flex-row">
        <div class="sm:w-1/3 text-white">
          <h2 class="text-xl">一般社団法人焼き餃子協会とは</h2>
          <p class="mt-4 leading-relaxed">
            世界には餃子（またはそれに似た料理）がさまざまに存在します。<br />
            日本では焼き餃子が独自に発達し、多様な具による餃子が開発されて、通販で購入できる数だけでも1500種類以上存在します。<br />
            一般社団法人焼き餃子協会は、消費者がより美味しい餃子を楽しむ社会を目指して、餃子や油・調味料そして調理器具などの餃子に関連する業界の発展を支援し、また消費者にも美味しい餃子の焼き方や食べ方などの情報提供を行って参ります。
          </p>
        </div>
        <p>
          <img src="https://www.gyoza.or.jp/img/top/about_img.png" alt="" />
        </p>
      </div>
    </section>

    <section class="container mx-auto mt-16 p-4 flex flex-col items-center">
      <header class="flex justify-center items-center gap-4">
        <img src="/img/common/ic_h_entry_01.png" class="h-24 sm:h-36" alt="" />
        <h1 class="text-2xl sm:text-5xl">入会のご案内</h1>
        <img src="/img/common/ic_h_entry_02.png" class="h-24 sm:h-36" alt="" />
      </header>
      <p class="mt-4">
        焼き餃子協会は、焼き餃子に関連する業界間に向けて技術・情報支援を通して、<br />餃子を美味しく焼いて食べる日本の文化を世界の人々に楽しんでもらうことを目指しています。
      </p>

      <section class="mt-4 w-full border-t-2 border-amber-700 flex flex-col items-center">
        <h2 class="mt-4 text-xl">会員種別と特典について</h2>

        <div class="mt-4 entry overflow-x-auto">
          <table class="table container">
            <thead>
              <tr>
                <th></th> 
                <th class="sm:text-lg text-center">法人<br />賛助会員</th> 
                <th class="sm:text-lg text-center">個人<br />賛助会員</th> 
              </tr>
              <tr>
                <th></th> 
                <th>
                  <p class="text-right w-32 mx-auto">年会費 50,000円 / 1口</p>
                  <p class="text-right w-32 mx-auto">月会費 10,000円 / 1口</p>
                </th> 
                <th>
                  <p class="text-right w-32 mx-auto">年会費 10,000円 / 1口</p>
                  <p class="text-right w-32 mx-auto">月会費 1,000円 / 1口</p>
                </th> 
              </tr>
            </thead> 
            <tbody>
              <tr>
                <th>
                  <p>会報メール</p>
                  <p class="desc">
                    焼き餃子協会の活動を毎月の会報メールでご報告いたします
                  </p>
                </th>
                <td>
                  <img src="/img/common/ic_check.png" alt="◯" class="mx-auto" />
                </td>
                <td>
                  <img src="/img/common/ic_check.png" alt="◯" class="mx-auto" />
                </td>
              </tr>

              <tr>
                <th>
                  <p>会員限定グッズの購入</p>
                  <p class="desc">
                    会員証など会員限定グッズを購入できます
                  </p>
                </th>
                <td>
                  <img src="/img/common/ic_check.png" alt="◯" class="mx-auto" />
                </td>
                <td>
                  <img src="/img/common/ic_check.png" alt="◯" class="mx-auto" />
                </td>
              </tr>

              <tr>
                <th>
                  <p>逸品ぎょうざ頒布会の参加</p>
                  <p class="desc">
                    会員限定 3,960円（税込）/月<br />
                    全国の逸品餃子を工場から毎月直送します
                  </p>
                </th>
                <td>
                </td>
                <td>
                  <img src="/img/common/ic_check.png" alt="◯" class="mx-auto" />
                </td>
              </tr>

              <tr>
                <th>
                  <p>gyoza.org メール</p>
                  <p class="desc">
                    会員限定 165円（税込）/月<br />
                    gyoza.orgのメールボックスをご利用頂けます
                  </p>
                </th>
                <td>
                  <img src="/img/common/ic_check.png" alt="◯" class="mx-auto" />
                </td>
                <td>
                  <img src="/img/common/ic_check.png" alt="◯" class="mx-auto" />
                </td>
              </tr>

              <tr>
                <th>
                  <p>催事の優先案内</p>
                  <p class="desc">
                    焼き餃子協会が企画する催事を優先的にご案内します
                  </p>
                </th>
                <td>
                  <img src="/img/common/ic_check.png" alt="◯" class="mx-auto" />
                </td>
                <td>
                </td>
              </tr>

              <tr>
                <th>
                  <p>小野寺力の肖像権利用</p>
                  <p class="desc">
                    小野寺力の写真や似顔絵を商品やPOPにご利用頂けます（10口以上）
                  </p>
                </th>
                <td>
                  <img src="/img/common/ic_check.png" alt="◯" class="mx-auto" />
                </td>
                <td>
                </td>
              </tr>

            </tbody> 
            <tfoot>
              <tr>
                <th>
                  <p class="text-right">会費</p>
                </th> 
                <th>
                  <p class="text-right w-32 mx-auto">年会費 50,000円 / 1口</p>
                  <p class="text-right w-32 mx-auto">月会費 10,000円 / 1口</p>
                </th> 
                <th>
                  <p class="text-right w-32 mx-auto">年会費 10,000円 / 1口</p>
                  <p class="text-right w-32 mx-auto">月会費 1,000円 / 1口</p>
                </th> 
              </tr>
              <tr>
                <th></th> 
                <th>
                  <a href="" class="btn btn-primary text-white">法人賛助会員 申込</a>
                </th> 
                <th>
                  <a href="" class="btn btn-primary text-white">個人賛助会員 申込</a>
                </th> 
              </tr>
            </tfoot>
          </table>
        </div>

      </section>
    </section>
  </article>
</template>

<style scoped lang="postcss">
.note:hover img {
  @apply transition duration-500 scale-110;
}
.entry .desc {
  @apply font-normal whitespace-normal;
}
.entry tbody th {
  @apply w-1/2 text-left;
}
</style>