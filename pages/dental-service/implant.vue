<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
const appState = useAppState()
appState.setDentistryService('implant')
useHead({
  title: "種植牙 | 微創植牙 | 牙科服務",
  meta: [
   {
      hid: 'description',
      name: 'description',
      content: ' 愛康健提供種植牙(種牙/植牙)服務，利用鈦金屬等物料製作成植體，然後植入進行牙槽骨當中，代替牙根以作支撐，然後在上面植入假牙、牙橋或假牙托來填補空缺的牙齒。我們除了提供傳統的植牙方式，亦有微創植牙技術，為安裝人造牙齒的有效方法。',
   },
   {
      hid: 'Keywords',
      name: 'Keywords',
      content: '假牙 植牙 種牙 種植牙 植牙價錢 種牙價錢 假牙價錢 微創植牙 植牙收費 種牙收費 假牙收費 假牙托 活動牙托 人造牙齒 假牙價錢 植牙價錢 鑲牙價錢 鑲假牙價錢 鑲假牙 愛康健種牙 愛康健假牙 深圳植牙 深圳種牙 深圳假牙 羅湖種牙 羅湖假牙 羅湖鑲牙 深圳整牙 羅湖整牙 愛康健 深圳愛康健 深圳專業牙科中心 愛康健醫院 愛康健口腔醫院 深圳愛康健口腔醫院愛康健 CKJ愛康健齒科集團 深圳口腔專科醫院 愛康健齒科集團 深圳牙科醫院牙科服務內地牙科 深圳口腔專科',
   },
  ]
})

const bannerData = {
  img: 'https://static.cmereye.com/imgs/2023/07/f0b9f3bfc80d96b1.jpg',
  mbImg: 'https://static.cmereye.com/imgs/2023/08/3b1b35c6febb6e99.jpg',
  gif: 'https://static.cmereye.com/imgs/2023/08/0edc8793314c4da3.gif',
  text1: '#享受失而復得的喜悅',
  text2: '重拾完整人生之旅',
  tabNavName: 'pages.dental-service.implant.introduce.tabNavName'
}

const headerConfig = {
  img: 'https://static.cmereye.com/imgs/2023/06/baaf111867247a7f.png',
  bg: 'https://static.cmereye.com/imgs/2023/06/2c162ddf8e5bfcd7.jpg',
  mbImg: 'https://static.cmereye.com/imgs/2023/06/09a561c09c1a9e12.jpg',
  pageName: 'implant',
  pcText: ['享受失而復得的喜悅','重拾完整人生之旅'],
  mbText: ['享受失而復得的喜悅','重拾完整人生之旅']
}

const introduceData = {
  title: 'pages.dental-service.implant.introduce.title',
  content: 'pages.dental-service.implant.introduce.content',
  mbImg: 'https://static.cmereye.com/imgs/2023/05/2bc3a5d449c9b42e.jpg',
  pcImg: 'https://static.cmereye.com/imgs/2023/05/611a2ada62c8fa55.jpg',
  tabNavName: 'pages.dental-service.implant.introduce.tabNavName',
}

const featuresData = {
  title: 'pages.dental-service.implant.features.title',
  featuresLists: [
    'pages.dental-service.implant.features.lists[0].context',
    'pages.dental-service.implant.features.lists[1].context',
    'pages.dental-service.implant.features.lists[2].context',
    'pages.dental-service.implant.features.lists[3].context'
  ]
}

const noteLists = [
  {
    name: 'pages.dental-service.implant.note.lists[0].name',
    img: 'https://static.cmereye.com/imgs/2023/08/7dabe6faacc48b04.png'
  },
  {
    name: 'pages.dental-service.implant.note.lists[1].name',
    img: 'https://static.cmereye.com/imgs/2023/08/787663abc1c63cef.png'
  },
  {
    name: 'pages.dental-service.implant.note.lists[2].name',
    img: 'https://static.cmereye.com/imgs/2023/08/a77e15eda9e64099.png'
  },
  {
    name: 'pages.dental-service.implant.note.lists[3].name',
    img: 'https://static.cmereye.com/imgs/2023/08/228db97180a69d96.png'
  },
  {
    name: 'pages.dental-service.implant.note.lists[4].name',
    img: 'https://static.cmereye.com/imgs/2023/08/8c7772210c6ef1cf.png'
  },
  {
    name: 'pages.dental-service.implant.note.lists[5].name',
    img: 'https://static.cmereye.com/imgs/2023/08/3ba1917956c5ce31.png'
  },
  {
    name: 'pages.dental-service.implant.note.lists[6].name',
    img: 'https://static.cmereye.com/imgs/2023/08/263a527d0134bbeb.png'
  },
  {
    name: 'pages.dental-service.implant.note.lists[7].name',
    img: 'https://static.cmereye.com/imgs/2023/08/754080dcc96893a6.png'
  }
]

const stepData = {
  title: '認識種植牙的六個步驟',
  remark: '種植牙於現在是較常見的牙科手術之一，病人最少需要 2 至 3 次的覆診來完成整個種牙程序，整個程序或需要 3 至 6 個月時間。',
  stepLists: [
    {
      title: '1',
      text: '進行全面口腔檢查、X光或3D電腦掃描，確定植體的安裝位置，需確認患者的身體狀況及病歷'
    },
    {
      title: '2',
      text: '注射麻醉藥'
    },
    {
      title: '3',
      text: '翻開牙齦在適合安裝的位置鑽孔，植入植體，作為假牙的牙根，有需要時可以利用手術導航系統輔助植入理想位置，再縫合傷口'
    },
    {
      title: '4',
      text: '等待2至3個月後，當牙骨與植體癒合，牙醫會安放癒合帽'
    },
    {
      title: '5',
      text: '牙齦癒合後，再進行下一階段的療程進行掃描式印模，再由牙科技師製作義齒'
    },
    {
      title: '6',
      text: '將義齒固定在植體上，補上缺去的牙齒'
    }
  ]
}

const reasonData = {
  title: 'pages.dental-service.implant.reason.title',
  text: 'pages.dental-service.implant.reason.text',
  imgUrl: 'https://static.cmereye.com/imgs/2023/08/c5c74925f782c874.jpg',
  reasonLists:[
    {
      context: 'pages.dental-service.implant.reason.lists[0].context',
    },
    {
      hideIcon: true,
      context: 'pages.dental-service.implant.reason.lists[1].context',
    },
    {
      context: 'pages.dental-service.implant.reason.lists[2].context',
    },
    {
      context: 'pages.dental-service.implant.reason.lists[3].context',
    },
    {
      context: 'pages.dental-service.implant.reason.lists[4].context',
    },
    {
      context: 'pages.dental-service.implant.reason.lists[5].context',
    }
  ]
}

const noticeData = {
  title: 'pages.dental-service.implant.notice.title',
  topText: [
    'pages.dental-service.implant.notice.topText[0].context',
    'pages.dental-service.implant.notice.topText[1].context'
  ],
  meritLists: [
    'pages.dental-service.implant.notice.meritLists[0].context',
    'pages.dental-service.implant.notice.meritLists[1].context',
  ],
  shortcomingLists: [
    'pages.dental-service.implant.notice.shortcomingLists[0].context',
    'pages.dental-service.implant.notice.shortcomingLists[1].context',
  ],
  bottomText: [
    'pages.dental-service.implant.notice.bottomText[0].context',
    'pages.dental-service.implant.notice.bottomText[1].context',
    'pages.dental-service.implant.notice.bottomText[2].context'
  ]
}

const detailData = {
  title: 'pages.dental-service.implant.detail.title',
  detailTableCol: [
    'pages.dental-service.implant.detail.tableCol[0].text',
    'pages.dental-service.implant.detail.tableCol[1].text',
    'pages.dental-service.implant.detail.tableCol[2].text',
    'pages.dental-service.implant.detail.tableCol[3].text'
  ],
  detailTable: [
    {
      service: [
        'pages.dental-service.implant.detail.tableData[0].service[0].context',
        'pages.dental-service.implant.detail.tableData[0].service[1].context',
      ],
      type: [
        'pages.dental-service.implant.detail.tableData[0].type[0].context',
        'pages.dental-service.implant.detail.tableData[0].type[1].context',
        [
          'pages.dental-service.implant.detail.tableData[0].type[2].context[0].text',
          'pages.dental-service.implant.detail.tableData[0].type[2].context[1].text',
          'pages.dental-service.implant.detail.tableData[0].type[2].context[2].text'
        ]
      ],
      price: '¥13800',
      discountedPrice: '¥8800'
    },
    {
      service: [
        'pages.dental-service.implant.detail.tableData[1].service[0].context',
        'pages.dental-service.implant.detail.tableData[1].service[1].context',
      ],
      type: [
        'pages.dental-service.implant.detail.tableData[1].type[0].context',
        'pages.dental-service.implant.detail.tableData[1].type[1].context',
        [
          'pages.dental-service.implant.detail.tableData[1].type[2].context[0].text',
          'pages.dental-service.implant.detail.tableData[1].type[2].context[1].text'
        ]
      ],
      price: '¥15800',
      discountedPrice: '¥12800'
    },
    {
      service: [
        'pages.dental-service.implant.detail.tableData[2].service[0].context',
        'pages.dental-service.implant.detail.tableData[2].service[1].context',
      ],
      type: [
        'pages.dental-service.implant.detail.tableData[2].type[0].context',
        'pages.dental-service.implant.detail.tableData[2].type[1].context',
        [
          'pages.dental-service.implant.detail.tableData[2].type[2].context[0].text',
          'pages.dental-service.implant.detail.tableData[2].type[2].context[1].text',
          'pages.dental-service.implant.detail.tableData[2].type[2].context[2].text'
        ]
      ],
      price: '¥18800',
      discountedPrice: '¥14800'
    },
    {
      service: [
        'pages.dental-service.implant.detail.tableData[3].service[0].context',
        'pages.dental-service.implant.detail.tableData[3].service[1].context',
        'pages.dental-service.implant.detail.tableData[3].service[2].context'
      ],
      type: [
        'pages.dental-service.implant.detail.tableData[3].type[0].context',
        'pages.dental-service.implant.detail.tableData[3].type[1].context',
        [
          'pages.dental-service.implant.detail.tableData[3].type[2].context[0].text',
          'pages.dental-service.implant.detail.tableData[3].type[2].context[1].text',
          'pages.dental-service.implant.detail.tableData[3].type[2].context[2].text',
          'pages.dental-service.implant.detail.tableData[3].type[2].context[3].text',
          'pages.dental-service.implant.detail.tableData[3].type[2].context[4].text'
        ]
      ],
      price: '¥26000',
      discountedPrice: '¥18800'
    }
  ],
  remark: 'pages.dental-service.implant.detail.remark'
}

const problemData = {
  title: 'pages.dental-service.implant.problem.title',
  lists: [
    {
      Q: 'pages.dental-service.implant.problem.lists[0].Q',
      A: 'pages.dental-service.implant.problem.lists[0].A'
    },
    {
      Q: 'pages.dental-service.implant.problem.lists[1].Q',
      A: 'pages.dental-service.implant.problem.lists[1].A'
    },
    {
      Q: 'pages.dental-service.implant.problem.lists[2].Q',
      A: 'pages.dental-service.implant.problem.lists[2].A'
    },
    {
      Q: 'pages.dental-service.implant.problem.lists[3].Q',
      A: 'pages.dental-service.implant.problem.lists[3].A'
    },
    {
      Q: 'pages.dental-service.implant.problem.lists[4].Q',
      A: 'pages.dental-service.implant.problem.lists[4].A'
    },
    {
      Q: 'pages.dental-service.implant.problem.lists[5].Q',
      A: 'pages.dental-service.implant.problem.lists[5].A'
    },
  ]
}

let noticeCurrent = ref(1)

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
}

// const bannerData = {
//   img: 'https://static.cmereye.com/imgs/2023/07/f0b9f3bfc80d96b1.jpg',
//   gif: 'https://static.cmereye.com/imgs/2023/08/0edc8793314c4da3.gif',
//   text1: '#享受失而復得的喜悅',
//   text2: '重拾完整人生之旅'
// }

</script>

<template>
  <div>
    <div class="dentistryServices">
      <ServiceBanner />
      <ServiceIntroduce :introduceData="introduceData" :reasonData="reasonData" />
      <div class="features">
        <RippleLine :type="'2'" />
        <div class="features-box">
          <div class="features-in">
            <div class="features-in-l">
              <div class="l-in">
                <img src="https://static.cmereye.com/imgs/2023/08/74a5cfd8e8f07994.png" alt="">
              </div>
            </div>
            <div class="features-in-r">
              <div class="features-in-r-title">
                <serviceTitle :title="'種植牙的特點'" :yaBorder="'#FECB02'" :bgColor="'#fff'" :textColor="'#505050'" />
                <!-- {{$t(featuresData.title)}} -->
              </div>
              <div class="features-in-r-img">
                <img src="https://static.cmereye.com/imgs/2023/08/74a5cfd8e8f07994.png" alt="">
              </div>
              <div class="features-in-r-item" v-for="(featuresItem,index) in featuresData.featuresLists" :key="index">
                <div class="w-20px">· </div>
                <div>{{$t(featuresItem)}}</div>
              </div>
            </div>
          </div>
        </div>
        <RippleLine :type="'2'" :isBottom="true" />
      </div>
      <div class="notice">
        <div class="notice-title">
          <div class="notice-title-in">
            <serviceTitle :title="'傳統植牙和微創植牙的區別？'" />
            <!-- {{$t(noticeData.title)}} -->
          </div>
        </div>
        <div class="notice-topText">
          <span v-for="(topTextItem,topTextIndex) in noticeData.topText" :key="topTextIndex">{{$t(topTextItem)}}</span>
        </div>
        <div class="notice-in">
          <div class="box box-left">
            <div class="box-in" v-for="(meritItem,meritIndex) in noticeData.meritLists" :key="meritIndex" >
              <div><span>{{$t(meritItem)}}</span></div>
            </div>
          </div>
          <div class="box box-right">
            <div class="box-in" v-for="(shortcomingItem,shortcomingIndex) in noticeData.shortcomingLists" :key="shortcomingIndex" >
              <div><span>{{$t(shortcomingItem)}}</span></div>
            </div>
          </div>
        </div>
        <div class="notice-bottomText">
          <span v-for="(bottomTextItem,bottomTextIndex) in noticeData.bottomText" :key="bottomTextIndex">{{$t(bottomTextItem)}}</span>
        </div>
      </div>
      <ServiceStep :stepData="stepData" />
      <div class="note">
        <div class="note-title">
          <div class="note-title-in">
            <!-- {{$t('pages.dental-service.implant.note.title')}} -->
            <serviceTitle :title="'種植牙後注意事項'" />
          </div>
        </div>
        <div class="noteCard pageCon">
          <div class="noteCard-in" v-for="(note,noteIndex) in noteLists" :key="noteIndex">
            <div class="noteCard-in-image">
              <img :src="note.img" alt="">
            </div>
            <div class="noteCard-in-name">{{$t(note.name)}}</div>
          </div>
        </div>
      </div>
      <div class="detail">
        <RippleLine :type="'4'" />
        <div class="detail-title">
          <div class="detail-title-in bb">
            <!-- {{$t(detailData.title)}} -->
            <serviceTitle :title="'項目收費詳情'" />
          </div>
        </div>
        <div class="detail-table">
          <div class="detail-table-in">
            <div class="detail-table-in-col">
              <div v-for="(col,colIndex) in detailData.detailTableCol" :key="colIndex">
                <div v-if="col.length <= 2">{{$t(col)}}</div>
                <div v-else>{{$t(col).slice(0,col.length-4)}}</div>
                <div v-if="col.length > 2">{{$t(col).slice(col.length-4,col.length)}}</div>
              </div>
            </div>
            <div class="detail-table-in-data" v-for="(tableItem,tableItemIndex) in detailData.detailTable" :key="tableItemIndex">
              <div>
                <span v-for="(serviceTtem,serviceIndex) in tableItem.service" :key="serviceIndex">{{$t(serviceTtem)}}</span>
              </div>
              <div>
                <span v-for="(typeTtem,typeIndex) in tableItem.type" :key="typeIndex">
                  <p>· </p>
                  <p v-if="typeIndex<2">{{ $t(String(typeTtem)) }}</p>
                  <div v-else>
                    <p v-for="(typeTtemChild,typeTtemChildIndex) in typeTtem" :key="typeTtemChildIndex">
                      {{ $t(typeTtemChild) }}
                    </p>
                  </div>
                </span>
              </div>
              <div>{{tableItem.price}}</div>
              <div>{{tableItem.discountedPrice}}</div>
            </div>
          </div>
        </div>
        <div class="detail-remark">{{$t(detailData.remark)}}</div>
        <RippleLine :type="'4'" />
      </div>
      <ServiceProblem :problemData="problemData" />
      <serviceCard />
      <ContactUs />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .dentistryServices{
    background: #fff;
    padding: 0 0 143px;
    margin-top: -20px;
    overflow: hidden;
    .features{
      margin-top: 140px;
      width: 100%;
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
    .detail{
      margin-top: 98px;
      &-title{
        display: flex;
        justify-content: center;
        margin-top: 187px;
      }
      &-table{
        width: 100%;
        max-width: 1172px;
        margin: 140px auto 0;
        overflow: hidden;
        &-in{
          width: 100%;
          overflow: hidden;
          &-col{
            display: flex;
            height: 48px;
            &>div{
              background: var(--topic-color);
              flex: 1;
              font-style: normal;
              font-weight: 700;
              font-size: 18px;
              line-height: 160%;
              display: flex;
              align-items: center;
              justify-content: center;
              color: #FFFFFF;
              &:nth-of-type(1){
                flex: 1.5;
              }
              &:nth-of-type(2){
                flex: 2;
              }
              &:not(:last-child){
                border-right: 1px solid #fff;
              }
            }
          }
          &-data{
            display: flex;
            height: 199px;
            &>div{
              flex: 1;
              font-style: normal;
              font-weight: 600;
              font-size: 18px;
              line-height: 160%;
              color: var(--topic-text-color);
              display: flex;
              align-items: center;
              justify-content: center;
              flex-direction: column;
              letter-spacing: 4.5px;
              span{
                width: 100%;
                max-width: 80%;
                display: flex;
                &>div{
                  flex: 1;
                  p{
                    display: inline-block;
                    &:not(:first-child){
                      margin-right: 10px;
                    }
                  }
                }
                &>p{
                  &:nth-of-type(1){
                    width: 20px;
                  }
                }
              }
              &:nth-of-type(1){
                flex: 1.5;
                color: var(--topic-color);
              }
              &:nth-of-type(2){
                flex: 2;
              }
              &:not(:last-child){
                border-right: 1px solid var(--topic-color);
              }
            }
            border-bottom: 1px solid var(--topic-color);
          }
        }
      }
      &-remark{
        width: 100%;
        max-width: 1245px;
        margin: 34px auto 177px;
        font-size: 16px;
        font-weight: 600;
        color: var(--topic-text-color);
        text-align: center;
      }
    }
    .notice{
      width: 100%;
      max-width: 1450px;
      margin: 169px auto 0;
      &-title{
        display: flex;
        justify-content: center;
      }
      &-topText,&-bottomText{
        width: 100%;
        span{
          display: block;
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          line-height: 160%; /* 25.6px */
          letter-spacing: 4.8px;
          text-align: center;
          color: var(--topic-text-color);
        }
      }
      &-topText{
        margin: 69px auto 0;
      }
      &-bottomText{
        margin: 116px auto 0;
      }
      &-in{
        width: 90%;
        margin: 98px auto 0;
        display: flex;
        .box{
          .box-in{
            margin-top: 15px;
            display: flex;
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 160%;
            color: var(--topic-text-color);
            padding: 0 80px;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: center;
            &:first-child{
              color: var(--topic-text-color);
              margin-top: 0;
              height: 69px;
              font-weight: 700;
              font-size: 28px;
              &>div{
                position: relative;
                span{
                  position: relative;
                  z-index: 2;
                  background: #fff;
                }
                &::before{
                  content: '';
                  position: absolute;
                  z-index: 1;
                  background: url(https://static.cmereye.com/imgs/2023/08/4d2d77d10bec6851.png);
                  background-size: 100% 100%;
                  width: 43px;
                  height: 48px;
                  left: -25px;
                  top: 50%;
                  transform: translateY(-50%);
                }
              }
            }
            &:nth-of-type(2){
              margin-top: 46px;
            }
          }
        }
        .box-left{
          overflow: hidden;
        }
        .box-right{
          border-left: 1px solid #505050;
          overflow: hidden;
        }
      }
      &-line{
        width: 83px;
        margin: 22px auto;
      }
    }
    .note{
      margin-top: 178px;
      &-title{
        display: flex;
        justify-content: center;
        &-in{
          position: relative;
          &::before{
            content: '';
            position: absolute;
            top: -40%;
            left: -183px;
            background: url(https://static.cmereye.com/imgs/2023/07/2142b5e26918c181.png) no-repeat;
            background-size: 100% 100%;
            width: 120px;
            height: 120px;
          }
          &::after{
            content: "";
            background: url(https://static.cmereye.com/imgs/2023/07/e2ded86c01ed3723.png) no-repeat;
            background-size: 100% 100%;
            position: absolute;
            right: -183px;
            top: -40%;
            width: 120px;
            height: 120px;
          }
        }
      }
      .noteCard{
        display: flex;
        flex-wrap: wrap;
        margin: 159px auto 0;
        width: 100%;
        max-width: 1090px;
        &-in{
          cursor: pointer;
          width: 25%;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 45px;
          box-sizing: border-box;
          margin-bottom: 60px;
          &-image{
            width: 100%;
            height: 0;
            padding-top: 100%;
            position: relative;
            background: #F5F4F4;
            border-radius: 50%;
            img{
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%,-50%);
              max-width: 50%;
              max-height: 50%;
            }
          }
          &-name{
            height: 64px;
            line-height: 64px;
            font-style: normal;
            font-weight: 600;
            font-size: 18px;
            color: #666666;
            text-align: center;
            white-space: nowrap;
          }
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    .dentistryServices{
      padding: 50px 0;
      .note{
        margin-top: 76px;
        &-title{
          &-in{
            &::before{
              width: 50px;
              height: 50px;
              left: -50px;
              top: 0;
            }
            &::after{
              width: 50px;
              height: 50px;
              right: -50px;
              top: 0;
            }
          }
        }
        .noteCard{
          margin: 39px auto 0;
          padding: 0 40px;
          &-in{
            width: 50%;
            padding: 0 12px;
            margin-bottom: 27px;
            &-name{
              height: 40px;
              line-height: 40px;
            }
          }
        }
      }
      .detail{
        margin-top: 53px;
        &-title{
          margin-top: 39px;
        }
        &-table{
          margin: 35px auto 0;
          position: relative;
          &-in{
            margin: 0;
            &-col{
              height: 40px;
              &>div{
                flex: 1.2;
                font-weight: 600;
                font-size: 16px;
                &:nth-of-type(3),&:nth-of-type(4){
                  font-size: 12px;
                }
              }
            }
            &-data{
              height: 115px;
              &>div{
                flex: 1.2;
                font-weight: 500;
                font-size: 12px;
                line-height: 1.4;
                letter-spacing: 2.4px;
                span{
                  max-width: 100%;
                  &>p{
                    &:nth-of-type(1){
                      width: 10px;
                    }
                  }
                }
                &:nth-of-type(1){
                  span{
                    padding-left: 10px;
                  }
                }
              }
              &:nth-of-type(4),&:nth-of-type(5){
                height: 149px;
              }
            }
          }
        }
        &-remark{
          margin: 16px auto 45px;
          padding: 0 45px;
          font-size: 12px;
          letter-spacing: 3.6px;
          text-align: center;
        }
      }
      .notice{
        margin: 78px auto 0;
        &-topText,&-bottomText{
          span{
            display: inline;
            font-size: 15px;
            letter-spacing: 2.85px;
          }
        }
        &-topText{
          margin: 60px auto 0;
          text-align: center;
          span{
            display: block;
          }
        }
        &-bottomText{
          margin: 57px auto 0;
          padding: 0 44px;
          span{
            font-size: 12px;
            font-weight: 400;
            letter-spacing: 3.6px;
            line-height: 1.6;
            display: inline;
          }
        }
        &-in{
          width: 100%;
          margin: 74px 0 0;
          .box{
            margin-left: 30px;
            .box-in{
              font-weight: 500;
              font-size: 15px;
              margin-top: 9px;
              padding: 0;
              letter-spacing: 4.5px;
              &:first-child{
                height: 40px;
                font-weight: 600;
                font-size: 15px;
                &>div{
                  &::before{
                    width: 27px;
                    height: 30px;
                    left: -17px;
                  }
                }
              }
              &:nth-of-type(2){
                margin-top: 28px;
              }
            }
          }
          .box-left{
            padding-right: 25px;
          }
          .box-right{
            padding-left: 30px;
            margin-right: 30px;
            margin-left: 0;
          }
        }
      }
      .features{
        margin-top: 67px;
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
  }
  @media screen and (max-width: 360px) {
    .dentistryServices{
      .note{
        .noteCard{
          &-in{
            &-name{
              font-size: 15px;
            }
          }
        }
      }
    }
  }
</style>