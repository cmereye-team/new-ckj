<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
import { defineEmits } from 'vue'
import { ref } from 'vue'
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'
import { log } from 'console'

defineProps({
  type:{
    type: String,
    default: '2'
  }
})

// const emits = defineEmits(['changeTabCur'])
// emits('changeTabCur',_idx)
const appState = useAppState()
const areaLists = appState.areaTabs.map((item,index)=>{
  return{
    id: index+1,
    name: item,
  }
})

const handleArea = (_data:any) =>{
  appState.setareaTabAct(_data.id-1)
}

</script>

<template>
  <div class="areaTab">
    <Listbox>
      <ListboxButton :class="{'a':type==='1'}">{{ $t(areaLists[appState.areaTabAct].name) }}</ListboxButton>
      <!-- <transition
        enter-active-class="transition duration-1000 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-1000 ease-out"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      > -->
        <ListboxOptions>
          <ListboxOption
            v-for="person in areaLists"
            :key="person.id"
            :value="person"
            :class="{'a-a':type==='1'}"
            @click="handleArea(person)"
          >
            {{ $t(person.name) }}
          </ListboxOption>
        </ListboxOptions>
      <!-- </transition> -->
    </Listbox>
  </div>
</template>

<style lang="scss" scoped>
.areaTab{
  width: 225px;
  height: 53px;
  line-height: 47px;
  position: relative;
  z-index: 4;
  &>button{
    width: 100%;
    height: 100%;
    text-align: left;
    padding-left: 20px;
    position: relative;
    border-radius: 27px;
    border: 3px solid var(--topic-color);
    color: var(--topic-color);
    font-size: 20px;
    &::after{
      content: 'next';
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translateY(-50%) rotate(90deg);
      color: var(--topic-color);
      font-size: 12px;
      font-weight: bold;
      font-family: 'swiper-icons';
    }
    &.a{
      color: #fff;
      border: 3px solid #fff;
      border-radius: 27px;
      position: relative;
      z-index: 6;
      &::after{
        color: #fff;
      }
    }
  }
  &>ul{
    &>li{
      background: var(--topic-color);
      color: #fff;
      border-radius: 27px;
      padding-left: 20px;
      cursor: pointer;
      font-size: 20px;
      opacity: 0;
      transform: translateY(-100%);
      animation: liAnim .4s;
      animation-fill-mode: forwards;
      position: relative;
      z-index: 5;
      &:nth-of-type(2){
        animation-delay: .2s;
        z-index: 4;
      }
      &:nth-of-type(3){
        animation-delay: .4s;
        z-index: 3;
      }
      &:nth-of-type(4){
        animation-delay: .6s;
        z-index: 2;
      }
      &:nth-of-type(5){
        animation-delay: 0.8s;
        z-index: 1;
      }
      &.a-a{
        color: var(--topic-color);
        background: #fff;
      }
      &:hover{
        background: #FECB02;
      }
    }
  }
}
@keyframes liAnim {
  to{
    opacity: 1;
    transform: translateY(0);
  }
}
// .areaTab{
//   display: flex;
//   border-radius: 5px;
//   &>div{
//     padding: 5px 20px;
//     cursor: pointer;
//     font-weight: 500;
//     font-size: 1.31rem;
//     color: #FFA09E;
//     border-top: 2px solid #FFA09E;
//     border-bottom: 2px solid #FFA09E;
//     border-left: 2px solid #FFA09E;
//     transition: all .5s;
//     &:first-child{
//       border-radius: 5px 0 0 5px;
//     }
//     &:last-child{
//       border-radius: 0 5px 5px 0;
//       border-right: 2px solid #FFA09E;
//     }
//     &:hover{
//       background: #FFA09E;
//       color: #fff;
//       text-shadow: 0px 0px 8px rgba(179, 54, 54, 0.55);
//     }
//     &.isCur{
//       background: #FFA09E;
//       color: #fff;
//       text-shadow: 0px 0px 8px rgba(179, 54, 54, 0.55);
//     }
//   }
// }
@media (min-width: 768px) and (max-width: 1452px) {
  .areaTab{
    &>div{
      padding: 5px 10px 3px;
    }
  }
}
@media screen and (max-width: 768px) {
  .areaTab{
      width: 150px;
      height: 36px;
      line-height: 32px;
      &>button{
        border: 2px solid var(--topic-color);
        &.a{
          border: 2px solid #fff;
        }
      }
    }
  }
</style>
