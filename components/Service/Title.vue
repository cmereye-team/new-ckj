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
        {{$t(title)}}
        <div class="serviceTitle-in-right" :style="{'border-right-color': `${yaBorder}`}"></div>
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
      border-right-width: 15px;
      border-right-style: solid;
      border-top: 19px solid transparent;
      border-left: 15px solid transparent;
      border-bottom: 19px solid transparent;
    }
  }
}
@media (min-width: 768px) and (max-width: 1452px) {}
@media screen and (max-width: 768px) {
  .serviceTitle{
    &-svg{
      transform: scale(.8);
    }
    &-in{
      height: 30px;
      line-height: 30px;
      font-size: 18px;
      letter-spacing: 4px;
      padding: 0 30px;
      &-right{
        width: 24px;
        height: 30px;
        border-right-width: 12px;
        border-right-style: solid;
        border-top: 15px solid transparent;
        border-left: 12px solid transparent;
        border-bottom: 15px solid transparent;
      }
    }
  }
}
</style>