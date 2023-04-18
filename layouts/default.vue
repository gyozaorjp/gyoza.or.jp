<script setup lang="ts">
const drawer = ref(false)
const toggle = () => {
  drawer.value = false
}
</script>

<template>
  <div>
    <div class="drawer">
      <input id="drawer" v-model="drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <!-- Page content here -->
        <header class="fixed top-0 z-50 navbar bg-base-100">
          <div class="flex-none">
            <label for="drawer" class="btn btn-square btn-ghost drawer-button">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
          </div>
          <div class="flex-1">
            <NuxtLink to="/" class="">
              <img class="h-12" src="/img/common/title.png" alt="" />
            </NuxtLink>
          </div>
        </header>

        <main>
          <slot></slot>
        </main>

        <div class="mt-20 bg-white">
          <Footer class="footer container mx-auto"></Footer>
        </div>

      </div> 
      <aside class="drawer-side">
        <label for="drawer" class="drawer-overlay"></label>
        <ul class="menu p-4 w-80 bg-base-100 text-base-content">
          <!-- Sidebar content here -->
          <li>
            <NuxtLink to="/about/" @click="toggle">
              焼き餃子協会について
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/entry/" @click="toggle">
              入会案内
            </NuxtLink>
          </li>

          <li>
            <a @click="toggle">会員規約</a>
          </li>
          <li>
            <NuxtLink to="/antisocialist/" @click="toggle">
              反社会的勢力に対する基本方針
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/privacy/" @click="toggle">
              プライバシーポリシー
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/statute/" @click="toggle">
              定款
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/transactionlaw/" @click="toggle">
              特定商取引法に基づく表示
            </NuxtLink>
          </li>

          <li>
            <NuxtLink to="/supermarket/" @click="toggle">
              餃子フェス&reg;展開店舗
            </NuxtLink>
          </li>

          <li>
            <a
              href="https://share.hsforms.com/1gPwfyg1lRKePmkYJrluR2gd8bov"
              target="_blank">
              お問い合わせ
            </a>
          </li>

        </ul>
      </aside>
    </div>
  </div>
</template>