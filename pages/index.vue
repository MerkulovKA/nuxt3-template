<template>
    <section class="container mx-auto mt-8 px-3 lg:px-0">
        <div
            class="font-permanent text-[100px] leading-[5rem] lg:text-[200px] lg:leading-[10rem]">
            <span
                class="lg:absolute"
                data-parallax
                data-parallax-x="1"
                data-parallax-y="0.3"
                data-parallax-target="mouse">
                Nuxt 3
            </span>
            <br />
            <span
                class="lg:absolute"
                data-parallax
                data-parallax-x="0.3"
                data-parallax-y="0.5"
                data-parallax-target="mouse">
                Starter
            </span>
            <br />
            <span
                class="lg:absolute"
                data-parallax
                data-parallax-x="1"
                data-parallax-y="0.3"
                data-parallax-target="mouse">
                Pack
            </span>
        </div>
        <article
            class="min-w-80 relative z-10 ml-auto w-full max-w-[500px] overflow-hidden rounded-md pt-10 text-gray-200 lg:pt-0">
            <header
                class="flex items-center border-b border-slate-600 bg-slate-800 p-2">
                <div class="mr-1.5 h-4 w-4 rounded-full bg-red-500"></div>
                <div class="mr-1.5 h-4 w-4 rounded-full bg-green-500"></div>
                <div class="h-4 w-4 rounded-full bg-yellow-500"></div>
                <div class="flex-1 pr-3 text-center">BASH</div>
                <button
                    class="transition-all duration-300 hover:text-gray-500"
                    @click="copyText">
                    <UiIcon name="document-duplicate" />
                </button>
            </header>
            <main class="bg-slate-700 p-2">
                git clone https://github.com/MerkulovKA/nuxt3-template
            </main>
        </article>
    </section>
</template>

<script setup lang="ts">
useHead({
    title: 'Template Nuxt-3',
})
function copyText() {
    navigator.clipboard?.writeText &&
        navigator.clipboard
            .writeText('git clone https://github.com/MerkulovKA/nuxt3-template')
            .then((res) => alert('Complete'))
}
</script>

<style scoped></style>
