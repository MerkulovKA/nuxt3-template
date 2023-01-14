<template>
    <button
        type="button"
        class="h-max rounded border text-white outline-none transition-colors hover:enabled:cursor-pointer disabled:cursor-not-allowed disabled:opacity-75"
        :class="[
            {
                'py-1 px-3 text-sm': size === 'sm',
            },
            {
                'px-5 py-2': size === 'md',
            },
            {
                'px-10 py-4 text-lg': size === 'lg',
            },
            {
                'border-slate-600 bg-slate-600 hover:enabled:border-slate-700 hover:enabled:bg-slate-700 active:enabled:bg-slate-800':
                    variant === 'primary',
            },
            {
                'border-emerald-600 bg-emerald-600 hover:enabled:border-emerald-700 hover:enabled:bg-emerald-700 active:enabled:bg-emerald-800':
                    variant === 'success',
            },
            {
                'border-rose-600 bg-rose-600 hover:enabled:border-rose-700 hover:enabled:bg-rose-700 active:enabled:bg-rose-800':
                    variant === 'error',
            },
        ]">
        <slot />
    </button>
</template>

<script lang="ts" setup>
defineProps({
    size: {
        type: String as PropType<'sm' | 'md' | 'lg'>,
        default: 'md',
    },
    variant: {
        type: String as PropType<'primary' | 'success' | 'error'>,
        default: 'primary',
    },
})
</script>
