<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
const { t } = useLang()
const appState = useAppState()
appState.setDentistryService('periodontal')
useHead({
  title: "牙周病治療 | 牙科服務",
  meta: [
   {
      hid: 'description',
      name: 'description',
      content: '愛康健提供牙周病治療服務，牙周病是慢性炎症，分為輕微牙齦炎和嚴重牙周炎。牙周病會導致牙齒鬆動、移位，影響外觀和口腔健康。牙周病治療可分為非手術和手術治療。非手術治療包括牙根刮治（深層洗牙），利用儀器刮除發炎組織，促進健康組織的再生，以達到牙周病治療效果。對於嚴重牙周病或牙齦厚實，則需要進行牙周手術來改善牙周病。',
   },
   {
      hid: 'Keywords',
      name: 'Keywords',
      content: '牙周病 牙周炎 牙齦炎 牙周病治療 牙齦炎治療 牙根刮治 深層洗牙 輕微牙周病 牙菌膜 牙周手術 愛康健 深圳愛康健 深圳專業牙科中心 愛康健醫院 愛康健口腔醫院 深圳愛康健口腔醫院愛康健 CKJ愛康健齒科集團 深圳口腔專科醫院 愛康健齒科集團 深圳牙科醫院牙科服務內地牙科 深圳口腔專科',
   },
  ]
})

const bannerData = {
  img: 'https://static.cmereye.com/imgs/2023/07/f0b9f3bfc80d96b1.jpg',
  mbImg: 'https://static.cmereye.com/imgs/2023/08/3b1b35c6febb6e99.jpg',
  gif: 'https://static.cmereye.com/imgs/2023/08/0edc8793314c4da3.gif',
  text1: '#健康牙齒 從牙周病治療開始',
  text2: '保持清新口氣、牙肉年輕',
  tabNavName: 'pages.dental-service.periodontal.introduce.tabNavName'
}

const headerConfig = {
  img: 'https://static.cmereye.com/imgs/2023/06/a0628e13323a0a23.png',
  bg: 'https://static.cmereye.com/imgs/2023/06/af082f3968e5712e.jpg',
  mbImg: 'https://static.cmereye.com/imgs/2023/06/a2926036660c1155.jpg',
  pageName: 'periodontal',
  pcText: ['健康牙齒，從牙周病治療開始','保持清新口氣、牙肉年輕'],
  mbText: ['健康牙齒','從牙周病治療開始']
}

const orthodonticsIntroduceData = {
  title: 'pages.dental-service.periodontal.introduce.title',
  content: 'pages.dental-service.periodontal.introduce.content',
  mbImg: 'https://static.cmereye.com/imgs/2023/05/cac188cc7c6a922f.jpg',
  pcImg: 'https://static.cmereye.com/imgs/2023/05/9923e074ca29600b.jpg',
  tabNavName: 'pages.dental-service.periodontal.introduce.tabNavName',
}

const reasonData = {
  title: 'pages.dental-service.periodontal.reason.title',
  text: 'pages.dental-service.periodontal.reason.text',
  imgUrl: 'https://static.cmereye.com/imgs/2023/08/5ec08df193db38c5.jpg',
  reasonLists:[
    {
      context: 'pages.dental-service.periodontal.reason.lists[0].context',
    },
    {
      context: 'pages.dental-service.periodontal.reason.lists[1].context',
    },
    {
      context: 'pages.dental-service.periodontal.reason.lists[2].context',
    }
  ],
  pageName: 'periodontal'
}

const symptomData = {
  title: '牙周病的症狀',
  lists: [
    {
      imgUrl: 'https://static.cmereye.com/imgs/2023/08/7dd63ab5351aaac1.png',
      title: '刷牙時牙齦出血'
    },
    {
      imgUrl: 'https://static.cmereye.com/imgs/2023/08/389486ac6fe35fa9.png',
      title: '牙肉紅腫'
    },
    {
      imgUrl: 'https://static.cmereye.com/imgs/2023/08/09e5683e22167587.png',
      title: '口臭異味'
    },
    {
      imgUrl: 'https://static.cmereye.com/imgs/2023/08/6256413bfe4e51e6.png',
      title: '牙齒鬆動'
    },
    {
      imgUrl: 'https://static.cmereye.com/imgs/2023/08/f14522450de940c3.png',
      title: '牙齦腫脹'
    },
    {
      imgUrl: 'https://static.cmereye.com/imgs/2023/08/eddd6ecea0222b1e.png',
      title: '牙齒對冷熱敏感'
    },
    {
      imgUrl: 'https://static.cmereye.com/imgs/2023/08/07172006a002e3fd.png',
      title: '容易流牙血'
    },
    {
      imgUrl: 'https://static.cmereye.com/imgs/2023/08/2a0f78d8cdd73a1e.png',
      title: '牙齦萎縮'
    },
    {
      imgUrl: 'https://static.cmereye.com/imgs/2023/08/6bee6efc438d75ff.png',
      title: '牙齦從粉紅色變為暗紅色'
    },
    {
      imgUrl: 'https://static.cmereye.com/imgs/2023/08/e9b8a9130a04261d.png',
      title: '牙齒移位'
    }
  ]
}

const processData = {
  title: '牙周病治療過程',
  tabs: ['牙根刮治（深層洗牙）','牙肉翻瓣手術','牙周再生手術'],
  context: [],
  lists: [
    {
      listItem: [
          {
            title: '1',
            text: '口腔檢查',
            textIn: ''
          },
          {
            title: '2',
            text: '利用牙科儀器深入牙齦發炎的底部',
            textIn: ''
          },
          {
            title: '3',
            text: '刮除乾淨牙結石及發炎的牙肉組織',
            textIn: ''
          }
      ]
    },
    {
      listItem: [
          {
            title: '1',
            text: '局部麻醉',
            textIn: ''
          },
          {
            title: '2',
            text: '切開牙齦組織，分開牙齦組織與牙齒',
            textIn: ''
          },
          {
            title: '3',
            text: '用超聲波徹底清潔牙根表面及牙周囊袋下的牙垢、牙菌斑和生物膜',
            textIn: ''
          },
          {
            title: '4',
            text: '修整牙周骨缺損',
            textIn: ''
          },
          {
            title: '5',
            text: '縫合傷口',
            textIn: ''
          },
        ]
    },
    {
      listItem: [
          {
            title: '1',
            text: '評估是否適合進行牙周組織擴增、增生手術',
            textIn: ''
          },
          {
            title: '2',
            text: '根據牙肉狀態及骨頭的再生狀況，設計牙周再生計劃',
            textIn: ''
          },
          {
            title: '3',
            text: '在骨缺損處以骨粉填充',
            textIn: ''
          },
          {
            title: '4',
            text: '覆蓋再生膜，提供牙周組織的生長空間',
            textIn: ''
          },
          {
            title: '5',
            text: '牙周組織增加，使牙周更鞏固，牙齒存活時間更長',
            textIn: ''
          },
          {
            title: '6',
            text: '咬緊棉花或紗布止血',
            textIn: ''
          },
      ]
    }
  ]
}

const noteData = {
  title: '牙周病一定要進行手術嗎？',
  lists: [
    {
      name: '一般牙周病治療可分為非手術性和手術性。醫生會透過檢查及評估，再按照病人的病情，擬定適切的治療方案。',
    },
    {
      name: '非手術治療即牙根刮治（深層洗牙），通過儀器刮除發炎組織，讓牙周健康的組織能在短時間內長回來。',
    },
    {
      name: '對於較嚴重的牙周病，或是牙齦厚實經由非手術治療不易達到良好效果者，就會進行牙周手術改善牙周病的情況。',
    },
    {
      name: '牙周病手術主要分成兩類，牙肉翻瓣手術及牙周再生手術，更深入地把發炎組織處理乾淨，防止發炎繼續惡化。',
    }
  ]
}

const problemData = {
  title: 'pages.dental-service.periodontal.problem.title',
  lists: [
    {
      Q: 'pages.dental-service.periodontal.problem.lists[0].Q',
      A: 'pages.dental-service.periodontal.problem.lists[0].A'
    },
    {
      Q: 'pages.dental-service.periodontal.problem.lists[1].Q',
      A: 'pages.dental-service.periodontal.problem.lists[1].A'
    },
    {
      Q: 'pages.dental-service.periodontal.problem.lists[2].Q',
      A: 'pages.dental-service.periodontal.problem.lists[2].A'
    },
    {
      Q: 'pages.dental-service.periodontal.problem.lists[3].Q',
      A: 'pages.dental-service.periodontal.problem.lists[3].A'
    },
    {
      Q: 'pages.dental-service.periodontal.problem.lists[4].Q',
      A: 'pages.dental-service.periodontal.problem.lists[4].A'
    },
  ]
}

</script>


<template>
<div>
  <!-- <PageHeader :headerConfig="headerConfig" /> -->
  <div class="periodontalPage">
    <!-- <div class="index_title pageCon">{{$t('pages.dental-service.title')}}</div> -->
    <ServiceBanner :bannerData="bannerData" :pageName="'periodontal'" />
    <ServiceIntroduce :introduceData="orthodonticsIntroduceData" :reasonData="reasonData" />
    <!-- <ServiceReason :reasonData="reasonData" /> -->
    <div class="symptom-line">
      <RippleLine :type="'4'" />
    </div>
    <div class="symptom">
      <div class="symptom-title">
        <div class="symptom-title-in">
          <ServiceTitle :title="symptomData.title" />
        </div>
      </div>
      <div class="symptom-box">
        <div class="symptom-lists pageCon">
          <div class="symptom-lists-in" v-for="(symptomItem,symptomIndex) in symptomData.lists" :key="symptomIndex">
            <div class="symptom-lists-in-img">
              <img :src="symptomItem.imgUrl" alt="">
            </div>
            <div class="symptom-lists-in-title">{{symptomItem.title}}</div>
          </div>
        </div>
      </div>
    </div>
    <ServiceProcess :processData="processData" />
    <ServiceNote :noteData="noteData" :pageName="'periodontal'" />
    <div class="noteLine"><RippleLine :type="'4'" /></div>
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
.periodontalPage{
  margin-top: -20px;
  padding-bottom: 140px;
}
.symptom-line{
  margin-top: 178px;
}
.noteLine{
  padding-top: 90px;
}
.symptom{
  margin-top: 126px;
  &-title{
    display: flex;
    justify-content: center;
  }
  &-lists{
    display: flex;
    flex-wrap: wrap;
    margin-top: 99px;
    padding: 0 45px;
    &-in{
      width: 20%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 60px;
      &-img{
        width: 184px;
        height: 184px;
        margin: 0 auto;
        background: #F5F4F4;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
          max-width: 60%;
          max-height: 60%;
        }
      }
      &-title{
        width: 100%;
        max-width: 184px;
        padding: 12px 0;
        text-align: center;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 160%;
        color: #666666;
      }
    }
  }
}
@media (min-width: 900px) and (max-width: 1100px) {
  .symptom{
    &-lists{
      &-in{
        width: calc(100% / 4);
      }
    }
  }
}
@media (min-width: 760px) and (max-width: 900px) {
  .symptom{
    &-lists{
      &-in{
        width: calc(100% / 3);
      }
    }
  }
}
@media only screen and (max-width: 760px) {
  .symptom-line{
    margin-top: 80px;
  }
  .noteLine{
    padding-top: 80px;
  }
  .symptom{
    margin-top: 20px;
    &-lists{
      padding: 0 30px;
      margin-top: 40px;
      &-in{
        width: 50%;
        margin-bottom: 30px;
        &-img{
          width: 130px;
          height: 130px;
        }
        &-title{
          max-width: 110px;
          padding: 10px 0;
          font-size: 15px;
        }
      }
    }
  }
}
</style>