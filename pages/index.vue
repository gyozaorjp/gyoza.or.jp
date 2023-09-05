<script setup lang="ts">
import dayjs from 'dayjs'

const config = useRuntimeConfig()
const {data:posts} = await useFetch(config.public.NOTE_API)

const yyyymmdd = (datetime?: string) => {
  return datetime ? dayjs(datetime).format('YYYY/MM/DD') : null
}

useHead({
  titleTemplate: config.public.title,
  meta: [
    { property: 'og:type', content: 'website' },
  ],
})

</script>

<template>
  <NuxtLayout>
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
            <a role="button" href="#about" class="btn btn-wide btn-primary text-white">焼き餃子協会について</a>
          </li>
          <li>
            <a role="button" href="#entry" class="btn btn-wide btn-primary text-white">入会案内</a>
          </li>
        </ul>
      </div>
    </header>

    <section class="container mx-auto mt-16 p-4 flex flex-col items-center">
      <header class="flex justify-center items-center gap-4">
        <img src="/img/common/ic_h_news_01.png" class="h-24 sm:h-36" alt="" />
        <h1 class="text-xl sm:text-5xl">焼き餃子協会 会報</h1>
        <img src="/img/common/ic_h_news_02.png" class="h-24 sm:h-36" alt="" />
      </header>
      <ClientOnly>
        <Posts :url="'https://gyoza.or.jp/api/note'" />
      </ClientOnly>
      <p class="mt-4">
        <a
          href="https://note.com/yaki_gyoza/m/m6c8cc8ac407b"
          target="_blank"
          class="btn btn-outline btn-wide">焼き餃子協会 会報一覧</a>
      </p>
    </section>

    <section id="about" class="mt-20 hero sm:h-screen bg-cover" style="background-image:url(/img/top/about_bg@pc.jpg)">
      <div class="hero-overlay bg-opacity-70 bg-stone-900/70"></div>
      <div class="hero-content flex-col sm:flex-row">
        <div class="sm:w-1/3 text-white">
          <h2 class="text-xl">一般社団法人焼き餃子協会とは</h2>
          <p class="mt-4 leading-relaxed">
            世界には餃子（またはそれに似た料理）がさまざまにありますが、
            日本では焼き餃子が独自に発達し、多様な材料を包み込んだ餃子が全国各地で開発されてきました。現在、通販で購入できる数だけでも1500種類以上存在しています。
          </p>
          <p class="mt-4 leading-relaxed">
            一般社団法人焼き餃子協会は、美味しい餃子を楽しむことができる社会を目指して、餃子や油・調味料そして調理器具など餃子に関連する業界の発展を支援し、また消費者にも美味しい餃子の焼き方や食べ方などの情報提供を行って参ります。
          </p>
        </div>
        <p>
          <img src="https://www.gyoza.or.jp/img/top/about_img.png" alt="" />
        </p>
      </div>
    </section>

    <section id="entry" class="container mx-auto mt-16 p-4 flex flex-col items-center">
      <header class="flex justify-center items-center gap-4">
        <img src="/img/common/ic_h_entry_01.png" class="h-24 sm:h-36" alt="" />
        <h1 class="text-xl sm:text-5xl">入会のご案内</h1>
        <img src="/img/common/ic_h_entry_02.png" class="h-24 sm:h-36" alt="" />
      </header>
      <p class="mt-4">
        焼き餃子協会は、焼き餃子に関連する技術・情報の共有を通して、<br />日本の焼き餃子文化を世界の人々に楽しんでもらうことを目指しています。
      </p>
      <p class="mt-4 text-sm">
          ご入会にあたって、書類審査を行なっております
        </p>

      <section class="mt-4 w-full border-t-2 border-amber-700 flex flex-col items-center">
        <h2 class="mt-4 text-xl">会員種別と特典について</h2>

        <div class="mt-4 entry">
          <table class="table">
            <thead>
              <tr>
                <th></th> 
                <th class="sm:text-lg text-center">法人<br />賛助会員</th> 
                <th class="sm:text-lg text-center">個人<br />賛助会員</th> 
              </tr>
            </thead> 
            <tbody>
              <tr>
                <th>
                  <p>会報メール</p>
                  <p class="desc">
                    焼き餃子協会の活動を毎月の会報メールでご報告いたします<br />
                    （法人賛助会員は複数のメールアドレスをご登録頂けます）
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
                  <p>焼き餃子協会アワードの投票</p>
                  <p class="desc">
                    今年の餃界の顔を決める<br />焼き餃子協会アワードに投票いただけます
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
                  <p>逸品ぎょうざ頒布会の参加権</p>
                  <p class="desc">
                    会員限定 +3,960円（税込）/月<br />
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
                  <p>gyoza.org メールご利用権</p>
                  <p class="desc">
                    会員限定 +165円（税込）/月<br />
                    gyoza.orgのメールボックスをご利用頂けます<br />
                    （<a href="https://rs.sakura.ad.jp/mail/" target="_blank" class="link">さくらのメールボックス</a>での提供となります）
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
                    焼き餃子協会が企画する催事を優先的にご案内します<br />
                    （出店の可否は実績や会場都合で判断されます）
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
                  <p>焼き餃子協会ロゴ等の利用権</p>
                  <p class="desc">
                    <strong>5口以上の法人賛助会員限定</strong><br />
                    焼き餃子協会のロゴ等を商品やPOPにご利用頂けます<br />
                    （ご利用内容は事前承認が必要です）
                  </p>
                </th>
                <td>
                  <img src="/img/common/ic_check.png" alt="◯" class="mx-auto" />
                </td>
                <td>
                </td>
              </tr>

            </tbody> 
          </table>
        </div>

        <div class="mt-8 grid lg:grid-cols-2 gap-4">
          <div class="card w-96 bg-amber-50 shadow-xl">
            <div class="card-body">
              <h2 class="card-title">法人賛助会員</h2>
              <p>
                年会費 60,000円 / 1口（非課税）※
              </p>
              <div class="card-actions justify-end">
                <a href="https://share.hsforms.com/1g5PzUD4iTrCT5LnOfX1LNwd8bov"
                  target="_blank" class="btn btn-primary text-white">
                  法人賛助会員 登録審査お申込
                </a>
              </div>
            </div>
          </div>

          <div class="card w-96 bg-amber-50 shadow-xl">
            <div class="card-body">
              <h2 class="card-title">個人賛助会員</h2>
              <p class="text-sm">年払か月払をお選び頂けます</p>
              <p>
                年会費 5,000円 / 1口（非課税）※<br />
                月会費 &nbsp;&nbsp;500円 / 1口（非課税）
              </p>
              <div class="card-actions justify-end">
                <a href="https://share.hsforms.com/1A98uZetoRKy5QbDhb-XNRwd8bov"
                  target="_blank" class="btn btn-primary text-white">
                  個人賛助会員 登録審査お申込
                </a>
              </div>
            </div>
          </div>
        </div>
        <p class="mt-4 text-xs">※年度途中ご入会の場合、年会費は月割計算となり、翌年度以降は1月決済となります</p>

      </section>
    </section>

    <section id="contact" class="mt-20 w-full py-32 flex flex-col justify-center items-center bg-cover bg-center" style="background-image:url(/img/top/contact_bg@pc.jpg)">
      <p class="text-5xl text-white">お問い合わせ</p>
      <ul class="mt-4 flex flex-col sm:flex-row gap-4">
        <li class="relative w-80 bg-white/50 hover:bg-amber-50 transition duration-500 border border-amber-400 p-4 shadow-lg text-center text-xl flex flex-col justify-center items-center">
            <p>フォームでのお問い合わせ</p>
            <a href="https://share.hsforms.com/1gPwfyg1lRKePmkYJrluR2gd8bov" target="_blank" class="absolute inset-0"></a>
        </li>
        <li class="relative w-80 bg-white/50 hover:bg-amber-50 transition duration-500 border border-amber-400 p-4 shadow-lg text-center text-xl flex flex-col justify-center items-center">
            <p>電話でのお問い合わせ<br />TEL 03-4446-6137</p>
            <p class="text-sm">（AIによる受付となります）</p>
            <a href="#" class="absolute inset-0"></a>
        </li>
      </ul>
    </section>

  </article>
  </NuxtLayout>
</template>

<style scoped lang="postcss">
.note:hover img {
  @apply transition duration-500 scale-110;
}
.entry .desc {
  @apply text-sm font-normal whitespace-normal;
}
.entry tbody th {
  @apply text-left px-2 md:px-0;
}
</style>