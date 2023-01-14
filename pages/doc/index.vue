<template>
    <main class="container mx-auto mt-10 flex flex-col px-3 lg:px-0">
        <ContentList
            v-slot="{ list }"
            path="/doc">
            <article
                v-for="article in list"
                :key="article._path"
                class="mb-4 flex flex-col rounded border border-slate-600 p-4 md:flex-row">
                <div class="order-2 text-right md:order-1 md:mr-4">
                    <p class="text-sm">
                        {{ article.date }}
                    </p>
                    <a
                        class="transition-colors duration-200 hover:text-green-400 hover:underline"
                        :href="`https://www.github.com/${article.author}`">
                        {{ article.author }}
                    </a>
                </div>
                <div
                    class="order-1 mb-2 border-b border-gray-800 pb-2 md:order-2 md:border-none">
                    <h3 class="text-xl font-medium">
                        {{ article.title }}
                    </h3>
                    <p class="text-base">
                        {{ article.description }}
                    </p>
                    <NuxtLink
                        :to="article._path"
                        class="text-sm underline transition-colors duration-200 hover:text-green-400 hover:no-underline">
                        {{ t('pages.doc.article.button') }}
                    </NuxtLink>
                </div>
            </article>
        </ContentList>
    </main>
</template>
<script lang="ts" setup>
const { t } = useLang()
useHead({
    title: t('pages.doc.title'),
})
definePageMeta({
    layout: 'blog-layout',
})
</script>

<style></style>
