<template>
    <div
        class="my-4 w-full rounded-md border-l-[10px] p-4"
        :class="[
            {
                ' border-orange-600 bg-orange-200 text-orange-600 dark:bg-orange-800 dark:bg-opacity-50  dark:text-orange-300':
                    type === 'warning',
            },
            {
                ' border-indigo-600 bg-indigo-200 text-indigo-600 dark:bg-indigo-800 dark:bg-opacity-50  dark:text-indigo-300':
                    type === 'info',
            },
            {
                ' border-rose-600 bg-rose-200 text-rose-600 dark:bg-rose-800 dark:bg-opacity-50  dark:text-rose-300':
                    type === 'danger',
            },
            {
                ' border-green-600 bg-green-200 text-green-600 dark:bg-green-800 dark:bg-opacity-50  dark:text-green-300':
                    type === 'success',
            },
        ]">
        <ContentSlot
            :use="$slots.default"
            unwrap="p" />
    </div>
</template>
<script setup lang="ts">
defineProps({
    type: {
        type: String as PropType<string>,
        default: 'info',
    },
})
</script>
