<template>
    <input
        :checked="modelValue"
        type="checkbox"
        @change="$emit('update:modelValue', $event.target.checked)" />
</template>
<script setup lang="ts">
defineProps({
    modelValue: {
        type: Boolean as PropType<boolean>,
        default: false,
    },
})
defineEmits(['update:modelValue'])
</script>
