<template>
  <div class="animate-text-focus-in">
    <div class="flex flex-col items-center">
      <Header />
    </div>

    <main class="flex-1
             w-full 
             flex 
             flex-col 
             items-center
             overflow-hidden">
      <div class="relative w-full flex flex-col items-center">
        <img class="mt-80 my-14 z-10" src="@/assets/img/text.webp" alt="How to Starting Fishing">
        <div class="bg-[#76B4CE] 
            rounded-full 
            absolute 
            w-[60vh] h-[60vh] 
            ms-[20vw]
            z-0">
        </div>

        <picture>
          <img class="absolute
                 top-0 
                 left-0 
                 h-screen
                 md:w-auto
                 w-1/5
                 bg-no-repeat" src="@/assets/img/Group.webp">
          </img>
        </picture>
      </div>

      <div class="border-t-4 border-dotted border-[#8ecae6] w-1/2 my-4" />

      <h3 id="Fish" class="text-3xl font-bold my-8">釣りについて</h3>

      <div class="w-3/5 mt-16 mb-10 space-y-14 text-2xl font-bold">
        <router-link to="/First" tag="button"
          class="w-full h-40 bg-[#8ecae6] py-4 flex justify-between items-center px-4">
          <span class="flex-1 flex items-center">初心者はこちら
            <div class="border-t-4 border-black flex-1 mx-2" />
            <img class="" src="@/assets/img/Vector1.webp">
          </span>
        </router-link>

        <router-link to="/tools" tag="button"
          class="w-full h-40 bg-[#8ecae6] py-4 flex justify-between items-center px-4">
          <span class="flex-1 flex items-center">道具についてみてみる
            <div class="border-t-4 border-black flex-1 mx-2" />
            <img class="" src="@/assets/img/Vector1.webp">
          </span>
        </router-link>

        <router-link to="/Unit" tag="button"
          class="w-full h-40 bg-[#8ecae6] py-4 flex justify-between items-center px-4">
          <span class="flex-1 flex items-center">単位についてみてみる
            <div class="border-t-4 border-black flex-1 mx-2" />
            <img class="" src="@/assets/img/Vector1.webp">
          </span>
        </router-link>

        <router-link to="/Rule" tag="button"
          class="w-full h-40 bg-[#8ecae6] py-4 flex justify-between items-center px-4">
          <span class="flex-1 flex items-center">ルール・マナーについてみてみる
            <div class="border-t-4 border-black flex-1 mx-2" />
            <img class="" src="@/assets/img/Vector1.webp">
          </span>
        </router-link>
      </div>

      <div class="border-t-4 border-dotted border-[#8ecae6] w-1/2 my-4"></div>

      <div class="flex flex-col md:flex-row items-center justify-center">
        <h3 id="How-To" class="text-3xl font-bold my-24">釣り方</h3>
        <img class="absolute md:right-36 md:w-auto w-1/3 right-0" src="@/assets/img/Group4.webp">
      </div>

      <div class="flex justify-center my-10 md:space-x-16 space-x-10">
        <div class="w-1/2">
          <router-link to="Method1">
            <img alt="Fishing method 1" src="@/assets/img/method1.webp" />
          </router-link>
        </div>
        <div class="w-1/2">
          <router-link to="Method2">
            <img alt="Fishing method 2" src="@/assets/img/method2.webp" />
          </router-link>
        </div>
        <div class="w-1/2">
          <router-link to="Method3">
            <img alt="Fishing method 3" src="@/assets/img/method3.webp" />
          </router-link>
        </div>
      </div>
      <div class="flex justify-center mb-16 md:space-x-16 space-x-10">
        <div class="md:w-1/2 w-1/4">
          <router-link to="/Method4">
            <img alt="Fishing method 4" src="@/assets/img/method4.webp" />
          </router-link>
        </div>
        <div class="md:w-1/2 w-1/4">
          <router-link to="/Method5">
            <img alt="Fishing method 5" src="@/assets/img/method5.webp" />
          </router-link>
        </div>
      </div>
    </main>
  </div>
  <Footer />
  <ScrollToTopButton />
</template>


<style scoped>
.header-background {
  background: url('@/assets/img/header.webp') no-repeat center/100% 100%;
  /* 背景画像の設定 */
  width: 100vw;
  /* 画面全体の幅に設定 */
  height: 25vh;
  /* 画面高さの1/4 */
}

.footer-background {
  background: url('@/assets/img/footer.webp') no-repeat center/100% 100%;
  width: 100vw;
  height: 15vh;
}

.wave-bottom {
  background: #8ecae6;
  height: 50px;
  position: relative;
}

.wave-bottom::before {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('https://placehold.co/100x50/wave-bottom.webp') repeat-x;
}

@media (max-width: 768px) {
  .header-background {
    height: 15vh;
  }
  
  .footer-background {
    height: 10vh;
  }
}
</style>


<script>
import * as components from '@/components';
export default {
    components: {
        ...components,
    }
}
</script>