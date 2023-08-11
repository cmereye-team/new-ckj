<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
const appState = useAppState()
const navbarLists = []
let navLiBoxBool = ref(false)
// const toPageTop = () =>{
//   // window.scrollTo(0,0);
//   let top = document.documentElement.scrollTop || document.body.scrollTop;
//   // 实现滚动效果 
//   const timeTop = setInterval(() => {
//       document.body.scrollTop = document.documentElement.scrollTop = top -= 50;
//       if (top <= 0) {
//           clearInterval(timeTop);
//       }
//   }, 10);
// }
let toTopType = ref(false)
let lineHeight = ref(0.6)
let _num = ref(1)
const toPageTop = () =>{
  toTopType.value = true
  setTimeout(()=>{
    let top = document.documentElement.scrollTop || document.body.scrollTop;
    // 实现滚动效果 
    const timeTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top -= 10;
        if(Math.floor(_num.value % 100) === 0){
          if( lineHeight.value === 0.2) lineHeight.value = 1 
          else lineHeight.value = 0.2
        }
        _num.value++ 
        if (top <= 0) {
            clearInterval(timeTop);
            toTopType.value = false
            _num.value = 1
        }
    }, 1);
  },500)
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
  <div class="navbar-content" :style="{'z-index': mbQDCodeBool || appState.isShowForm ? 100 : 50}">
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
              掃描QR Code
            </div>
            <div>加我為朋友！</div>
          </div>
        </div>
      </div>
    </div>
    <nuxt-link class="navbar-content-in" id="navPcFaceBook" to="https://www.facebook.com/ckjdental.hk/" target="_blank">
    </nuxt-link>
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
    <div class="reservation">
      <div class="reservation-in">
        <div><img src="https://static.cmereye.com/imgs/2023/07/04ad2f53c65e2fb5.png" alt=""></div>
        <div>RESERVATION</div>
        <div>馬上預約</div>
      </div>
    </div>
    <div class="navbar-content-mb">
      <nuxt-link  id="navMbTel" :to="'tel: 6912 2011'" class="mb-in mb-in-1">

      </nuxt-link>
      <nuxt-link id="navMbWhatsapp" :to="'https://api.whatsapp.com/send/?phone=85269122011'" target="_blank" class="mb-in mb-in-2">

      </nuxt-link>
      <div class="mb-in mb-in-3" @click="handleNavFormNav">
        <img src="https://static.cmereye.com/imgs/2023/07/04ad2f53c65e2fb5.png" alt="">
        <span>馬上預約</span>
      </div>
      <div id="navMbWeChat" class="mb-in mb-in-4" @click="mbQDCodeBool = true">

      </div>
      <nuxt-link id="navMbFacebook" to="https://www.facebook.com/ckjdental.hk/"  target="_blank" class="mb-in mb-in-5">

      </nuxt-link>
      <div class="toTop" @click="toPageTop">
        <div class="arrowTop" :style="{display: toTopType?'none':'block'}"></div>
        <img class="ya" :style="{top:toTopType?'20%':'40%'}" src="https://static.cmereye.com/imgs/2023/07/be9cf2097b6cd6e3.png" alt="">
        <div class="toTopline">
          <span :style="{height: toTopType?`${lineHeight * 10}px`:'0px'}"></span>
          <span :style="{height: toTopType?`${lineHeight * 20}px`:'0px'}"></span>
          <span :style="{height: toTopType?`${lineHeight * 15}px`:'0px'}"></span>
        </div>
        <img class="pageTop" src="https://static.cmereye.com/imgs/2023/07/11de1e762ca04a51.png" alt="">
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.navbar-content {
  width: 66px;
  position: fixed;
  right: 1vw;
  top: 30vh;
  z-index: 50;
  &-in {
    width: 53px;
    height: 53px;
    margin-bottom: 68px;
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
      right: 53px;
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
          white-space: nowrap;
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
    background-image:url(https://static.cmereye.com/imgs/2023/08/a12a05f34f9836a9.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  #navPcWhatsapp{
    background-image:url(https://static.cmereye.com/imgs/2023/08/681705edb00b5eea.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  #navPcWeChat{
    background-image:url(https://static.cmereye.com/imgs/2023/08/42b6c4d6cdccf636.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  #navPcFaceBook{
    background-image:url(https://static.cmereye.com/imgs/2023/08/2f0b156710fd6a99.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  #navPcContactForm{
    background-image:url(@/assets/images/navIcon_5.png);
    background-repeat: no-repeat;
    background-position: 50%;
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
  .reservation{
    position: absolute;
    bottom: -100px;
    right: -1vw;
    width: 141px;
    height: 121.733px;
    transition: all .3s;
    border-radius: 5.088px 0 0 5.088px;
    background: #FFF;
    box-shadow: 2.035137891769409px 2.035137891769409px 25.43922233581543px 0px rgba(0, 0, 0, 0.10);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 23px;
    &-in{
      height: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      &>div{
        &:nth-of-type(1){
          margin-bottom: 10px;
        }
        &:nth-of-type(2){
          color: var(--topic-color);
          text-align: center;
          font-size: 12px;
          font-style: normal;
          font-weight: 600;
          line-height: 160%; /* 43.273px */
          letter-spacing: 2.844px;
        }
        &:nth-of-type(3){
          color: var(--topic-text-color);
          text-align: center;
          font-size: 15.51px;
          font-style: normal;
          font-weight: 600;
          line-height: 160%; /* 43.273px */
          letter-spacing: 3.878px;
        }
      }
    }
    &:hover{
      width: 160px;
    }
  }
  &-mb{
    display: none;
  }
}
@media screen and (max-width: 768px) {
  .navbar-content {
  
    &-in{
     display: none;
    }
    &-in::not(:last-child){
      display: none;
    }
    .navForm{
      display: flex;
    }
    .reservation{
      display: none;
    }
    &-mb{
      display: block;
      width: 100%;
      height: 60px;
      background: #FFF;
      box-shadow: 0px 4px 19px 0px rgba(0, 0, 0, 0.25);
      position: fixed;
      bottom: 0;
      left: 0;
      display: flex;
      justify-content: center;
      padding: 0 10px;
      .mb-in{
        flex: 1;
        height: 100%;
        &-1{
          background: url(https://static.cmereye.com/imgs/2023/07/ac801f63f6e35840.png) no-repeat;
          background-position: center center;
          animation: fromRight 1s none;
        }
        &-2{
          background: url(https://static.cmereye.com/imgs/2023/07/c631714e6eab7b74.png) no-repeat;
          background-position: center center;
          animation: fromRight 1s none;
        }
        &-3{
          width: 103px;
          height: 103px;
          min-width: 103px;
          max-width: 103px;
          background: #fff;
          box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.25);
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          margin: -30px 10px -10px;
          animation: mbIn3Anim 1s 1s none;
          opacity: 0;
          animation-fill-mode: forwards;
          img{
            width: 28px;
            margin-bottom: 5px;
          }
          span{
            color: var(--topic-text-color);
            text-align: center;
            font-size: 12.376px;
            font-style: normal;
            font-weight: 600;
            line-height: 1.6; /* 34.53px */
            letter-spacing: 3.094px;
          }
        }
        &-4{
          background: url(https://static.cmereye.com/imgs/2023/07/d1ec7e5ab5a240b6.png) no-repeat;
          background-position: center center;
          animation: fromLeft 1s none;
        }
        &-5{
          background: url(https://static.cmereye.com/imgs/2023/07/d067e48cd2a6f7a4.png) no-repeat;
          background-position: center center;
          animation: fromLeft 1s none;
        }
      }
      .toTop{
        position: absolute;
        right: 11px;
        bottom: 74px;
        width: 64px;
        height: 64px;
        cursor: pointer;
        filter: drop-shadow(0 0 4px #fff);
        .arrowTop{
          position: absolute;
          left: 50%;
          top: 18px;
          width: 6px;
          height: 6px;
          border: 1px solid var(--topic-color);
          border-right: none;
          border-bottom: none;
          transform: translateX(-50%) rotate(45deg);
          transform-origin: center center;
          transition: all .7s;
          // background: url(https://static.cmereye.com/imgs/2023/08/4749f8811345d2a6.png);
          // background-size: 100% 100%;
        }
        .ya{
          width: 20px;
          position: absolute;
          top: 30%;
          left: 50%;
          transform: translateX(-50%);
          transition: all .7s;
        }
        .toTopline{
          position: absolute;
          top: 60%;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          justify-content: space-between;
          width: 10px;
          span{
            width: 2px;
            height: 0;
            background: var(--topic-color);
            transition: all .7s;
            display: block;
            border-radius: 1px;
          }
        }
        .pageTop{
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          animation: toTopRoto 10s linear infinite;
        }
      }
    }
  }
}
@keyframes mbIn3Anim {
  0%{
    opacity: 0;
    transform: translateY(100%) scale(1);
  }
  30%{
    transform: translateY(-30px) scale(1.3);
    opacity: 1;
  }
  60%{
    transform: translateY(0px) scale(1);
    opacity: 1;
  }
  80%{
    transform: translateY(-5px) scale(1.07);
    opacity: 1;
  }
  100%{
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
@keyframes fromRight {
  from{
    opacity: 0;
    transform: translateX(20px);
  }
  to{
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes fromLeft {
  from{
    opacity: 0;
    transform: translateX(-20px);
  }
  to{
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes toTopRoto {
  0%{
    transform: rotate(0);
  }
  100%{
    transform: rotate(360deg);
  }
}
</style>
