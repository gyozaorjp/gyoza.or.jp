<script setup lang="ts">

useSeoMeta({
  title: '会員限定',
})

useHead({
  meta: [
    {name: 'robots', content: 'noindex'},
    {name: 'robots', content: 'nofollow'},
  ],
})

</script>

<template>
  <PageHeader>会員限定</PageHeader>
  <main class="relative container max-w-4xl mx-auto px-4 py-12 flex flex-col items-center gap-y-8">

    <section class="w-full">
      <HubspotForm :formId="'aed4dece-d2c2-4ef3-9640-36574e5e12a5'" class="mt-8 bg-slate-50 rounded-3xl">
        <template v-slot:header>
          <h1 class="font-bold text-3xl py-2 text-center">2024年 焼き餃子協会アワード 候補者推薦</h1>
          <div class="max-w-xl mx-auto px-4 text-left text-sm">
            <p>日本の餃子文化を広め、高めていると思う方の<strong>お名前とその理由</strong>をご記入ください。複数人を推薦いただいても構いません。</p>
            <p>推薦締め切りは9月末です。投票は10月に行います。</p>
          </div>
        </template>
      </HubspotForm>
    </section>

    <section class="w-full px-4 py-4 flex flex-col items-center bg-slate-50 text-center">
      <h1 class="font-bold text-3xl py-2">
        会費について
      </h1>

      <div class="w-full max-w-xl text-left flex flex-col gap-2">
        <p>■以下の場合は、STRIPEカスタマーポータルから設定をお願いします</p>
        <ul>
          <li>クレジットカードの更新、変更</li>
          <li>焼き餃子協会からの退会（クレジットカード決済の場合）</li>
        </ul>
        <a class="btn my-4"
          href="https://billing.stripe.com/p/login/28odTK9JA6bB9q07ss"
          target="_blank">
          STRIPE カスタマーポータル
        </a>
      </div>

      <div class="w-full max-w-xl mt-4 text-left flex flex-col gap-2">
        <p>■以下の場合は焼き餃子協会のフォームからご連絡ください。</p>
        <ul>
          <li>会費に対する領収書の発行（年単位のみとなります）</li>
          <li>個人賛助会費の月払いから年払いへの変更</li>
          <li>逸品ぎょうざ頒布会の申し込み、解約、配送先住所変更</li>
          <li>その他、焼き餃子協会事務局へのご要望</li>
        </ul>
        <a class="btn my-4"
          href="/form">
          焼き餃子協会 お問い合わせフォーム
        </a>
      </div>

    </section>

    <section class="w-full px-4 py-4 flex flex-col items-center bg-slate-50 text-center">
      <h1 class="font-bold text-3xl py-2">
        焼き餃子協会 会員限定コミュニティ
      </h1>
      <div class="max-w-xl text-left flex flex-col gap-4">
        <p>LINEオープンチャットで、焼き餃子協会会員限定のコミュニティを開設しております。以下のような投稿をお待ちしております</p>

        <ul>
          <li>新商品販売告知</li>
          <li>餃子に関するお悩みごと、同業者へのご相談</li>
          <li>こんな餃子・餃子屋さんを探してます</li>
          <li>これから出店する場所についてご相談</li>
          <li>こんな腰巻きやのれんを作ったけど、どう？</li>
          <li>こんなコンテンツを発信しました</li>
        </ul>

        <p class="text-xs">※オープンチャットのルールで、個人情報の書き込みができません。もしご連絡先のやり取りが必要な場合には事務局にご相談ください</p>

        <h2 class="mt-4 text-center text-xl font-bold">登録はこちらから</h2>
        <p class="text-center text-sm text-orange-800">参加される際は屋号やお名前が分かるようにお願いします</p>
        <a href="https://line.me/ti/g2/oT5p6YNqi3J8djo7I2tXGS04r8L_ohQgrVLBuQ?utm_source=invitation&utm_medium=link_copy&utm_campaign=default" target="_blank">
          <figure>
            <img src="/img/common/openchat-membersonly.jpg" alt="焼き餃子協会 会員限定コミュニティ" class="w-96 mx-auto" />
            <figcaption class="text-center">LINE Openchat 焼き餃子協会 会員限定コミュニティ</figcaption>
          </figure>
        </a>
      </div>


    </section>

    <section class="w-full px-4 py-4 flex flex-col items-center bg-slate-50 text-center">
      <h1 class="font-bold text-3xl py-2">
        会員証等の購入
      </h1>
      <div class="flex flex-col sm:flex-row gap-4">
        <a href="https://shop.gyoza.or.jp/products/mirrorstick" target="_blank" class="w-64 p-4 bg-white shadow-xl">
          <figure>
            <img
              src="https://shop.gyoza.or.jp/cdn/shop/files/a0f537148f5b21a0f834269f3dbee14e.png?v=1718091081&width=1426"
              alt="会員証 ミラー付 スティック型メタルキーホルダー" />
            <figcaption class="text-xs">会員証 ミラー付 スティック型メタルキーホルダー</figcaption>
          </figure>
        </a>
        <a href="https://shop.gyoza.or.jp/products/leather-b" target="_blank" class="w-64 p-4 bg-white shadow-xl">
          <figure>
            <img
              src="https://shop.gyoza.or.jp/cdn/shop/files/f2d6666c1a20a99af38fa6d946ebca60.png?v=1718091268&width=1426"
              alt="会員証 レザー合皮キーホルダー（B）" />
            <figcaption class="text-xs">会員証 レザー合皮キーホルダー（B）</figcaption>
          </figure>
        </a>
      </div>
      <div class="mt-4 py-4">
        <a href="https://shop.gyoza.or.jp/collections/members" target="_blank">焼き餃子協会公式グッズ販売 会員限定商品一覧</a>
      </div>
    </section>
    
  </main>
</template>

<style lang="postcss" scoped>
.btn {
  @apply p-4 bg-orange-600 text-white text-center rounded-xl;
}
a.btn {
  @apply no-underline;
}

ul {
  @apply list-disc list-outside ml-6;
}
</style>