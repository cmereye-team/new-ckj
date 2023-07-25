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

// let windowWidth = ref(1920)

// onMounted(()=>{
//   getWindowWidth()
//   window.addEventListener('resize',getWindowWidth)
// })

// const getWindowWidth = () => {
//   windowWidth.value = window.innerWidth
//   // console.log(windowWidth)
// }

</script>


<template>
  <div :class="{'index-dentalServices':true,'isMenu': isMenu}">
    <StarModule />
    <div :class="['index-dentalServices-in', {'isIndexShow': !isIndexShow,'isMenu': isMenu}]">
      <!-- {{$t(servicesCardPageData.dentalServicesTitleIn)}} -->
      <div class="index-dentalServices-in-t">
        <div class="title" v-if="isIndexShow">{{$t(servicesCardPageData.title)}}</div>
        <div class="context" v-if="!isMenu">
          <div class="context-in">{{$t(servicesCardPageData.contextIn)}}</div>
        </div>
      </div>
      
      <div :class="{'servicesCard':true,'isMenu': isMenu}">
        <div>
          <div class="servicesCard-in" v-for="(item,index) in servicesCardLists.slice(0,5)" :key="index">
            <nuxt-link :to="item.link">
              <div class="servicesCard-in-image">
                <img :src="item.imgUrl" alt="">
                <div class="servicesCard-in-name">{{$t(item.name)}}</div>
              </div>
            </nuxt-link>
          </div>
        </div>
        <div>
          <div class="servicesCard-in" v-for="(item,index) in servicesCardLists.slice(5,10)" :key="index">
            <nuxt-link :to="item.link">
              <div class="servicesCard-in-image">
                <img :src="item.imgUrl" alt="">
                <div class="servicesCard-in-name">{{$t(item.name)}}</div>
              </div>
            </nuxt-link>
          </div>
        </div>
        <div>
          <div class="servicesCard-in" v-for="(item,index) in servicesCardLists.slice(10,15)" :key="index">
            <nuxt-link :to="item.link">
              <div class="servicesCard-in-image">
                <img :src="item.imgUrl" alt="">
                <div class="servicesCard-in-name">{{$t(item.name)}}</div>
              </div>
            </nuxt-link>
          </div>
          <div class="servicesCard-mascot">
            <img src="https://static.cmereye.com/imgs/2023/07/19208b63eaa5ed13.png" alt="">
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.index-dentalServices{
  padding: 189px 0 190px;
  position: relative;
  &-in{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    &-t{
      display: flex;
      align-items: center;
      .title{
        border-right: 3px solid #089CFE;
        padding-right: 55px;
        color: var(--topic-text-color);
        font-family: 'Yuanti TC';
        font-size: 31.766px;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; /* 50.826px */
        letter-spacing: 7.942px;
      }
      .context{
        margin-left: 60px;
        &-in{
          margin: 0 auto;
          width: 100%;
          max-width: 724px;
          font-family: 'Yuanti TC';
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 160%; /* 25.6px */
          letter-spacing: 4.8px;
        }
      }
    }
    
    .servicesCard{
      display: flex;
      flex-wrap: wrap;
      margin: 86px auto 0;
      width: 100%;
      max-width: 1640px;
      &>div{
        width: 100%;
        margin-bottom: 60px;
        display: flex;
        &:nth-of-type(2){
          // justify-content: flex-end;
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
        cursor: pointer;
        // width: 18%;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-sizing: border-box;
        margin-right: 73px;
        a{
          width: 100%;
          height: 100%;
        }
        &-image{
          width: 240px;
          height: 240px;
          // padding-top: 100%;
          position: relative;
          background: #F5F4F4;
          border-radius: 10px;
          transition: all .5s;
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          padding: 0 0 45px;
          img{
            // position: absolute;
            // left: 50%;
            // top: 50%;
            // transform: translate(-50%,-50%);
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
          font-family: 'Yuanti TC';
          font-size: 17px;
          font-style: normal;
          font-weight: 400;
          line-height: 160%; /* 27.2px */
          letter-spacing: 4.25px;
          margin-top: 14px;
          position: relative;
          &::after{
            content: '>';
            color: var(--topic-color);
            font-family: '黑体';
            font-size: 20px;
            position: absolute;
            font-weight: bold;
            top: 1px;
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
    }
  }
  &.isMenu{
    padding: 0px;
  }
}
@media (min-width: 768px) and (max-width: 1452px) {
  .index-dentalServices{
    padding: 150px 0 0;
    &-in{
      .servicesCard{
        &-in{
          padding: 0 3vw;
           &-image{
            img{
              max-width: 80%;
              max-height: 80%;
            }
            &-name{
              height: 60px;
              line-height: 60px;
            }
          }
        }
      }
      &.isMenu{
        width: 100%;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .index-dentalServices{
    padding: 100px 0 0;
    &-in{
      align-items: flex-start;
      &.isIndexShow{
        align-items: center;
      }
      .context{
        margin-top: 30px;
        padding: 0 30px;
        box-sizing: border-box;
        &-in{
          font-weight: 500;
          font-size: 16px;
          text-align: left;
          
        }
      }
      .servicesCard{
        padding: 0 21.5px;
        box-sizing: border-box;
        &>div{
          flex-wrap: wrap;
          &:nth-of-type(2){
            margin-left: 0;
          }
        }
        &-in{
          width: 50%;
          padding: 0 8.5px;
          &-image{
            img{
              max-width: 70%;
              max-height: 70%;
            }
          }
          &-name{
            font-size: 15px;
            height: 56px;
            line-height: 56px;
          }
        }
      }
    }
  }
}
</style>