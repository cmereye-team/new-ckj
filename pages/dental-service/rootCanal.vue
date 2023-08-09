<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
const appState = useAppState()
appState.setDentistryService('rootCanal')
useHead({
  title: "根管治療(杜牙根) | 牙科服務",
  meta: [
   {
      hid: 'description',
      name: 'description',
      content: '愛康健提供根管治療（杜牙根）服務，用於治療嚴重蛀牙或牙根受細菌感染的情況。當蛀牙菌感染深入牙髓並引發神經發炎時，需要進行根管治療手術，以徹底清除感染部分。',
   },
   {
      hid: 'Keywords',
      name: 'Keywords',
      content: '牙齦炎治療 根管治療 杜牙根 杜牙根價錢 愛康健 深圳愛康健 深圳專業牙科中心 愛康健醫院 愛康健口腔醫院 深圳愛康健口腔醫院愛康健 CKJ愛康健齒科集團 深圳口腔專科醫院 愛康健齒科集團 深圳牙科醫院牙科服務內地牙科 深圳口腔專科',
   },
  ]
})

const bannerData = {
  img: 'https://static.cmereye.com/imgs/2023/07/f0b9f3bfc80d96b1.jpg',
  mbImg: 'https://static.cmereye.com/imgs/2023/08/3b1b35c6febb6e99.jpg',
  gif: 'https://static.cmereye.com/imgs/2023/08/0edc8793314c4da3.gif',
  text1: '#根管治療助您解決牙痛 恢復健康的口腔狀態',
  text2: '立即接受專業治療手術 徹底解放美食自由',
  tabNavName: 'pages.dental-service.rootCanal.introduce.tabNavName'
}

const headerConfig = {
  img: 'https://static.cmereye.com/imgs/2023/06/870d54eb88782632.png',
  bg: 'https://static.cmereye.com/imgs/2023/06/01d15590f9c0df29.jpg',
  mbImg: 'https://static.cmereye.com/imgs/2023/06/61ccc7a66efaf1c3.jpg',
  pageName: 'rootCanal',
  pcText: ['根管治療助您解決牙痛，恢復健康的口腔狀態','立即接受專業治療手術，徹底解放美食自由'],
  mbText: ['根管治療助您解決牙痛','恢復健康的口腔狀態']
}

const introduceData = {
  title: 'pages.dental-service.rootCanal.introduce.title',
  content: 'pages.dental-service.rootCanal.introduce.content',
  mbImg: 'https://static.cmereye.com/imgs/2023/05/4981f5bda13e2428.jpg',
  pcImg: 'https://static.cmereye.com/imgs/2023/05/3030e00ebf385a45.jpg',
  tabNavName: 'pages.dental-service.rootCanal.introduce.tabNavName',
  pageName: 'rootCanal',
}

const reasonData = {
  title: 'pages.dental-service.rootCanal.reason.title',
  text: 'pages.dental-service.rootCanal.reason.text',
  imgUrl: 'https://static.cmereye.com/imgs/2023/08/5ec08df193db38c5.jpg',
  reasonLists:[
    {
      context: 'pages.dental-service.rootCanal.reason.lists[0].context',
    },
    {
      context: 'pages.dental-service.rootCanal.reason.lists[1].context',
    },
    {
      context: 'pages.dental-service.rootCanal.reason.lists[2].context',
    },
    {
      context: 'pages.dental-service.rootCanal.reason.lists[3].context',
    }
  ]
}

const stageData = {
  title: {
    span1: '根管治療用以治理蛀牙，',
    span2: '蛀牙可分為以下數個階段：'
  },
  stageLists: [
    {
      num: '01',
      imgUrl: 'https://static.cmereye.com/imgs/2023/08/edf2fc3509499c3f.png',
      name: '受到感染',
      text: '當琺瑯質被破壞，蛀洞擴大至牙本質（即琺瑯質下面的一層），牙齒便會受到感染或有膿腫。',
    },
    {
      num: '02',
      imgUrl: 'https://static.cmereye.com/imgs/2023/08/dd532073e70646ec.png',
      name: '影響深遠',
      text: '最終蛀進牙神經，亦即牙髓，此階段蛀牙已導致永久的發炎，牙神經開始壞死。',
    },
    {
      num: '03',
      imgUrl: 'https://static.cmereye.com/imgs/2023/08/c336b9645ce0969a.png',
      name: '腫痛難耐',
      text: '此時釋放出的化學物質可造成牙根頂部感染，導致紅腫及疼痛。這時牙痛感覺變得十分明顯。',
    },
    {
      num: '04',
      imgUrl: 'https://static.cmereye.com/imgs/2023/08/701abf1b28fe3b1a.png',
      name: '立即求醫',
      text: '病人通常會求醫，以求減輕痛楚及進行根管治療。',
    }
  ],
  remark: {
    p1: '*根管治療非常複雜，需適當地進行，',
    p2: '因此你應該找個在此領域經驗豐富的牙醫。'
  }
}

const stepData = {
  title: '根管治療過程',
  stepLists: [
    {
      title: '1',
      text: '為受感染的牙齒照X光，了解根管形狀及長度'
    },
    {
      title: '2',
      text: '局部麻醉，進行牙根消毒'
    },
    {
      title: '3',
      text: '從牙冠進入牙髓腔，把牙髓組織刮除或吸出'
    },
    {
      title: '4',
      text: '以藥水徹底消毒乾淨根管內壁'
    },
    {
      title: '5',
      text: ' 把牙冠髓腔填封及覆蓋牙洞，以降低蛀牙菌再度入侵的機會'
    },
    {
      title: '6',
      text: '如經治療後的牙齒太脆弱，需為牙齒套上牙套，預防再被咬崩而要拔除'
    }
  ],
  pageName: 'rootCanal'
}

const noteData = {
  title: '療程後注意事項',
  lists: [
    {
      name: '避免咀嚼食物或咬硬物，以免損壞治療後的牙齒。',
    },
    {
      name: '避免用治療後的牙齒咬開堅硬的食物，例如堅果、糖果等。',
    },
    {
      name: '在治療後的前幾天內，嘗試避免刷牙或使用牙線，以免影響治療區域的恢復。',
    },
    {
      name: '如果需要刷牙，可以使用軟毛刷，輕柔地刷牙，避免刷太用力或刷到治療區域。',
    },
    {
      name: '如果感覺到疼痛或不適，可以使用過濾口的冰水或冰袋敷在治療區域附近，以減輕疼痛和腫脹。',
    },
    {
      name: '如醫生處方止痛藥，應按照指示使用。',
    },
    {
      name: '定期到口腔醫院進行檢查和清潔，以確保治療後的牙齒保持健康。',
    }
  ]
}

const problemData = {
  title: 'pages.dental-service.rootCanal.problem.title',
  lists: [
    {
      Q: 'pages.dental-service.rootCanal.problem.lists[0].Q',
      A: 'pages.dental-service.rootCanal.problem.lists[0].A'
    },
    {
      Q: 'pages.dental-service.rootCanal.problem.lists[1].Q',
      A: 'pages.dental-service.rootCanal.problem.lists[1].A'
    },
    {
      Q: 'pages.dental-service.rootCanal.problem.lists[2].Q',
      A: 'pages.dental-service.rootCanal.problem.lists[2].A'
    },
    {
      Q: 'pages.dental-service.rootCanal.problem.lists[3].Q',
      A: 'pages.dental-service.rootCanal.problem.lists[3].A'
    },
    {
      Q: 'pages.dental-service.rootCanal.problem.lists[4].Q',
      A: 'pages.dental-service.rootCanal.problem.lists[4].A'
    },
    {
      Q: 'pages.dental-service.rootCanal.problem.lists[5].Q',
      A: 'pages.dental-service.rootCanal.problem.lists[5].A'
    },
    {
      Q: 'pages.dental-service.rootCanal.problem.lists[6].Q',
      A: 'pages.dental-service.rootCanal.problem.lists[6].A'
    },
  ]
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


const processData = {
  title: '顯微根管治療',
  // context: ['愛康健引進德國蔡司顯微鏡根管治療儀，','結合顯微鏡技術和醫學技術，可清晰觀察牙齒的結構和根管形態。這項技術不僅適用於常規根管治療，還可用於根尖顯微外科手術，幫助醫生更好地維護正常組織，提高手術治療效率。'],
  remark: '愛康健引進德國蔡司顯微鏡根管治療儀，結合顯微鏡技術和醫學技術，可清晰觀察牙齒的結構和根管形態。這項技術不僅適用於常規根管治療，還可用於根尖顯微外科手術，幫助醫生更好地維護正常組織，提高手術治療效率。',
  stepLists: [
      {
        title: '1',
        text: '使用X-Ray拍片確定患處結構，制定治療方案'
      },
      {
        title: '2',
        text: '施以口腔局部麻醉，減輕患者對治療的恐懼'
      },
      {
        title: '3',
        text: '施術前進行術區消毒隔離，手術器械消毒滅菌，專人專次使用，防止交叉感染。'
      },
      {
        title: '4',
        text: '在顯微鏡下打開牙髓腔，挑出壞死牙髓，擴大根管，沖洗根管內部'
      },
      {
        title: '5',
        text: '使用顯微鏡進行根管預備，清理根管內的感染物質，施以消炎藥封口。'
      },
      {
        title: '6',
        text: '在顯微鏡輔助下進行根管內的嚴密填充，隔絕根管和根尖周組織，防止再次感染。'
      },
    ]
}

</script>


<template>
<div>
  <!-- <PageHeader :headerConfig="headerConfig" />  -->
  <div class="rootCanalPage">
    <ServiceBanner :bannerData="bannerData" />
    <ServiceIntroduce :introduceData="introduceData" :reasonData="reasonData" />
    <!-- <div class="index_title pageCon">{{$t('pages.dental-service.title')}}</div> -->
    <!-- <ServiceIntroduce :introduceData="orthodonticsIntroduceData" /> -->
    <!-- <ServiceReason :reasonData="reasonData" /> -->
    <div class="stageTopLine"><RippleLine :type="'5'" /></div>
    <div class="stage">
      <div class="stage-title">
        <span>{{stageData.title.span1}}</span>
        <span>{{stageData.title.span2}}</span>
      </div>
      <div class="stage-lists">
        <div class="stage-lists-in" v-for="(stage,index) in stageData.stageLists" :key="index">
          <div class="num">{{stage.num}}</div>
          <div class="image">
            <img :src="stage.imgUrl" alt="">
          </div>
          <div class="name">{{stage.name}}</div>
          <div class="text">{{stage.text}}</div>
        </div>
      </div>
      <div class="stage-remark">
        <p>{{stageData.remark.p1}}</p>
        <p>{{stageData.remark.p2}}</p>
      </div>
    </div>
    <ServiceStep :stepData="stepData" />
    <div class="process">
      <ServiceStep :stepData="processData" :pageName="'rootCanal'" />
      <!-- <div class="dentistryServices-title">
        <div class="dentistryServices-title-in bb">{{processData.title}}</div>
      </div>
      <div class="process-context pageCon">
        <span v-for="(processContextItem,processContextIndex) in processData.context" :key="processContextIndex">{{processContextItem}}</span>
      </div>
      <div class="process-step pageCon">
        <div class="step-in">
          <div class="step-in-box"
            v-for="(step,stepIndex) in processData.lists" :key="stepIndex">
            <div class="step-itemLists">
              <div class="step-itemLists-in" v-for="(stepChild,stepChildIndex) in step" :key="stepChildIndex">
                <div :class="['line', { 'lineNone' : step.length === 2 && stepChildIndex === 1 }]"></div>
                <span class="round"></span>
                <span class="title">{{stepChild.title}}</span>
                <span class="text">
                  <div>{{stepChild.text}}</div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </div>
    <ServiceNote :noteData="noteData" />
    <div class="honor">
      <RippleLine :type="'4'" />
      <div class="honor-bg">
        <div class="honor-title">
          <span>愛康健齒科品牌連鎖</span>
        </div>
        <div class="honor-text">
          致力於口腔健康28年，多次榮獲殊榮，信心保證
        </div>
        <div class="honor-in pageCon">
          <div class="leftBtn" @click="handleProcessBtn('slidePrev')"></div>
          <swiper
            slidesPerView="auto"
            :loop="true"
            class="honorSwiper"
            @swiper="setSwiperRef"
          >
            <swiper-slide class="swiper-slide">
              <img src="https://static.cmereye.com/imgs/2023/06/154e36113fa5e579.png" alt="">
            </swiper-slide>
            <swiper-slide class="swiper-slide">
              <img src="https://static.cmereye.com/imgs/2023/06/ac0aa9264119857f.png" alt="">
            </swiper-slide>
          </swiper>
          <div class="rightBtn" @click="handleProcessBtn('slideNext')"></div>
        </div>
      </div>
      <RippleLine :type="'4'" />
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
.rootCanalPage{
  margin-top: -20px;
  margin-bottom: 100px;
}
.stageTopLine{
  margin-top: 214px;
}
.stage{
  margin-top: 0;
  background: #FF6096;
  margin-bottom: -150px;
  padding-bottom: 190px;
  padding-top: 160px;
  &-title{
    color: #FFF;
    font-size: 31.766px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 50.826px */
    letter-spacing: 7.942px;
    text-align: center;
  }
  &-lists{
    display: flex;
    justify-content: space-between;
    max-width: 1600px;
    margin:  85px auto 42px;
    &-in{
      color: #FF6096;
      font-style: normal;
      max-width: 20%;
      position: relative;
      .num{
        width: 50px;
        height: 50px;
        line-height: 42px;
        border-radius: 50%;
        font-weight: 700;
        font-size: 28px;
        z-index: 2;
        position: absolute;
        left: 0;
        top: -20px;
        text-align: center;
        background: #fff;
        border: 4px solid #FF6096;
      }
      .image{
        margin-top: -10px;
        position: relative;
        z-index: 1;
        img{
          width: 100%;
        }
      }
      .name{
        font-weight: 700;
        font-size: 22px;
        margin-top: 30px;
        line-height: 160%;
        text-align: center;
        color: #fff;
        letter-spacing: 6.6px;
      }
      .text{
        font-weight: 600;
        font-size: 16px;
        line-height: 160%;
        margin-top: 8px;
        color: #fff;
        letter-spacing: 4.8px;
        padding: 0 20px;
      }
    }
  }
  &-remark{
    max-width: 1229px;
    margin: 100px auto 0;
    p{
      color: #fff;
      text-align: center;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 160%; /* 25.6px */
      letter-spacing: 4.8px;
      text-align: center;
    }
  }
}
.honor{
  margin-top: 157px;
  &-bg{
    padding: 90px 0 140px;
  }
  &-title{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    span{
      display: inline-block;
      font-style: normal;
      font-weight: 700;
      font-size: 30px;
      line-height: 160%;
      color: #666666;
      position: relative;
      padding-bottom: 20px;
      &::after{
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 40px;
        height: 5px;
        border-radius: 3px;
        background: var(--topic-color);
        transform: translateX(-50%);
      }
      // &:last-child{
        // border-bottom: 4px solid #FFA09E;
      // }
    }
  }
  &-text{
    color: var(--topic-text-color);
    font-size: 31.766px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 50.826px */
    letter-spacing: 7.942px;
    text-align: center;
    position: relative;
    width: max-content;
    margin: 30px auto 0;
    &::after{
      content: '';
      position: absolute;
      left: -10px;
      bottom: 0;
      height: 23px;
      border-radius: 8px;
      opacity: 0.5;
      background: #FECB02;
      width: 0;
      width: calc(100% + 20px);
    }
  }
  &-in{
    margin-top: 58px;
    display: flex;
    .leftBtn{
      width: 70px;
      // background: #FFF1F0;
      cursor: pointer;
      position: relative;
      background: var(--prev-icon) no-repeat;
      background-position: 50% 50%;
      // &::after{
        // content: '';
        // position: absolute;
      //   top: 50%;
      //   left: 50%;
      //   transform: translate(-75%,-50%);
      //   border-top: 20px solid;
      //   border-right: 30px solid;
      //   border-bottom: 20px solid;
      //   border-left: 30px solid;
      //   border-color: transparent #fff transparent transparent;
      //   filter: drop-shadow(0px 0px 7.21491px rgba(255, 120, 117, 0.25));
      // }
    }
    .rightBtn{
      width: 70px;
      // background: #FFCECB;
      cursor: pointer;
      position: relative;
      background: var(--next-icon) no-repeat;
      background-position: 50% 50%;
      // &::after{
      //   content: '';
      //   position: absolute;
      //   top: 50%;
      //   left: 50%;
      //   transform: translate(-25%,-50%);
      //   border-top: 20px solid;
      //   border-right: 30px solid;
      //   border-bottom: 20px solid;
      //   border-left: 30px solid;
      //   border-color: transparent transparent transparent #fff;
      //   filter: drop-shadow(0px 0px 7.21491px rgba(255, 120, 117, 0.25));
      // }
    }
    .honorSwiper{
      width: calc(100% - 140px);
      overflow: hidden;
      margin: 0;
      .swiper-slide{
        img{
          width: 100%;
        }
      }
    }
  }
}
.process{
  margin-top: -150px;
}
@media only screen and (max-width: 760px) {
  .stage{
    padding: 0 20px;
    box-sizing: border-box;
    &-title{
      font-size: 28px;
      span{
        display: block;
        text-align: center;
      }
    }
    &-lists{
      flex-wrap: wrap;
      margin:  34px auto 0;
      &-in{
        padding: 0 10px;
        box-sizing: border-box;
        width: 50%;
        margin-bottom: 20px;
        .num{
          font-size: 26px;
          font-weight: 700;
        }
        .image{
          width: 100%;
        }
        .name{
          font-weight: 600;
          font-size: 20px;
          margin-top: 7px;
        }
        .text{
          font-weight: 600;
          font-size: 15px;
          margin-top: 10px;
        }
        &:not(:last-child){
          margin-right: 0;
        }
      }
    }
    &-remark{
      margin-left: 10px;
      p{
        font-weight: 500;
        font-size: 15px;
      }
    }
  }
  .honor{
    margin-top: 90px;
    &-bg{
      padding: 34px 30px;
      // background: linear-gradient(360deg, rgba(255, 241, 240, 0) 0%, rgba(255, 241, 240, 0.3) 12.5%, rgba(255, 241, 240, 0.3) 81.99%, rgba(255, 241, 240, 0) 100%);
    }
    &-title{
      span{
        font-size: 20px;
        &:last-child{
          // border-bottom: 2.5px solid #FFA09E;
        }
      }
    }
    &-text{
      font-weight: 600;
      font-size: 14px;
      margin-top: 8px;
      width: auto;
    }
    &-in{
      margin-top: 22px;
      .leftBtn{
        width: 15.5px;
        // &::after{
        //   border-top: 5px solid;
        //   border-right: 7px solid;
        //   border-bottom: 5px solid;
        //   border-left: 7px solid;
        //   border-color: transparent #fff transparent transparent;
        // }
      }
      // .rightBtn{
      //   width: 15.5px;
      //   &::after{
      //     border-top: 5px solid;
      //     border-right: 7px solid;
      //     border-bottom: 5px solid;
      //     border-left: 7px solid;
      //     border-color: transparent transparent transparent #fff;
      //   }
      // }
      // .honorSwiper{
      //   width: calc(100% - 31px);
      // }
    }
  }
  .process{
    margin-top: -100px;
  }
}
</style>