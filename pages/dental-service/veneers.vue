<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
const appState = useAppState()
appState.setDentistryService('veneers')
useHead({
  title: "瓷貼片｜牙科服務",
  meta: [
   {
      hid: 'description',
      name: 'description',
      content: '愛康健提供瓷貼片服務，透過度身訂製的纖薄瓷貼片黏附於牙齒表層，可以改善牙齒的形狀、長度、外觀和顏色，達到美白和整齊的效果。瓷貼片質地自然，可以有效地美化牙齒外觀，讓您擁有更自信的笑容。主要用於美容修復，可以選擇使用瓷貼片修復形狀或牙色不均的牙齒，達到理想的效果和色澤。',
   },
   {
      hid: 'Keywords',
      name: 'Keywords',
      content: '瓷貼片 瓷貼片價格 瓷貼片推薦 全瓷牙貼價錢 牙貼片 牙瓷貼片 牙貼面 瓷牙貼片 牙貼美白 美白牙齒 愛康健 深圳愛康健 深圳專業牙科中心 愛康健醫院 愛康健口腔醫院 深圳愛康健口腔醫院愛康健 CKJ愛康健齒科集團 深圳口腔專科醫院 愛康健齒科集團 深圳牙科醫院牙科服務內地牙科 深圳口腔專科',
   },
  ]
})

const bannerData = {
  img: 'https://static.cmereye.com/imgs/2023/07/f0b9f3bfc80d96b1.jpg',
  mbImg: 'https://static.cmereye.com/imgs/2023/08/3b1b35c6febb6e99.jpg',
  gif: 'https://static.cmereye.com/imgs/2023/08/0edc8793314c4da3.gif',
  text1: '#自訂零死角潔白微笑線',
  text2: '展現自信微笑',
  tabNavName: 'pages.dental-service.veneers.introduce.tabNavName'
}

const headerConfig = {
  img: 'https://static.cmereye.com/imgs/2023/06/08c3c37fae7cce23.png',
  bg: 'https://static.cmereye.com/imgs/2023/06/d22dc37028a9e513.jpg',
  mbImg: 'https://static.cmereye.com/imgs/2023/06/473d12422a9fb1c8.jpg',
  pageName: 'veneers',
  pcText: ['自訂零死角潔白微笑線','展現自信微笑'],
  mbText: ['自訂零死角潔白微笑線','展現自信微笑']
}

const introduceData = {
  // title: '美容牙科',
  title: 'pages.dental-service.veneers.introduce.title',
  content: 'pages.dental-service.veneers.introduce.content',
  mbImg: 'https://static.cmereye.com/imgs/2023/05/799e2153f93aa770.jpg',
  pcImg: 'https://static.cmereye.com/imgs/2023/08/9a501131524fa3e3.png',
  tabNavName: 'pages.dental-service.veneers.introduce.tabNavName',
  pageName: 'veneers',
}

const stepData = {
  title: '瓷貼片治療過程',
  stepLists: [
      {
        title: '1',
        text: '醫生檢查牙齒及牙周健康，如存在口腔問題，必須先洗牙或接受牙周病治療後才能使用瓷貼片'
      },
      {
        title: '2',
        text: '確定進行療程'
      },
      {
        title: '3',
        text: '輕輕磨走牙齒表面的琺瑯質及把牙齒稍稍磨短'
      },
      {
        title: '4',
        text: '印製牙模及拍攝X光片'
      },
      {
        title: '5',
        text: '設計及訂製瓷貼片，確保適合進行瓷牙貼片療程'
      },
      {
        title: '6',
        text: ' 把貼片粘到牙齒上'
      },
      {
        title: '7',
        text: '檢查貼片粘合程度及顏色'
      },
      {
        title: '8',
        text: '覆診，檢查牙齦狀況與貼片位置'
      }
  ]
}

const featuresData = {
  title: '適合使用瓷貼片的人士',
  featuresLists: [
    {
      name: '牙齒縫隙過大',
    },
    {
      name: '牙齒排列不整齊',
    },
    {
      name: '牙齒出現磨損、破碎或斷裂',
    },
    {
      name: '完成牙齒矯正後，牙齒仍有瑕疵',
    },
    {
      name: '牙齒變色，漂牙無法讓牙齒回復潔白',
    },
    {
      name: '牙齒形狀不美觀（如：牙齒過小、牙齒表面有凹坑或凸起）',
    }
  ]
}
const noteData = {
  title: '適合使用瓷貼片的人士',
  lists: [
    {
      name: '牙齒縫隙過大',
    },
    {
      name: '牙齒排列不整齊',
    },
    {
      name: '牙齒出現磨損、破碎或斷裂',
    },
    {
      name: '完成牙齒矯正後，牙齒仍有瑕疵',
    },
    {
      name: '牙齒變色，漂牙無法讓牙齒回復潔白',
    },
    {
      name: '牙齒形狀不美觀（如：牙齒過小、牙齒表面有凹坑或凸起）',
    }
  ]
}

const noticeData = {
  title: '選擇瓷貼片療程前你要知',
  meritLists: [
    '優點',
    '短時間內讓牙齒回復整齊美觀，效果自然',
    '需磨掉的牙齒面積較小，便能改善牙齒形狀、長度、弧度、顏色等',
    '貼片物料能減低食物色素沉積的問題',
    '不影響正常的咬合及咀嚼能力，容易適應'
  ],
  shortcomingLists: [
    '缺點',
    '有碎裂或脫落的危機',
    '如沒有緊密粘合到牙齒表面，容易導致蛀牙、牙齦發炎及牙周病等',
    '色澤及形狀不一定很自然'
  ]
}

const problemData = {
  title: 'pages.dental-service.veneers.problem.title',
  lists: [
    {
      Q: 'pages.dental-service.veneers.problem.lists[0].Q',
      A: 'pages.dental-service.veneers.problem.lists[0].A'
    },
    {
      Q: 'pages.dental-service.veneers.problem.lists[1].Q',
      A: 'pages.dental-service.veneers.problem.lists[1].A'
    },
    {
      Q: 'pages.dental-service.veneers.problem.lists[2].Q',
      A: 'pages.dental-service.veneers.problem.lists[2].A'
    },
  ]
}

let noticeCurrent = ref(1)

//走马灯事件
const onSlideChange = (swiper:any) => {
  noticeCurrent.value = swiper.realIndex + 1
}

let windowWidth = ref(1920)

onMounted(()=>{
  getWindowWidth()
  window.addEventListener('resize',getWindowWidth)
})

const getWindowWidth = () => {
  windowWidth.value = window.innerWidth
  // console.log(windowWidth)
}

let veneerSwiperRef ={
  slideToLoop: (a)=>{}
}
const setVeneerSwiperRef = (swiper:any) => {
  veneerSwiperRef = swiper;
}
const handleLineCur = (_value:number) =>{
  // console.log(_value)
  veneerSwiperRef.slideToLoop(_value-1)
}

</script>


<template>
<div>
  <div class="veneersPage">
    <ServiceBanner :bannerData="bannerData" :pageName="'veneers'" />
    <ServiceIntroduce :introduceData="introduceData" :moduleType="'2'" :animConfig="{color: '#469AF7',text: 'VENEER'}" />
    <div class="features">
        <RippleLine :type="'2'" />
        <div class="features-box">
          <div class="features-in">
            <div class="features-in-l">
              <div class="l-in">
                <img src="https://static.cmereye.com/imgs/2023/08/d8aeeddad604eb32.png" alt="">
              </div>
            </div>
            <div class="features-in-r">
              <div class="features-in-r-title">
                <serviceTitle :title="featuresData.title" :yaBorder="'#FECB02'" :bgColor="'#fff'" :textColor="'#505050'" />
                <!-- {{$t(featuresData.title)}} -->
              </div>
              <div class="features-in-r-img">
                <img src="https://static.cmereye.com/imgs/2023/08/d8aeeddad604eb32.png" alt="">
              </div>
              <div class="features-in-r-item" v-for="(featuresItem,index) in featuresData.featuresLists" :key="index">
                <div class="w-20px">· </div>
                <div>{{featuresItem.name}}</div>
              </div>
            </div>
          </div>
        </div>
        <RippleLine :type="'2'" :isBottom="true" />
      </div>
    <!-- 注意事项 -->
    <!-- <ServiceNote :noteData="noteData" /> -->
    <!-- 步骤 -->
    <ServiceStep :stepData="stepData" />
    <div class="notice">
      <div class="notice-title">
        <div class="notice-title-in bb">
          <ServiceTitle :title="noticeData.title" />
          <!-- {{noticeData.title}} -->
        </div>
      </div>
      <div class="notice-in">
            <div class="notice-in-table">
              <div class="box box-left">
                <div class="box-in" v-for="(meritItem,meritIndex) in noticeData.meritLists" :key="meritIndex" >
                  <div>{{meritItem}}</div>
                </div>
              </div>
              <div class="box box-right">
                <div class="box-in" v-for="(shortcomingItem,shortcomingIndex) in noticeData.shortcomingLists" :key="shortcomingIndex" >
                  <div>{{shortcomingItem}}</div>
                </div>
              </div>
            </div>
      </div>
    </div>
    <RippleLine :type="'4'" />
    <!-- 问题 -->
    <ServiceProblem :problemData="problemData" />
    <serviceCard />
    <RippleLine :type="'4'" />
    <ContactUs />
  </div>
</div>
</template>



<style lang="scss" scoped>
.veneersPage{
  margin-top: -20px;
  padding-bottom: 140px;
}
.notice{
  width: 100%;
  max-width: 1005px;
  margin: 171px auto;
  &-title{
    display: flex;
    justify-content: center;
  }
  &-in{
    width: 100%;
    margin: 120px auto 0;
    &-table{
      display: flex;
    }
    .box{
      .box-in{
        height: 81px;
        display: flex;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 181%; /* 32.58px */
        letter-spacing: 3px;
        color: var(--topic-text-color);
        padding: 0 43px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        border-bottom: 1px solid var(--topic-color);
        &:first-child{
          background: var(--topic-color);
          color: #fff;
          height: 48px;
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: 48px; /* 28.8px */
          letter-spacing: 4.5px;
        }
        &:nth-of-type(2){
          margin-top: 0;
        }
      }
    }
    .box-left{
      overflow: hidden;
    }
    .box-right{
      overflow: hidden;
      .box-in{
        border-left: 1px solid var(--topic-color);
        &:nth-of-type(3){
          height: 162px;
        }
        &:first-child{
          margin-left: 1px;
          border-left: none;
        }
      }
    }
  }
}
.features{
      margin-top: 140px;
      width: 100%;
      margin-bottom: -160px;
      &-box{
        background: var(--yellow-color);
      }
      &-in{
        width: 100%;
        height: auto;
        max-width: 945px;
        margin: 0 auto;
        padding: 165px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        &-l{
          margin-right: 7.93%;
          width: 46.45%;
          position: relative;
          .l-in{
            padding-bottom: 100%;
            height: 0;
            position: relative;
            border: 5px solid #fff;
            border-radius: 50%;
          }
          img{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
          }
        }
        &-r{
          &-title{
            margin-bottom: 30px;
          }
          &-img{
            display: none;
          }
          &-item{
            display: flex;
            color: #FFF;
            font-size: 16px;
            font-weight: 400;
            line-height: 181%; /* 28.96px */
            letter-spacing: 4.8px;
            &>div:first-child{
              width: 20px;
            }
          }
        }
      }
    }
@media (min-width: 768px) and (max-width: 1452px) {}
//md
@media only screen and (max-width: 760px) {
  .notice{
    margin: 84px auto;
    &-in{
      width: 100%;
      margin: 35px 0 0;
      .box{
        .box-in{
          height: 84px;
          font-weight: 500;
          font-size: 12px;
          margin-top: 0px;
          padding: 0 19px;
          letter-spacing: 2.4px;
          &:first-child{
            height: 20px;
            line-height: 20px;
            padding-top: 3px;
            font-weight: 400;
            font-size: 12px;
          }
        }
      }
      .box-right{
        .box-in{
          &:nth-of-type(3){
            height: 168px;
          }
        }
      }
    }
  }
  .features{
        margin-top: 67px;
        margin-bottom: -100px;
        &-in{
          padding: 30px 40px 40px;
          box-sizing: border-box;
          flex-direction: column;
          &-l{
            display: none;
          }
          &-r{
            &-title{
              display: flex;
              justify-content: center;
            }
            &-img{
              display: block;
              width: 144px;
              height: 144px;
              border: 3px solid #fff;
              border-radius: 50%;
              display: flex;
              justify-content: center;
              align-items: center;
              margin: 30px auto 30px;
              img{
                width: 60%;
              }
            }
            &-item{
              font-weight: 500;
              font-size: 15px;
              letter-spacing: 4.5px;
            }
          }
        }
      }
}
</style>