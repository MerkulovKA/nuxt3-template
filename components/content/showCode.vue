<template>
    <div class="group relative rounded-md bg-slate-200 dark:bg-slate-800">
        <span class="absolute top-2 right-2 text-sm">
            {{ label }}
        </span>
        <div>
            <slot />
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps({
    label: {
        type: String as PropType<string>,
        default: null,
    },
})
</script>

<style scoped></style>
