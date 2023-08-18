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
    imgUrl: 'https://static.cmereye.com/imgs/2023/07/6ab95a25307312f7.jpg'
  },
  {
    name: 'Jenny',
    type: '大學生',
    skill: '矯齒(箍牙)療程',
    text: '從前唔整齊嘅牙齒令到我冇自信，經過兩年既箍牙歷程，真係令成個面容改變咗好多！最重要係牙醫手勢非常專業，價錢亦都好合理！',
    context: '唔再怕同人合照喇!',
    imgUrl: 'https://static.cmereye.com/imgs/2023/07/63c72a9ef3f3b012.jpg'
  },
  {
    name: '黃太太',
    type: '家庭主婦',
    skill: '局部牙托療程',
    text: '年紀大脫落咗幾隻牙齒，食野既時候好唔方便。朋友介紹嚟咗愛康健做局部牙托，調整咗整個牙齒咬合！同埋佢哋對老人家好有耐心，而家定期都會返去檢查清潔排靚牙！',
    context: '食野依家都唔洗就住啦！',
    imgUrl: 'https://static.cmereye.com/imgs/2023/07/fe9b36a7c8630009.jpg'
  },
  {
    name: '鄧小朋友',
    type: '7歲小學生',
    skill: '乳齒補牙療程',
    text: '記得有次突然間牙痛，媽咪好快帶咗我去睇牙醫。醫生同護士姐姐幫我醫好咗牙痛，同埋話加咗保護層係我牙齒度！仲教我點樣刷牙可以再保護好啲牙齒添。',
    context: '多謝醫生姑娘醫好咗我牙痛！',
    imgUrl: 'https://static.cmereye.com/imgs/2023/07/c2f121d9716db4e0.jpg'
  },
  {
    name: 'Jessica',
    type: '網絡紅人',
    skill: '瓷牙貼面療程',
    text: '因為平時工作成日要影相出鏡同埋直播，一直都好想擁有好似明星般既笑容。最後揀愛康健做牙貼面，療程後仲會貼心跟進，非常專業同窩心，親民價格！信心推薦！',
    context: '依家我都擁有明星白 一樣既牙齒！',
    imgUrl: 'https://static.cmereye.com/imgs/2023/07/c42e077fb429391e.jpg'
  },
  {
    name: 'Zed',
    type: '金融從業員',
    skill: '藍光美白療程',
    text: '由同事介紹下嚟咗愛康健做藍光美白牙齒，醫生專業價錢親民，最緊要唔會Hard sell。而家上深圳都會去順便做埋轉美白。',
    context: '美白效果好，價錢親民！',
    imgUrl: 'https://static.cmereye.com/imgs/2023/07/a97eada0eb747a44.jpg'
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


//医生模块轮播图事件
let doctorTeamCurrent = ref(1)

// let _areaTabAct = computed(()=>{
//   return appState.areaTabAct
// })

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

// watch(
//   appState, (newValue, oldValue) => {
//     if(newValue.areaTabAct !== oldValue.areaTabAct){
//       doctorTeamSwiperRef.slideTo(0, 0);
//       doctorTeamSwiperRef.autoplay.start()
//       if(newValue.areaTabAct === 0){
//         doctorTeamSwiperRef44.slideTo(0, 44);
//         doctorTeamSwiperRef44.autoplay.start()
//       }
//     }
//   },
//   {
//     deep: true,
//   }
// );

const bannerLists = [
  {
    title: '歐美種植牙 即減￥2000元/顆',
    imgUrl: 'https://static.cmereye.com/imgs/2023/07/f0b9f3bfc80d96b1.jpg',
    mbUrl: 'https://static.cmereye.com/imgs/2023/07/d514b0c5fd264b2e.jpg',
    link: '/dental-service/implant'
  },
  {
    title: '隱形牙箍  即減￥5000元',
    imgUrl: 'https://static.cmereye.com/imgs/2023/07/3439799808b32972.jpg',
    mbUrl: 'https://static.cmereye.com/imgs/2023/07/d514b0c5fd264b2e.jpg',
    link: '/dental-service/invisalign'
  },
  {
    title: '金屬矯正牙箍 即減￥2000元',
    imgUrl: 'https://static.cmereye.com/imgs/2023/07/da524eb65290c225.jpg',
    mbUrl: 'https://static.cmereye.com/imgs/2023/07/d514b0c5fd264b2e.jpg',
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

let windowWidth = ref(1920)

const getWindowWidth = () => {
  windowWidth.value = window.innerWidth
}

let showYaAnim = ref(false)
const getScrollTop = () => {
  // console.log(window.scrollY)
  let caseSharingHeight:any = document.getElementsByClassName('index-caseSharing')
  if(windowWidth.value > 768){
    if(window.scrollY>=caseSharingHeight[0].offsetTop+300){
      showYaAnim.value = true
    }
  }else{
    if(window.scrollY>=caseSharingHeight[0].offsetTop){
      showYaAnim.value = true
    }
  }
}

onMounted(()=>{
  // getNewsLists()
  getWindowWidth()
  window.addEventListener('resize',getWindowWidth)
  getScrollTop()
  window.addEventListener('scroll',getScrollTop)
})

</script>

<template>
  <div>
  <!-- <div class="bigPageCon"> -->
    <!-- <PageHeader />  -->
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
                  <img class="bannerSwiper-in-image" :srcset="`${bannerItem.mbUrl} 768w, ${bannerItem.imgUrl}`" :src="bannerItem.imgUrl" :alt="bannerItem.title" :title="bannerItem.title" />
                <!-- <div class="bannerSwiper-in-bg" :style="{'background-image': `url(${bannerItem.imgUrl})`}"></div> -->
              </div>
            </swiper-slide>
          </Swiper>
          <!-- <div class="bannerSwiper" :class="{act: bannerCurrent === bannerIndex + 1 }" v-for="(bannerItem,bannerIndex) in bannerLists" :key="bannerIndex">
            <div class="bannerSwiper-in" >
              <nuxt-link :to="bannerItem.link">
                <img class="bannerSwiper-in-image bigPageCon" :srcset="`${bannerItem.mbUrl} 768w, ${bannerItem.imgUrl}`" :src="bannerItem.imgUrl" :alt="bannerItem.title" :title="bannerItem.title" />
              </nuxt-link>
              <div class="bannerSwiper-in-bg" :style="{'background-image': `url(${bannerItem.imgUrl})`}"></div>
            </div>
          </div> -->
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
        <div class="index-banner-c">
          <div class="bannerText-1">
            <span>#重拾自行笑容</span>
            <span>
              愛牙愛己 由你做起
            </span>
          </div>
          <div class="bannerText-2">
            <span>全程式預約一體化診療服務</span>
            <span>讓每一位顧客享受<span class="topic">健康微笑之旅</span></span>
          </div>
        </div>
      </div>
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
            <AreaTab :type="'1'" />
          </div>
        </div>
        <div class="index-doctorTeam-c pcDoctorTeam">
          <div class="c-in" v-if="doctorLists_cs[appState.areaTabAct].length > 10">
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
                <SwiperSlide class="doctorTeamSwiperBox-slide" v-for="(doctorItem,doctorIndex) in doctorLists_cs[appState.areaTabAct].slice(0,22)" :key="doctorIndex" >
                  <div class="doctorTeamPage">
                    <nuxt-link :to="`/medical-team?did=${doctorItem.id}`">
                      <img :src="doctorItem.mbImg || ''" alt="">
                    </nuxt-link>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div class="c-in-44" v-if="doctorLists_cs[appState.areaTabAct].length > 22">
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
                <SwiperSlide class="doctorTeamSwiperBox-slide" v-for="(doctorItem,doctorIndex) in doctorLists_cs[appState.areaTabAct].slice(22,44)" :key="doctorIndex" >
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
              <div v-for="(doctorItem,doctorIndex) in doctorLists_cs[appState.areaTabAct]" :key="doctorIndex">
                <div class="doctorTeamPage">
                  <nuxt-link :to="`/medical-team?did=${doctorItem.id}`">
                    <img :src="doctorItem.mbImg || ''" alt="">
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="index-doctorTeam-c mbDoctorTeam">
          <div class="c-in" v-if="doctorLists_cs[appState.areaTabAct].length">
            <div>
              <Swiper
                class="doctorTeamSwiperBox"
                :modules="[Autoplay]"
                :autoplay="{
                  disableOnInteraction: true,
                  stopOnLastSlide: true,
                  delay: 0
                }"
                :speed="3000"
                :slidesPerView="3"
                @swiper="setDoctorTeamSwiperRef"
              >
                <SwiperSlide v-for="(doctorItem,doctorIndex) in doctorLists_cs[appState.areaTabAct].slice(0,14)" :key="doctorIndex" >
                  <div class="doctorTeamPage">
                    <nuxt-link :to="`/medical-team?did=${doctorItem.id}`">
                      <img :src="doctorItem.mbImg || ''" alt="">
                    </nuxt-link>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div class="c-in" v-if="doctorLists_cs[appState.areaTabAct].length > 14">
            <div>
              <Swiper
                class="doctorTeamSwiperBox"
                :modules="[Autoplay]"
                :initialSlide="30"
                :autoplay="{
                  disableOnInteraction: true,
                  reverseDirection: true,
                  stopOnLastSlide: true,
                  delay: 0
                }"
                :speed="3000"
                :slidesPerView="3"
                @swiper="setDoctorTeamSwiperRef44"
              >
                <SwiperSlide v-for="(doctorItem,doctorIndex) in doctorLists_cs[appState.areaTabAct].slice(14,30)" :key="doctorIndex" >
                  <div class="doctorTeamPage">
                    <nuxt-link :to="`/medical-team?did=${doctorItem.id}`">
                      <img :src="doctorItem.mbImg || ''" alt="">
                    </nuxt-link>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div class="c-in" v-if="doctorLists_cs[appState.areaTabAct].length > 30">
            <div>
              <Swiper
                class="doctorTeamSwiperBox"
                :modules="[Autoplay]"
                :autoplay="{
                  disableOnInteraction: true,
                  stopOnLastSlide: true,
                  delay: 0
                }"
                :speed="3000"
                :slidesPerView="3"
                @swiper="setDoctorTeamSwiperRef"
              >
                <SwiperSlide v-for="(doctorItem,doctorIndex) in doctorLists_cs[appState.areaTabAct].slice(30,44)" :key="doctorIndex" >
                  <div class="doctorTeamPage">
                    <nuxt-link :to="`/medical-team?did=${doctorItem.id}`">
                      <img :src="doctorItem.mbImg || ''" alt="">
                    </nuxt-link>
                  </div>
                </SwiperSlide>
              </Swiper>
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
            <img class="userImage" src="https://static.cmereye.com/imgs/2023/07/ac4edebf6fd5fd55.jpg" alt="">
            <div :class="{ya: true,showYaAnim: showYaAnim}">
              <div>星級{{'\n'}}客戶</div>
            </div>
            <div :class="{ya_2: true,showYaAnim: showYaAnim}">
              <div>星級{{'\n'}}客戶</div>
            </div>
          </div>
        </div>
        <div class="index-caseSharing-swiper">
          <swiper
            class="caseSharingSwiper"
            :loop="true"
            :centeredSlides="true"
            :slidesPerView="windowWidth>768?3:1.5"
            @swiper="setSwiperRef"
          >
            <swiper-slide v-for="(caseItem,caseIndex) in caseSharingLists" :key="caseIndex">
              <div class="centerBox">
                <div class="caseSharingSwiper-in">
                  <div class="context">{{caseItem.context}}</div>
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
          <div class="swiper-next" @click="handleProcessBtn('slidePrev')">
            <img src="https://static.cmereye.com/imgs/2023/07/638d8106c1f85272.png" alt="">
          </div>
          <div class="swiper-prev" @click="handleProcessBtn('slideNext')">
            <img src="https://static.cmereye.com/imgs/2023/07/5331fed4a9f0f487.png" alt="">
          </div>
        </div>
        <img class="bgIcon bgIcon_1" src="https://static.cmereye.com/imgs/2023/07/db112a8f7e94d783.png" alt="">
        <img class="bgIcon bgIcon_2" src="https://static.cmereye.com/imgs/2023/07/4755f119a5fecfd5.png" alt="">
        <img class="bgIcon bgIcon_3" src="https://static.cmereye.com/imgs/2023/07/8fe74d7997ee58b5.png" alt="">
        <img class="bgIcon bgIcon_4" src="https://static.cmereye.com/imgs/2023/07/85f08b84d0d26e06.png" alt="">
        <img class="bgIcon bgIcon_5" src="https://static.cmereye.com/imgs/2023/07/55693cf22c9a5e8e.png" alt="">
        <!-- <img class="bgIcon bgstar_1" src="https://static.cmereye.com/imgs/2023/07/d4752d78d1563917.png" alt=""> -->
        <!-- <img class="bgIcon bgstar_2" src="https://static.cmereye.com/imgs/2023/07/3f4a115fbf8ca9f2.png" alt=""> -->
        <!-- <img class="bgIcon bgstar_3" src="https://static.cmereye.com/imgs/2023/07/8730b0cdedc3e396.png" alt=""> -->
      </div>
      <RippleLine :type="'4'" />
      <!-- 聯絡我們 -->
      <ContactUs />
    </div>
    <!-- <PageFooter /> -->
    <!-- <PageNavbar /> -->
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
  position: relative;
}
.index-banner{
  height: auto;
  margin-top: -30px;
  position: relative;
  z-index: 1;
  .index-banner-t{
    width: 100%;
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
        width: 69px;
        height: 32px;
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
  &-c{
    position: absolute;
    left: 10%;
    bottom: 30%;
    z-index: 5;
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
        line-height: normal;
        letter-spacing: 4.751px;
        background: #fff;
        padding: 5px 20px;
        transform: skewY(-5deg);
        border: 2px solid var(--topic-text-color);
        width: max-content;
        &:first-child{
          position: relative;
          z-index: 2;
          &::after{
            content: '';
            position: absolute;
            bottom: -3px;
            right: 0;
            height: 6px;
            width: calc(100% - 60px);
            background: #fff;
          }
        }
        &:last-child{
          position: relative;
          z-index: 1;
          margin-top: -10px;
          margin-left: 60px;
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
        font-weight: 600;
        line-height: 171%; /* 37.62px */
        letter-spacing: 5.83px;
        &.topic{
          color: var(--topic-color);
        }
      }
    }
  }
  .bannerSwiper{
    width: 100%;
    // position: absolute;
    // top: 0;
    // left: 0;
    // z-index: 1;
    // opacity: 0;
    // position: relative;
    // overflow: hidden;
    // -webkit-mask-image: radial-gradient( circle farthest-corner at 100% 50%, #000 60%, transparent 90% );
    // -webkit-mask-repeat: no-repeat;
    // -webkit-mask-size: 200% 100%;
    // -webkit-mask-position: -100% 0;
    // transition-property: -webkit-mask-position;
    // transition-property: mask-position;
    // transition-property: mask-position, -webkit-mask-position;
    // transition-duration: 5s;
    // transition-timing-function: cubic-bezier(0.3, 0.1, 0.1, 1);
    // transition: all 5s;
    // &.act{
      // animation: bannerAnim 3s;
      // animation-fill-mode: both;
      // z-index: 2;
      // mask-image: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 1));
      // opacity: 1;
      // -webkit-mask-image: radial-gradient( circle farthest-corner at 50% 300%, #000 60%, transparent 90% );
      // -webkit-mask-size: 100% 100%;
      // -webkit-mask-position: 50% -100%;
      // transition-property: mask-position, -webkit-mask-position;
      // transition-duration: 5s;
      // transition-timing-function: cubic-bezier(0.3, 0.1, 0.1, 1);
    // }
    &-in{
      width: 100%;
      position: relative;
      img{
        position: relative;
        z-index: 2;
        width: 100%;
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
@keyframes bannerAnim {
  0%{
    // opacity: 0;
    // z-index: 1;
    // transform: translateZ(-5px);
    -webkit-mask-image: radial-gradient( circle farthest-corner at 100% 0%, #000 60%, transparent 90% );
    -webkit-mask-size: 200% 100%;
    -webkit-mask-position: -100% 0;
    transition-property: mask-position, -webkit-mask-position;
    transition-duration: 5s;
    transition-timing-function: cubic-bezier(0.3, 0.1, 0.1, 1);
  }
  100%{
    // opacity: 1;
    // z-index: 2;
    // mask-image: linear-gradient(rgba(0, 0, 0, 1), transparent);
    // transform: translateZ(0px);
    -webkit-mask-image: radial-gradient( circle farthest-corner at 100% 0%, #000 60%, transparent 90% );
  }
}
//醫生團隊
.index-doctorTeam{
  padding: 140px 0 100px;
  background: #FF6096;
  margin: -50px 0 -10px;
  position: relative;
  :deep(.doctorTeamSwiperBox .swiper-wrapper) {
    transition-timing-function: linear;
  }
  &-t{
    display: flex;
    position: relative;
    .title{
      text-align: center;
      color: #FFF;
      font-family: 'cwTeXYen';
      font-size: 31.766px;
      font-style: normal;
      font-weight: 500;
      line-height: 160%;
      letter-spacing: 7.942px;
      margin: 0 auto;
      padding-bottom: 20px;
      position: relative;
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
    // &::before{
    //   content: '';
    //   position: absolute;
    //   background: url(https://static.cmereye.com/imgs/2023/07/05652c3c60088f99.png) no-repeat;
    //   left: 50px;
    //   width: 434px;
    //   height: 100px;
    // }
    // &::after{
    //   content: '';
    //   position: absolute;
    //   background: url(https://static.cmereye.com/imgs/2023/07/6016ba854dc4f4e3.png) no-repeat;
    //   right: 300px;
    //   width: 279px;
    //   height: 149px;
    // }
  }
  &-c{
    width: 100%;
    max-width: 1800px;
    // padding: 0 60px;
    margin: 85px auto 0;
    position: relative;
    &::before{
      content: '';
      width: 230px;
      height: 100%;
      background: linear-gradient(90deg, #FF6096 0%, rgba(255, 96, 150, 0.00) 100%);
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;
      pointer-events: none;
    }
    &::after{
      content: '';
      width: 230px;
      height: 100%;
      background: linear-gradient(-90deg, #FF6096 0%, rgba(255, 96, 150, 0.00) 100%);
      position: absolute;
      top: 0;
      right: 0;
      z-index: 2;
      pointer-events: none;
    }
    .doctorTeamPage{
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
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
      .doctorTeamSwiperBox-slide{
        display: flex;
        justify-content: center;
      }
    }
  }
  &-b{
    padding-top: 60px;
    display: flex;
    justify-content: center;
  }
  .mbDoctorTeam{
    display: none;
  }
}

.index-caseSharing{
  padding-top: 137px;
  padding-bottom: 176px;
  margin: -20px 0;
  position: relative;
  overflow: hidden;
  &-title{
    display: flex;
    justify-content: center;
    position: relative;
    .title{
      color: var(--topic-text-color);
      font-family: 'cwTeXYen';
      font-size: 31px;
      font-style: normal;
      font-weight: 600;
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
    &::before{
      content: '';
      position: absolute;
      left: 35%;
      background: url(https://static.cmereye.com/imgs/2023/07/2142b5e26918c181.png) no-repeat;
      width: 120px;
      height: 120px;
    }
    &:after{
      content: '';
      background: url(https://static.cmereye.com/imgs/2023/07/e2ded86c01ed3723.png) no-repeat;
      position: absolute;
      right: 35%;
      width: 120px;
      height: 120px;
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
        font-family: 'cwTeXYen';
        font-size: 60.157px;
        font-style: normal;
        font-weight: 600;
        line-height: 160%; /* 96.252px */
        letter-spacing: 15.039px;
        white-space: nowrap;
      }
      .skill{
        color: var(--topic-text-color);
        font-family: 'cwTeXYen';
        font-size: 34.864px;
        font-style: normal;
        font-weight: 600;
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
        font-family: 'cwTeXYen';
        font-size: 22px;
        font-style: normal;
        font-weight: 600;
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
        background: url(https://static.cmereye.com/imgs/2023/07/00201cd3d3a117cd.png);
        background-size: 100% 100%;
        color: var(--topic-color);
        font-family: 'cwTeXYen';
        font-size: 35.368px;
        font-style: normal;
        font-weight: 600;
        line-height: 115%; /* 40.673px */
        letter-spacing: 5.305px;
        white-space: pre-wrap;
        display: flex;
        justify-content: center;
        padding-top: 30px;
        z-index: 2;
        display: none;
        &.showYaAnim{
          display: flex;
          animation: yaAnim 1s linear;
          animation-fill-mode: forwards;
        }
      }
      .ya_2{
        width: 140px;
        height: 160px;
        position: absolute;
        bottom: -20px;
        right: -30px;
        background: url(https://static.cmereye.com/imgs/2023/07/3b49416894156c3e.png);
        background-size: 100% 100%;
        color: #FFF;
        font-family: 'cwTeXYen';
        font-size: 35.368px;
        font-style: normal;
        font-weight: 600;
        line-height: 115%; /* 40.673px */
        letter-spacing: 5.305px;
        white-space: pre-wrap;
        display: flex;
        justify-content: center;
        padding-top: 30px;
        z-index: 1;
        &.showYaAnim{
          animation: ya2Anim 1s linear;
        }
      }
      &:last-child{
        margin-left: 42px;
        position: relative;
        &::after{
          content: '';
          position: absolute;
          background: url(https://static.cmereye.com/imgs/2023/07/d5103a059fa9dc8e.png) no-repeat;
          right: -110px;
          bottom: 50px;
          width: 92px;
          height: 132px;
        }
      }
    }
  }
  &-swiper{
    width: 100%;
    max-width: 1500px;
    margin: 100px auto 0;
    position: relative;
    z-index: 4;
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
      .centerBox{
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      &-in{
        padding: 70px 30px 0;
        position: relative;
        .context{
          padding: 13px 27px;
          border-radius: 20px;
          border: 3px solid var(--topic-color);
          box-sizing: border-box;
          margin-left: 52px;
          color: var(--topic-color);
          font-family: 'cwTeXYen';
          font-size: 24px;
          font-style: normal;
          font-weight: 600;
          line-height: 160%; /* 35.143px */
          letter-spacing: 5.491px;
          position: absolute;
          top: 0;
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
          font-family: 'cwTeXYen';
          font-size: 28px;
          font-style: normal;
          font-weight: 600;
          line-height: 160%; /* 96.252px */
          letter-spacing: 6.417px;
          white-space: nowrap;
          margin-top: 20px;
          span{
            font-size: 22px;
            letter-spacing: 4.801px;
          }
        }
        .skill{
          color: var(--topic-text-color);
          font-family: 'cwTeXYen';
          font-size: 17px;
          font-style: normal;
          font-weight: 600;
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
          font-family: 'cwTeXYen';
          font-size: 18px;
          font-style: normal;
          font-weight: 600;
          line-height: 160%; /* 31.608px */
          letter-spacing: 4px;
          position: relative;
          background: #fff;
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
          width: 259px;
          margin-top: -10px;
          position: relative;
          z-index: 1;
          border-radius: 50%;
          border: 3px solid var(--topic-color);
          overflow: hidden;
          img{
            width: 100%;
          }
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
          font-family: 'cwTeXYen';
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
    &.bgstar_1{
      left: 5%;
      bottom: 10%;
      z-index: 1;
    }
    &.bgstar_2{
      right: 60px;
      bottom: 600px;
      z-index: 1;
    }
    &.bgstar_3{
      top: 10%;
      right: 5%;
      z-index: 1;
    }
  }
}
@keyframes ya2Anim {
  0%{
    // clip-path: polygon(0 -20%,-20% 0,0 0,0 0);
    transform: scale(1);
  }
  50%{
    // clip-path: polygon(-10% 100%, 100% -10%, 110% 0,0 110%);
    transform: scale(1.3);
  }
  100%{
    // clip-path: polygon(100% 100%,100% 100%,120% 100%,120% 100%);
    transform: scale(1);
  }
}
@keyframes yaAnim {
  0%{
    clip-path: polygon(0 -20%,-20% 0,0 0,0 0);
    transform: scale(1);
  }
  50%{
    clip-path: polygon(-10% 100%, 100% -10%, 110% 0,0 110%);
    transform: scale(1.3);
  }
  100%{
    clip-path: polygon(100% 100%,100% 100%,120% 100%,120% 100%);
    transform: scale(1);
  }
}
@media (min-width: 768px) and (max-width: 1452px) {
}
@media screen and (min-width: 1920px) {
  .index-banner{
    &-c{
      left: calc((100% - 1920px)/2 + 192px);
    }
  }
}

@media screen and (max-width: 768px) {
  .indexPage {
    width: 100%;
    background: #fff;
    padding: 0 0 90px;
  }
  .index-banner{
    .index-banner-b{
      height: 60px;
      margin-top: -26px;
      &>div{
        width: 46px;
        &:not(:last-child){
          margin-right: 13px;
        }
        &::after{
          width: 20px;
          height: 10px;
        }
      }
    }
    &-c{
      bottom: 20%;
      .bannerText-1{
        span{
          font-size: 20px;
          letter-spacing: 1.95px;
          padding: 0px 10px;
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
  }
  //醫生團隊
  .index-doctorTeam{
    padding: 120px 0 20px;
    &-t{
      flex-direction: column;
      align-items: center;
      box-sizing: border-box;
      .title{
        font-size: 18px;
        letter-spacing: 4px;
        &::after{
          height: 3px;
        }
      }
      .area{
        position: relative;
        right: auto;
        bottom: auto;
        margin-top: 37px;
      }
      &::before{
        display: none;
      }
      &::after{
        display: none;
      }
    }
    &-c{
      margin-top: 20px;
      &::before{
        // width: 100px;
        display: none;
      }
      &::after{
        // width: 100px;
        display: none;
      }
      .doctorTeamPage{
        margin: 8.6px 15px;
        img{
          width: 100%;
          height: auto;
        }
      }
    }
    .mbDoctorTeam{
      display: block;

    }
    .pcDoctorTeam{
      display: none;
    }
  }
  //個案分享
  .index-caseSharing{
    padding: 80px 0 100px;
    background:none;
    &-title{
      .title{
        font-size: 22px;
        letter-spacing: 5px;
        padding-bottom: 10px;
        &::after{
          height: 3px;
          border-radius: 1.5px;
        }
      }
      &::before{
        display: none;
      }
      &::after{
        display: none;
      }
    }
    &-in{
      margin: 10px auto 0;
      flex-direction: column;
      position: relative;
      &>div{
        padding: 0 30px;
        .name{
          font-size: 18px;
          letter-spacing: 4.5px;
          line-height: 1;
        }
        .skill{
          font-size: 14px;
          letter-spacing: 3.5;
        }
        .wujiao{
          margin-top: 0;
          &>div{
            padding: 0 3px;
            width: 20px;
          }
        }
        .text{
          margin-top: 210px;
          padding: 20px 24px;
          border: 2px solid var(--topic-color);
          border-radius: 10px;
          font-size: 17px;
          letter-spacing: 3.74px;
          &::after{
            width: 17px;
            height: 17px;
            border: 2px solid var(--topic-color);
            border-left: transparent;
            border-bottom: transparent;
            top: -10px;
            right: auto;
            left: 30px;
            transform: rotate(-45deg);
          }
        }
        .userImage{
          max-width: 190px;
          border-radius: 50%;
        }
        .ya{
          width: 67px;
          height: 76px;
          bottom: 0;
          right: 10px;
          font-size: 15px;
          letter-spacing: 2.25px;
          padding-top: 15px;
        }
        .ya_2{
          width: 67px;
          height: 76px;
          bottom: 0;
          right: 10px;
          font-size: 15px;
          letter-spacing: 2.25px;
          padding-top: 15px;
        }
        &:first-child{
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }
        &:last-child{
          margin-left: 0;
          position: absolute;
          top: 50px;
          left: 50%;
          width: max-content;
          transform: translateX(-50%);
          &::after{
            display: none;
          }
        }
      }
    }
    &-swiper{
      margin: 68px auto 0;
      .swiper-next,.swiper-prev{
        display: none;
      }
      .caseSharingSwiper{
        &-in{
          padding: 30px 30px 0;
          .context{
            padding: 2px 13px;
            font-size: 17px;
            letter-spacing: 3.75px;
            border-radius: 10px;
            margin-left: 0;
            left: 50%;
            transform: translateX(-50%);
            width: max-content;
            max-width: 100%;
            border: 2px solid var(--topic-color);
            margin: 0 auto;
            &::after{
              width: 10px;
              height: 10px;
              bottom: -7px;
              left: 50px;
              border: 2px solid var(--topic-color);
              border-left: transparent;
              border-bottom: transparent;
            }
          }
          .name{
            font-size: 13px;
            span{
              font-size: 15px;
            }
          }
          .skill{
            font-size: 12px;
          }
          .wujiao{
            margin-top: 0;
            &>div{
              padding: 0 4px;
              width: 26px;
            }
          }
          .text{
            padding: 16px 17px;
            border: 2px solid var(--topic-color);
            letter-spacing: 3.75px;
            font-weight: 600;
            font-size: 15px;
            &::after{
              border: 2px solid var(--topic-color);
              width: 12px;
              height: 12px;
              top: -7px;
              border-left: transparent;
              border-bottom: transparent;
            }
          }
          .userImage{
            max-width: 200px;
          }
        }
      }
    }
    .bgIcon{
      display: none;
    }
  }
}
</style>
