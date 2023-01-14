<template>
    <div
        class="relative flex"
        v-outside="
            function () {
                isOpen = false
            }
        "
        @keydown.esc="isOpen = false">
        <button
            class=""
            @click="isOpen = !isOpen">
            <UiIcon name="language" />
        </button>
        <transition
            enter-active-class="transition-all duration-750 ease-out"
            leave-active-class="transition-all duration-750 ease-in"
            enter-class="opacity-0 scale-75"
            enter-to-class="opacity-100 scale-100"
            leave-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-75">
            <div
                class="absolute top-full right-0 mt-4 grid w-max origin-top rounded border border-gray-200 bg-white text-sm shadow-lg dark:border-gray-800 dark:bg-gray-700"
                v-if="isOpen">
                <button
                    class="p-2 pr-10 transition-all hover:enabled:cursor-pointer hover:enabled:bg-gray-300 disabled:cursor-not-allowed disabled:bg-gray-100 dark:hover:enabled:bg-gray-600 dark:disabled:bg-gray-800"
                    :disabled="locale === language.iso"
                    @click=";(locale = language.iso), (isOpen = false)"
                    v-for="language in languages">
                    {{ language.flag }} {{ language.name }} ({{ language.iso }})
                </button>
            </div>
        </transition>
    </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { languages } from '~/routes/languages'
const { locale } = useI18n()
const isOpen: boolean = ref(false)
</script>

<style scoped></style>
