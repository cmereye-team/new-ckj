<script lang="ts" setup>
import { defineProps } from "vue";
defineProps({
  title:{
    type: String,
    default: ''
  },
  yaBorder: {
    type: String,
    default: '#ffffff'
  },
  bgColor: {
    type: String,
    default: '#FC1682'
  },
  textColor: {
    type: String,
    default: '#ffffff'
  },
})
</script>

<template>
    <div class="serviceTitle">
      <div class="serviceTitle-svg">
        <SvgYa :yaBorder="yaBorder" :color="bgColor" />
      </div>
      <div class="serviceTitle-in" :style="{color: textColor,background: bgColor}">
        {{title}}
        <div class="serviceTitle-in-right" :style="{'border-right': `15px solid ${yaBorder}`}"></div>
      </div>
    </div>
</template>

<style lang="scss" scoped>
.serviceTitle{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  &-svg{
    position: relative;
    z-index: 2;
  }
  &-in{
    padding: 0 40px;
    height: 39px;
    line-height: 39px;
    background: var(--topic-color);
    position: relative;
    margin-left: -15px;
    z-index: 1;
    color: #FFF;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    letter-spacing: 7.2px;
    &-right{
      content: '';
      width: 30px;
      height: 39px;
      position: absolute;
      top: 0;
      right: 0;
      border-top: 19px solid transparent;
      border-left: 15px solid transparent;
      border-bottom: 19px solid transparent;
    }
  }
}
@media (min-width: 768px) and (max-width: 1452px) {}
@media screen and (max-width: 768px) {}
</style>