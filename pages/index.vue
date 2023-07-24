 <script lang="ts" setup>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useAppState } from '~/stores/appState'
import doctorLists_cs from '~/assets/js/doctor'
import { Autoplay,EffectFade,Navigation } from 'swiper';
const appState = useAppState()
const { t } = useLang()
useHead({
  title: "牙科齒科服務 | 口腔專科醫院",
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: '愛康健提供基本牙科、美容牙科及高階牙科服務，從一般口腔檢查、洗牙、補牙，剝智慧牙、植牙、箍牙、牙齒美白、全口修復及各種牙科治療等，專注你的口腔健康。',
    },
    {
      hid: 'Keywords',
      name: 'Keywords',
      content: '愛康健 深圳愛康健 深圳專業牙科中心 愛康健醫院 愛康健口腔醫院 深圳愛康健口腔醫院愛康健 CKJ愛康健齒科集團 愛康健齒科集團 深圳口腔專科醫院 深圳牙科醫院牙科服務內地牙科 深圳口腔專科 基本牙科 美容牙科 高階牙科',
    },
  ],
})

// const caseSharingLists = [
//   {
//     name: 'pages.index.caseSharing.caseSharingLists.caseSharing_1.name',
//     skill: 'pages.index.caseSharing.caseSharingLists.caseSharing_1.skill',
//     text: 'pages.index.caseSharing.caseSharingLists.caseSharing_1.text',
//     context: 'pages.index.caseSharing.caseSharingLists.caseSharing_1.context',
//     imgUrl: 'https://static.cmereye.com/imgs/2023/06/72a1864e2021e804.jpg'
//   },
//   {
//     name: 'pages.index.caseSharing.caseSharingLists.caseSharing_2.name',
//     skill: 'pages.index.caseSharing.caseSharingLists.caseSharing_2.skill',
//     text: 'pages.index.caseSharing.caseSharingLists.caseSharing_2.text',
//     context: 'pages.index.caseSharing.caseSharingLists.caseSharing_2.context',
//     imgUrl: 'https://static.cmereye.com/imgs/2023/06/f1fab4a43cdea943.jpg'
//   },
// ]

const caseSharingLists = [
  {
    name: '陳先生',
    type: '上班族',
    skill: '根管治療(杜牙根)療程',
    text: '蛀咗牙自己都唔知，直到有一日真係牙痛先怕！原本以為要剝牙，後來牙醫建議杜牙根，成個治療過程都好快，最緊要可以保留到原來嘅牙齒！',
    context: '安心、舒服、無痛',
    imgUrl: 'https://static.cmereye.com/imgs/2023/07/30534190eb9ca32f.jpg'
  },
  {
    name: '陳先生',
    type: '上班族',
    skill: '根管治療(杜牙根)療程',
    text: '蛀咗牙自己都唔知，直到有一日真係牙痛先怕！原本以為要剝牙，後來牙醫建議杜牙根，成個治療過程都好快，最緊要可以保留到原來嘅牙齒！',
    context: '安心、舒服、無痛',
    imgUrl: 'https://static.cmereye.com/imgs/2023/07/30534190eb9ca32f.jpg'
  },
  {
    name: '陳先生',
    type: '上班族',
    skill: '根管治療(杜牙根)療程',
    text: '蛀咗牙自己都唔知，直到有一日真係牙痛先怕！原本以為要剝牙，後來牙醫建議杜牙根，成個治療過程都好快，最緊要可以保留到原來嘅牙齒！',
    context: '安心、舒服、無痛',
    imgUrl: 'https://static.cmereye.com/imgs/2023/07/30534190eb9ca32f.jpg'
  },
  {
    name: '陳先生',
    type: '上班族',
    skill: '根管治療(杜牙根)療程',
    text: '蛀咗牙自己都唔知，直到有一日真係牙痛先怕！原本以為要剝牙，後來牙醫建議杜牙根，成個治療過程都好快，最緊要可以保留到原來嘅牙齒！',
    context: '安心、舒服、無痛',
    imgUrl: 'https://static.cmereye.com/imgs/2023/07/30534190eb9ca32f.jpg'
  },
  {
    name: '陳先生',
    type: '上班族',
    skill: '根管治療(杜牙根)療程',
    text: '蛀咗牙自己都唔知，直到有一日真係牙痛先怕！原本以為要剝牙，後來牙醫建議杜牙根，成個治療過程都好快，最緊要可以保留到原來嘅牙齒！',
    context: '安心、舒服、無痛',
    imgUrl: 'https://static.cmereye.com/imgs/2023/07/30534190eb9ca32f.jpg'
  },
  {
    name: '陳先生',
    type: '上班族',
    skill: '根管治療(杜牙根)療程',
    text: '蛀咗牙自己都唔知，直到有一日真係牙痛先怕！原本以為要剝牙，後來牙醫建議杜牙根，成個治療過程都好快，最緊要可以保留到原來嘅牙齒！',
    context: '安心、舒服、無痛',
    imgUrl: 'https://static.cmereye.com/imgs/2023/07/30534190eb9ca32f.jpg'
  },
]

const caseSharingTopData = {
  type: 'pages.index.caseSharing.caseSharingTopData.type',
  name: 'pages.index.caseSharing.caseSharingTopData.name',
  skill: 'pages.index.caseSharing.caseSharingTopData.skill',
  process: 'pages.index.caseSharing.caseSharingTopData.process',
  text: 'pages.index.caseSharing.caseSharingTopData.text',
  imgUrl: 'https://static.cmereye.com/imgs/2023/06/b6685121c74c93e0.png'
}

onMounted(() => {
});

//医生模块轮播图事件
let doctorTeamCurrent = ref(1)
// const onSlideDoctorTeamSwiperChange = (swiper:any) => {
//   doctorTeamCurrent.value = swiper.realIndex + 1
// }

let areaTabCurNum = computed(()=>{
  return appState.areaTabCurNum
})

let doctorTeamSwiperRef = {
  slideTo: (a,b)=>{},
  slideToLoop: (a)=>{},
  autoplay: {
    start: () =>{}
  }
}
const setDoctorTeamSwiperRef = (swiper:any) => {
  doctorTeamSwiperRef = swiper;
}


let doctorTeamSwiperRef44 = {
  slideTo: (a,b)=>{},
  slideToLoop: (a)=>{},
  autoplay: {
    start: () =>{}
  }
}
const setDoctorTeamSwiperRef44 = (swiper:any) =>{
  doctorTeamSwiperRef44 = swiper
}

watch(
  areaTabCurNum, (newValue, oldValue) => {
    doctorTeamSwiperRef.slideTo(0, 0);
    doctorTeamSwiperRef.autoplay.start()
    if(newValue === 0){
      doctorTeamSwiperRef44.slideTo(0, 44);
      doctorTeamSwiperRef44.autoplay.start()
    }
  },
  {
    deep: true,
  }
);

const bannerLists = [
  {
    title: '歐美種植牙 即減￥2000元/顆',
    imgUrl: 'https://static.cmereye.com/imgs/2023/07/d627f37ff1b2a3a2.jpg',
    mbUrl: 'https://static.cmereye.com/imgs/2023/06/0507b7e68c818758.jpg',
    link: '/dental-service/implant'
  },
  {
    title: '隱形牙箍  即減￥5000元',
    imgUrl: 'https://static.cmereye.com/imgs/2023/07/820313020a5249c7.jpg',
    mbUrl: 'https://static.cmereye.com/imgs/2023/06/e682138cf0372fea.jpg',
    link: '/dental-service/invisalign'
  },
  {
    title: '金屬矯正牙箍 即減￥2000元',
    imgUrl: 'https://static.cmereye.com/imgs/2023/07/d627f37ff1b2a3a2.jpg',
    mbUrl: 'https://static.cmereye.com/imgs/2023/06/7f53da7aac0a0ac6.jpg',
    link: '/dental-service/orthodontics'
  }
]

let bannerCurrent = ref(1)

//走马灯事件
const onSlideChange = (swiper:any) => {
  bannerCurrent.value = swiper.realIndex + 1
}
const handleBannerMascot = (_idx:number) =>{
  bannerCurrent.value = _idx
  bannerSwiperRef.slideToLoop(_idx - 1)
}
let bannerSwiperRef ={
  slideToLoop: (a)=>{}
}
const setBannerSwiperRef = (swiper:any) => {
  
  bannerSwiperRef = swiper;
}

let swiperRef ={
  slidePrev: ()=>{},
  slideNext: ()=>{}
}
const setSwiperRef = (swiper:any) => {
  swiperRef = swiper;
};
const handleProcessBtn = (_type: string) => {
  swiperRef[_type]();
}


</script>

<template>
  <div>
  <!-- <div class="bigPageCon"> -->
    <PageHeader /> 
    <div class="indexPage">
      <div class="index-banner">
        <div class="index-banner-t">
          <swiper
            class="bannerSwiper"
            :loop="true"
            :modules="[Autoplay,EffectFade]"
            :effect="'fade'"
            :autoplay="{
              delay: 2500,
            }"
            @swiper="setBannerSwiperRef"
            @slideChange="onSlideChange"
          >
            <swiper-slide class="bannerSwiper-slide" v-for="(bannerItem,bannerIndex) in bannerLists" :key="bannerIndex">
              <div class="bannerSwiper-in" >
                <!-- <nuxt-link :to="bannerItem.link"> -->
                  <img class="bannerSwiper-in-image bigPageCon" :src="bannerItem.imgUrl" :alt="bannerItem.title" :title="bannerItem.title" />
                <!-- </nuxt-link> -->
                <div class="bannerSwiper-in-bg" :style="{'background-image': `url(${bannerItem.imgUrl})`}"></div>
              </div>
            </swiper-slide>
          </Swiper>
        </div>
        <div class="index-banner-b">
          <div :class="{'cur': bannerCurrent===1}" @click="handleBannerMascot(1)">
            <img v-show="bannerCurrent===1" src="https://static.cmereye.com/imgs/2023/07/f0cf6f4a2ed12566.png" alt="">
          </div>
          <div :class="{'cur': bannerCurrent===2}" @click="handleBannerMascot(2)">
            <img v-show="bannerCurrent===2" src="https://static.cmereye.com/imgs/2023/07/bddd5d9b334f8f0a.png" alt="">
          </div>
          <div :class="{'cur': bannerCurrent===3}" @click="handleBannerMascot(3)">
            <img v-show="bannerCurrent===3" src="https://static.cmereye.com/imgs/2023/07/f0cf6f4a2ed12566.png" alt="">
          </div>
        </div>
      </div>
      <!-- <div>
        <li v-for="post of posts" :key="post.slug">
          <NuxtLink :to="post.slug">{{ post.title }}</NuxtLink>
        </li>
      </div> -->
      <!-- 最新消息 -->
      <LatestNews />
      <!-- 品牌理念 -->
      <brandConcept />
      <!-- 牙科服務 -->
      <!-- 全科牙科,種植牙科,矯齒牙科,美容牙科,兒童牙科 -->
      <serviceCard :isIndexShow="true" />
      <!-- 關於我們 -->
      <AboutUs />
      <!-- 醫生團隊 -->
      <div class="index-doctorTeam">
        <div class="index-doctorTeam-t pageCon">
          <div class="title">醫生團隊</div>
          <div class="area">
            <AreaTab />
          </div>
        </div>
        <div class="index-doctorTeam-c">
          <div class="c-in" v-if="doctorLists_cs[appState.areaTabCurNum].length > 10">
            <div class="c-in-22">
              <Swiper
                class="doctorTeamSwiperBox"
                :modules="[Autoplay]"
                :autoplay="{
                  disableOnInteraction: true,
                  stopOnLastSlide: true,
                  delay: 0
                }"
                :speed="3000"
                :slidesPerView="8.5"
                @swiper="setDoctorTeamSwiperRef"
              >
                <SwiperSlide v-for="(doctorItem,doctorIndex) in doctorLists_cs[appState.areaTabCurNum].slice(0,22)" :key="doctorIndex" >
                  <div class="doctorTeamPage">
                    <nuxt-link :to="`/medical-team?did=${doctorItem.id}`">
                      <img :src="doctorItem.mbImg || ''" alt="">
                    </nuxt-link>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div class="c-in-44" v-if="doctorLists_cs[appState.areaTabCurNum].length > 22">
              <Swiper
                class="doctorTeamSwiperBox"
                :modules="[Autoplay]"
                :initialSlide="43"
                :autoplay="{
                  disableOnInteraction: true,
                  reverseDirection: true,
                  stopOnLastSlide: true,
                  delay: 0
                }"
                :speed="3000"
                :slidesPerView="8.5"
                @swiper="setDoctorTeamSwiperRef44"
              >
                <SwiperSlide v-for="(doctorItem,doctorIndex) in doctorLists_cs[appState.areaTabCurNum].slice(22,44)" :key="doctorIndex" >
                  <div class="doctorTeamPage">
                    <nuxt-link :to="`/medical-team?did=${doctorItem.id}`">
                      <img :src="doctorItem.mbImg || ''" alt="">
                    </nuxt-link>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div class="c-in" v-else>
            <div class="c-in-16">
              <div v-for="(doctorItem,doctorIndex) in doctorLists_cs[appState.areaTabCurNum]" :key="doctorIndex">
                <div class="doctorTeamPage">
                  <nuxt-link :to="`/medical-team?did=${doctorItem.id}`">
                    <img :src="doctorItem.mbImg || ''" alt="">
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 個案分享 -->
      <RippleLine :type="'5'" :isBottom="true" />
      <div class="index-caseSharing">
        <div class="index-caseSharing-title">
          <div class="title">{{$t('pages.index.caseSharing.title')}}</div>
        </div>
        <div class="index-caseSharing-in">
          <div>
            <div class="name">朱咪咪 Mimi</div>
            <div class="skill">種植牙齒療程</div>
            <div class="wujiao">
              <div v-for="icon in 5" :key="icon" >
                <img src="https://static.cmereye.com/imgs/2023/07/303f6a1ba3ba2321.png" alt="">
              </div>
            </div>
            <div class="text">咁多年來我只會揀愛康健，原因是他們專業細心！而家植牙嘅技術真係非常之好，簡直同真牙一樣擁有正常嘅咀嚼能力，真係食乜都得啊！</div>
          </div>
          <div>
            <img class="userImage" src="https://static.cmereye.com/imgs/2023/07/51186aabaa797595.jpg" alt="">
            <div class="ya">
              <div>星級{{'\n'}}客戶</div>
            </div>
          </div>
        </div>
        <div class="index-caseSharing-swiper">
          <swiper
            class="caseSharingSwiper"
            :loop="true"
            :slidesPerView="3"
            @swiper="setSwiperRef"
          >
            <swiper-slide v-for="(caseItem,caseIndex) in caseSharingLists" :key="caseIndex">
              <div class="centerBox">
                <div class="caseSharingSwiper-in">
                  <div class="context">安心、舒服、無痛</div>
                  <div class="userImage"><img :src="caseItem.imgUrl" alt=""></div>
                  <div class="name">{{caseItem.name}}<span>{{caseItem.type}}</span></div>
                  <div class="skill">{{caseItem.skill}}</div>
                  <div class="wujiao">
                    <div v-for="icon in 5" :key="icon" >
                      <img src="https://static.cmereye.com/imgs/2023/07/303f6a1ba3ba2321.png" alt="">
                    </div>
                  </div>
                  <div class="text">{{caseItem.text}}</div>
                </div>
              </div>
            </swiper-slide>
          </Swiper>
          <div class="swiper-next" @click="handleProcessBtn('slidePrev')">{{'<'}}</div>
          <div class="swiper-prev" @click="handleProcessBtn('slideNext')">{{'>'}}</div>
        </div>
        <img class="bgIcon bgIcon_1" src="https://static.cmereye.com/imgs/2023/07/db112a8f7e94d783.png" alt="">
        <img class="bgIcon bgIcon_2" src="https://static.cmereye.com/imgs/2023/07/4755f119a5fecfd5.png" alt="">
        <img class="bgIcon bgIcon_3" src="https://static.cmereye.com/imgs/2023/07/8fe74d7997ee58b5.png" alt="">
        <img class="bgIcon bgIcon_4" src="https://static.cmereye.com/imgs/2023/07/85f08b84d0d26e06.png" alt="">
        <img class="bgIcon bgIcon_5" src="https://static.cmereye.com/imgs/2023/07/55693cf22c9a5e8e.png" alt="">
      </div>
      <RippleLine :type="'4'" />
      <!-- 聯絡我們 -->
      <ContactUs />
    </div>
    <PageFooter />
    <PageNavbar />
  </div>
</template>

<style lang="scss" scoped>
svg:hover path{
  cursor: pointer;
  fill:rgba(255, 120, 117, 0.65)
}
.indexPage {
  width: 100%;
  background: #fff;
  padding-bottom: 190px;
}
.index-banner{
  // background: #f2f2f2;
  height: auto;
  margin-top: -30px;
  position: relative;
  z-index: 1;
  .index-banner-t{
    width: 100%;
    // min-height: 1000px;
    max-height: 1000px;
    overflow: hidden;
  }
  .index-banner-b{
    height: 200px;
    margin-top: -85px;
    display: flex;
    justify-content: center;
    &>div{
      width: 149px;
      height: 100%;
      position: relative;
      cursor: pointer;
      &:not(:last-child){
        margin-right: 20px;
      }
      img{
        position: relative;
        z-index: 3;
      }
      &::after{
        content: '';
        width: 79px;
        height: 38px;
        border-radius: 50%;
        background: #DCF3FF;
        position: absolute;
        bottom: 0;
        z-index: 1;
        left: 50%;
        transform: translateX(-50%);
      }
      &.cur{
        &::after{
          background: #089CFE;
        }
      }
    }
  }
  .bannerSwiper{
    width: 100%;
    &-in{
      width: 100%;
      position: relative;
      img{
        position: relative;
        z-index: 2;
      }
      &-bg{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        filter: blur(30px);
      }
    }
  }
}
//醫生團隊
.index-doctorTeam{
  padding: 140px 0 100px;
  background: #FF6096;
  margin: -50px 0 -10px;
  :deep(.doctorTeamSwiperBox .swiper-wrapper) {
    transition-timing-function: linear;
  }
  &-t{
    display: flex;
    position: relative;
    .title{
      text-align: center;
      color: #FFF;
      font-family: 'Yuanti TC';
      font-size: 31.766px;
      font-style: normal;
      font-weight: 400;
      line-height: 160%; /* 50.826px */
      letter-spacing: 7.942px;
      margin: 0 auto;
      padding-bottom: 20px;
      &::after{
        content: '';
        background: #fff;
        height: 5px;
        width: 40px;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 3px;
      }
    }
    .area{
      position: absolute;
      right: 0;
      bottom: 10px;
    }
  }
  &-c{
    margin-top: 85px;
    // box-shadow: 2px 0px 8px rgba(255, 163, 158, 0.25);
    .doctorTeamPage{
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      // padding: 10px;
      border-radius: 50%;
      border: 2px solid #089CFE;
      background: #fff;
      overflow: hidden;
      margin: 15px;
    }
    .c-in{
      width: 100%;
      &-44{
        margin-top: 60px;
      }
      &-16{
        width: 100%;
        max-width: 1500px;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        &>div{
          width: calc(20% - 12px);
          margin-bottom: 25px;
          &:nth-of-type(5){
            margin-right: 60px;
          }
          &:nth-of-type(6){
            margin-left: 60px;
          }
          &:nth-of-type(n+6){
            margin-bottom: 0px;
          }
          .doctorTeamPage{
            margin: 15px 30px;
          }
        }
      }
    }
  }
  &-b{
    padding-top: 60px;
    display: flex;
    justify-content: center;
  }
}
//個案分享
.index-caseSharing{
  padding-top: 137px;
  padding-bottom: 176px;
  margin: -20px 0;
  position: relative;
  &-title{
    display: flex;
    justify-content: center;
    .title{
      color: var(--topic-text-color);
      font-family: 'Yuanti TC';
      font-size: 31.766px;
      font-style: normal;
      font-weight: 400;
      line-height: 160%; /* 50.826px */
      letter-spacing: 7.942px;
      position: relative;
      padding-bottom: 20px;
      &::after{
        content: '';
        background: var(--topic-color);
        height: 5px;
        width: 40px;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 3px;
      }
    }
  }
  &-in{
    width: 100%;
    max-width: 1500px;
    margin: 130px auto 0;
    display: flex;
    align-items: center;
    justify-content: center;
    &>div{
      .name{
        color: #6B6B6B;
        font-family: 'Yuanti TC';
        font-size: 60.157px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; /* 96.252px */
        letter-spacing: 15.039px;
        white-space: nowrap;
      }
      .skill{
        color: var(--topic-text-color);
        font-family: 'Yuanti TC';
        font-size: 34.864px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; /* 55.782px */
        letter-spacing: 8.716px;
      }
      .wujiao{
        margin-top: 10px;
        display: flex;
        &>div{
          padding: 0 10px;
        }
      }
      .text{
        width: 100%;
        max-width: 440px;
        padding: 20px 47px;
        border-radius: 20px;
        border: 3px solid var(--topic-color);
        box-sizing: border-box;
        margin-top: 27px;
        color: #FC1682;
        text-align: justify;
        font-family: 'Yuanti TC';
        font-size: 19.755px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; /* 31.608px */
        letter-spacing: 4.939px;
        position: relative;
        &::after{
          content: '';
          position: absolute;
          right: -17px;
          width: 30px;
          height: 30px;
          border: 3px solid var(--topic-color);
          top: 50%;
          transform: translateY(-50%) rotate(45deg);
          border-left: transparent;
          border-bottom: transparent;
          background: #fff;
        }
      }
      .userImage{ 
        width: 100%;
        max-width: 530px;
      }
      .ya{
        width: 140px;
        height: 160px;
        position: absolute;
        bottom: -20px;
        right: -30px;
        background: url(https://static.cmereye.com/imgs/2023/07/3b49416894156c3e.png);
        background-size: 100% 100%;
        color: #FFF;
        font-family: 'Yuanti TC';
        font-size: 35.368px;
        font-style: normal;
        font-weight: 400;
        line-height: 115%; /* 40.673px */
        letter-spacing: 5.305px;
        white-space: pre-wrap;
        display: flex;
        justify-content: center;
        // align-items: center;
        padding-top: 30px;
      }
      &:last-child{
        margin-left: 42px;
        position: relative;
        
      }
    }
  }
  &-swiper{
    width: 100%;
    max-width: 1500px;
    margin: 100px auto 0;
    position: relative;
    :deep(.swiper-button-next){
      width: 20px;
      height: 40px;
      color: var(--topic-color);
    }
    :deep(.swiper-button-prev){
       width: 20px;
      height: 40px;
      color: var(--topic-color);
    }
    .swiper-next,.swiper-prev{
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      font-family: '黑体';
      color: var(--topic-color);
      font-size: 65px;
      cursor: pointer;
      font-weight: bold;
    }
    .swiper-prev{
      left: auto;
      right: 0;
    }
    .caseSharingSwiper{
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      // padding: 0 100px;
      .centerBox{
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      &-in{
        padding: 0 30px;
        .context{
          padding: 13px 27px;
          border-radius: 20px;
          border: 3px solid var(--topic-color);
          box-sizing: border-box;
          margin-left: 52px;
          color: var(--topic-color);
          font-family: 'Yuanti TC';
          font-size: 21.964px;
          font-style: normal;
          font-weight: 400;
          line-height: 160%; /* 35.143px */
          letter-spacing: 5.491px;
          position: relative;
          z-index: 2;
          background: #fff;
          &::after{
            content: '';
            position: absolute;
            bottom: -14px;
            width: 24px;
            height: 24px;
            border: 3px solid var(--topic-color);
            left: 70px;
            transform: rotate(135deg);
            border-left: transparent;
            border-bottom: transparent;
            background: #fff;
          }
        }
        .name{
          color: var(--topic-text-color);
          font-family: 'Yuanti TC';
          font-size: 25.666px;
          font-style: normal;
          font-weight: 400;
          line-height: 160%; /* 96.252px */
          letter-spacing: 6.417px;
          white-space: nowrap;
          margin-top: 20px;
          span{
            font-size: 19.203px;
            letter-spacing: 4.801px;
          }
        }
        .skill{
          color: var(--topic-text-color);
          font-family: 'Yuanti TC';
          font-size: 15px;
          font-style: normal;
          font-weight: 400;
          line-height: 160%; /* 24px */
          letter-spacing: 3.75px;
        }
        .wujiao{
          margin-top: 10px;
          display: flex;
          &>div{
            padding: 0 5px;
            width: 40px;
            img{
              width: 100%;
            }
          }
        }
        .text{
          width: 100%;
          max-width: 360px;
          padding: 45px 35px;
          border-radius: 20px;
          border: 3px solid var(--topic-color);
          box-sizing: border-box;
          margin-top: 27px;
          color: #FC1682;
          text-align: justify;
          font-family: 'Yuanti TC';
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 160%; /* 31.608px */
          letter-spacing: 4px;
          position: relative;
          &::after{
            content: '';
            position: absolute;
            top: -17px;
            width: 30px;
            height: 30px;
            border: 3px solid var(--topic-color);
            left: 50%;
            transform: translateX(-50%) rotate(-45deg);
            border-left: transparent;
            border-bottom: transparent;
            background: #fff;
          }
        }
        .userImage{ 
          width: 100%;
          max-width: 259px;
          margin-top: -10px;
          position: relative;
          z-index: 1;
        }
        .ya{
          width: 140px;
          height: 160px;
          position: absolute;
          bottom: -20px;
          right: -30px;
          background: url(https://static.cmereye.com/imgs/2023/07/3b49416894156c3e.png);
          background-size: 100% 100%;
          color: #FFF;
          font-family: 'Yuanti TC';
          font-size: 35.368px;
          font-style: normal;
          font-weight: 400;
          line-height: 115%; /* 40.673px */
          letter-spacing: 5.305px;
          white-space: pre-wrap;
          display: flex;
          justify-content: center;
          padding-top: 30px;
        }
      }
    }
  }
  .bgIcon{
    position: absolute;
    &.bgIcon_1{
      right: 0;
      bottom: 370px;
    }
    &.bgIcon_2{
      right: 0;
      top: 0;
      z-index: 1;
    }
    &.bgIcon_3{
      right: 0;
      top: 0;
      z-index: 2;
    }
    &.bgIcon_4{
      left: 0;
      bottom: 0;
      z-index: 2;
    }
    &.bgIcon_5{
      left: 0;
      bottom: 0;
      z-index: 1;
    }
  }
}

@media (min-width: 768px) and (max-width: 1452px) {
}

@media screen and (max-width: 768px) {
  .indexPage {
    width: 100%;
    background: #fff;
    padding: 0 0 90px;
  }
  //醫生團隊
  .index-doctorTeam{
    margin: 90px 0;
    &-t{
      flex-direction: column;
      align-items: flex-start;
      box-sizing: border-box;
    }
    &-c{
      margin-top: 20px;
      .doctorTeamPage{
        .doctorItem{
          // width: 33.33%;
          min-width: 33.33%;
          max-width: 33.34%;
        }
      }
    }
  }
  //個案分享
  .index-caseSharing{
    padding: 0;
    background:none;
    &-in{
      margin: 35px auto 0;
      .in-cen{
        margin-top: 34px;
        flex-direction: column;
        &-box{
          width: 100%;
        }
      }
      .in-bottom{
        width: 100%;
        background: linear-gradient(0deg, rgba(255, 241, 240, 0.7) 41.54%, rgba(255, 241, 240, 0) 137.31%);
        padding: 20px 0;
        margin-top: 0;
        span{
          width: 137px;
          height: 40px;
          font-weight: 500;
          font-size: 1rem;
          background: #FFFFFF;
          line-height: 40px;
          padding: 0;
          box-shadow: 1px 1px 4px rgba(255, 163, 158, 0.45);
          color: #666666;
          transition: all .3s;
          &:hover{
            background: #FFDDDA;
            color: #FFFFFF;
            text-shadow: 0px 0px 8px rgba(255, 120, 117, 0.65);
          }
        }
      }
    }
  }
}
</style>
