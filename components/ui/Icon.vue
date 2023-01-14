<template>
    <svg
        :class="class"
        class="stroke-2">
        <use :xlink:href="`/heroicons.svg#${name}`"></use>
    </svg>
</template>

<script lang="ts" setup>
import { Heroicons } from '~/types/Heroicons'

defineProps({
    name: {
        type: String as PropType<Heroicons>,
        default: 'no-symbol',
    },
    class: {
        type: String as PropType<string>,
        default: 'w-6 h-6',
    },
})
</script>

<style scoped></style>
