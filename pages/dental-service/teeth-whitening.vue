<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
import { Scrollbar } from 'swiper';
const appState = useAppState()
appState.setDentistryService('teeth-whitening')
useHead({
  title: '牙齒美白 ｜牙科服務',
  meta: [
   {
      hid: 'description',
      name: 'description',
      content: '愛康健提供牙齒美白服務，包括激光牙齒美白及藍光美白牙齒。美白牙齒療程可以有效去除外部和內部的污漬，讓牙齒更加明亮，多年科學研究已經證明美白牙齒是安全的療程。在進行療程之前，牙醫會先檢查牙齒和口腔狀況，確定患者適合進行牙齒美白療程。',
   },
   {
      hid: 'Keywords',
      name: 'Keywords',
      content: '美白牙齒 牙齒美白 激光牙齒美白 藍光牙齒美白 牙齒美白療程 美白牙齒服務 藍光美白牙齒 激光美白牙齒 藍光漂牙 激光漂牙 美白牙齒方法 愛康健 深圳愛康健 深圳專業牙科中心 愛康健醫院 愛康健口腔醫院 深圳愛康健口腔醫院愛康健 CKJ愛康健齒科集團 深圳口腔專科醫院 愛康健齒科集團 深圳牙科醫院牙科服務內地牙科 深圳口腔專科',
   },
  ]
})

const bannerData = {
  img: 'https://static.cmereye.com/imgs/2023/08/d160d4499ed752ef.jpg',
  mbImg: 'https://static.cmereye.com/static/ckjnewsite/img/banner/10.jpg',
  gif: 'https://static.cmereye.com/imgs/2023/08/0edc8793314c4da3.gif',
  text1: '#淨白牙齒 建立閃亮笑容',
  text2: '安全、可靠、快捷',
  tabNavName: 'pages.dental-service.teeth-whitening.introduce.tabNavName'
}

const headerConfig = {
  img: 'https://static.cmereye.com/imgs/2023/06/c495a817a3a44207.png',
  bg: 'https://static.cmereye.com/imgs/2023/06/6f9de9264afc70b9.jpg',
  mbImg: 'https://static.cmereye.com/imgs/2023/06/c35d4f80203378f9.jpg',
  pageName: 'teeth-whitening',
  pcText: ['淨白牙齒，建立閃亮笑容','安全、可靠、快捷'],
  mbText: ['淨白牙齒','建立閃亮笑容']
}

const introduceData = {
  title: 'pages.dental-service.teeth-whitening.introduce.title',
  content: 'pages.dental-service.teeth-whitening.introduce.content',
  mbImg: 'https://static.cmereye.com/imgs/2023/09/97c8013543e105ba.jpg',
  pcImg: 'https://static.cmereye.com/imgs/2023/09/97c8013543e105ba.jpg',
  tabNavName: 'pages.dental-service.teeth-whitening.introduce.tabNavName',
  pageName: 'teeth-whitening',
}

const reasonData = {
  title: 'pages.dental-service.teeth-whitening.reason.title',
  text: 'pages.dental-service.teeth-whitening.reason.text',
  imgUrl: 'https://static.cmereye.com/imgs/2023/09/97c8013543e105ba.jpg',
  reasonLists: [
    {
      context: 'pages.dental-service.teeth-whitening.reason.lists[0].context',
    },
    {
      context: 'pages.dental-service.teeth-whitening.reason.lists[1].context',
    },
    {
      context: 'pages.dental-service.teeth-whitening.reason.lists[2].context',
    },
  ],
  isMediumCW: true
}

const noticeData = {
  title: '藍光美白技術',
  text: [
    [
      '採用高科技冷光技術，結合美白劑，',
      '對不同牙齒特質進行納米冷光護齒美白'
    ],
    [
      '這種技術可以將牙齒內部的大分子染色劑（深色）',
      '分解為小分子（淺色或無色），從而實現美白效果'
    ]
  ],
  lists: [
    {
      name: '滲透美白',
      text: '30分鐘滲透美白因子，能快速滲透到牙齒各個部位。'
    },
    {
      name: '舒適美白',
      text: '低溫藍光照射，舒適治療，避免紫外線和紅外線對牙齒的傷害。'
    },
    {
      name: '健康美白',
      text: '美白分子能快速分解，促進牙釉質再生，保護牙齒，實現健康美白。'
    },
    {
      name: '輕鬆美白',
      text: '一次治療即可提升3-8個VITA色階，輕鬆實現美白效果。'
    }
  ]
}
let noticeCurrent = ref(1)

//走马灯事件
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
  // console.log(windowWidth)
}

const stepData = {
  title: '藍光牙齒美白過程',
  stepLists: [
          {
            title: '1',
            text: '醫生評估病人口腔及牙齦狀況，了解病人需求，解釋漂牙的程序及風險等',
            textIn: ''
          },
          {
            title: '2',
            text: '進行簡單清潔',
            textIn: ''
          },
          {
            title: '3',
            text: '以牙齒專用色階進行對色，記錄療程前牙齒顏色的色號',
            textIn: ''
          },
          {
            title: '4',
            text: '套上口腔張口器及保護眼罩',
            textIn: ''
          },
          {
            title: '5',
            text: '在牙齦塗上牙齦保護劑，以免激光及美白劑刺激牙齦',
            textIn: ''
          },
          {
            title: '6',
            text: '在牙齒表面均勻塗上激光專用美白劑',
            textIn: ''
          },
          {
            title: '7',
            text: '以藍光燈開始照射牙齒，整個過程大概需要照射2-3次',
            textIn: ''
          },
          {
            title: '8',
            text: '療程完成後，清除美白劑與牙齦保護劑',
            textIn: ''
          },
          {
            title: '9',
            text: '以牙齒專用色階進行對色，比對療程前後效果',
            textIn: ''
          }
  ]
}

const noteData = {
  title: '療程後注意事項',
  lists: [
    {
      name: '1星期內避免進食刺激性食物及飲品',
    },
    {
      name: '3星期內避免進食色素較多的食物及飲品',
    },
    {
      name: '養成健康生活習慣，盡量避免吸煙',
    },
    {
      name: '早晚刷牙，進食後清潔口腔，保持口腔清潔衛生',
    }
  ],
  pageName: 'teethWhitening'
}

const problemData = {
  title: 'pages.dental-service.teeth-whitening.problem.title',
  lists: [
    {
      Q: 'pages.dental-service.teeth-whitening.problem.lists[0].Q',
      A: 'pages.dental-service.teeth-whitening.problem.lists[0].A'
    },
    {
      Q: 'pages.dental-service.teeth-whitening.problem.lists[1].Q',
      A: 'pages.dental-service.teeth-whitening.problem.lists[1].A'
    },
    {
      Q: 'pages.dental-service.teeth-whitening.problem.lists[2].Q',
      A: 'pages.dental-service.teeth-whitening.problem.lists[2].A'
    },
    {
      Q: 'pages.dental-service.teeth-whitening.problem.lists[3].Q',
      A: 'pages.dental-service.teeth-whitening.problem.lists[3].A'
    },
    {
      Q: 'pages.dental-service.teeth-whitening.problem.lists[4].Q',
      A: 'pages.dental-service.teeth-whitening.problem.lists[4].A'
    },
    {
      Q: 'pages.dental-service.teeth-whitening.problem.lists[5].Q',
      A: 'pages.dental-service.teeth-whitening.problem.lists[5].A'
    },
    {
      Q: 'pages.dental-service.teeth-whitening.problem.lists[6].Q',
      A: 'pages.dental-service.teeth-whitening.problem.lists[6].A'
    },
    {
      Q: 'pages.dental-service.teeth-whitening.problem.lists[7].Q',
      A: 'pages.dental-service.teeth-whitening.problem.lists[7].A'
    },
    {
      Q: 'pages.dental-service.teeth-whitening.problem.lists[8].Q',
      A: 'pages.dental-service.teeth-whitening.problem.lists[8].A'
    },
  ]
}

const conditionData = {
  title: '',
  text: '',
  lists: [
    {
      imgUrl: 'https://static.cmereye.com/imgs/2023/08/4ae13b3fd05710d2.png',
      title: '經常吸煙',
      text: '令牙齒變啡黑'
    },
    {
      imgUrl: 'https://static.cmereye.com/imgs/2023/08/691d6a9db7193d1b.png',
      title: '飲用深色飲品',
      text: '令牙齒變啡黑'
    },
    {
      imgUrl: 'https://static.cmereye.com/imgs/2023/08/b81ab4e57927c7e5.png',
      title: '年齡增長',
      text: '牙齒老化牙齒自然變黃'
    }
  ]
}

</script>


<template>
  <div>
    <!-- <PageHeader :headerConfig="headerConfig" /> -->
    <div class="teethWhiteningPage">
      <ServiceBanner :bannerData="bannerData" pageName="teethWhitening" />
      <!-- <div class="index_title pageCon">{{$t('pages.dental-service.title')}}</div> -->
      <ServiceIntroduce :introduceData="introduceData" :reasonData="reasonData" :introduceType="'1'" :moduleType="'4'" :animConfig="{color: '#FC1682',text:'TEETH WHITENING'}" />
      <!-- <ServiceReason :reasonData="reasonData" /> -->
      <div class="condition">
        <RippleLine type="5" />
        <div class="condition-bg">
        <div class="condition-title">
          <div class="condition-title-in">
            你有以下情況嗎？
          </div>
        </div>
        <div class="condition-text">
          牙齒美白可解決以下情況所致的<span>牙齒變色問題</span>
        </div>
        <div class="condition-lists pageCon">
          <div class="condition-lists-in" v-for="(conditionItme,conditionIndex) in conditionData.lists" :key="conditionIndex">
            <div>
              <img :src="conditionItme.imgUrl" alt="">
            </div>
            <div>
              <span>{{conditionItme.title}}</span>
              <span>{{conditionItme.text}}</span>
            </div>
          </div>
        </div>
        </div>
        <RippleLine type="5" :isBottom="true" />
      </div>
      <div class="notice">
        <div class="notice-title">
          <div class="notice-title-in">
            <span>{{noticeData.title}}</span>
          </div>
        </div>
        <div class="notice-text">
          <div v-for="(noticeTextItem,noticeTextIndex) in noticeData.text" :key="noticeTextIndex">
            <span v-for="textItem in noticeTextItem" :key="textItem">{{textItem}}</span>
          </div>
        </div>
        <div class="notice-list">
          <div class="notice-list-in" v-for="(noticeItem,noticeIndex) in noticeData.lists" :key="noticeIndex">
            <div class="box">
              <div>
                <img src="https://static.cmereye.com/imgs/2023/08/97f0fb29b550a927.png" alt="">
              </div>
              <div class="box-name">{{noticeItem.name}}</div>
              <div class="box-text">{{noticeItem.text}}</div>
            </div>
          </div>
        </div>
      </div>
      <ServiceStep :stepData="stepData" pageName="teethWhitening" />
      <div class="maintain">
        <div class="maintain-title">
          <div class="maintain-title-in">
            藍光美白可以保持多久？
          </div>
          <div class="svgQuestionMark">
            <SvgQuestionMark />
          </div>
        </div>
        <div class="maintain-in">
          藍光美白牙齒的效果通常可以持續兩年左右，但具體的時間長短取決於患者的飲食和衛生習慣。如果患者平時注意牙齒保養，少食用深色食物，並保持良好口腔衛生習慣，如按時刷牙和飯後漱口，那麼美白效果的持續時間相對會更長。
        </div>
      </div>
      <div class="noteCon">
        <RippleLine :type="'2'" />
        <ServiceNote :noteData="noteData" />
        <RippleLine :type="'2'" :isBottom="true" />
      </div>
      <ServiceProblem :problemData="problemData" />
      <serviceCard />
      <RippleLine :type="'4'" />
      <ContactUs />
    </div>
    <!-- <PageFooter /> -->
    <!-- <PageNavbar /> -->
  </div>
</template>



<style lang="scss" scoped>
.teethWhiteningPage{
  margin-top: -20px;
  padding-bottom: 140px;
}
.notice {
  width: 100%;
  max-width: 1450px;
  margin: 180px auto 0;
  padding-bottom: 44px;
  &-title{
    text-align: center;
    color: var(--topic-color);
    font-size: 30px;
    font-style: normal;
    font-weight: 500;
    line-height: 160%; /* 48px */
    letter-spacing: 6.6px;
  }
  &-text{
    margin-top: 43px;
    &>div{
      text-align: center;
      span{
        color: var(--topic-text-color);
        text-align: center;
        font-size: 19px;
        font-style: normal;
        font-weight: 500;
        line-height: 160%; /* 30.4px */
        letter-spacing: 3.8px;
      }
    }
  }
  &-list {
    width: 100%;
    margin: 89px auto 0;
    display: flex;
    &-in{
      padding: 0 57px;
    }
    .box {
      &>div {
        display: flex;
        color: var(--topic-text-color);
        text-align: justify;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: 160%; 
        box-sizing: border-box;
        display: flex;
        justify-content: center;

        &:nth-of-type(2) {
          color: var(--topic-color);
          margin-top: 19px;
          height: 69px;
          font-size: 36px;
          font-style: normal;
          font-weight: 500;
          line-height: 160%;
          align-items: center;
        }
        &:nth-of-type(3) {
          margin-top: 0;
          padding-top: 37px;
        }
      }
    }
  }
  &-line {
    width: 83px;
    margin: 22px auto;
  }
}
.condition{
  margin-top: 185px;
  
  &-bg{
    background: #FF6096;
    padding: 140px 0;
  }
  &-title{
    display: flex;
    justify-content: center;
    &-in{
      color: #FFF;
      font-size: 30px;
      font-weight: 500;
      line-height: 160%; /* 48px */
      letter-spacing: 6.6px
    }
  }
  &-text{
    margin-top: 50px;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    letter-spacing: 3.8px;
    line-height: 160%;
    text-align: center;
    color: #fff;
    span{
      color: #FECB02;
    }
  }
  &-lists{
    margin-top: 65px;
    display: flex;
    justify-content: space-between;
    &-in{
      display: flex;
      flex-direction: column;
      flex: 1;
      max-width: 400px;
      &>div:last-child{
        margin-top: 27px;
        font-style: normal;
        font-weight: 600;
        font-size: 30px;
        line-height: 160%;
        text-align: center;
        color: #fff;
        img{
          width: 100%;
        }
        span{
          display: inline-block;
          width: 100%;
          text-align: center;
          font-size: 24px;
          &:last-child{
            color: #FECB02;
          }
        }
      }
    }
  }
}
.maintain{
  margin-top: 285px;
  &-title{
    color: #FC1682;
    font-size: 30px;
    font-style: normal;
    font-weight: 500;
    line-height: 160%; /* 48px */
    letter-spacing: 6.6px;
    text-align: center;
    position: relative;
    &-in{
      position: relative;
      display: inline-block;
      &::before{
        content: '';
        width: 12px;
        height: 12px;
        transform: rotate(45deg);
        background: var(--topic-color);
        position: absolute;
        left: -40px;
        bottom: 30%;
        transform: translateY(-50%) rotate(45deg);
      }
      &::after{
        content: '';
        width: 12px;
        height: 12px;
        transform: rotate(-45deg);
        background: var(--topic-color);
        position: absolute;
        right: -40px;
        bottom: 30%;
        transform: translateY(-50%) rotate(45deg);
      }
    }
    .svgQuestionMark{
      position: absolute;
      left: 50%;
      top: 0;
      transform: translate(-50%,-40%);
    }
  }
  &-in{
    width: calc(100% - 60px);
    max-width: 904px;
    margin: 138px auto 0;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 160%;
    letter-spacing: 2.4px;
    color: var(--topic-text-color);
  }
}
.noteCon{
  padding: 176px 0 60px;
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
    margin: 80px auto 0;
    padding-bottom: 0;
    &-title{
      font-size: 20px;
      letter-spacing: 4.4px;
    }
    &-text{
      margin-top: 35px;
      padding: 0 50px;
      &>div{
        span{
          font-size: 15px;
          display: inline;
          letter-spacing: 3px;
        }
      }
    }
    &-list{
      flex-wrap: wrap;
      padding: 0 10px;

      &-in{
        width: 50%;
        padding: 0 10px 21px;
        // height: 100%;
      }
      .box{
        height: 100%;
        padding: 33px 18px 58px;
        border: 1px solid var(--topic-color);
        border-radius: 40vw;
        &>div{
          &:nth-of-type(1){
            display: flex;
            justify-content: center;
            img{
              max-width: 48px;
            }
          }
          &:nth-of-type(2) {
            font-size: 20px;
            margin-top: 4px;
            height: 32px;
          }
          &:nth-of-type(3) {
            font-size: 15px;
            padding-top: 7px;
          }
        }
        
      }
    }
  }
  .condition{
    margin-top: 80px;
    &-bg{
      padding: 20px 0;
    }
    &-title{
      &-in{
        font-size: 20px;
        letter-spacing: 5px;
      }
    }
    &-text{
      margin-top: 20px;
      font-size: 15px;
      letter-spacing: 3px;
    }
    &-lists{
      margin-top: 80px;
      flex-direction: column;
      padding: 0 50px;
      &-in{
        &>div:last-child{
          margin-top: 25px;
          font-size: 20px;
          span{
            font-size: 18px;
          }
        }
        &:nth-of-type(1){
          margin-bottom: 80px;
        }
        &:nth-of-type(2){
          margin-bottom: 80px;
        }
      }
    }
  }
  .maintain{
    margin-top: 115px;
    &-title{
      font-size: 20px;
      letter-spacing: 5px;
      &-in{
        &::before{
          width: 6px;
          height: 6px;
          left: -20px;
        }
        &::after{
          width: 6px;
          height: 6px;
          right: -20px;
        }
      }
      .svgQuestionMark{
        transform: translate(-50%,-40%) scale(.6);
      }
    }
    &-in{
      margin: 44px auto 0;
      padding: 44px 12px;
      font-size: 15px;
      text-align: justify;
      line-height: 220%;
      letter-spacing: 4.5px;
    }
  }
  .noteCon{
    padding: 36px 0 60px;
  }
}
</style>