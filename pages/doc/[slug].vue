<template>
    <main
        id="doc-page"
        class="container mx-auto px-3 lg:px-0">
        <ContentDoc>
            <template #default="{ doc }">
                <div>
                    <PageTitle :text="doc.title" />
                </div>
                <div class="flex-1">
                    <ContentRenderer :value="doc" />
                </div>
            </template>
            <template #empty>
                <h1>Post in empty</h1>
            </template>
            <template #not-found>
                <div
                    :code="404"
                    wrap />
            </template>
        </ContentDoc>
    </main>
</template>
<script lang="ts" setup>
useHead({
    title: 'Template Nuxt-3',
})
definePageMeta({
    layout: 'blog-layout',
})
</script>

<style>
#doc-page h1 {
    margin-bottom: 16px;
    font-size: 1.875rem;
    font-weight: 800;
    line-height: 2.25rem;
}

#doc-page h2 {
    margin-top: 32px;
    margin-bottom: 16px;
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.375rem;
}

#doc-page h3 {
    margin-top: 32px;
    margin-bottom: 16px;
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1.375rem;
}

#doc-page pre {
    padding: 16px;
    margin-block: 16px;
    width: 100%;
    border-radius: 6px;
    background-color: #e2e8f0;
}

.dark #doc-page pre {
    background-color: #0f172a;
}
</style>
