<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
const appState = useAppState()
appState.setDentistryService('scaling-and-polishing')
useHead({
  title: "洗牙｜牙科服務",
  meta: [
   {
      hid: 'description',
      name: 'description',
      content: '愛康健提供洗牙服務，利用牙科儀器徹底清洗牙齒污垢，使牙齒回復平滑，減少細菌滋生的機會。定期進行洗牙可以有效去除牙齒上的牙石和牙菌膜，防止牙齒變色、影響牙齦和骨骼健康、避免蛀牙或牙齒脫落。',
   },
   {
      hid: 'Keywords',
      name: 'Keywords',
      content: '洗牙 洗牙費用 洗牙服務 洗牙費用 洗牙價錢 深層洗牙價錢深層洗牙 定期洗牙 洗牙推薦 牙齒清潔 清除牙石 牙菌膜  牙石 菌膜愛康健 深圳愛康健 深圳專業牙科中心 愛康健醫院 愛康健口腔醫院 深圳愛康健口腔醫院愛康健 CKJ愛康健齒科集團 深圳口腔專科醫院 愛康健齒科集團 深圳牙科醫院牙科服務內地牙科 深圳口腔專科',
   },
  ]
})

const bannerData = {
  img: 'https://static.cmereye.com/imgs/2023/08/2b848a792c94c4dd.jpg',
  mbImg: 'https://static.cmereye.com/static/ckjnewsite/img/banner/11.jpg',
  gif: 'https://static.cmereye.com/imgs/2023/08/0edc8793314c4da3.gif',
  text1: '#定期洗牙  全方位清潔口腔盲點',
  text2: '愛牙愛己  愛康健細心守護您牙齒健康',
  tabNavName: 'pages.dental-service.scaling-and-polishing.introduce.tabNavName'
}

const headerConfig = {
  img: 'https://static.cmereye.com/imgs/2023/06/979fc73167dda0fc.png',
  bg: 'https://static.cmereye.com/imgs/2023/06/e2b235f6189eb9c8.jpg',
  mbImg: 'https://static.cmereye.com/imgs/2023/06/d8283b396076a68d.jpg',
  pageName: 'scaling-and-polishing',
  pcText: ['定期洗牙，全方位清潔口腔盲點','愛牙愛己，愛康健細心守護您牙齒健康'],
  mbText: ['定期洗牙','全方位清潔口腔盲點']
}

const introduceData = {
  title: 'pages.dental-service.scaling-and-polishing.introduce.title',
  content: 'pages.dental-service.scaling-and-polishing.introduce.content',
  mbImg: 'https://static.cmereye.com/imgs/2023/05/e2bc750495cbd2df.jpg',
  pcImg: 'https://static.cmereye.com/imgs/2023/08/3b519d54ffd9967a.jpg',
  tabNavName: 'pages.dental-service.scaling-and-polishing.introduce.tabNavName',
  pageName: 'scalingAndPolishing'
}

const reasonData = {
  title: 'pages.dental-service.scaling-and-polishing.reason.title',
  text: 'pages.dental-service.scaling-and-polishing.reason.text',
  imgUrl: 'https://static.cmereye.com/imgs/2023/08/3b519d54ffd9967a.jpg',
  reasonLists:[
    {
      context: 'pages.dental-service.scaling-and-polishing.reason.lists[0].context',
    },
    {
      context: 'pages.dental-service.scaling-and-polishing.reason.lists[1].context',
    }
  ],
  isMediumCW: true
}

const stepData = {
  title: '洗牙過程',
  remark: '由於洗牙時會觸碰到牙肉的發炎位置，因此可能會導致牙齦出血或輕微痺痛感。特別是一些從未或相隔很久沒有洗牙的人士，不適感一般會在洗牙後的2至3天後逐漸消失（患有敏感牙齒或牙周病的人士或需更長時間）。如情況持續出現，應立即聯絡醫護人員。',
  stepLists: [
      {
        title: '1',
        text: '利用超聲波洗牙工具，清除牙石及牙菌膜'
      },
      {
        title: '2',
        text: '利用刮牙石器去除細小牙石'
      },
      {
        title: '3',
        text: '利用牙科用浮石粉拋光打磨或特製混合物料高速噴洗牙齒表面，去除牙漬及保持牙齒平滑'
      },
      {
        title: '4',
        text: '利用氟化物鞏固琺瑯質，強化牙齒'
      }
  ],
  pageName: 'scaling-and-polishing'
}

const problemData = {
  title: 'pages.dental-service.scaling-and-polishing.problem.title',
  lists: [
    {
      Q: 'pages.dental-service.scaling-and-polishing.problem.lists[0].Q',
      A: 'pages.dental-service.scaling-and-polishing.problem.lists[0].A'
    },
    {
      Q: 'pages.dental-service.scaling-and-polishing.problem.lists[1].Q',
      A: 'pages.dental-service.scaling-and-polishing.problem.lists[1].A'
    },
  ],
  pageName: 'scaling-and-polishing'
}

</script>


<template>
<div>
  <!-- <PageHeader :headerConfig="headerConfig" /> -->
  <div class="servicePageConfig">
    <ServiceBanner :bannerData="bannerData" pageName="scaling-and-polishing" />
    <!-- <div class="index_title pageCon">{{$t('pages.dental-service.title')}}</div> -->
    <ServiceIntroduce :introduceData="introduceData" :reasonData="reasonData" :animConfig="{color: '#FC1682',text: 'DENTAL CLEANING'}" moduleType="4" introduceType="4" />
    <!-- <ServiceReason :reasonData="reasonData" /> -->
    <ServiceStep :stepData="stepData" pageName="scaling-and-polishing" />
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
.servicePageConfig{
  margin-top: -20px;
  padding-bottom: 140px;
}
</style>
