<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
const appState = useAppState()
appState.setDentistryService('orthodontics')
useHead({
  title: "矯齒(箍牙) | 牙科服務",
  meta: [
   {
      hid: 'description',
      name: 'description',
      content: '愛康健提供矯齒(箍牙)服務，傳統箍牙包括金屬箍牙、陶瓷箍牙、樹脂箍牙。矯齒(箍牙)治療除了能矯正不整齊排列的牙齒，如牙齒太擠、太疏，或矯正後再次移位的情況，更能有助減低患上牙齒問題的風險。',
   },
   {
      hid: 'Keywords',
      name: 'Keywords',
      content: '矯齒 箍牙 固定式外箍 固定式內箍 金屬箍牙 陶瓷箍牙 樹脂箍牙 傳統箍牙 矯齒價錢 箍牙價錢 愛康健 深圳愛康健 深圳專業牙科中心 愛康健醫院 愛康健口腔醫院 深圳愛康健口腔醫院愛康健 CKJ愛康健齒科集團 深圳口腔專科醫院 愛康健齒科集團 深圳牙科醫院牙科服務內地牙科 深圳口腔專科',
   },
  ]
})

const bannerData = {
  img: 'https://static.cmereye.com/imgs/2023/08/2f058cd14970a7c5.jpg',
  mbImg: 'https://static.cmereye.com/imgs/2023/08/3b1b35c6febb6e99.jpg',
  gif: 'https://static.cmereye.com/imgs/2023/08/0edc8793314c4da3.gif',
  text1: '#追求美學極致 展現最燦爛笑容',
  text2: '愛康健為愛美的您打造完美面部輪廓',
  tabNavName: 'pages.dental-service.orthodontics.introduce.tabNavName'
}

const headerConfig = {
  img: 'https://static.cmereye.com/imgs/2023/06/853005c3e17e4c2a.png',
  bg: 'https://static.cmereye.com/imgs/2023/06/6d1016f37061df54.png',
  mbImg: 'https://static.cmereye.com/imgs/2023/06/0c4c600f0e07547d.jpg',
  pageName: 'orthodontics',
  pcText: ['追求美學極致，展現最燦爛笑容','愛康健為愛美的您打造完美面部輪廓'],
  mbText: ['追求美學極致','展現最燦爛笑容']
}

const introduceData = {
  title: 'pages.dental-service.orthodontics.introduce.title',
  content: 'pages.dental-service.orthodontics.introduce.content',
  mbImg: 'https://static.cmereye.com/imgs/2023/04/78f038c56a4dc38b.jpg',
  pcImg: 'https://static.cmereye.com/imgs/2023/05/9993e95bc1c6a9c9.jpg',
  tabNavName: 'pages.dental-service.orthodontics.introduce.tabNavName',
  pageName: 'orthodontics'
}

const reasonData = {
  title: 'pages.dental-service.orthodontics.reason.title',
  text: 'pages.dental-service.orthodontics.reason.text',
  imgUrl: 'https://static.cmereye.com/imgs/2023/08/73aec40d266e0b16.jpg',
  reasonLists:[
    {
      context: 'pages.dental-service.orthodontics.reason.lists[0].context',
    },
    {
      context: 'pages.dental-service.orthodontics.reason.lists[1].context',
    },
    {
      context: 'pages.dental-service.orthodontics.reason.lists[2].context',
    }
  ]
}

const stepData = {
  title: '矯齒(箍牙)過程',
  stepLists: [
    {
      title: '1',
      text: '醫生會先進行檢查及評估，確認矯齒的需要'
    },
    {
      title: '2',
      text: '拍攝牙齒外觀照片，包括全口腔及側面X光照片，以印製牙模'
    },
    {
      title: '3',
      text: '醫生講解情況及治療方案'
    }, 
    {
      title: '4',
      text: '配戴牙箍及定期覆診'
    },
    {
      title: '5',
      text: '矯齒完成後，需定期覆診，晚上佩戴固定器，防止牙齒移位'
    }
  ],
  isShowBottom: true,
  bottomText: '※不建議牙齒還沒完成發育、智慧齒還沒長出的人士接受牙齒矯正治療'
}

const differData = {
  title: '貴不等於最好\t要選擇自己最合適的！',
  text: '價格高不代表就是最好的選擇，選擇適合自己的矯正方式才是最重要的。不同的矯正方式有著各自的優缺點，需要根據自己的口腔情況、個人需求和預算來選擇最適合的方案。所以，在決定矯正牙齒之前，一定要找到專業的牙醫進行詳細的診斷和建議，選擇最適合自己的矯正方式。',
  firstTextTh: '固定式外箍/內箍',
  secondTextTh: '透明配戴式牙箍',
  listDatas: [
    {
      name: '原理',
      firstText: '將矯正器黏貼在牙齒表面，以鋼絲連上牙釘，施加外力移動牙齒',
      secondText: '運用電腦模擬牙齒移動位置，按牙齒移動速度，定期更換度身訂造牙箍，慢慢移動牙齒'
    },
    {
      name: '物料',
      firstText: '金屬/ 搪瓷/ 樹脂',
      secondText: '醫學塑膠'
    },
    {
      name: '拆卸',
      firstText: '不能自行拆卸',
      secondText: '能隨時戴上及脫下'
    },
    {
      name: '美觀',
      isArrayType: true,
      firstText: ['·牙箍固定於牙齒外側會外露(固定式外箍)','·牙箍固定於牙齒內側較難察覺(固定式內箍)'],
      secondText: '透明牙箍，近乎隱形，極難察覺'
    },
    {
      name: '清潔',
      firstText: '需以工具輔助清潔矯正器與鋼絲死角',
      secondText: '拆卸後獨立清洗'
    },
    {
      name: '成效',
      firstText: '比較適合齒列嚴重不正的人士',
      secondText: '適合輕度或中度齒列不正的人士'
    },
    {
      name: '其他',
      firstText: '牙箍可能會引起不適',
      secondText: '隱形牙套表面平滑'
    }
  ]
}

const problemData = {
  title: 'pages.dental-service.orthodontics.problem.title',
  lists: [
    {
      Q: 'pages.dental-service.orthodontics.problem.lists[0].Q',
      A: 'pages.dental-service.orthodontics.problem.lists[0].A'
    },
    {
      Q: 'pages.dental-service.orthodontics.problem.lists[1].Q',
      A: 'pages.dental-service.orthodontics.problem.lists[1].A'
    },
    {
      Q: 'pages.dental-service.orthodontics.problem.lists[2].Q',
      A: 'pages.dental-service.orthodontics.problem.lists[2].A'
    },
    {
      Q: 'pages.dental-service.orthodontics.problem.lists[3].Q',
      A: 'pages.dental-service.orthodontics.problem.lists[3].A'
    },
    {
      Q: 'pages.dental-service.orthodontics.problem.lists[4].Q',
      A: 'pages.dental-service.orthodontics.problem.lists[4].A'
    },
    {
      Q: 'pages.dental-service.orthodontics.problem.lists[5].Q',
      A: 'pages.dental-service.orthodontics.problem.lists[5].A'
    },
    {
      Q: 'pages.dental-service.orthodontics.problem.lists[6].Q',
      A: 'pages.dental-service.orthodontics.problem.lists[6].A'
    },
    {
      Q: 'pages.dental-service.orthodontics.problem.lists[7].Q',
      A: 'pages.dental-service.orthodontics.problem.lists[7].A'
    },
    {
      Q: 'pages.dental-service.orthodontics.problem.lists[8].Q',
      A: 'pages.dental-service.orthodontics.problem.lists[8].A'
    },
  ]
}

const bpData ={
  title: '您是否有牙齒不齊問題困擾？',
  text: '在當今競爭激烈的社會中，個人形象已成為一種重要的競爭力。不論是在現實社會還是網絡中，個人形象都能給人留下深刻的印象，對於找工作、交朋友、學習、升職等方面都有著不可忽視的影響。牙齒不僅直接影響面容和微笑，更能夠反映一個人的健康和生活態度。所以，關注自己的形象不但是邁向成功的第一步，更是建立自信微笑的重要一步！',
  lists: [
    {
      title: '咬合過深',
      imgUrl: 'https://static.cmereye.com/imgs/2023/08/659c1202bbd4ed07.jpg'
    },
    {
      title: '倒 及',
      imgUrl: 'https://static.cmereye.com/imgs/2023/08/de45cb52280d47a4.jpg'
    },
    {
      title: '錯咬/反咬合',
      imgUrl: 'https://static.cmereye.com/imgs/2023/08/20201ad8730fc23c.jpg'
    },
    {
      title: '牙縫過大',
      imgUrl: 'https://static.cmereye.com/imgs/2023/08/432308f39180a542.jpg'
    },
    {
      title: '開 咬',
      imgUrl: 'https://static.cmereye.com/imgs/2023/08/293c6ce8f1b96bb2.jpg'
    },
    {
      title: '齒列擠擁',
      imgUrl: 'https://static.cmereye.com/imgs/2023/08/bfe587b6509e755b.jpg'
    },
    {
      title: '前排齒列擠擁',
      imgUrl: 'https://static.cmereye.com/imgs/2023/08/90f078714af32ed9.jpg'
    }
  ]
}

let bpCurrent = ref(1)
const onSlideChange = (swiper: any) => {
  bpCurrent.value = swiper.realIndex + 1
}


let aestheticsCurrent = ref(1)
const onAestheticsSlideChange = (swiper: any) => {
  aestheticsCurrent.value = swiper.realIndex + 1
}

const aestheticsData = {
  title: '美學牙齒矯正',
  lists: [
    {
      imgUrl: 'https://static.cmereye.com/imgs/2023/08/8ae0d7667d3862be.jpg',
      title: '隱形牙箍矯正',
      text: '全透明全隱形，不影響美觀，並在矯正牙齒的同時矯正頜面形態，矯治過程自然舒適，收獲自信笑容！'
    },
    {
      imgUrl: 'https://static.cmereye.com/imgs/2023/08/d29acddb052417ec.jpg',
      title: '陶瓷半隱形矯正',
      text: '使用陶瓷透明托槽和鋼絲，顏色與牙齒相似，美觀度高，不易發現。'
    },
    {
      imgUrl: 'https://static.cmereye.com/imgs/2023/08/43c587e5c9da7de8.jpg',
      title: '金屬托槽矯正',
      text: '是矯正牙齒中價格最實惠的一種，適用性廣泛，適合各種牙齒矯正情況，是一種經濟實惠且有效的矯正方法。'
    },
    {
      imgUrl: 'https://static.cmereye.com/imgs/2023/08/999d8e0df1df3ae7.jpg',
      title: '舌側隱形矯正',
      text: '在於不影響外觀，且能夠有效地矯正各種牙齒問題，包括咬合問題和牙齒排列不整齊等。'
    }
  ]
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
  <div class="orthodonticsPage">
    <ServiceBanner :bannerData="bannerData" />
    <ServiceIntroduce :introduceData="introduceData" :reasonData="reasonData" />
    <div class="bp">
      <RippleLine :type="'4'" />
      <div class="bp-title">
        <div class="bp-title-in">
          <serviceTitle :title="'您是否有牙齒不齊問題困擾？'" />
        </div>
      </div>
      <div class="bp-text">
        {{bpData.text}}
      </div>
      <div class="bp-lists">
        <div class="bp-lists-in" v-for="(bpItem,bpIndex) in bpData.lists" :key="bpIndex">
          <img :src="bpItem.imgUrl" alt="" />
          <div class="bp-lists-in-title">{{bpItem.title}}</div>
        </div>
        <div class="bp-lists-in">
          <img class="mascot" src="https://static.cmereye.com/imgs/2023/07/bddd5d9b334f8f0a.png" alt="">
        </div>
      </div>
    </div>
    <ServiceStep :stepData="stepData" />
    <ServiceDiffer :differData="differData" />
    <RippleLine :type="'2'" />
    <div class="aesthetics">
      <div class="aesthetics-title">
        <div class="aesthetics-title-in">
          <serviceTitle :title="'美學牙齒矯正'" :yaBorder="'#FECB02'" :bgColor="'#fff'" :textColor="'#505050'" />
        </div>
        <div :class="`star_${i}`" v-for="i in 4" :key="i">
          <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
            <g clip-path="url(#clip0_177_129)">
            <path d="M30.356 16.2457C20.2113 17.7224 17.7207 20.2228 16.2366 30.3675C16.2366 30.5633 16.1588 30.7511 16.0204 30.8896C15.8819 31.028 15.6941 31.1058 15.4983 31.1058C15.3025 31.1058 15.1147 31.028 14.9763 30.8896C14.8378 30.7511 14.76 30.5633 14.76 30.3675C13.2833 20.2228 10.7853 17.7322 0.640673 16.2457C0.444856 16.2457 0.257055 16.1679 0.118591 16.0295C-0.0198725 15.891 -0.0976562 15.7032 -0.0976562 15.5074C-0.0976562 15.3116 -0.0198725 15.1238 0.118591 14.9853C0.257055 14.8468 0.444856 14.7691 0.640673 14.7691C10.7853 13.2924 13.2759 10.7919 14.76 0.649729C14.76 0.453912 14.8378 0.266111 14.9763 0.127647C15.1147 -0.0108164 15.3025 -0.0886002 15.4983 -0.0886002C15.6941 -0.0886002 15.8819 -0.0108164 16.0204 0.127647C16.1588 0.266111 16.2366 0.453912 16.2366 0.649729C17.7133 10.7919 20.2113 13.2825 30.356 14.7691C30.5518 14.7691 30.7396 14.8468 30.8781 14.9853C31.0165 15.1238 31.0943 15.3116 31.0943 15.5074C31.0943 15.7032 31.0165 15.891 30.8781 16.0295C30.7396 16.1679 30.5518 16.2457 30.356 16.2457Z" fill="white"/>
            </g>
            <defs>
            <clipPath id="clip0_177_129">
            <rect width="31" height="31" fill="white"/>
            </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      <div class="aesthetics-in">
        <div class="aesthetics-in-box" v-for="(aestheticsItem,aestheticsIndex) in aestheticsData.lists" :key="aestheticsIndex">
          <div class="aesthetics-in-box-image">
            <img :src="aestheticsItem.imgUrl" alt="" />
          </div>
          <div class="aesthetics-in-box-content">
            <div class="aesthetics-in-box-title">{{aestheticsItem.title}}</div>
            <div class="aesthetics-in-box-text">{{aestheticsItem.text}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="aesthetics-bottom">
      <RippleLine :type="'2'" :isBottom="true" />
    </div>
    <ServiceProblem :problemData="problemData" />
    <serviceCard />
    <RippleLine :type="'4'" />
    <ContactUs />
  </div>
</div>
</template>



<style lang="scss" scoped>
.orthodonticsPage{
  background: #fff;
  padding: 0 0 140px;
  margin-top: -20px;
}
.bp{
  margin-top: 119px;
  &-title{
    margin-top: 100px;
    display: flex;
    justify-content: center;
  }
  &-text{
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 160%;
    color: #666666;
    width: 100%;
    max-width: 889px;
    letter-spacing: 4.8px;
    text-align: center;
    margin: 40px auto 0;
  }
  &-lists{
    display: flex;
    flex-wrap: wrap;
    max-width: 1100px;
    margin: 136px auto;
    &-in{
      min-width: 33.33%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding: 0 39.5px 95.69px;
      box-sizing: border-box;
      align-items: center;
      &-title{
        margin-top: 39px;
        color: var(--topic-text-color);
        text-align: center;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; /* 28.8px */
        letter-spacing: 4.5px;
      }
      img{
        margin-top: 30px;
        width: 100%;
      }
      .mascot{
        width: 60%;
        padding: 0;
      }
    }
  }
}
.aesthetics{
  padding-top: 171px;
  background: var(--yellow-color);
  position: relative;
  &-title{
    display: flex;
    justify-content: center;
    position: relative;
    z-index: 2;
    width: max-content;
    margin: 0 auto;
  }
  &-in{
    display: flex;
    margin: 0 auto;
    padding: 109px 0 240px;
    width: 100%;
    max-width: 1640px;
    &-box{
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      overflow: hidden;
      &:not(:last-child){
        margin-right: 56px;
      }
      &-image{
        width: 100%;
        border-radius: 50% 50% 0 0;
        padding: 30px;
        box-sizing: border-box;
        overflow: hidden;
        background: #fff;
        img{
          width: 100%;
        }
      }
      &-content{
        flex: 1;
        background: #fff;
      }
      &-title{
        text-align: center;
        color: var(--topic-color);
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; /* 28.8px */
        letter-spacing: 4.5px;
      }
      &-text{
        padding: 16px 50px 29px;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 160%;
        color: #666666;
        text-align: justify;
      }
    }
  }
  .star_1{
    position: absolute;
    z-index: 1;
    top: 50px;
    left: -60px;
  }
  .star_2{
    position: absolute;
    z-index: 1;
    top: -40px;
    left: 120%;
  }
  .star_3{
    position: absolute;
    z-index: 1;
    top: 150px;
    left: 80%;
  }
  .star_4{
    display: none;
  }
}
@media (min-width: 768px) and (max-width: 1100px) {
  .bp{
    &-text{
      padding: 0 30px;
    }
    &-list{
      &-in{
        min-width: 50%;
      }
    }
  }
}
@media only screen and (max-width: 768px) {
  .orthodonticsPage{
    padding: 0 0 90px;
  }
  .bp{
    margin-top: 94px;
    &-title{
      margin-top: 30px;
    }
    &-text{
      padding: 0 40px;
      margin: 35px auto 0;
      text-align: justify;
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      line-height: 181%; /* 27.15px */
      letter-spacing: 4.5px;
    }
    &-lists{
      margin: 35px auto 0;
      padding: 0 20px;
      &-in{
        width: 50%;
        padding: 0 25px 23px;
        &-title{
          font-size: 15px;
          left: 3.75px;
          margin-top: 20px;
        }
      }
    }
  }
  .aesthetics{
    // margin-top: 90px;
    padding-top: 60px;
    &-in{
      flex-wrap: wrap;
      margin-top: 40px;
      padding: 0 30px;
      background: none;
      &-box{
        width: 50%;
        min-width: 50%;
        margin-bottom: 20px;
        padding: 0 10px;
        &:not(:last-child){
          margin-right: 0px;
        }
        &-image{
          padding: 10px;
        }
        &-title{
          letter-spacing: 3px;
          font-size: 12px;
        }
        &-text{
          font-size: 12px;
          letter-spacing: 1px;
          padding: 8px 16px 16px;
        }
      }
    }
    .star_1{
      top: 20px;
      left: -40px;
      transform: scale(.5);
    }
    .star_2{
      top: 10px;
      left: 120%;
      transform: scale(.5);
    }
    .star_3{
      top: 50px;
      left: 75%;
      transform: scale(.5);
    }
    .star_4{
      position: absolute;
      z-index: 1;
      top: -50px;
      left: 20%;
      transform: scale(.5);
      display: block;
    }
  }
  .aesthetics-bottom{
    margin-bottom: 80px;
  }
}
</style>