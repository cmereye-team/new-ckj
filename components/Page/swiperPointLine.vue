
<script lang="ts" setup>
import { defineProps } from "vue"
import { defineEmits } from 'vue'

defineProps({
  // 个数
  latestNewsNum: {
    type: Number,
    default: 3,
  },
  //默认选中
  latestNewsCurrent:{
    type: Number,
    default: 1,
  },
  isAutoWidth: {
    type: Boolean,
    default: false
  }
})
const emits = defineEmits(['changeLineCur'])
const handleSwiperItem = (idx: Number) => {
  // console.log(idx)
  emits('changeLineCur', idx)
}

let lineWidth = ref(0)
const getWindowResize = () => {
  if(window.innerWidth > 768)
    lineWidth.value = 80
  else
    lineWidth.value = 50
  // console.log(mapConShow)
}
onMounted(()=>{
  getWindowResize()
  window.addEventListener('resize',getWindowResize)
})
</script>

<template>
  <div class="point">
    <div class="boxRound">
      <div class="boxRound-in" v-for="boxRoundIndex in latestNewsNum" :key="boxRoundIndex" @click="handleSwiperItem(boxRoundIndex)">
        <div v-show="boxRoundIndex === latestNewsCurrent" class="current"></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .point{
    position: relative;
    .boxRound{
      display: flex;
      justify-content: center;
      cursor: pointer;
      &-in{
        width: 18px;
        height: 20px;
        background: url(https://static.cmereye.com/imgs/2023/07/be9cf2097b6cd6e3.png);
        background-size: 100% 100%;
        &:not(:first-child){
          margin-left: 28.5px;
        }
        .current{
          width: 100%;
          height: 100%;
          background: url(https://static.cmereye.com/imgs/2023/07/8027480ec64df903.png);
          border-radius: 50%;
          transition: all .5s;
        }
      }
    }
  }
@media (min-width: 1000px) and (max-width: 1452px) {
  .point{
    .boxRound{
      &-in{
        width: 18px;
        height: 20px;
      } 
    }
  }
}
@media screen and (max-width: 1000px) {
  .point{
    .boxRound{
      &-in{
        width: 14.4px;
        height: 16px;
      }
    }
  }  
}
</style>