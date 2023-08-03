<script lang="ts" setup>
import { defineProps } from "vue";
defineProps({
  title:{
    type: String,
    default: ''
  }
})
</script>

<template>
    <div class="serviceTitle">
        <SvgYa />
        <div class="serviceTitle-in" :style="{color: '#fff'}">{{title}}</div>
    </div>
</template>

<style lang="scss" scoped>
.serviceTitle{
    &-in{
        padding: 0 40px;
    }
}
@media (min-width: 768px) and (max-width: 1452px) {}
@media screen and (max-width: 768px) {}
</style>