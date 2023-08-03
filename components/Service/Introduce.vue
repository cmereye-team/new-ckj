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
            {{$t(reasonData.title)}}
          </div>
          <div class="reason-l-text">{{$t(reasonData.text)}}</div>
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
        max-height: 628px;
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
          margin-top: 260px;
          .reason-l{
            width: 40%;
          }
          .reason-r{
            flex: 1;
            img{
              
            }
          }
        }
      }
    }
    @media (min-width: 768px) and (max-width: 1452px) {
      .introduce{
        &-in{
          margin-top: 3.5vw;
          &-l{
            padding-bottom: 7vw;
            .title{
              font-size: 2.2vw;
              margin-top: 6vw;
            }
            .content{
              font-size: 1.7vw;
              width: 33.85vw;
              margin-top: 4vw;
              &.orthodontics{
                width: 25vw;
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
          height: auto;
          max-height: 300%;
          background: none !important;
          margin-top: 0;
          &.noTitle{
            margin-top: 0;
          }
          &-t{
            width: 100%;
            img{
              width: 100%;
            }
          }
          &-l{
            padding-bottom: 0;
            .title{
              padding: 0 30px;
              font-weight: 700;
              font-size: 26px;
              margin-top: 0;
              &.teeth-whitening{
                margin-top: 0;
              }
            }
            .content{
              font-size: 1rem;
              width: 95%;
              padding: 0 30px;
              margin-top: 30px;
              &.orthodontics{
                width: 95%;
              }
            }
          }
        }
      }
      .tabNav{
        padding: 30px;
        font-size: 1rem;
        margin-top: 20px;
      }
    }
</style>

