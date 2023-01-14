<template>
    <label class="flex-1">
        <input
            required
            :value="modelValue"
            :placeholder="placeholder"
            @input="$emit('update:modelValue', $event.target.value)"
            type="text"
            class="diration-300 w-full rounded-l border border-slate-600 bg-transparent px-5 py-2 outline-none transition-colors placeholder:text-slate-700 hover:bg-slate-800 focus:bg-slate-800" />
    </label>
</template>

<script lang="ts" setup>
defineProps({
    modelValue: {
        type: String as PropType<string>,
        default: null,
    },
    placeholder: {
        type: String as PropType<string>,
        default: 'Label',
    },
})
defineEmits(['update:modelValue'])
</script>

<style scoped></style>
