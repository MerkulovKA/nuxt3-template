<template>
    <button
        class="relative h-6 w-6 outline-none transition-all hover:text-green-500"
        aria-label="Change color mode to"
        @click="
            $colorMode.preference =
                $colorMode.value !== 'light' ? 'light' : 'dark'
        ">
        <Transition name="slide-up">
            <UiIcon
                class="absolute inset-0 h-6 w-6"
                v-if="$colorMode.value === 'light'"
                name="sun" />
            <UiIcon
                class="absolute inset-0 h-6 w-6"
                v-else-if="$colorMode.value === 'dark'"
                name="moon" />
        </Transition>
    </button>
</template>

<script setup></script>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
    transition: all 0.5s ease-out;
}
.slide-up-enter-from {
    opacity: 0;
    transform: translateY(30px);
}
.slide-up-leave-to {
    opacity: 0;
    transform: translateY(-30px);
}
</style>
