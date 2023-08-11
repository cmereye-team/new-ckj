<script lang="ts" setup>
import { defineProps } from "vue";
defineProps({
  bannerData:{
    type: Object,
    default(){
        return {
            img: 'https://static.cmereye.com/imgs/2023/07/f0b9f3bfc80d96b1.jpg',
            mbImg: 'https://static.cmereye.com/imgs/2023/08/3b1b35c6febb6e99.jpg',
            gif: 'https://static.cmereye.com/imgs/2023/08/0edc8793314c4da3.gif',
            text1: '#享受失而復得的喜悅',
            text2: '重拾完整人生之旅',
            tabNavName: 'pages.dental-service.implant.introduce.tabNavName'
        }
    }
  },
  pageName: {
    type: String,
    default: ''
  }
})
</script>

<template>
    <div class="banner">
        <img class="banner-bg" :data-cfsrc="bannerData.img" :srcset="`${bannerData.mbImg} 768w, ${bannerData.img}`" :src="bannerData.img" alt="">
        <div class="banner-in">
          <div class="bannerText-1" :class="pageName">
            <span>{{bannerData.text1}}</span>
            <span>
              {{bannerData.text2}}
            </span>
          </div>
          <div class="bannerText-2">
            <span>全程式預約一體化診療服務</span>
            <span>讓每一位顧客享受<span class="topic">健康微笑之旅</span></span>
          </div>
        </div>
        <img class="banner-gif" :src="bannerData.gif" alt="">
        <div class="banner-tabNav pageCon">
            <nuxt-link :to="'/'"><span>{{$t('pages.index.title')}}</span></nuxt-link>
            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11" fill="none">
                <path d="M1 1L5.17073 5.39024L1 10" stroke="#FC1682" stroke-width="1.09756" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <nuxt-link :to="'/dental-service'"><span>{{$t('pages.dental-service.title')}}</span></nuxt-link>
            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11" fill="none">
                <path d="M1 1L5.17073 5.39024L1 10" stroke="#FC1682" stroke-width="1.09756" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>{{$t(bannerData.tabNavName)}}</span>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.banner{
      position: relative;
      z-index: 0;
      &-bg{
        width: 100%;
      }
      &-in{
        position: absolute;
        left: 10%;
        bottom: 30%;
        z-index: 0;
        .bannerText-1{
          display: flex;
          flex-direction: column;
          span{
            display: inline-block;
            color: var(--topic-text-color);
            font-family: 'cwTeXYen';
            font-size: 35px;
            font-style: normal;
            font-weight: 600;
            letter-spacing: 4.751px;
            background: #fff;
            padding: 5px 20px;
            transform: skewY(-5deg);
            border: 2px solid var(--topic-text-color);
            width: max-content;
            min-width: 380px;
            &:first-child{
              position: relative;
              z-index: 2;
              &::after{
                content: '';
                position: absolute;
                bottom: -5px;
                right: 0;
                height: 8px;
                width: calc(100% - 60px);
                background: #fff;
              }
            }
            &:last-child{
              position: relative;
              z-index: 1;
              margin-top: -1.4%; //-6px
              margin-left: 60px;
            }
          }
          &.rootCanal{
            span{
              &:first-child{
                &::after{
                  width: calc(100% - 100px);
                }
              }
              &:last-child{
                margin-top: -1%;
                margin-left: 100px;
              }
            }
          }
          &.invisalign{
            span{
              &:last-child{
                margin-top: -2.1%;
              }
            }
          }
          &.veneers{
            span{
              min-width: auto;
              &:first-child{
                &::after{
                  width: calc(100% - 250px);
                }
              }
              &:last-child{
                margin-top: -3.5%;
                margin-left: 250px;
              }
            }
          }
        }
        .bannerText-2{
          display: flex;
          flex-direction: column;
          margin-top: 36px;
          span{
            color: var(--topic-text-color);
            font-size: 22px;
            font-style: normal;
            font-weight: 400;
            line-height: 171%; /* 37.62px */
            letter-spacing: 5.83px;
            &.topic{
              color: var(--topic-color);
            }
          }
        }
      }
      &-gif{
        width: 153px;
        height: auto;
        margin: -85px auto 0;
      }
      &-tabNav{
        font-weight: 400;
        font-size: 1.25rem;
        line-height: 160%;
        color: #6B6B6B;
        margin-top: -40px;
        a{
            text-decoration: underline;
        }
        &>span{
          cursor: pointer;
          color: var(--topic-color)
        }
        &>svg{
            display: inline-block;
            margin: -3px 10px 0;
            vertical-align: middle;
        }
      }
    }
@media (min-width: 768px) and (max-width: 1452px) {}
@media screen and (max-width: 768px) {
  .banner{
    &-in{
      left: 5%;
      bottom: 18%;
      .bannerText-1{
        margin-bottom: 15px;
        span{
          padding: 5px 10px;
          font-size: 15px;
          min-width: auto;
          border: 1px solid var(--topic-text-color);
          &:first-child{
            &::after{
              width: calc(100% - 50px);
            }
          }
          &:last-child{
            margin-left: 50px;
            margin-top: -4px;
          }
        }
        &.rootCanal{
          span{
            padding: 5px 15px;
            font-size: 14px;
            letter-spacing: 1.4px;
            &:first-child{
              &::after{
                width: calc(100% - 60px);
              }
            }
            &:last-child{
              margin-top: -1.4%;
              margin-left: 60px;
            }
          }
        }
        &.veneers{
          span{
            &:first-child{
              &::after{
                width: calc(100% - 120px);
              }
            }
            &:last-child{
              margin-top: -3%;
              margin-left: 120px;
            }
          }
        }
      }
      .bannerText-2{
        margin-top: 10px;
        span{
          font-size: 12px;
          letter-spacing: 2.65px;
        }
      }
    }
    &-gif{
      width: 45px;
      margin: -20px auto 0;
    }
    &-tabNav{
      width: auto;
      margin-top: 0px;
      margin-left: 26px;
      font-size: 12px;
      &>svg{
        transform: scale(.8);
      }
    }
  }
}
</style>