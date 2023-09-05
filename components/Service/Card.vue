<script lang="ts" setup>
import { defineProps } from "vue"
import serviceLists from '~/assets/js/service'
defineProps({
  isIndexShow:{
    type: Boolean,
    default: false
  },
  isMenu: {
    type: Boolean,
    default: false
  }
})
const servicesCardLists = serviceLists

const servicesCardPageData = {
  title: 'components.service.card.title',
  dentalServicesTitleIn: 'components.service.card.dentalServicesTitleIn',
  contextIn: 'components.service.card.contextIn'
}

const openServiceCar = ref(false)


</script>


<template>
  <div :class="{'index-dentalServices':true}">
    <div :class="['index-dentalServices-in']">
      <div class="index-dentalServices-in-t">
        <div class="title">{{$t(servicesCardPageData.title)}}</div>
        <div class="context">
          <div class="context-in">{{$t(servicesCardPageData.contextIn)}}</div>
        </div>
      </div>    

      <div :class="{'servicesCard':true,'isMenu': isMenu,'pcServices':true}">
        <div>
          <div class="servicesCard-in" v-for="(item,index) in servicesCardLists" :key="index">
            <nuxt-link :to="item.link">
              <div class="servicesCard-in-roundBox">
                <div>
                  <img :src="item.imgUrl" alt="">
                  <div class="servicesCard-in-name">{{$t(item.name)}}</div>
                </div>
              </div>
            </nuxt-link>
          </div>
          <div class="servicesCard-mascot">
              <img src="https://static.cmereye.com/imgs/2023/07/19208b63eaa5ed13.png" alt="">
            </div>
          </div>
      </div>
      <div class="mbServices">
        <div class="servicesCard-in" v-for="(item,index) in servicesCardLists.slice(0,openServiceCar?15:4)" :key="index">
          <nuxt-link :to="item.link">
            <div class="servicesCard-in-image">
              <img :src="item.imgUrl" alt="">
              <div class="servicesCard-in-name">{{$t(item.name)}}</div>
            </div>
          </nuxt-link>
        </div>
        <div class="mbServices-b" :style="{transform: (openServiceCar ? 'translateX(-50%) rotate(180deg)': 'translateX(-50%)')}" @click="openServiceCar = !openServiceCar">
          <img src="https://static.cmereye.com/imgs/2023/07/1b165f5750433684.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.index-dentalServices{
  padding: 189px 0 77px;
  position: relative;
  overflow: hidden;
  &-in{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    &-t{
      display: flex;
      align-items: center;
      position: relative;
      .title{
        border-right: 3px solid #089CFE;
        padding-right: 55px;
        color: var(--topic-text-color);
        font-family: 'cwTeXYen';
        font-size: 35px;
        font-style: normal;
        font-weight: 800;
        line-height: 120%; 
        letter-spacing: 7.942px;
      }
      .context{
        margin-left: 60px;
        &-in{
          margin: 0 auto;
          width: 100%;
          max-width: 724px;
          font-family: 'cwTeXYen';
          font-size: 19px;
          font-style: normal;
          font-weight: 500;
          line-height: 160%; 
          letter-spacing: 3.8px;
        }
      }
      &::before{
        content: '';
        position: absolute;
        left: -200px;
        background: url(https://static.cmereye.com/imgs/2023/07/2142b5e26918c181.png) no-repeat;
        width: 120px;
        height: 120px;
      }
      &:after{
        content: '';
        background: url(https://static.cmereye.com/imgs/2023/07/e2ded86c01ed3723.png) no-repeat;
        position: absolute;
        right: -200px;
        width: 120px;
        height: 120px;
      }
    }
    
    .servicesCard{
      display: flex;
      flex-wrap: wrap;
      margin: 86px auto 0;
      width: 100%;
      max-width: 1650px;
      position: relative;
      &>div{
        width: 100%;
        margin-bottom: 60px;
        display: flex;
        flex-wrap: wrap;
        &:nth-of-type(2){
          margin-left: 150px;
        }
      }
      &-mascot{
        cursor: pointer;
        width: 18%;
        max-width: 240px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      &-in{
        width: 15%;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-sizing: border-box;
        margin-right: 3.85%;
        margin-bottom: 4%;
        &:nth-of-type(6){
          margin-left: 9.425%;
        }
        &:nth-of-type(10){
          margin-right: 0;
        }
        a{
          width: 100%;
          height: 100%;
        }
        .router-link-active{
          .servicesCard-in-roundBox{
            background: #fff;
            box-shadow: 0 0 64px rgba(4, 9, 21, 0.13);
          }
        }
        &-roundBox{
          width: 100%;
          height: 0;
          padding-top: 100%;
          position: relative;
          background: #F5F4F4;
          transition: all .5s;
          border-radius: 50%;
          &>div{
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            padding-bottom: 20%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-end;
          }
          img{
            max-width: 60%;
            max-height: 60%;
          }
          &:hover{
            background: #fff;
            box-shadow: 0 0 64px rgba(4, 9, 21, 0.13);
          }
        }
        &-name{
          color: var(--topic-text-color);
          text-align: center;
          font-family: 'cwTeXYen';
          font-size: 20px;
          font-style: normal;
          font-weight: 600;
          line-height: 160%; /* 27.2px */
          letter-spacing: 3.8px;
          margin-top: 14px;
          position: relative;
          &::after{
            content: '';
            color: var(--topic-color);
            background: url(https://static.cmereye.com/imgs/2023/07/5331fed4a9f0f487.png) no-repeat;
            width: 5px;
            height: 10px;
            background-size: 100% 100%;
            position: absolute;
            font-weight: bold;
            top: 30%;
          }
        }
        &>.router-link-exact-active{
          .servicesCard-in-image{
            background: #F5F4F4;
          }
        }
      }
      &.isMenu{
        margin-top: 0;
        padding: 0;
        .servicesCard-in{
          padding: 0 6px;
          &-name{
            font-weight: 600;
            font-size: 15px;
            height: 32px;
            line-height: 32px;
            width: 110%;
          }
        }
      }
      // &::after{
      //   content: '';    
      //   position: absolute;
      //   background: url(https://static.cmereye.com/imgs/2023/07/a6bc776c3b9206ef.png) no-repeat;
      //   background-size: 100% auto;
      //   bottom: -100px;
      //   right: -100px;
      //   width: 50%;
      //   height: 50%;
      //   pointer-events: none;
      // }
    }
    .pcServices{
      display: flex;
    }
    .mbServices{
      display: none;
    }
  }
  &.isMenu{
    padding: 0px;
  }
}
@media (min-width: 768px) and (max-width: 1000px) {
  .index-dentalServices{
    padding: 150px 0 0;
    &-in{
      &-t{
        .title{
          padding-right: 20px;
          font-size: 28px;
          letter-spacing: 6px;
        }
        .context{
          flex: 1;
          margin-left: 30px;
        }
      }
      .servicesCard{
        &-in{
          &-roundBox{
            &>div{
              padding-bottom: 10%;
            }
          }
          &-name{
            font-size: 16px;
            margin-top: 10px;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .index-dentalServices{
    padding: 40px 0 62px;
    &-in{
      align-items: flex-start;
      &-t{
        flex-direction: column;
        .title{
          padding-right: 0;
          border-right: none;
          position: relative;
          padding-bottom: 20px;
          font-size: 20px;
          letter-spacing: 5px;
          &::after{
            content: '';
            position: absolute;
            bottom: 0;
            width: 40px;
            height: 3px;
            background: #089CFE;
            left: 50%;
            transform: translateX(-50%);
          }
        }
        .context{
          margin-left: 0;
          margin-top: 35px;
          padding: 0 67px;
          &-in{
            font-size: 15px;
            letter-spacing: 4.5px;
          }
        }
        &::before{
          display: none;
        }
        &::after{
          display: none;
        }
      }
      .servicesCard{
        margin: 0;
        padding: 40px;
        box-sizing: border-box;
        &>div{
          width: 100%;
          margin-bottom: 0;
        }
        &-mascot{
          display: none;
        }
        &-in{
          width: calc(50% - 20px);
          width: max-content;
          margin-right: 0;
          justify-content: space-between;
          margin-bottom: 27px;
          .router-link-active{
            .servicesCard-in-image{
              background: #fff;
              box-shadow: 0 0 64px rgba(4, 9, 21, 0.13);
            }
          }
          &-image{
            width: 130px;
            height: 130px;
            padding: 0 0 20px;
            background: #F5F4F4;
            transition: all .5s;
            border-radius: 50%;
            display: flex;
            justify-content: flex-end;
            flex-direction: column;
            align-items: center;
            img{
              max-width: 70%;
              max-height: 70%;
            }
          }
          &-name{
            margin-top: 7px;
            font-size: 12px;
            height: auto;
            line-height: 1.3;
            letter-spacing: 1px;
            &::after{
              width: 4px;
              height: 8px;
              top: 20%;
              margin-left: 5px;
            }
          }
        }
        &::after{
          display: none;
        }
      }
      .pcServices{
        display: none;
      }
      .mbServices{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 40px 45px 20px;
        box-sizing: border-box;
        position: relative;
        transition: all .3s;
        overflow: hidden;
        width: 100%;
        &-b{
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          transition: all .3s;
        }
      }
    }
    
  }
}
</style>