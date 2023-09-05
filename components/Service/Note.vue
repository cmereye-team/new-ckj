<script lang="ts" setup>
import { defineProps } from "vue";
defineProps({
  noteData:{
    type: Object,
    default(){
      return {
        title: '',
        lists: [],
        pageName: '',
        text: ''
      }
    }
  },
  pageName:{
    type: String,
    default: ''
  }
})
</script>

<template>
    <div :class="['note',noteData.pageName]">
      <div class="note-title" v-if="pageName === 'periodontal'">
        <div class="note-title-in periodontal">{{noteData.title}}</div>
        <div class="note-title-icon periodontal">
          <SvgQuestionMark />
          <!-- ??? -->
        </div>
      </div>
      <div class="note-title" v-else>
        <div class="note-title-icon">
          <svg width="52" height="45" viewBox="0 0 52 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.9497 4.5C24.1044 2.5 26.9911 2.5 28.1458 4.5L48.4974 39.75C49.6521 41.75 48.2087 44.25 45.8993 44.25H5.19616C2.88676 44.25 1.44338 41.75 2.59808 39.75L22.9497 4.5Z" fill="#FC1682"/>
            <path d="M25.5288 31.856C24.5528 31.856 24.0648 31.416 24.0648 30.536V20.024C24.0648 19.144 24.5528 18.704 25.5288 18.704C25.9928 18.704 26.3528 18.808 26.6088 19.016C26.8648 19.208 26.9928 19.56 26.9928 20.072V30.488C26.9928 31 26.8648 31.36 26.6088 31.568C26.3528 31.76 25.9928 31.856 25.5288 31.856ZM25.5288 33.968C25.8168 33.968 26.0808 34.024 26.3208 34.136C26.5768 34.248 26.8008 34.4 26.9928 34.592C27.1848 34.784 27.3368 35 27.4488 35.24C27.5608 35.496 27.6168 35.768 27.6168 36.056C27.6168 36.344 27.5608 36.608 27.4488 36.848C27.3368 37.104 27.1848 37.328 26.9928 37.52C26.8008 37.712 26.5768 37.864 26.3208 37.976C26.0808 38.088 25.8168 38.144 25.5288 38.144C25.2408 38.144 24.9688 38.088 24.7128 37.976C24.4728 37.864 24.2568 37.712 24.0648 37.52C23.8728 37.328 23.7208 37.104 23.6088 36.848C23.4968 36.608 23.4408 36.344 23.4408 36.056C23.4408 35.768 23.4968 35.496 23.6088 35.24C23.7208 35 23.8728 34.784 24.0648 34.592C24.2568 34.4 24.4728 34.248 24.7128 34.136C24.9688 34.024 25.2408 33.968 25.5288 33.968Z" fill="white"/>
          </svg>
        </div>
        <div class="note-title-in">{{noteData.title}}</div>
      </div>
      <div :class="['note-in',noteData.pageName]">
        <div class="note-in-lists">
          <div class="note-in-lists-item" v-for="(item,index) in noteData.lists" :key="index">
            <div>·</div>
            <div>{{item.name}}</div>
          </div>
        </div>
        <div class="note-in-r">
          <img src="https://static.cmereye.com/imgs/2023/07/bddd5d9b334f8f0a.png" alt="">
        </div>
      </div>
      <div class="note-remark" v-if="noteData.text">
        {{noteData.text}}
      </div>
    </div>
</template>


<style lang="scss" scoped>
.note{
  padding: 96px 0 0;
  &.teethWhitening{
    background: #FECB02;
    padding: 96px 0 30px;
  }
  &-title{
    color: var(--topic-color);
    text-align: center;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 38.4px */
    letter-spacing: 7.2px;
    position: relative;
    &-icon{
      margin: 0 auto 24px;
      width: max-content;
      &.periodontal{
        position: absolute;
        left: 50%;
        transform: translateX(-50%) scale(.8);
        top: -10px;
        svg{
          width: 100%;
          height: 100%;
        }
      }
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
      &.periodontal{
        margin-top: 100px;
        &::after,&::before{
          width: 12px;
          height: 12px;
          border-radius: 0;
          bottom: 15px;
          transform: rotate(45deg);
        }
      }
    }
  }
  &-in{
    width: 100%;
    max-width: 1200px;
    margin: 90px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    &.wisdomTeethExtraction{
      padding-right: 100px;
      justify-content: space-between;
    }
    &-lists{
      max-width: 1000px;
      margin-right: 89px;
      &-item{
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; /* 25.6px */
        letter-spacing: 4.8px;
        color: var(--topic-text-color);
        display: flex;
        &>div:first-child{
          width: 20px;
        }
        &>div:last-child{
          flex: 1;
        }
      }
    }
    &.teethWhitening{
      .note-in-lists{
        .note-in-lists-item{
          color: #fff;
        }
      }
    }
  }
  &-remark{
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
    color: var(--topic-color);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 25.6px */
    letter-spacing: 4.8px;
  }
}


@media only screen and (max-width: 1000px) {
  .note{
    padding: 83px 30px 0;
    box-sizing: border-box;
    &.teethWhitening{
      padding: 40px 0 36px;
    }
    &-title{
      font-size: 20px;
      letter-spacing: 6px;
      &-icon{
        margin: 0 auto;
        transform: scale(.6);
        &.periodontal{
          // font-size: 150px;
          // top: 40%;
          top: -30%;
          transform: translateX(-50%) scale(.6);
        }
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
        &.periodontal{
          font-size: 20px;
          letter-spacing: 5px;
          margin-top: 50px;
          margin-bottom: 50px;
          &::after{
            width: 6px;
            height: 6px;
          }
          &::before{
            width: 6px;
            height: 6px;
          }
        }
      }
    }
    &-in{
      flex-direction: column;
      margin: 35px auto 0;
      &.teethWhitening{
        padding: 0 44px;
        
        .note-in-lists{
          &-item{
            line-height: 2.2;
            margin-bottom: 0;
          }
        }
      }
      &.wisdomTeethExtraction{
        padding-right: 0;
        justify-content: center;
      }
      &-lists{
        margin-bottom: 57px;
        margin-right: 0;
        &-item{
          font-size: 15px;
          letter-spacing: 4.5px;
          margin-bottom: 15px;
          &>div:first-child{
            width: 15px;
          }
        }
      }
      &-r{
        img{
          width: 80%;
          margin: 0 auto;
        }
      }
    }
    &-remark{
      margin: 37.28px auto;
      font-size: 15px;
      letter-spacing: 4.5px;
    }
  }
}
</style>