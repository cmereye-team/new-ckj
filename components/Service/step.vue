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
        <!-- {{stepData.title}} -->
        <serviceTitle :title="'認識種植牙的六個步驟'" :yaBorder="'#089CFE'" :bgColor="'#fff'" :textColor="'#089CFE'" />
      </div>
    </div>
    <div :class="['step-remark']" v-if="stepData.remark">
      {{stepData.remark}}
    </div>
    <!-- <div :class="`${stepData.pageName}Bg`">
      <div :class="['step-in','pageCon',stepData.pageName]">
        <div :class="['step-in-box',stepData.stepLists.length === 1 ? 'oneBox' : '']"
          v-for="(step,stepIndex) in stepData.stepLists" :key="stepIndex">
          <div class="step-itemLists">
            <div :class="['step-itemLists-in',{'oneBoxListItem':stepData.stepLists.length === 1 ,'listInOneTiem': step.length === 1}]" v-for="(stepChild,stepChildIndex) in step" :key="stepChildIndex">
              <div :class="['line',{ 'lineNone' : step.length === 1 }]"></div>
              <span class="round"></span>
              <span class="title">{{stepChild.title}}</span>
              <span class="text">
                <div class="text-th" v-if="stepChild.textTh">{{stepChild.textTh}}</div>
                <div>{{stepChild.text}}</div>
              </span>
            </div>
          </div>
          <div class="step-bottom" v-if="stepIndex===1 && stepData.isShowBottom">
            {{stepData.bottomText}}
          </div>
        </div>
      </div>
    </div> -->
    <div class="step-in">
      <div :class="['step-in-box',{tepAnim:showStepAnim}]" :style="{'animation-delay': `${stepIndex/5}s`}" v-for="(step,stepIndex) in stepData.stepLists" :key="stepIndex">
          <!-- <div :class="['line',{ 'lineNone' : step.length === 1 }]"></div> -->
          <!-- <span class="round"></span> -->
          <span class="title">{{step.title}}</span>
          <span class="text">
            <!-- <div class="text-th" v-if="step.textTh">{{step.textTh}}</div> -->
            <div>{{step.text}}</div>
          </span>
      </div>
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
  // .step{
  //       background: linear-gradient(360deg, rgba(255, 241, 240, 0) 0%, rgba(255, 241, 240, 0.7) 12.5%, rgba(255, 241, 240, 0.7) 81.99%, rgba(255, 241, 240, 0) 100%);
  //       padding: 0 30px;
  //       margin-top: 90px;
  //       &-remark{
  //         margin: 20px auto 0;
  //         font-size: 17px;
  //       }
  //       &-in{
  //         flex-direction: column;
  //         padding: 23px 0 23px 24px;
  //         margin-top: 28px;
  //         &-box{
  //           width: 100%;
  //           &.oneBox{
  //             width: 100%;
  //           }
  //           .step-itemLists{
  //             &-in{
  //               height: auto;
  //               padding-right: 10px;
  //               padding-bottom: 40px;
  //               min-height: 0;
  //               .line{
  //                 width: 2px;
  //                 left: 7px;
  //               }
  //               .round{
  //                 width: 16px;
  //                 height: 16px;
  //                 margin-top: 4px;
  //                 margin-right: 7px;
  //               }
  //               .title{
  //                 font-weight: 500;
  //                 font-size: 1rem;
  //                 margin-right: 12px;
  //               }
  //               .text{
  //                 font-weight: 500;
  //                 font-size: 1rem;
  //                 padding-top: 0;
  //                 &-th{
  //                   font-weight: 700;
  //                   font-size: 16px;
  //                   padding-bottom: 5px;
  //                 }
  //               }
  //               &:first-child{
  //                 margin-bottom: 0px;
  //                 margin-top: 0;
  //               }
  //               &:last-child{
  //                 align-items: flex-start;
  //                 padding-bottom: 40px;
  //                 .round{
  //                   margin-top: 4px;
  //                 }
  //               }
  //             }
  //             &-in:last-child{
  //               .line{
  //                 width: 2px;
  //                 left: 7px;
  //                 height: 100%;
  //               }
  //             }
  //           }
  //           &:first-child{
  //             padding-right: 0;
  //           }
  //           &:last-child{
  //             margin-left: 0;
  //             .step-itemLists{
  //               &-in:last-child{
  //                 padding-bottom: 0;
  //                 .line{
  //                   display: none;
  //                 }
  //               }
  //             }
  //           }
  //           .step-bottom{
  //             font-weight: 500;
  //             font-size: 16px;
  //             padding-right: 25px;
  //             margin-top: 30px;
  //           }
  //         }
  //       }
  //       &.invisalign{
  //         background: linear-gradient(360deg, rgba(255, 241, 240, 0) 0%, rgba(255, 241, 240, 0.7) 12.5%, rgba(255, 241, 240, 0.7) 81.99%, rgba(255, 241, 240, 0) 100%);
  //         padding: 0 30px;
  //       }
  //     }
}
</style>