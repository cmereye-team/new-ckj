<script lang="ts" setup>
import { defineProps } from "vue";
defineProps({
  processData:{
    type: Object,
    default(){
      return{
        title: '',
        tabs: [],
        context: [],
        lists: []
      }
    }
  },
  pageName: {
    type: String,
    default: ''
  }
})

let swiperRef ={
  slideToLoop: (a)=>{}
}
const setSwiperRef = (swiper:any) => {
  swiperRef = swiper;
};

let processTabsActive = ref(0)
const handleProcessTabs = (_idx: number) =>{
  processTabsActive.value = _idx 
  swiperRef.slideToLoop(_idx);
}
let clipPathWidth = ref(26)
let clipPathLeft = ref(123)
let clipPathFont = ref(14)
const onSlideProcessSwiperChange = (swiper:any) => {
  processTabsActive.value = swiper.realIndex
}
let windowWidth = ref(1920)
const getWindowWidth = () => {
  windowWidth.value = window.innerWidth
  // console.log(windowWidth)
  if(windowWidth.value>768){
    clipPathWidth.value = 26
    clipPathLeft.value = 123
    clipPathFont.value = 14
  }else{
    clipPathWidth.value = 18
    clipPathLeft.value = 85
    clipPathFont.value = 10
  }
}
onMounted(() => {
  getWindowWidth()
  window.addEventListener('resize',getWindowWidth)
})

</script>

<template>
  <div class="processCon">
    <RippleLine :type="'3'" />
    <div class="process">
      <div class="process-title">
        <div class="process-title-in">
          <!-- {{processData.title}} -->
          <serviceTitle :title="processData.title" :yaBorder="'#089CFE'" :bgColor="'#fff'" :textColor="'#089CFE'" />
        </div>
      </div>
      <div class="process-context pageCon">
        <span v-for="(processContextItem,processContextIndex) in processData.context" :key="processContextIndex">{{processContextItem}}</span>
      </div>
      <div :class="['process-tabs','pageCon',pageName]">
        <div :class="['process-tabs-in',pageName]">
          <div :class="{'active': processTabsActive === processTabIndex}" @click="handleProcessTabs(processTabIndex)" v-for="(processTabItem,processTabIndex) in processData.tabs" :key="processTabIndex">
            {{processTabItem}}
          </div>
        </div>
        <div :class="['process-tabs-in',pageName]" :style="{'clip-path': `circle(${clipPathWidth}px at calc((100% / ${processData.tabs.length} - ${clipPathLeft}px) / 2 + ${processTabsActive * (100 / processData.tabs.length)}% + ${(5 - processData.tabs[processTabsActive].length) * clipPathFont}px) 50%)`}">
          <div :class="{'active': processTabsActive === processTabIndex}" @click="handleProcessTabs(processTabIndex)" v-for="(processTabItem,processTabIndex) in processData.tabs" :key="processTabIndex">
            {{processTabItem}}
          </div>
        </div>
        <div class="process-tabs-line" :style="{left: `calc((100% / ${processData.tabs.length} - 46px) / 2 + ${processTabsActive * (100 / processData.tabs.length)}%)`}"></div>
      </div>
      <div class="process-step pageCon">
        <Swiper
          class="swiperBox"
          :loop="true"
          @swiper="setSwiperRef"
          @slideChange="onSlideProcessSwiperChange"
        >
          <SwiperSlide v-for="(processItem,index) in processData.lists" :key="index">
            <div class="step-in">
              <div :class="['step-in-box']" :style="{'animation-delay': `${stepIndex/5}s`}" v-for="(step,stepIndex) in processItem.listItem" :key="stepIndex">
                <span class="title">{{step.title}}</span>
                <span class="text">
              <div>{{step.text}}</div>
            </span>
        </div>
            </div>
          </SwiperSlide>  
        </Swiper>
      </div>
    </div>
    <RippleLine :type="'3'" :isBottom="true" />
  </div>
</template>


<style lang="scss" scoped>
.processCon{
  margin-top: 171px;
}
.process{
  background: var(--blue-color);
  padding-top: 70px;
  &-title{
    display: flex;
    justify-content: center;
  }
  &-context{
    text-align: center;
    margin-top: 36px;
    span{
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 160%;
      letter-spacing: 4.8px;
      color: #fff;
      &:nth-child(1){
        display: block;
      }
    }
  }
  &-tabs{
    margin-top: 110px;
    position: relative;
    &-in{
      display: flex;
      div{
        flex: 1;
        padding: 25px 0;
        font-style: normal;
        font-weight: 700;
        font-size: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: #FFFFFF;
        cursor: pointer;
      }
      &:nth-of-type(2){
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        background: #fff;
        transition: all 1s;
        transition-timing-function: ease;
        div{
          color: var(--blue-color);
        }
      }
    }
    &-line{
      width: 46px;
      height: 2px;
      background: #fff;
      position: absolute;
      bottom: 0;
      transition: all .5s;
    }
  }
  &-step{
    margin-top: 122px;
    padding-bottom: 100px;
    .step-in{
      display: flex;
      width: 100%;
      max-width: 1500px;
      &-box{
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        .title{
          font-weight: 600;
          font-size: 23px;
          line-height: 36px;
          color: var(--topic-text-color);
          display: block;
          width: 36px;
          height: 36px;
          background: #fff;
          border: 1px solid var(--topic-text-color);
          border-radius: 50%;
          display: block;
          text-align: center;
        }
        .text{
          flex: 1;
          font-weight: 500;
          font-size: 16px;
          line-height: 160%;
          color: #fff;
          display: block;
          letter-spacing: 4.8px;
          padding: 68px 37px 0;
        }
        &:not(:last-child){
          &::after{
            content: '';
            background: url(https://static.cmereye.com/imgs/2023/08/6dd1cbda65b75ee8.png);
            background-size: 100% 100%;
            width: 8px;
            height: 17px;
            top: 9px;
            right: 0;
            position: absolute;
          }
        }
      }
    }
  }
}
@media (min-width: 768px) and (max-width: 1452px) {}
@media screen and (max-width: 768px) {
  .processCon{
    margin-top: 51px;
  }
  .process{
    padding-top: 40px;
    &-context{
      padding: 0 50px;
      span{
        letter-spacing: 4.5px;
        font-size: 15px;
        width: 100%;
      }
    }
    &-tabs{
      margin-top: 60px;
      &-in{
        div{
          padding: 15px 0;
          letter-spacing: 3px;
          font-size: 15px;
        }
      }
    }
    &-step{
      margin-top: 14px;
      padding-bottom: 0;
      .step-in{
        flex-direction: column;
        padding: 0 40px;
        margin: 46px auto 0;
        &-box{
          flex-direction: row;
          align-items: flex-start;
          margin-bottom: 37px;
          .title{
            width: 28px;
            height: 28px;
            line-height: 28px;
            font-size: 22px;
          }
          .text{
            padding: 0 0 40px 19px;
            letter-spacing: 4.5px;
            font-size: 15px;
          }
          &:not(:last-child){
            &::after{
              left: 50%;
              top: auto;
              bottom: 0;
              transform: translateX(-50%) rotate(90deg) scale(.6);
            }
          }
        }
      }
    }
  }
}
</style>