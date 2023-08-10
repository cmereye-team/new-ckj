<script lang="ts" setup>
import { defineProps } from "vue";
defineProps({
  str:{
    type: String,
    default: 'INVISALIGN'
  }
})
let AnimNum = ref(0)
let timer:any = null
onMounted(()=>{
  timer = setInterval(()=>{
    if(AnimNum.value >= 20){
      AnimNum.value = 1
    }else{
      AnimNum.value += 0.02
    }
  },10)
})

onBeforeUnmount(()=>{
  clearInterval(timer)
})
</script>

<template>
    <div>
        <svg viewBox="0 0 1000 600" class="overflow-visible uppercase w-full">
            <path id="leftArch" d="M 1040,600 V0 h-770 a 300 300 0 0 0 0,600 z" fill="none" stroke="none"></path>
            <text width="500" font-size="26" class="font-gza text-secondary" fill="#FC1682">
              <textPath class="tp" alignment-baseline="auto" xlink:href="#leftArch" :startOffset="`${AnimNum}%`">
                <template v-for="i in 24" :key="i">
                  {{str}} &nbsp;
                </template>
              </textPath>
            </text>
          </svg>
    </div>
</template>


<style lang="scss" scoped>
@media (min-width: 768px) and (max-width: 1452px) {}
@media screen and (max-width: 768px) {}
</style>