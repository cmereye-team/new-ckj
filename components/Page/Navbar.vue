<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
const appState = useAppState()
const navbarLists = []
let navLiBoxBool = ref(false)
const toPageTop = () =>{
  // window.scrollTo(0,0);
  let top = document.documentElement.scrollTop || document.body.scrollTop;
  // 实现滚动效果 
  const timeTop = setInterval(() => {
      document.body.scrollTop = document.documentElement.scrollTop = top -= 50;
      if (top <= 0) {
          clearInterval(timeTop);
      }
  }, 10);
}
let navFormBool = ref(false)
const handleNavFormNav = () =>{
  // navFormBool.value = true
  appState.setIsShowForm(true)
  navLiBoxBool.value = false
}
const navFormClose = () =>{
  appState.setIsShowForm(false)
}

const toContactUs = () =>{
  window.location.href = '/contactUs#contactUsFormNav'
}

let mbQDCodeBool = ref(false)

</script>

<template>
  <div class="navbar-content" :style="{'z-index': appState.isShowForm ? 100 : 50}">
    <div class="navbar-content-in" id="navPcTel">
      <div class="navbarBox">
        <div class="navbarBox-in">
          <div class="tel">6912 2011</div>
        </div>
      </div>
    </div>
    <nuxt-link class="navbar-content-in" id="navPcWhatsapp" :to="'https://api.whatsapp.com/send/?phone=85269122011'" target="_blank">
    </nuxt-link>
    <div class="navbar-content-in" id="navPcWeChat">
      <div class="navbarBox">
        <div class="navbarBox-in">
          <div class="weChat">
            <img src="https://static.cmereye.com/imgs/2023/07/f2d965855eb2a5ae.jpg" alt="二维码">
            <div>
              掃描QR Code {{'\n'}}加我為朋友！
            </div>
          </div>
        </div>
      </div>
    </div>
    <nuxt-link class="navbar-content-in" id="navPcFaceBook" to="https://www.facebook.com/ckjdental.hk/" target="_blank">
    </nuxt-link>
    <!-- <div class="navbar-content-in" id="navPcContactForm" @click="toContactUs">
    </div>
    <div class="navbar-content-in" @click="toPageTop">
      <img src="@/assets/images/navIcon_4.png" alt="" />
    </div> -->
    <div class="navbar-content-mb" v-if="false">
      <div id="navMbTel">
        <img src="@/assets/images/icon_8.png">6912 2011
      </div>
      <div>
        <div class="navBtn" @click="navLiBoxBool = !navLiBoxBool">立即預約</div>
        <div class="navLiBox" :style="{bottom: (navLiBoxBool ? '100%' : '-350%')}">
        </div>
      </div>
    </div>
    <div class="navbar-content-mb02">
      <div id="navMbWeChat" @click="mbQDCodeBool = true">WeChat</div>
      <div>
        <nuxt-link id="navMbWhatsapp" :to="'https://api.whatsapp.com/send/?phone=85269122011'" target="_blank">Whatsapp</nuxt-link>
      </div>
    </div>
    <div class="navbar-content-mb">
      <div><nuxt-link id="navMbFacebook" to="https://www.facebook.com/ckjdental.hk/" target="_blank">Facebook預約</nuxt-link></div>
      <div id="navMbContactFormBtn" @click="handleNavFormNav">填寫表格</div>
    </div>
    <div class="navbar-content-mb" v-if="false">
      <div><nuxt-link id="navMbFacebook" to="https://www.facebook.com/ckjdental.hk/" target="_blank">Facebook預約</nuxt-link></div>
      <div>填寫表格</div>
    </div>
    <div class="navForm" :style="{bottom: (appState.isShowForm ? '0' : '-150%')}">
      <ContactForm />
      <div class="navForm-icon" @click="navFormClose">
        <img src="@/assets/images/icon_7.png" alt="">
      </div>
    </div>
    <div class="navForm" :style="{bottom: (mbQDCodeBool ? '0' : '-150%')}">
      <div class="qdCode">
        <img src="https://static.cmereye.com/imgs/2023/06/c5ecb382a7e0eeb2.jpg" alt="二维码" />
      </div>
      <div class="navForm-icon" @click="mbQDCodeBool = false">
        <img src="@/assets/images/icon_7.png" alt="">
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.navbar-content {
  width: 66px;
  position: fixed;
  right: 3vw;
  top: 30vh;
  z-index: 50;
  &-in {
    width: 40px;
    height: 40px;
    margin-bottom: 80px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .3s;
    position: relative;
    .navbarBox{
      position: absolute;
      width: 0;
      overflow: hidden;
      top: 50%;
      transform: translateY(-50%);
      right: 40px;
      padding-right: 0;
      transition: all .3s;
      &-in{
        transition: all .5s;
        background: #FFf;
        opacity: 0.699999988079071;
        border: 3px dashed var(--topic-color);
        height: 100%;
        padding: 10px;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        color: var(--topic-text-color);
        .tel{
          white-space: nowrap;
          font-size: 20px;
          font-weight: 600;
        }
        .weChat{
          width: 100%;
          text-align: center;
          white-space: pre-wrap;
          img{
            width: 100%;
          }
        }
      }
    }
    img {
      width: 40px;
    }
    &:hover{
      .navbarBox{
        width: 170px;
        padding-right: 20px;
      }
    }
  }
  #navPcTel{
    background-image:url(https://static.cmereye.com/imgs/2023/07/8941baf2e6ae2c01.png);
    background-repeat: no-repeat;
    background-position: 50%;
  }
  #navPcWeChat{
    background-image:url(https://static.cmereye.com/imgs/2023/07/97e8555acb4ace6f.png);
    background-repeat: no-repeat;
    background-position: 50%;
  }
  #navPcWhatsapp{
    background-image:url(https://static.cmereye.com/imgs/2023/07/2f6d89a4cf4d1b61.png);
    background-repeat: no-repeat;
    background-position: 50%;
  }
  #navPcFaceBook{
    background-image:url(https://static.cmereye.com/imgs/2023/07/e8c4bc6bfcc61eb7.png);
    background-repeat: no-repeat;
    background-position: 50%;
  }
  #navPcContactForm{
    background-image:url(@/assets/images/navIcon_5.png);
    background-repeat: no-repeat;
    background-position: 50%;
  }
  &-mb{
    display: none;
  }
  &-mb02{
    display: none;
  }
  .navForm{
    width: 100vw;
    height: 100vh;
    position: fixed;
    bottom: -100%;
    left: 0;
    background: #fff;
    display: flex;
    justify-content: center;
    z-index: 9999;
    transition: all .5s;
    display: none;
    &-icon{
      position: absolute;
      right: 30px;
      top: 100px;
      cursor: pointer;
    }
    .qdCode{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
    }
  }
}
@media screen and (max-width: 768px) {
  .navbar-content {
    top: auto;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 124px;
    background: #FFDDDA;
    box-shadow: 0px -1.5px 0px rgba(255, 204, 199, 0.25);
    z-index: 20;
    &-in{
      position: absolute;
      right: 30px;
      top: -64px;
      width: 34px;
      height: 34px;
      background: #FFDDDA;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      img{
        width: 24px;
      }
    }
    &-in::not(:last-child){
      display: none;
    }
    &-mb{
      display: flex;
      height: 100%;
      &>div{
        height: 100%;
        line-height: 62px;
        text-align: center;
        flex: 1;
        font-weight: 400;
        font-size: 1.25rem;
        color: #FFFFFF;
        text-shadow: 0px 0px 8px rgba(255, 120, 117, 0.65);
        position: relative;
        img{
          display: inline-block;
          margin-top: -5px;
        }
        &:first-child{
          border-right: 1px solid #fff;
        }
        .navBtn{
          width: 100%;
          position: absolute;
          right: 0;
          bottom: 0;
          z-index: 90;
          background: #FFDDDA;
        }
        .navLiBox{
          width: 100%;
          height: 248px;
          line-height: 62px;
          position: absolute;
          left: 0;
          transition: all .3s;
          z-index: 19;
          &>div{
            background: #FFF1F0;
            color: #FFA09E;
            text-shadow: none;
            &:hover{
              background: #FFDDDA;
              color: #FFF1F0;
            }
            &:first-child{
              border-radius: 10px 10px 0px 0px;
              box-shadow: 0px -1.5px 0px rgba(255, 204, 199, 0.25);
            }
            &:not(:last-child){
              border-bottom: 1px solid #fff;
            }
          }
        }
      }
    }
    &-mb02{
      display: flex;
      height: 62px;
      &>div{
        height: 100%;
        line-height: 62px;
        text-align: center;
        flex: 1;
        font-weight: 400;
        font-size: 20px;
        position: relative;
        background: #FFF1F0;
        color: #FFA09E;
        img{
          display: inline-block;
          margin-top: -5px;
        }
        &:first-child{
          border-right: 1px solid #fff;
        }
      }
    }
    .navForm{
      display: flex;
    }
  }
}
</style>
