<template>
    <div id="app" class="animate-fade-in">
        <ScrollToTopButton />
        <Header />
        <Title title="初心者はこちら" />
        <div>
            <!-- 釣りの種類の説明とページリンクボタン -->
            <div class="flex justify-start">
                <div class="!bg-white w-8 h-16 border border-gray-300 shadow-md relative md:ml-44 ml-4"></div>
                <h1 class="md:text-3xl text-2xl font-bold ml-4 my-4 whitespace-pre-line">釣りの種類</h1>
            </div>
            <div class="flex justify-center">
                <p
                    class="text-left text-1xl font-semibold leading-loose md:w-2/3 w-full my-6 mb-12 whitespace-pre-line px-4 md:px-0">
                    大きく分けて2つ<br>
                    <br>

                    　- 餌を使う釣り<br>
                    <button @click="goToPage('/Method1')"
                        class="border !bg-white px-4 py-2 mx-4 my-4 rounded hover:!bg-gray-200">アジ釣り</button>
                    <button @click="goToPage('/Method2')"
                        class="border !bg-white px-4 py-2 mx-4 my-4 rounded hover:!bg-gray-200">陸上サビキ釣り</button>
                    <button @click="goToPage('/Method4')"
                        class="border !bg-white px-4 py-2 mx-4 my-4 rounded hover:!bg-gray-200">海上釣り</button>
                    <button @click="goToPage('/Method5')"
                        class="border !bg-white px-4 py-2 mx-4 my-4 rounded hover:!bg-gray-200">ワカサギ釣り</button><br>

                    　- 擬似餌（ルアー）を使う釣り<br>
                    <button @click="goToPage('/Method3')"
                        class="border !bg-white px-4 py-2 mx-4 my-4 rounded hover:!bg-gray-200">ニジマス釣り</button>
                </p>
            </div>

            <!-- 釣りの種類紹介の画像の配置 -->
            <p class="text-center font-bold -mb-4">＜海＞</p>
            <div class="flex m-6 space-x-6 justify-center text-center font-bold">
                <div class="w-1/3 aspect-w-4 aspect-h-3">
                    <p>堤防</p>
                    <img src="@/assets/img/image3.webp" alt="堤防釣り" class="w-full h-full object-cover">
                </div>
                <div class="w-1/3 aspect-w-4 aspect-h-3">
                    <p>船</p>
                    <img src="@/assets/img/image2.webp" alt="船釣り" class="w-full h-full object-cover">
                </div>
                <div class="w-1/3 aspect-w-4 aspect-h-3">
                    <p>磯</p>
                    <img src="@/assets/img/image5.webp" alt="磯釣り" class="w-full h-full object-cover">
                </div>
            </div>
            <p class="text-center font-bold mt-10 -mb-4">＜川、池、湖＞</p>
            <div class="flex m-6 space-x-6 justify-center text-center font-bold mb-20">
                <div class="w-1/3 aspect-w-4 aspect-h-3">
                    <p>渓流</p>
                    <img src="@/assets/img/image4.webp" alt="渓流釣り" class="w-full h-full object-cover">
                </div>
                <div class="w-1/3 aspect-w-4 aspect-h-3">
                    <p>人工池</p>
                    <img src="@/assets/img/image1.webp" alt="人口池釣り" class="w-full h-full object-cover">
                </div>
            </div>

            <!-- 紐の結び方と動画を追加 -->
            <div class="flex justify-start">
                <div class="!bg-white w-8 h-16 border border-gray-300 shadow-md relative md:ml-44 ml-4"></div>
                <h1 class="md:text-3xl text-2xl font-bold ml-4 my-4 whitespace-pre-line">紐の結び方</h1>
            </div>
            <div class="flex justify-center">
                <!--　TODO:結び方の説明-->
                <p
                    class="text-left text-1xl font-semibold leading-loose md:w-2/3 w-full mt-6 whitespace-pre-line px-4 md:px-0">
                    釣りの紐の結び方には多くの種類があり、一般的に使用される結び方でも20種類以上の結び方が存在します！<br>
                    ここでは代表的な結び方について紹介します！<br>
                    <br>
                    【代表的な紐の結び方の紹介】<br>
                    ・クリンチノット：最も基本的でポピュラーな結び方<br>
                    ・パロマーノット：強度が強く、大物釣りに適しています<br>
                    ・ユニノット：多様的に使える結び方で、特にルアーやスナップに適しています<br>
                    ・ブラッドノッド：同じ太さのライン同士を結ぶのに適しています<br>
                    ・FGノット：PEラインとリーダーを結ぶ際に使われる、非常に強力な結び方です<br>
                    ・電車結び：道糸とハリスを結ぶ際に便利な結び方です<br>
                    ・外掛け結び：ハリスにハリをセットする際の基本的な結び方です<br>
                    <br>
                    今回は初心者におすすめな色々な場面で使える便利な結び方、ユニノットについて詳しく紹介したいと思います！<br>
                    具体的な結び方については動画をご覧ください！<br>
                </p>
            </div>
            <!-- YouTube動画の埋め込み -->
            <div class="flex justify-center w-full">
                <div class="relative w-full max-w-2xl mx-4 my-4 mb-4" style="aspect-ratio: 16 / 9;">
                    <video class="absolute top-0 left-0 w-full h-full" width="560" height="315" src="/public/himo.mp4"
                        controls>
                    </video>
                </div>
            </div>
            <div class="flex justify-center">
                <p
                    class="text-left text-1xl font-semibold leading-loose md:w-2/3 w-full whitespace-pre-line mb-12 px-4 md:px-0">
                    他にも多くの種類の結び方があります！<br>
                    もっと知りたい方は<a href="https://www.daiwa.com/jp/beginner/line"
                        class="text-blue-500">こちら</a>のサイトに詳しく掲載されていますのでチェックしてみて下さい！
                </p>
            </div>
        </div>
        <End titleText=
        "参考資料
        釣りあしすと(2023/11/05)　これだけは覚えておきたいライン（釣り糸）の結び方 ラインと金具編.
        https://example.com/article
        (2024年12月12日最終アクセス)

        DAIWA　初心者のための釣り入門 釣りの基礎知識（最初に覚えるのは糸の結び方)
        https://example.com/article
        (2024年12月12日最終アクセス)
        " 
        />
        <Footer />
    </div>
</template>

<style scoped>
* {
    background-color: #79CAD7;
}

.header-background {
    /* ヘッダー */
    background: url('@/assets/img/header2.webp') no-repeat center/100% 100%;
    /* 背景画像の設定 */
    width: 100vw;
    /* 画面全体の幅に設定 */
    height: 25vh;
    /* 画面高さの1/4 */
}

.footer-background {
    /* フッター */
    background: url('@/assets/img/footer2.webp') no-repeat center/100% 100%;
    width: 100vw;
    height: 15vh;
}

@media (max-width: 768px) {

    /* レスポンシブ対応 */
    .header-background {
        height: 15vh;
    }

    .footer-background {
        height: 10vh;
    }
}
</style>

<script>
import * as components from '@/components'

export default {
    components: {
        ...components,
    },
    methods: {
        goToPage(route) {
            this.$router.push(route);
        }
    }
}
</script>