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
  }
})
</script>

<template>
  <div class="introduce bigPageCon">
    <div class="introduce-in">
      <div class="introduce-in-title">{{$t(introduceData.title)}}</div>
      <div class="introduce-in-content">
        {{$t(introduceData.content)}}
      </div>
      <div class="introduce-in-reason">
        <div class="reason-l">
          <div class="reason-l-title">
            <serviceTitle :title="'關於植牙'" /> 
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
        &-reason{
          display: flex;
          width: 100%;
          max-width: 1036px;
          margin:  260px auto 0;
          .reason-l{
            width: 40%;
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
          &-reason{
            flex-direction: column;
            margin:  81px auto 0;
            padding: 0 40px;
            .reason-l{
              width: 100%;
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
        //   height: auto;
        //   max-height: 300%;
        //   background: none !important;
        //   margin-top: 72px;
        //   &.noTitle{
        //     margin-top: 0;
        //   }
        //   &-t{
        //     width: 100%;
        //     img{
        //       width: 100%;
        //     }
        //   }
        //   &-l{
        //     padding-bottom: 0;
        //     .title{
        //       padding: 0 30px;
        //       font-weight: 700;
        //       font-size: 26px;
        //       margin-top: 0;
        //       &.teeth-whitening{
        //         margin-top: 0;
        //       }
        //     }
        //     .content{
        //       font-size: 1rem;
        //       width: 95%;
        //       padding: 0 30px;
        //       margin-top: 30px;
        //       &.orthodontics{
        //         width: 95%;
        //       }
        //     }
        //   }
        }
      }
      // .tabNav{
      //   padding: 30px;
      //   font-size: 1rem;
      //   margin-top: 20px;
      // }
    }
</style>

