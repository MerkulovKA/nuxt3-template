<template>
    <header class="border-b border-slate-600">
        <div class="container mx-auto flex items-center px-3 py-6 lg:px-0">
            <NuxtLink
                to="/"
                aria-label="To home page"
                class="z-10 mr-auto flex items-center gap-x-2 text-xl font-bold transition-opacity hover:opacity-75">
                <img
                    src="/nuxt.svg"
                    alt="logotype"
                    class="h-8 w-8" />
                <span> Nuxt 3 Template </span>
            </NuxtLink>
            <Teleport
                to="body"
                :disabled="!screenSize.isMobile">
                <nav
                    class=""
                    :class="{
                        'translate-all fixed top-[81px] right-0 z-[100] h-[calc(100vh_-_81px)] w-full translate-x-full bg-gray-200 bg-opacity-50 backdrop-blur-lg duration-300 dark:bg-zinc-900 dark:bg-opacity-50':
                            screenSize.isMobile,
                        'translate-x-0': mobileMenuIsOpen,
                    }">
                    <ul
                        class="flex gap-10 text-sm tracking-tight"
                        :class="{
                            'flex-col p-10 text-right': screenSize.isMobile,
                        }"
                        itemscope
                        itemtype="http://www.schema.org/SiteNavigationElement">
                        <li
                            v-for="link in links"
                            :key="link.tKey"
                            itemprop="name">
                            <NuxtLink
                                itemprop="url"
                                class="py-1"
                                active-class="text-green-500"
                                :to="link.url">
                                {{ t(`header.${link.tKey}`) }}
                            </NuxtLink>
                        </li>
                    </ul>
                </nav>
            </Teleport>
            <div
                class="ml-6 flex items-center gap-6 border-current pl-6 transition-all duration-300 lg:border-l">
                <TheThemeSwitcher />
                <TheLanguageSwitcher />
                <button @click="mobileMenuIsOpen = !mobileMenuIsOpen">
                    <UiIcon
                        name="bars-3"
                        class="h-6 w-6" />
                </button>
            </div>
        </div>
    </header>
</template>
<script lang="ts" setup>
import { links } from '~/routes/header'
import { useScreen } from '~/composables/useScreen'

const { t } = useLang()
const { screenSize } = useScreen()
const mobileMenuIsOpen: boolean = ref(false)
</script>
<style></style>
