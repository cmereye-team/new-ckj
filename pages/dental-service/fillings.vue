<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
const appState = useAppState()
appState.setDentistryService('fillings')
useHead({
  title: '補牙｜牙科服務',
  meta: [
   {
      hid: 'description',
      name: 'description',
      content: '愛康健提供補牙服務，補牙為了修復破損的牙齒組織，防止蛀牙情況進一步惡化，一般會使用填充物填補牙齒，讓牙齒恢復原來的形狀和功能。常用的牙齒修補材料有複合樹脂（瓷粉）和銀汞合金（銀粉）兩種，選擇適合的補牙材料取決於牙齒蛀壞的程度和位置等因素。補牙過程通常很簡單，同時保有自然牙的美觀性。',
   },
   {
      hid: 'Keywords',
      name: 'Keywords',
      content: '補牙 牙體復形 補牙材料 補牙費用 瓷粉補牙 銀粉補牙 補牙物料 補牙價錢 補牙收費 補牙洞 蛀牙補牙門牙補牙 蛀牙 愛康健 深圳愛康健 深圳專業牙科中心 愛康健醫院 愛康健口腔醫院 深圳愛康健口腔醫院愛康健 CKJ愛康健齒科集團 深圳口腔專科醫院 愛康健齒科集團 深圳牙科醫院牙科服務內地牙科 深圳口腔專科',
   },
  ]
})

const bannerData = {
  img: 'https://static.cmereye.com/imgs/2023/08/a0df9167d54cd8f7.jpg',
  mbImg: 'https://static.cmereye.com/imgs/2023/08/3b1b35c6febb6e99.jpg',
  gif: 'https://static.cmereye.com/imgs/2023/08/0edc8793314c4da3.gif',
  text1: '#高質量的修復效果',
  text2: '緊急救援您珍貴的牙齒',
  tabNavName: 'pages.dental-service.fillings.introduce.tabNavName'
}

const headerConfig = {
  img: 'https://static.cmereye.com/imgs/2023/06/84d8cb1804ceccde.png',
  bg: 'https://static.cmereye.com/imgs/2023/06/2baa49a13d587aa6.jpg',
  mbImg: 'https://static.cmereye.com/imgs/2023/06/dc5a79b64bbddc8c.jpg',
  pageName: 'fillings',
  pcText: ['高質量的修復效果','緊急救援您珍貴的牙齒'],
  mbText: ['高質量的修復效果','緊急救援您珍貴的牙齒']
}

const introduceData = {
  title: 'pages.dental-service.fillings.introduce.title',
  content: 'pages.dental-service.fillings.introduce.content',
  mbImg: 'https://static.cmereye.com/imgs/2023/05/61b68b2597a8e44d.jpg',
  pcImg: 'https://static.cmereye.com/imgs/2023/08/dc170668965c0279.jpg',
  tabNavName: 'pages.dental-service.fillings.introduce.tabNavName',
  pageName: 'fillings',
}

const reasonData = {
  title: 'pages.dental-service.fillings.reason.title',
  text: 'pages.dental-service.fillings.reason.text',
  imgUrl: 'https://static.cmereye.com/imgs/2023/05/d053bb08e7c265a0.jpg',
  reasonLists: [
    {
      context:
        'pages.dental-service.fillings.reason.lists[0].context',
    },
  ],
  isMediumCW: true,
}

const stepData = {
  title: '補牙過程',
  stepLists: [
      {
        title: '1',
        text: '清除牙齒蛀壞及脆弱的部分',
      },
      {
        title: '2',
        text: '用專用的清潔消毒劑清潔牙齒表面，吹乾後，塗上黏固劑',
      },
      {
        title: '3',
        text: '填補牙洞及修補缺損部分',
      },
      {
        title: '4',
        text: '穩固填充物',
      },
      {
        title: '5',
        text: '牙齒修形及拋光（如蛀牙的程度深，或需要使用麻醉劑）',
      }
  ]
}

const noteData = {
  title: '補牙後建議',
  lists: [
    {
      img: 'https://static.cmereye.com/imgs/2023/08/a537b0d4aaec269b.png',
      name: '避免咬合過硬的食物',
    },
    {
      img: 'https://static.cmereye.com/imgs/2023/08/91f81150fb7e97fd.png',
      name: '避免進食過冷或過熱的食物',
    },
  ],
}

const materialData = {
  title: '補牙材料',
  context: [
    '補牙材料主要分為複合樹脂（俗稱瓷粉）','及銀汞合金（俗稱銀粉）兩種。',
    '複合樹脂是現時最常用的材料。由於銀汞合金氧化後會變成銀黑色，因此較少被選用。',
  ],
  tableLeft: [
    [
      '類別',
      '特性',
      '優點',
      '缺點'
    ],[
      '複合樹脂',
      '多用於修復牙齒的形狀',
      '美觀，接近牙齒天然的顏色與牙釉質有較強的粘合力',
      '強度比銀汞合金稍弱'
    ]
  ],
  tableRight: [
    '銀汞合金',
    '多用於修補小臼齒或大臼齒的蛀牙',
    '堅固，可承受較強的咬合力耐用，不易磨損',
    '氧化後會變銀黑色，欠美觀'
  ]
}

let materialCurrent = ref(1)

const onSlideChange = (swiper:any) => {
  materialCurrent.value = swiper.realIndex + 1
}

let windowWidth = ref(1920)

onMounted(()=>{
  getWindowWidth()
  window.addEventListener('resize',getWindowWidth)
})

const getWindowWidth = () => {
  windowWidth.value = window.innerWidth
}

const problemData = {
  title: 'pages.dental-service.fillings.problem.title',
  lists: [
    {
      Q: 'pages.dental-service.fillings.problem.lists[0].Q',
      A: 'pages.dental-service.fillings.problem.lists[0].A',
    },
    {
      Q: 'pages.dental-service.fillings.problem.lists[1].Q',
      A: 'pages.dental-service.fillings.problem.lists[1].A',
    },
    {
      Q: 'pages.dental-service.fillings.problem.lists[2].Q',
      A: 'pages.dental-service.fillings.problem.lists[2].A',
    },
    {
      Q: 'pages.dental-service.fillings.problem.lists[3].Q',
      A: 'pages.dental-service.fillings.problem.lists[3].A',
    },
  ],
}
</script>


<template>
  <div>
    <!-- <PageHeader :headerConfig="headerConfig" /> -->
    <div class="servicePageConfig">
      <ServiceBanner :bannerData="bannerData" />
      <!-- <div class="index_title pageCon">{{$t('pages.dental-service.title')}}</div> -->
      <ServiceIntroduce :introduceData="introduceData" :reasonData="reasonData" :animConfig="{color: '#FC1682',text: 'CAVITY FILLING'}" moduleType="4" introduceType="2" />
      <!-- <ServiceReason :reasonData="reasonData" /> -->
      <ServiceStep :stepData="stepData" pageName="fillings" />
      <!-- <ServiceNote :noteData="noteData" /> -->
      <div class="note">
        <RippleLine type="2" />
        <div class="note-bg">
          <div class="note-title">
            <ServiceTitle :title="noteData.title" yaBorder="#FECB02" />
          </div>
          <div class="note-lists">
            <div class="note-lists-in" v-for="(note,index) in noteData.lists" :key="index">
              <div class="image"><img :src="note.img" alt="" /></div>
              <div class="text">{{note.name}}</div>
            </div>
          </div>
        </div>
        <RippleLine type="2" :isBottom="true" />
      </div>
      <div class="material">
        <div class="material-title">
          <div class="material-title-in bb">
            <ServiceTitle :title="materialData.title" />
          </div>
        </div>
        <div class="material-context">
          <span v-for="(contextItem,contextIndex) in materialData.context" :key="contextIndex">{{contextItem}}</span>
        </div>
        <div class="material-in">
          <div class="materialBox">
            <div class="materialBox-in">
              <div class="box-left">
                <div class="box">
                  <div
                    class="box-in"
                    v-for="(meritItem,meritIndex) in materialData.tableLeft[0]"
                    :key="meritIndex"
                  >
                    <div>{{meritItem}}</div>
                  </div>
                </div>
              </div>
            </div >
            <div class="materialBox-in">
              <div class="box-center">
                <div class="box">
                  <div
                    class="box-in"
                    v-for="(meritItem,meritIndex) in materialData.tableLeft[1]"
                    :key="meritIndex"
                  >
                    <div>{{meritItem}}</div>
                  </div>
                </div>
              </div>
            </div >
            <div class="materialBox-in">
              <div class="box-right">
                <div class="box">
                  <div
                    class="box-in"
                    v-for="(shortcomingItem,shortcomingIndex) in materialData.tableRight"
                    :key="shortcomingIndex"
                  >
                    <div>{{shortcomingItem}}</div>
                  </div>
                </div>
              </div>
            </div >
          </div>
        </div>
        <!-- <div class="material-line mbBox">
          <PageSwiperPointLine :latestNewsNum="3" :latestNewsCurrent="materialCurrent"></PageSwiperPointLine>
        </div> -->
      </div>
      <RippleLine :type="'4'" />
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
.material {
  width: 100%;
  max-width: 1450px;
  margin: 185px auto;
  &-title{
    display: flex;
    justify-content: center;
  }
  &-context{
    width: 100%;
    max-width: 800px;
    margin: 80px auto 0;
    text-align: center;
    span {
      font-style: normal;
      font-weight: 500;
      font-size: 19px;
      line-height: 160%;
      color: var(--topic-text-color);
      letter-spacing: 3.8px;
    }
  }
  &-in {
    max-width: 1005px;
    margin: 80px auto 0;
    .box {
      width: 100%;
      .box-in {
        height: 93px;
        // margin-top: 4px;
        border-bottom: 1px solid var(--topic-color);
        border-right: 1px solid var(--topic-color);
        display: flex;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 160%;
        color: var(--topic-text-color);
        padding: 0 40px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        &:first-child {
          background: var(--topic-color);
          color: #fff;
          margin-top: 0;
          height: 48px;
          font-weight: 500;
          font-size: 20px;
          // justify-content: center;
          border-right: none;
          margin-right: 2px;
        }
        &:last-child{
          
          
        }
        &:nth-of-type(3) {
          height: 121px;
          padding: 0 85px;
          text-align: center;
        }
      }
    }
    .materialBox{
      display: flex;
      .materialBox-in{
        &:nth-of-type(1){
          width: 25.68% ;
        }
        &:nth-of-type(2){
          width: 37.16% ;
        }
        &:nth-of-type(3){
          width: 37.16% ;
          .box {
            .box-in{
              border-right: none;
            }
          }
        }
      }
    }
    .box-left {
      // margin-right: 2px;
      // border-radius: 60px 0 0 60px;
    //   overflow: hidden;
    //   display: flex;
      .box:nth-of-type(1){
        .box-in{
    //       font-weight: 700;
    //       font-size: 28px;
          justify-content: center;
          color: var(--topic-color);
          font-size: 18px;
          font-style: normal;
          font-weight: 500;
          line-height: 160%; /* 28.8px */
          letter-spacing: 4.5px;
          &:nth-of-type(1){
            color: #fff;
            font-size: 20px;
          }
        }
      }
    }
    // .box-right {
      // border-radius: 0 60px 60px 0;
      // overflow: hidden;
      // margin-left: 2px;
    // }
  }
  // &-line {
  //   width: 120px;
  //   margin: 22px auto;
  // }
}
.note{
  margin-top: -40px;
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
      .image{
        position: relative;
        img{
          width: 100%;
        }
        &::before{
          content: '';
          background: url(https://static.cmereye.com/imgs/2023/08/6f4555dbf9221e6b.png) no-repeat;
          background-size: cover;
          position: absolute;
          top: -12.5%;
          left: -16%;
          width: 40%;
          height: 40%;
        }
      }
      .text{
        margin-top: 57px;
        text-align: center;
        color: var(--topic-color);
        font-size: 30px;
        font-style: normal;
        font-weight: 500;
        line-height: 160%; /* 48px */
        letter-spacing: 9px;
      }
    }
  }
}
@media only screen and (max-width: 760px) {
  .material {
    &-context {
      padding: 0 30px;
      margin: 28px auto 0;
      text-align: center;
      span{
        display: block;
        font-weight: 500;
        font-size: 15px;
      }
    }
    &-in {
      width: 100%;
      margin: 34px 0 0;
      .box {
        .box-in {
          font-weight: 500;
          font-size: 15px;
          margin-top: 3px;
          padding: 0 30px;
          &:first-child {
            height: 51.15px;
            font-weight: 600;
            font-size: 20px;
          }
          &:last-child {
            height: 80px;
          }
        }
      }
      .swiper{
        padding: 0 30px;
        .swiper-slide{
          &:nth-of-type(1){
            width: 230.56px !important;
          }
          &:nth-of-type(2){
            width: 92.128% !important;
          }
          &:nth-of-type(3){
            width: 92.128% !important;
          }
        }
      }
    }
  }
}
</style>