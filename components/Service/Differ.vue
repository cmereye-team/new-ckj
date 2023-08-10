<script lang="ts" setup>
import { defineProps } from "vue";
defineProps({
  differData:{
    type: Object,
    default(){
      return{
        title: '',
        text: '',
        firstTextTh: '',
        secondTextTh: '',
        listDatas: [
        ],
        pageName: ''
      }
    }
  },
  moduleType:{
    type: String,
    default: '1'
  } 
})

let windowWidth = ref(1920)

onMounted(()=>{
  getWindowWidth()
  window.addEventListener('resize',getWindowWidth)
})

const getWindowWidth = () => {
  windowWidth.value = window.innerWidth
  // console.log(windowWidth)
}

let differCurrent = ref(1)

//走马灯事件
const onSlideChange = (swiper:any) => {
  differCurrent.value = swiper.realIndex + 1
}

let differSwiperRef ={
  slideToLoop: (a)=>{}
}
const setDifferSwiperRef = (swiper:any) => {
  differSwiperRef = swiper;
}
const handleLineCur = (_value:number) =>{
  // console.log(_value)
  differSwiperRef.slideToLoop(_value-1)
}


</script>

<template>
  <div class="differ">
      <div class="differ-title" v-if="moduleType === '1'">
        <div class="differ-title-icon">
          <svg width="52" height="45" viewBox="0 0 52 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.9497 4.5C24.1044 2.5 26.9911 2.5 28.1458 4.5L48.4974 39.75C49.6521 41.75 48.2087 44.25 45.8993 44.25H5.19616C2.88676 44.25 1.44338 41.75 2.59808 39.75L22.9497 4.5Z" fill="#FC1682"/>
            <path d="M25.5288 31.856C24.5528 31.856 24.0648 31.416 24.0648 30.536V20.024C24.0648 19.144 24.5528 18.704 25.5288 18.704C25.9928 18.704 26.3528 18.808 26.6088 19.016C26.8648 19.208 26.9928 19.56 26.9928 20.072V30.488C26.9928 31 26.8648 31.36 26.6088 31.568C26.3528 31.76 25.9928 31.856 25.5288 31.856ZM25.5288 33.968C25.8168 33.968 26.0808 34.024 26.3208 34.136C26.5768 34.248 26.8008 34.4 26.9928 34.592C27.1848 34.784 27.3368 35 27.4488 35.24C27.5608 35.496 27.6168 35.768 27.6168 36.056C27.6168 36.344 27.5608 36.608 27.4488 36.848C27.3368 37.104 27.1848 37.328 26.9928 37.52C26.8008 37.712 26.5768 37.864 26.3208 37.976C26.0808 38.088 25.8168 38.144 25.5288 38.144C25.2408 38.144 24.9688 38.088 24.7128 37.976C24.4728 37.864 24.2568 37.712 24.0648 37.52C23.8728 37.328 23.7208 37.104 23.6088 36.848C23.4968 36.608 23.4408 36.344 23.4408 36.056C23.4408 35.768 23.4968 35.496 23.6088 35.24C23.7208 35 23.8728 34.784 24.0648 34.592C24.2568 34.4 24.4728 34.248 24.7128 34.136C24.9688 34.024 25.2408 33.968 25.5288 33.968Z" fill="white"/>
          </svg>
        </div>
        <div class="differ-title-in">
          <div v-if="windowWidth > 768 ||  differData.title.length <= 10">{{differData.title}}</div>
          <div v-if="windowWidth <= 768 && differData.title.length > 10">{{differData.title.slice(0,6)}}</div>
          <div v-if="windowWidth <= 768 && differData.title.length > 10">{{differData.title.slice(7,differData.title.length)}}</div>
        </div>
      </div>
      <div class="differ-title" v-if="moduleType==='2'">
        <div class="differ-title-moduleType2">
          <ServiceTitle :title="differData.title" />
        </div>
      </div>
      <div class="differ-text" v-if="differData.text">
        {{differData.text}}
      </div>
      <div class="differ-in">
          <div class="box">
            <div class="box-in">
              <div :class="['box-in-l',differData.pageName]"></div>
              <div :class="['box-in-r',differData.pageName]">
                {{differData.firstTextTh}}
              </div>
            </div>
            <div class="box-in" v-for="(leftItem,leftItemIndex) in differData.listDatas" :key="leftItemIndex" >
              <div :class="['box-in-l',differData.pageName]">{{leftItem.name}}</div>
              <div :class="['box-in-r',differData.pageName]">
                <div v-if="!leftItem.isArrayType">{{leftItem.firstText}}</div>
                <div v-else v-for="(firstTextItem,firstTextIndex) in leftItem.firstText" :key="firstTextIndex">
                  {{firstTextItem}}
                </div>
              </div>
            </div>
          </div>
          <div class="box">
            <div :class="['box-in','boxRight',differData.pageName]">
              <div class="box-in-r">
                {{differData.secondTextTh}}
              </div>
            </div>
            <div :class="['box-in','boxRight',differData.pageName]" v-for="(rightItem,rightItemIndex) in differData.listDatas" :key="rightItemIndex">
              <div class="box-in-r bra">
                <div>{{rightItem.secondText}}</div>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.differ{
  width: 100%;
  max-width: 1450px;
  margin: 145px auto 184px;
  &-title{
    color: var(--topic-color);
    text-align: center;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 38.4px */
    letter-spacing: 7.2px;
    &-icon{
      margin: 0 auto 24px;
      width: max-content;
    }
    &-in{
      display: inline-block;
      text-align: center;
      position: relative;
      &::before{
        content: '';
        position: absolute;
        width: 4px;
        height: 40px;
        background: var(--topic-color);
        border-radius: 2px;
        left: -30px;
        bottom: -10px;
        transform: rotate(-30deg);
      }
      &::after{
        content: '';
        position: absolute;
        width: 4px;
        height: 40px;
        background: var(--topic-color);
        border-radius: 2px;
        right: -30px;
        bottom: -10px;
        transform: rotate(30deg);
      }
    }
    &-moduleType2{
      display: flex;
      justify-content: center;
    }
  }
  &-text{
    width: 100%;
    margin: 110px auto 0;
    max-width: 889px;
    color: var(--topic-text-color);
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 25.6px */
    letter-spacing: 4.8px;
  }
  &-in{
    width: 100%;
    max-width: 1005px;
    margin: 110px auto 0;
    display: flex;
    .box{
      .box-in{
        height: 112px;
        display: flex;
        border-bottom: 1px solid var(--topic-color);
        &>div{
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 160%;
          color: #666666;
        }
        .box-in-l{
          width: 122px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--topic-color);
        }
        .box-in-r{
          flex: 1;
          padding: 0 42px;
          margin-left: 1px;
          display: flex;
          border-left: 1px solid var(--topic-color);
          &>div{
            width: 100%;
          }
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
        }
        &:first-child{
          height: 48px;
          line-height: 48px;
          &>div{
            font-weight: 600;
            font-size: 18px;
            background: var(--topic-color);
            color: #fff;
          }
          .box-in-r{
            align-items: center;
            border-left: none;
          }
        }
      }
    }
  }
}
@media (min-width: 768px) and (max-width: 1452px) {
  // .differ{
  //   &-in{
  //     .box{
  //       .box-in{
  //         &>div{
  //           font-size: 16px;
  //         }
  //         .box-in-r{
  //           padding: 0 3vw;
  //         }
  //         &:first-child{
  //           &>div{
  //             font-size: 22px;
  //           }
  //         }
  //       }
  //     }
  //   }
  // }
}
@media screen and (max-width: 768px) {
  .differ{
    margin: 83px auto 80px;
    &-title{
      font-size: 20px;
      letter-spacing: 6px;
      &-icon{
        margin: 0 auto;
        transform: scale(.6);
      }
      &-in{
        &::before{
          width: 2px;
          height: 25px;
          bottom: 5px;
          left: -20px;
        }
        &::after{
          width: 2px;
          height: 25px;
          bottom: 5px;
          right: -20px;
        }
      }
    }
    &-text{
      margin: 35px auto 0;
      text-align: left;
      font-weight: 400;
      font-size: 15px;
      letter-spacing: 4.5px;
      padding: 0 30px;
    }
    &-in{
      width: 100%;
      margin: 44px auto 0;
      .box{
        flex: 1;
        &:first-child{
          width: 60%;
          min-width: 60%;
        }
        .box-in{
          height: 106px;
          margin-top: 0;
          &>div{
            font-weight: 500;
            font-size: 12px;
          }
          .box-in-l{
            width: 30%;
            &.invisalign{
              // width: 96px;
            }
          }
          .box-in-r{
            padding: 0 14px;
            // &.invisalign{
            //   padding: 0 10px;
            // }
          }
          &:first-child{
            height: 25px;
            line-height: 25px;
            // margin-bottom: 5px;
            &>div{
              font-weight: 600;
              font-size: 12px;
              
            }
            .box-in-r{
              // align-items: flex-start;
            }
          }
        }
      }
    }
  }
}
</style>