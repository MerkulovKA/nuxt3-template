<template>
    <div class="btn-group">
        <slot />
    </div>
</template>

<script lang="ts" setup></script>

<style>
.btn-group button:not(:first-child):not(:last-child) {
    border-radius: 0;
}
.btn-group button:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}
.btn-group button:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}
</style>
