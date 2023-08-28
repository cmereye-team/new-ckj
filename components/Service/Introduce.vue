<script lang="ts" setup>
import { defineProps } from "vue";
defineProps({
  introduceData:{
    type: Object,
    default(){
      return {
        title: '',
        content: '',
        mbImg: '',
        pcImg: '',
        tabNavName: '',
        pageName: ''
      }
    }
  },
  introduceType:{
    type: String,
    default: ''
  },
  reasonData:{
    type: Object,
    default(){
      return {
        title: '',
        text: '',
        imgUrl: '',
        reasonLists:[
          {
            context: '',
            pageName: '',
            isSmallFS: false,
            isMediumCW: false
          }
        ]
      }
    }
  },
  moduleType:{
    type: String,
    default: '1'
  },
  animConfig: {
    type: Object,
    default(){
      return {
        color: '#FC1682',
        text: 'INVISALIGN'
      }
    }
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
  // 隐藏玩法
  // timer = setInterval(()=>{
  //   if(AnimNum.value >= 7){
  //     AnimNum.value = -5
  //   }else{
  //     AnimNum.value += 0.2
  //   }
  // },10)
})

onBeforeUnmount(()=>{
  clearInterval(timer)
})
</script>

<template>
  <div class="introduce bigPageCon">
    <div class="introduce-in">
      <div class="introduce-in-title">{{$t(introduceData.title)}}</div>
      <div class="introduce-in-content" v-if="['1','3'].includes(moduleType)">
        {{$t(introduceData.content)}}
      </div>
      <div class="introduce-in-content"  v-if="introduceType === '2'">
        {{$t(introduceData.content)}}
      </div>
      <div class="introduce-in-introduceType" v-if="introduceType === '1'">
        <div>{{$t(introduceData.content)}}</div>
      </div>
      <div class="introduce-in-reason" v-if="moduleType === '1'">
        <div class="reason-l">
          <div class="reason-l-title">
            <serviceTitle :title="reasonData.title" /> 
            <!-- {{$t(reasonData.title)}} -->
          </div>
          <div class="reason-l-img">
            <img :src="reasonData.imgUrl" alt="">
          </div>
          <div class="reason-l-text">
            <img src="https://static.cmereye.com/imgs/2023/08/0247872a5a18b171.png" alt="">
            <span>{{$t(reasonData.text)}}</span>
          </div>
          <div class="reason-l-context">
            <div v-for="(reason,reasonIndex) in reasonData.reasonLists" :key="reasonIndex">
              <div class="icon">
                {{reason.hideIcon ? '': '· '}}
              </div>
              <div class="context">
                {{$t(reason.context)}}
              </div>
            </div>
          </div>
        </div>
        <div class="reason-r">
          <img :src="reasonData.imgUrl" alt="">
        </div>
      </div>
      <div class="introduce-in-modulType2" v-if="moduleType === '2'">
        <div class="modulType2-content">
          {{$t(introduceData.content)}}
        </div>
        <div class="modulType2-image">
          <img :src="introduceData.pcImg" alt="">
          <svg viewBox="0 0 1000 600" class="overflow-visible uppercase w-full">
            <path id="leftArch" d="M 1040,600 V0 h-770 a 300 300 0 0 0 0,600 z" fill="none" stroke="none"></path>
            <text width="500" font-size="26" class="font-gza text-secondary" :fill="animConfig.color">
              <textPath class="tp" alignment-baseline="auto" xlink:href="#leftArch" :startOffset="`${AnimNum}%`">
                <template v-for="i in 24" :key="i">
                  {{animConfig.text}} &nbsp;
                </template>
              </textPath>
            </text>
          </svg>
          <!-- 隐藏玩法 -->
          <!-- <svg viewBox="0 0 1000 600" class="overflow-visible uppercase w-full">
            <path id="leftArch" d="M 1040,100 h-340 L 300,500 A 200 200 0 1 1 300,100 L 700,500 h340 A 200 200 0 0 0 1040,100 z" fill="none" stroke="none"></path>
            <text width="500" font-size="26" class="font-gza text-secondary" fill="#FC1682">
              <textPath class="tp" alignment-baseline="auto" xlink:href="#leftArch" :startOffset="`${AnimNum}%`">
                <template v-for="i in 10" :key="i">
                  I---+=========> &nbsp;&nbsp;&nbsp;&nbsp;
                </template>
              </textPath>
            </text>
          </svg> -->
        </div>
      </div>
      <div class="introduce-in-modulType3" v-if="moduleType === '3'">
        <div class="modulType3-top">
          <div class="modulType3-top-title" >
            <serviceTitle :title="reasonData.title" />
          </div>
          <div class="modulType3-top-text" >
            <img src="https://static.cmereye.com/imgs/2023/08/0247872a5a18b171.png" alt="">
            <span>{{$t(reasonData.text)}}</span>
          </div>
        </div>
        <div class="modulType3-bottom">
          <div class="modulType3-bottom-in" v-for="(reason,reasonIndex) in reasonData.reasonLists" :key="reasonIndex">
              <div class="name">
                {{$t(reason.name)}}
              </div>
              <div class="context">
                {{$t(reason.context)}}
              </div>
            </div>
        </div>
      </div>
      <div class="introduce-in-modulType4" v-if="moduleType === '4'">
        <div class="modulType4-image">
          <svg viewBox="0 0 1000 600" class="overflow-visible uppercase w-full">
            <path id="leftArch" d="M -20,0 V600 h750 a 300 300 0 0 0 0,-600 z" fill="none" stroke="none"></path>
            <text width="500" font-size="26" class="font-gza text-secondary" :fill="animConfig.color">
              <textPath class="tp" alignment-baseline="auto" xlink:href="#leftArch" :startOffset="`${AnimNum}%`">
                <template v-for="i in 24" :key="i">
                  {{animConfig.text}} &nbsp;
                </template>
              </textPath>
            </text>
          </svg>
          <img :src="introduceData.pcImg" alt="">
        </div>
        <div class="modulType4-content">
          <!-- {{$t(introduceData.content)}} -->
          <div class="modulType4-content-title">
            <serviceTitle :title="reasonData.title" /> 
            <!-- {{$t(reasonData.title)}} -->
          </div>
          <div class="modulType4-content-text">
            <img src="https://static.cmereye.com/imgs/2023/08/0247872a5a18b171.png" alt="">
            <span>{{$t(reasonData.text)}}</span>
          </div>
          <div class="modulType4-content-context">
            <div v-for="(reason,reasonIndex) in reasonData.reasonLists" :key="reasonIndex">
              <div class="icon">
                {{reason.hideIcon ? '': '· '}}
              </div>
              <div class="context">
                {{$t(reason.context)}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
    .introduce{
      &-in{
        margin-top: 96px;
        &-title{
          font-weight: 700;
          font-size: 32px;
          text-align: center;
          position: relative;
          padding-bottom: 10px;
          color: var(--topic-text-color);
          &::after{
            content: '';
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: 0;
            width: 39px;
            height: 5px;
            border-radius: 2.5px;
            background: var(--topic-color);
          }
        }
        &-content{
          font-weight: 400;
          font-size: 16px;
          width: 100%;
          max-width: 680px;
          line-height: 160%; /* 25.6px */
          letter-spacing: 4.8px;
          margin: 70px auto 0;
          text-align: center;
        }
        &-introduceType{
          margin: 170px auto 207px;
          display: flex;
          justify-content: center;
          &>div{
            color: var(--topic-text-color);
            text-align: center;
            font-family: Noto Serif KR;
            font-size: 79px;
            font-style: normal;
            font-weight: 500;
            line-height: 157%; /* 124.03px */
            letter-spacing: 15.8px;
            white-space: pre-wrap;
            position: relative;
            display: inline-block;
            &::before{
              content: '';
              width: 98px;
              height: 98px;
              display: block;
              background: linear-gradient(180deg, rgba(255, 122, 161, 0.50) 0%, rgba(255, 176, 202, 0.00) 100%);
              border-radius: 50%;
              position: absolute;
              left: 25%;
            }
          }
        }
        &-reason{
          display: flex;
          width: 100%;
          max-width: 1036px;
          margin:  260px auto 0;
          .reason-l{
            width: 40%;
            padding-right: 5%;
            &-img{
              display: none;
            }
            &-text{
              margin-top: 19px;
              display: flex;
              color: var(--topic-text-color);
              font-size: 22px;
              font-style: normal;
              font-weight: 600;
              line-height: 160%; /* 35.2px */
              letter-spacing: 6.6px;
              img{
                margin-right: 14px;
              }
            }
            &-context{
              margin-top: 26px;
              display: flex;
              flex-direction: column;
              &>div{
                display: flex;
                color: var(--topic-text-color);
                .icon{
                  width: 20px;
                  min-width: 20px;
                  font-size: 20px;
                  margin-right: 5px;
                  line-height: 1.8;
                }
                .context{
                  flex: 1;
                  font-size: 16px;
                  font-weight: 500;
                  line-height: 200%; /* 36.96px */
                  letter-spacing: 4.8px;
                }
              }
            }
          }
          .reason-r{
            flex: 1;
            img{
              width: 100%;
            }
          }
        }
        &-modulType2{
          width: 100%;
          display: flex;
          align-items: center;
          margin-top: 100px;
          .modulType2-content{
            color: var(--topic-text-color);
            text-align: center;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 160%; /* 25.6px */
            letter-spacing: 4.8px;
            margin-left: 30px;
          }
          .modulType2-image{
            width: 50%;
            min-width: 50%;
            margin-left: 10.5%;
            position: relative;
            padding: 20px 0 20px 20px;
            box-sizing: border-box;
            img{  
              width: 100%;
            }
            svg{
              position: absolute;
              left: 0;
              top: 50%;
              transform: translateY(-50%);
            }
          }
        }
        &-modulType3{
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 240px;
          .modulType3-top{
            &-title{
              display: flex;
              justify-content: center;
            }
            &-text{
              display: flex;
              align-items: center;
              margin-top: 41px;
              color: var(--topic-text-color);
              font-size: 27px;
              font-style: normal;
              font-weight: 500;
              line-height: 160%; /* 43.2px */
              letter-spacing: 8.1px;
              img{
                margin-right: 14px;
              }
            }
          }
          .modulType3-bottom{
            margin-top: 74px;
            margin-bottom: 186px;
            display: flex;
            &-in{
              position: relative;
              max-width: 387px;
              margin-left: 110px;
              box-sizing: content-box;
              color: var(--topic-text-color);
              font-style: normal;
              font-weight: 500;
              line-height: 157%;
              &:not(:last-child){
                padding-right: 110px;
                margin-left: 0;
                &::after{
                  content: '';
                  position: absolute;
                  right: 0;
                  top: 50%;
                  transform: translateY(-50%);
                  height: 39px;
                  width: 5px;
                  border-radius: 3px;
                  background: var(--topic-color);
                }
              }
              .name{
                font-size: 22px;
                letter-spacing: 4.4px;
                &::before{
                  content: '';
                  position: absolute;
                  top: -36px;
                  left: -36px;
                  width: 98px;
                  height: 98px;
                  border-radius: 50%;
                  background: linear-gradient(180deg, rgba(255, 122, 161, 0.50) 0%, rgba(255, 176, 202, 0.00) 100%);
                }
              }
              .context{
                font-size: 19px;
                letter-spacing: 3.8px;
                margin-top: 5px;
              }
            }
          }
        }
        &-modulType4{
          width: 100%;
          display: flex;
          align-items: center;
          margin-top: 140px;
          .modulType4-content{
            color: var(--topic-text-color);
            text-align: center;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 160%; /* 25.6px */
            letter-spacing: 4.8px;
            margin-right: 30px;
            // width: 40%;
            // padding-right: 5%;
            &-text{
              margin-top: 19px;
              display: flex;
              color: var(--topic-text-color);
              font-size: 22px;
              font-style: normal;
              font-weight: 600;
              line-height: 160%; /* 35.2px */
              letter-spacing: 6.6px;
              img{
                margin-right: 14px;
              }
            }
            &-context{
              margin-top: 26px;
              display: flex;
              flex-direction: column;
              &>div{
                display: flex;
                color: var(--topic-text-color);
                .icon{
                  width: 20px;
                  min-width: 20px;
                  font-size: 20px;
                  margin-right: 5px;
                  line-height: 1.8;
                }
                .context{
                  flex: 1;
                  text-align: left;
                  max-width: 471px;
                  font-size: 16px;
                  font-weight: 500;
                  line-height: 200%; /* 36.96px */
                  letter-spacing: 4.8px;
                }
              }
            }
          }
          .modulType4-image{
            width: 50%;
            min-width: 50%;
            margin-right: 10.5%;
            position: relative;
            padding: 20px 20px 20px 0px;
            box-sizing: border-box;
            img{  
              width: 100%;
            }
            svg{
              position: absolute;
              left: 0;
              top: 50%;
              transform: translateY(-50%);
            }
          }
        }
      }
    }
    @media screen and (min-width: 1452px){
      .introduce{
        &-in{
          &-modulType2{
            .modulType2-content{
              margin-left: calc((100% - 1452px)/2);
            }
          }
        }
      }
    }
    @media (min-width: 768px) and (max-width: 1452px) {
      .introduce{
        &-in{
          // margin-top: 3.5vw;
          &-l{
            // padding-bottom: 7vw;
            .title{
              // font-size: 2.2vw;
              // margin-top: 6vw;
            }
            .content{
              // font-size: 1.7vw;
              // width: 33.85vw;
              // margin-top: 4vw;
              &.orthodontics{
                // width: 25vw;
              }
            }
          }
        }
      }
      .tabNav{
        font-size: 1.5vw;
        margin-top: 6vw;
      }
    }
    @media screen and (max-width: 768px) {
      .introduce{
        &-in{
          margin-top: 60px;
          &-title{
            font-size: 20px;
            &::after{
              height: 3px;
              border-radius: 2px;
            }
          }
          &-content{
            padding: 0 52px;
            margin: 37px auto 0;
            font-size: 15px;
            text-align: left;
            letter-spacing: 4.5px;
          }
          &-introduceType{
            margin: 80px auto;
            &>div{
              font-size: 20px;
              letter-spacing: 4px;
              &::before{
                width: 28px;
                height: 28px;
                left: 20%;
              }
            }
          }
          &-reason{
            flex-direction: column;
            margin:  81px auto 0;
            padding: 0 40px;
            .reason-l{
              width: 100%;
              padding-right: 0;
              &-title{
                display: flex;
                justify-content: center;
              }
              &-img{
                display: block;
                margin-top: 50px;
                margin-bottom: 30px;
              }
              &-text{
                font-size: 16px;
                letter-spacing: 4.8px;
                img{
                  margin-right: 5.7px;
                  transform: rotateY(180deg);
                  margin-top: -5px;
                }
              }
              &-context{
                margin-top: 14px;
                &>div{
                  .icon{
                    width: 15px;
                    min-width: 15px;
                    font-size: 18px;
                  }
                  .context{
                    font-size: 15px;
                    line-height: 180%;
                    letter-spacing: 4.5px;
                  }
                }
              }
            }
            .reason-r{
              width: 100%;
              display: none;
            }
          }
          &-modulType2{
            flex-direction: column;
            margin-top: 35px;
            .modulType2-content{
              margin-left: 0;
              letter-spacing: 4.5px;
              font-size: 15px;
              padding: 0 52px;
            }
            .modulType2-image{
              margin-left: 30px;
              width: auto;
              margin-top: 50px;
            }
          }
          &-modulType3{
            margin-top: 80px;
            .modulType3-top{
              &-text{
                font-size: 16px;
                letter-spacing: 4.8px;
                img{
                  transform: rotateY(180deg);
                }
              }
            }
            .modulType3-bottom{
              margin-top: 63px;
              margin-bottom: 80px;
              flex-direction: column;
              &-in{
                padding: 0 43px 0 70px;
                margin: 0;
                &:not(:last-child){
                  padding-right: 43px;
                  margin-bottom: 58px;
                  &::after{
                    display: none;
                  }
                }
                .name{
                  font-size: 16px;
                  letter-spacing: 3.2px;
                  &::before{
                    top: -18px;
                    left: 43px;
                    width: 68px;
                    height: 68px;
                  }
                }
                .context{
                  font-size: 15px;
                  letter-spacing: 3px;
                }
              }
            }
          }
          &-modulType4{
            flex-direction: column;
            margin-top: 0;
            .modulType4-content{
              padding: 0 30px;
              margin-top: 53px;
              margin-right: 0;
              &-title{
                display: flex;
                justify-content: center;
              }
              &-text{
                margin-top: 35px;
                font-size: 16px;
                letter-spacing: 4.8px;
                span{
                  margin-left: -10px;
                  margin-top: 5px;
                }
                img{
                  transform: rotate(90deg) scale(.8);
                }
              }
              &-context{
                font-size: 15px;
                letter-spacing: 4.5px;
              }
            }
            .modulType4-image{
              width: 100%;
              img{

              }
              svg{

              }
            }
          }
        }
      }
    }
</style>

