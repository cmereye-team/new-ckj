<script lang="ts" setup>
import { defineProps } from "vue";
defineProps({
  type:{
    type: String,
    default: '1'
  },
  isBottom:{
      type: Boolean,
      default: false
  }
})
</script>

<template>
    <div :class="['rippleLine',`line_${type}`,{isBottom: isBottom}]"></div>
</template>


<style lang="scss" scoped>
.rippleLine{
    background: url(https://static.cmereye.com/imgs/2023/07/12b3f8a89e2db3a4.png);
    background-size: auto 100%;
    height: 60px;
    width: 100%;
    position: relative;
    z-index: 3;
    &.line_1{
        background: url(https://static.cmereye.com/imgs/2023/07/02bad1b54114fb3a.png);
        background-size: auto 100%;
    }
    &.line_2{
        background: url(https://static.cmereye.com/imgs/2023/07/ad0e9ea982d66127.png);
        background-size: auto 100%;
    }
    &.line_3{
        background: url(https://static.cmereye.com/imgs/2023/07/c19dfcc03bbba56d.png);
        background-size: auto 100%;
    }
    &.line_4{
        // height: 20px;
        // background: url(https://static.cmereye.com/imgs/2023/07/98cce3cd3085bff5.png);
        background: url(https://static.cmereye.com/imgs/2023/07/02bad1b54114fb3a.png);
        background-size: auto 100%;
        filter: drop-shadow(0px -3px 0px var(--topic-color));
    }
    &.line_5{
        background: url(https://static.cmereye.com/imgs/2023/07/12b3f8a89e2db3a4.png);
        background-size: auto 100%;
    }
    &.isBottom{
        transform: rotate(180deg);
    }
}
@media (min-width: 768px) and (max-width: 1452px) {}
@media screen and (max-width: 768px) {}
</style>