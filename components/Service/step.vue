<script lang="ts" setup>
import { defineProps } from "vue";
defineProps({
  stepData:{
    type: Object,
    default(){
      return {
        title: '',
        stepLists: [],
        isShowBottom: false,
        bottomText: '',
        remark: '',
        pageName: ''
      }
    }
  }
})

let showStepAnim = ref(false)
const getScrollTop = () => {
  // console.log(window.scrollY)
  let caseSharingHeight:any = document.getElementsByClassName('step')
  // if(windowWidth.value > 768){
    if(window.scrollY>=caseSharingHeight[0].offsetTop-500){
      showStepAnim.value = true
    }
  // }else{
    // if(window.scrollY>=caseSharingHeight[0].offsetTop){
      // showYaAnim.value = true
    // }
  // }
}

onMounted(()=>{
  getScrollTop()
  window.addEventListener('scroll',getScrollTop)
})

</script>

<template>
  <div :class="['step']">
    <RippleLine :type="'3'" />
    <div class="step-bg">
    <div class="step-title">
      <div class="step-title-in">
        <serviceTitle :title="stepData.title" :yaBorder="'#089CFE'" :bgColor="'#fff'" :textColor="'#089CFE'" />
      </div>
    </div>
    <div :class="['step-remark']" v-if="stepData.remark">
      {{stepData.remark}}
    </div>
      <div class="step-in">
        <div :class="['step-in-box',{tepAnim:showStepAnim}]" :style="{'animation-delay': `${stepIndex/5}s`}" v-for="(step,stepIndex) in stepData.stepLists" :key="stepIndex">
            <span class="title">{{step.title}}</span>
            <span class="text">
              <div>{{step.text}}</div>
            </span>
        </div>
      </div>
      <div class="step-bottom" v-if="stepData.bottomText">
        {{stepData.bottomText}}
      </div>
    </div>
    <RippleLine :type="'3'" :isBottom="true" />
  </div>
</template>


<style lang="scss" scoped>
.step{
  margin-top: 130px;
  &-bg{
    background: var(--blue-color);
    padding: 140px 0 80px;
  }
  &-title{
    display: flex;
    justify-content: center;
  }
  &-remark{
    max-width: 830px;
    margin: 71px auto 0;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    text-align: center;
    color: #fff;
    letter-spacing: 4.8px;
    &.scaling-and-polishing{
      max-width: 1042px;
    }
  }
  &-in{
    display: flex;
    width: 100%;
    max-width: 1500px;
    margin: 80px auto 0;
    &-box{
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      opacity: 0;
      transform: translateX(-100%);
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
      &.tepAnim{
        animation: stepBoxAnim .8s ease-out;
        animation-fill-mode: forwards;
      }
    }
  }
  &-bottom{
    margin-top: 100px;
    text-align: center;
    color: #FFF;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 25.6px */
    letter-spacing: 4.8px;
  }
}
@keyframes stepBoxAnim {
  to{
    opacity: 1;
    transform: translateX(0);
  }
}
@media (min-width: 768px) and (max-width: 1452px) {
  // .step{
  //   margin-top: 8vw;
  //   &-in{
  //      &-box{
  //        &.oneBox{
  //          width: 50vw;
  //        }
  //      }
  //   }
  // }
}
@media screen and (max-width: 768px) {
  .step{
    margin-top: 78px;
    &-bg{
      padding: 20px 0 0;
    }
    &-remark{
      display: none;
    }
    &-in{
      flex-direction: column;
      padding: 0 40px;
      margin: 46px auto 0;
      &-box{
        flex-direction: row;
        align-items: flex-start;
        margin-bottom: 37px;
        // transform: translateY(-100%);
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
        // &.tepAnim{
        //   animation: stepBoxAnim2 .8s ease-out;
        //   animation-fill-mode: forwards;
        // }
      }
    }
    &-bottom{
      display: none;
    }
  }
  
}
</style>