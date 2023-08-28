<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
const appState = useAppState()
appState.setDentistryService('general-oral-examination')
useHead({
  title: '口腔檢查｜牙科服務',
  meta: [
   {
      hid: 'description',
      name: 'description',
      content: '愛康健提供一般口腔檢查服務，定期口腔檢查確保牙齒和牙齦的健康，預防各種口腔疾病。牙科醫生通過口腔檢查評估牙齒、牙齦、面部和口腔組織的健康狀況，確保沒有潛在的蛀牙、牙齦發炎或其他口腔問題。要徹底預防一些口腔問題，必須定期接受牙齒檢查和口腔護理',
   },
   {
      hid: 'Keywords',
      name: 'Keywords',
      content: '口腔檢查 定期口腔檢查 牙齒檢查 檢查牙齒 牙科檢查 基本牙科服務 口腔衛生保健 口腔保健 牙科保健服務 愛康健 深圳愛康健 深圳專業牙科中心 愛康健醫院 愛康健口腔醫院 深圳愛康健口腔醫院愛康健 CKJ愛康健齒科集團 深圳口腔專科醫院 愛康健齒科集團 深圳牙科醫院牙科服務內地牙科 深圳口腔專科',
   },
  ]
})

const bannerData = {
  img: 'https://static.cmereye.com/imgs/2023/08/991bb5fac0819e99.jpg',
  mbImg: 'https://static.cmereye.com/imgs/2023/08/991bb5fac0819e99.jpg',
  gif: 'https://static.cmereye.com/imgs/2023/08/0edc8793314c4da3.gif',
  text1: '#關注口腔健康 從定期檢查開始',
  text2: '立即預約檢查 展開護牙行動',
  tabNavName: 'pages.dental-service.general-oral-examination.introduce.tabNavName'
}

const headerConfig = {
  img: 'https://static.cmereye.com/imgs/2023/06/97c82cdfd887382a.png',
  bg: 'https://static.cmereye.com/imgs/2023/06/387acf0954409624.jpg',
  mbImg: 'https://static.cmereye.com/imgs/2023/06/5fb010c120970570.jpg',
  pageName: 'general-oral-examination',
  pcText: ['關注口腔健康，從定期檢查開始','立即預約檢查，展開護牙行動'],
  mbText: ['關注口腔健康','從定期檢查開始']
}

const introduceData = {
  title: 'pages.dental-service.general-oral-examination.introduce.title',
  content: 'pages.dental-service.general-oral-examination.introduce.content',
  mbImg: 'https://static.cmereye.com/imgs/2023/05/1adfbf26ba2d3e03.jpg',
  pcImg: 'https://static.cmereye.com/imgs/2023/08/9aab891c36c78382.jpg',
  tabNavName: 'pages.dental-service.general-oral-examination.introduce.tabNavName',
}

const reasonData = {
  title: 'pages.dental-service.general-oral-examination.reason.title',
  text: 'pages.dental-service.general-oral-examination.reason.text',
  imgUrl: 'https://static.cmereye.com/imgs/2023/05/4077102eecb8a253.jpg',
  reasonLists: [
    {
      context: 'pages.dental-service.general-oral-examination.reason.lists[0].context',
    },
    {
      context: 'pages.dental-service.general-oral-examination.reason.lists[1].context',
    },
  ],
  isMediumCW: true,
}

const stepData = {
  title: '一般口腔檢查過程',
  stepLists: [
      {
        title: '1',
        text: '檢查牙齒、牙齦健康',
      },
      {
        title: '2',
        text: '面部或頸項有否出現異常情況',
      },
      {
        title: '3',
        text: '評估整體口腔健康狀況及提供建議',
      },
      {
        title: '4',
        text: '需要時建議進行口腔X光造影檢查',
      },
      {
        title: '5',
        text: '提供口腔保健資訊',
      },
  ],
}

const problemData = {
  title: 'pages.dental-service.general-oral-examination.problem.title',
  lists: [
    {
      Q: 'pages.dental-service.general-oral-examination.problem.lists[0].Q',
      A: 'pages.dental-service.general-oral-examination.problem.lists[0].A',
    },
    {
      Q: 'pages.dental-service.general-oral-examination.problem.lists[1].Q',
      A: 'pages.dental-service.general-oral-examination.problem.lists[1].A',
    },
  ],
  pageName: 'general-oral-examination',
}

const noticeData = {
  title: '服務包括',
  // meritLists: [
  //   '口腔及牙齒檢查',
  //   '檢查口腔整體健康狀況包括檢查牙齦、牙齒、口腔組織和面頜骨，以確定是否需要進行進一步的治療。為了評估牙齒和牙齦的整體健康狀況，牙醫可能會建議進行牙齒X光檢查。',
  // ],
  // shortcomingLists: [
  //   '口腔 X光片',
  //   '口腔X光檢查一般分為傳統口內X光和口外全景X光兩種。口內X光可以提供牙齒、骨骼和口腔組織的詳細圖像，能夠幫助牙醫檢測蛀牙、觀察牙根、檢查牙齒四周的骨骼健康、診斷牙周病以及檢查正在生長的牙齒。',
  // ],
  lists: [
    {
      img: 'https://static.cmereye.com/imgs/2023/08/9da1f6adb17f4ff8.png',
      content: '檢查口腔整體健康狀況包括檢查牙齦、牙齒、口腔組織和面頜骨，以確定是否需要進行進一步的治療。為了評估牙齒和牙齦的整體健康狀況，牙醫可能會建議進行牙齒X光檢查。'
    },
    {
      img: 'https://static.cmereye.com/imgs/2023/08/c0848e21c9906137.png',
      content: '口腔X光檢查一般分為傳統口內X光和口外全景X光兩種。口內X光可以提供牙齒、骨骼和口腔組織的詳細圖像，能夠幫助牙醫檢測蛀牙、觀察牙根、檢查牙齒四周的骨骼健康、診斷牙周病以及檢查正在生長的牙齒。'
    }
  ]
}
let noticeCurrent = ref(1)

const onSlideChange = (swiper: any) => {
  noticeCurrent.value = swiper.realIndex + 1
}

let windowWidth = ref(1920)

onMounted(() => {
  getWindowWidth()
  window.addEventListener('resize', getWindowWidth)
})

const getWindowWidth = () => {
  windowWidth.value = window.innerWidth
}
</script>


<template>
  <div>
    <!-- <PageHeader :headerConfig="headerConfig" /> -->
    <div class="servicePageConfig">
      <ServiceBanner :bannerData="bannerData" pageName="generalOralExamination" />
      <!-- <div class="index_title pageCon">{{$t('pages.dental-service.title')}}</div> -->
      <ServiceIntroduce :introduceData="introduceData" :reasonData="reasonData" :animConfig="{color: '#FC1682',text: 'DENTAL CHECK-UP'}" moduleType="4" introduceType="2" />
      <!-- <ServiceReason :reasonData="reasonData" /> -->
      <!-- <div class="notice">
        <div class="dentistryServices-title">
          <div class="dentistryServices-title-in bb">
            <span>{{noticeData.title}}</span>
          </div>
        </div>
        <div class="notice-in">
          <swiper
            :slidesPerView="windowWidth>768 ? '2': '1'"
            class="swiper-wrapper"
            @slideChange="onSlideChange"
          >
            <swiper-slide class="swiper-slide">
              <div class="box box-left">
                <div
                  class="box-in"
                  v-for="(meritItem,meritIndex) in noticeData.meritLists"
                  :key="meritIndex"
                >
                  <div>{{meritItem}}</div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide class="swiper-slide">
              <div class="box box-right">
                <div
                  class="box-in"
                  v-for="(shortcomingItem,shortcomingIndex) in noticeData.shortcomingLists"
                  :key="shortcomingIndex"
                >
                  <div>{{shortcomingItem}}</div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <div class="notice-line mbBox">
          <PageSwiperPointLine :latestNewsNum="2" :latestNewsCurrent="noticeCurrent"></PageSwiperPointLine>
        </div>
      </div> -->
      <div class="note">
        <RippleLine type="2" />
        <div class="note-bg">
          <div class="note-title">
            <ServiceTitle :title="noticeData.title" yaBorder="#FECB02" />
          </div>
          <div class="note-lists">
            <div class="note-lists-in" v-for="(note,index) in noticeData.lists" :key="index">
              <div class="image"><img :src="note.img" alt="" /></div>
              <div class="text">{{note.content}}</div>
            </div>
          </div>
        </div>
        <RippleLine type="2" :isBottom="true" />
      </div>
      <div class="frequency">
        <div class="frequency-title">
          <div class="frequency-title-in">
            <!-- <span>口腔檢查頻率</span> -->
            <ServiceTitle :title="'口腔檢查頻率'" />
          </div>
        </div>
        <div class="frequency-in">
          <div class="frequency-in-top">
            對於一般人來說，
            <br class="mbBox" />每年進行一次口腔檢查已經足夠。
          </div>
          <div class="frequency-in-top">
            然而，對於某些
            <span>高風險人群</span>，
            <br class="mbBox" />建議每半年或更頻繁地進行口腔檢查。
          </div>
          <!-- <div class="frequency-in-title">高危人士包括:</div> -->
          <div class="frequency-in-lists">
            <div class="listsIn">
              <div class="num">01</div>
              <div class="image">
                <img src="https://static.cmereye.com/imgs/2023/08/826e8ca2be7a3b20.png" alt="">
              </div>
              <div class="name">吸煙者</div>
              <div class="context">吸煙者患牙周病的機率比非吸煙者高，高達五倍或以上。</div>
            </div>
            <div class="listsIn">
              <div class="num">02</div>
              <div class="image">
                <img src="https://static.cmereye.com/imgs/2023/08/bcaf52f9657ef4b1.png" alt="">
              </div>
              <div class="name">患有嚴重口腔疾病的人士</div>
              <div class="context">如嚴重蛀牙、牙周病、口腔癌、裂顎等，需要接受較頻繁的口腔檢查以維護口腔健康。</div>
            </div>
            <div class="listsIn">
              <div class="num">03</div>
              <div class="image">
                <img src="https://static.cmereye.com/imgs/2023/08/30e8a87fdaf42d8d.png" alt="">
              </div>
              <div class="name">患有系統性疾病人士</div>
              <div class="context">對於患有糖尿病、血友病、愛滋病等系統性疾病的人士，由於身體免疫系統受到妨礙，抵抗病原體的能力降低，如果口腔衛生不佳，牙齒表面的菌斑就會容易引致牙周病，甚至發展成嚴重疾病。</div>
            </div>
          </div>
          <div class="frequency-in-bottom">因此，高風險人群需要更加重視口腔健康，並接受更頻繁的口腔檢查</div>
        </div>
      </div>
      <ServiceStep :stepData="stepData" />
      <ServiceProblem :problemData="problemData" />
      <serviceCard />
      <RippleLine :type="'4'" />
      <ContactUs />
    </div>
    <!-- <PageFooter />
    <PageNavbar /> -->
  </div>
</template>



<style lang="scss" scoped>
.servicePageConfig{
  margin-top: -20px;
  padding-bottom: 140px;
}
.notice {
  width: 100%;
  max-width: 1450px;
  margin: 153px auto 0;
  &-in {
    width: 90%;
    margin: 30px auto 0;
    .box {
      .box-in {
        height: 278px;
        margin-top: 15px;
        display: flex;
        background: #fff1f0;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 160%;
        color: #666666;
        padding: 0 80px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        &:first-child {
          background: #ffa09e;
          color: #fff;
          margin-top: 0;
          height: 69px;
          font-weight: 700;
          font-size: 28px;
        }
        &:nth-of-type(2) {
          margin-top: 0;
        }
      }
    }
    .box-left {
      border-radius: 60px 0 0 60px;
      overflow: hidden;
    }
    .box-right {
      margin-left: 3px;
      border-radius: 0 60px 60px 0;
      overflow: hidden;
      .box-in {
        &:first-child {
          background: #ffcecb;
        }
      }
    }
  }
  &-line {
    width: 83px;
    margin: 22px auto;
  }
}
.note{
  margin-top: 185px;
  &-bg{
    background: #FECB02;
    padding: 150px 0 140px;
  }
  &-title{
    display: flex;
    justify-content: center;
  }
  &-lists{
    width: 100%;
    max-width: 1340px;
    margin: 125px auto 0;
    display: flex;
    justify-content: space-around;
    &-in{
      display: flex;
      flex-direction: column;
      max-width: 40%;
      .image{
        position: relative;
        img{
          width: 100%;
        }
      }
      .text{
        margin-top: 70px;
        color: var(--black, #4D4D4D);
        text-align: justify;
        font-size: 19px;
        font-style: normal;
        font-weight: 500;
        line-height: 157%; /* 29.83px */
        letter-spacing: 3.8px;
      }
    }
  }
}
.frequency {
  margin-top: 185px;
  &-title{
    display: flex;
    justify-content: center;
  }
  &-in {
    width: 100%;
    // max-width: 1246px;
    padding: 59px 50px;
    // background: #fff1f0;
    // box-shadow: 0px 4px 8px #ffddda;
    margin: 25px auto;
    &-top {
      font-style: normal;
      font-weight: 500;
      font-size: 19px;
      line-height: 160%;
      text-align: center;
      color: var(--topic-text-color);
      span {
        font-style: normal;
        font-weight: 500;
        font-size: 19px;
        line-height: 160%;
        color: var(--topic-color);
      }
    }
    &-title {
      font-style: normal;
      font-weight: 700;
      font-size: 28px;
      line-height: 160%;
      text-align: center;
      color: #ffa09e;
      margin-top: 17px;
    }
    &-lists {
      display: flex;
      margin-top: 175px;
      .listsIn{
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 2px solid #6B6B6B;
        flex: 1;
        margin: 0 52px;
        padding: 0 68px 62px;
        .num{
          font-size: 80px;
          color: var(--topic-text-color);
          background: #fff;
          transform: translateY(-50%);
          padding: 0 10px 0 45px;
          &::before{
            content: '';
            height: 104px;
            width: 2px;
            position: absolute;
            top: 50%;
            left: 30px;
            transform: translateY(-60%) rotate(25deg);
            background: var(--topic-text-color);
          }
        }
        .image{
          margin-top: -70px;
          height: 317px;
          display: flex;
          align-items: center;
        }
        .name{
          min-height: 140px;
          color: var(--topic-color);
          text-align: center;
          font-size: 60px;
          font-style: normal;
          font-weight: 500;
          line-height: 100%; /* 94.2px */
          letter-spacing: 3.6px;
        }
        .context{
          color: var(--topic-text-color);
          text-align: justify;
          font-size: 19px;
          font-style: normal;
          font-weight: 500;
          line-height: 157%; /* 29.83px */
          letter-spacing: 3.8px;
        }
      }
    }
    &-bottom {
      margin-top: 54px;
      font-style: normal;
      font-weight: 500;
      font-size: 28px;
      line-height: 160%;
      text-align: center;
      color: var(--topic-color);
    }
  }
}
@media (min-width: 768px) and (max-width: 1452px) {
  .notice {
    &-in {
      .box {
        .box-in {
          font-size: 18px;
          padding: 0 4vw;
        }
      }
    }
  }
}

@media only screen and (max-width: 760px) {
  .notice {
    margin: 90px auto 0;
    &-in {
      width: 100%;
      margin: 34px 0 0;
      .box {
        margin-left: 30px;
        .box-in {
          font-weight: 500;
          font-size: 15px;
          height: 240px;
          margin-top: 9px;
          padding: 0 46px;
          &:first-child {
            height: 40px;
            font-weight: 600;
            font-size: 20px;
          }
        }
      }
      .box-right {
        margin-right: 30px;
        margin-left: 0;
      }
    }
  }
  .frequency {
    margin: 90px 30px 0;
    &-in {
      padding: 24px 16px 35px;
      &-top {
        font-size: 14px;
        span {
          font-size: 14px;
        }
      }
      &-title {
        font-size: 26px;
        margin-top: 11px;
      }
      &-lists {
        flex-direction: column;
        margin-top: 13px;
        & > div {
          width: 100%;
          margin: 0;
          padding: 14px 23px;
          min-height: 0;
          border-radius: 15.5967px;
          & > div:first-child {
            font-weight: 600;
            font-size: 14px;
          }
          & > div:last-child {
            font-weight: 600;
            font-size: 12px;
          }
          &:nth-of-type(1) {
            min-width: 100%;
            margin-bottom: 12px;
          }
          &:nth-of-type(2) {
            min-width: 100%;
            margin-bottom: 12px;
          }
        }
      }
      &-bottom {
        font-size: 12px;
        padding: 0 30px;
        margin-top: 18px;
      }
    }
  }
}
</style>