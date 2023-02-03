<template>
    <div>
        <div class="m-10">hello world</div>
        <HelloWorld></HelloWorld>
        <div>{{ appStore.count }}</div>
        <div>pos: {{ x }}, {{ y }}</div>
        <Icon class="text-6xl" name="material-symbols:123" />
        <NuxtLink to="/list">list</NuxtLink>
    </div>
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores'
const { x, y } = useMouse()
const appStore = useAppStore()
</script>

<style scoped lang="scss">
div {
    color: $fontColor;
}
</style>