<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
const appState = useAppState()
appState.setDentistryService('wisdom-teeth-extraction')
useHead({
  title: "拔牙 | 智慧齒",
  meta: [
   {
      hid: 'description',
      name: 'description',
      content: '愛康健提供拔牙及智慧齒脫除服務，牙齒可能因嚴重蛀壞或崩裂、嚴重牙周病、過度鬆動、不良位置生長導致附近組織受損和感染，或者出現外觀和結構問題，這些情況可能需要進行拔牙治療，並配合進行牙齒矯正。通常情況下，拔牙不需要進行手術，但如果牙齒歪生或非常接近神經，可能需要進行手術式拔牙。',
   },
   {
      hid: 'Keywords',
      name: 'Keywords',
      content: '拔牙 智慧齒脫除 脱智慧齒 拔智齒 智慧齒 拔牙除術 拔牙術 剝智慧齒 愛康健 深圳愛康健 深圳專業牙科中心 愛康健醫院 愛康健口腔醫院 深圳愛康健口腔醫院愛康健 CKJ愛康健齒科集團 深圳口腔專科醫院 愛康健齒科集團 深圳牙科醫院牙科服務內地牙科 深圳口腔專科',
   },
  ]
})

const bannerData = {
  img: 'https://static.cmereye.com/imgs/2023/07/f0b9f3bfc80d96b1.jpg',
  mbImg: 'https://static.cmereye.com/imgs/2023/08/3b1b35c6febb6e99.jpg',
  gif: 'https://static.cmereye.com/imgs/2023/08/0edc8793314c4da3.gif',
  text1: '#自由．舒適．美觀',
  text2: '保持自然笑容 牙齒更加美麗動人',
  tabNavName: 'pages.dental-service.invisalign.introduce.tabNavName'
}

const headerConfig = {
  img: 'https://static.cmereye.com/imgs/2023/06/be6cbd721fed563e.png',
  bg: 'https://static.cmereye.com/imgs/2023/06/fc94e41b3cd98d6b.jpg',
  mbImg: 'https://static.cmereye.com/imgs/2023/06/9fd49477afcd2b60.jpg',
  pageName: 'wisdom-teeth-extraction',
  pcText: ['拔牙及智慧齒脫除','專業醫療團隊，照顧每一位客人健康與感受'],
  mbText: ['專業醫療團隊','照顧客人健康']
}

const orthodonticsIntroduceData = {
  title: 'pages.dental-service.wisdom-teeth-extraction.introduce.title',
  content: 'pages.dental-service.wisdom-teeth-extraction.introduce.content',
  mbImg: 'https://static.cmereye.com/imgs/2023/06/58299d97d5204cdd.jpg',
  pcImg: 'https://static.cmereye.com/imgs/2023/06/70059336eaad4630.jpg',
  tabNavName: 'pages.dental-service.wisdom-teeth-extraction.introduce.tabNavName',
  pageName: 'wisdom-teeth-extraction'
}

const reasonData = {
  title: 'pages.dental-service.wisdom-teeth-extraction.reason.title',
  text: 'pages.dental-service.wisdom-teeth-extraction.reason.text',
  imgUrl: 'https://static.cmereye.com/imgs/2023/08/5ec08df193db38c5.jpg',
  reasonLists:[
    {
      context: 'pages.dental-service.wisdom-teeth-extraction.reason.lists[0].context',
    },
    {
      context: 'pages.dental-service.wisdom-teeth-extraction.reason.lists[1].context',
    },
    {
      context: 'pages.dental-service.wisdom-teeth-extraction.reason.lists[2].context',
    },
    {
      context: 'pages.dental-service.wisdom-teeth-extraction.reason.lists[3].context',
    },
    {
      context: 'pages.dental-service.wisdom-teeth-extraction.reason.lists[4].context',
    }
  ],
  pageName: 'wisdom-teeth-extraction'
}

const issueData = {
  title: '智慧齒可能導致的口腔問題',
  imgUrl: 'https://static.cmereye.com/imgs/2023/08/35b763276aa6ecb5.jpg',
  issueLists: [
    '由於智慧齒生長位置較後，難以清潔，容易積聚牙菌膜，引致蛀牙',
    '當智慧齒出現橫生或斜生情況，鄰近的牙齒會受到壓力，嚴重更會令牙槽骨萎縮，甚至鬆脫',
    '如出現智慧齒阻生情況，牙齒會被牙齦覆蓋，因而令食物渣滓和細菌藏在牙齦和牙冠之間，造成牙齦發炎和腫脹。嚴重更會使整個面頰出現腫脹，進食時亦會感到痛楚，阻生的智慧齒一般需要進行手術方可拔除'
  ]
}

const noteData = {
  title: '療程後注意事項',
  lists: [
    {
      name: '一般需咬緊棉花或紗布約三十分鐘至一小時止血，其間可如常吞口水',
    },
    {
      name: '進食後以溫水或鹽水輕輕漱口，保持傷口清潔',
    },
    {
      name: '避免觸碰傷口上的凝固血塊，引致出血',
    },
    {
      name: '避免食用堅硬和粗糙的食物',
    },
    {
      name: '避免飲用含酒精飲品',
    },
    {
      name: '避免吃過冷或過熱的食物',
    },
    {
      name: '避免大力漱口或吐痰'
    }
  ],
  pageName: 'wisdomTeethExtraction',
  text: '*拔牙後，傷口有機會出現腫脹，一般會數天後消退，可按醫生處方服藥或以冷敷消腫及紓緩不適。如傷口持續或大量出血，需盡快聯絡醫生，或視乎嚴重程度前往就近急症室求診。'
}

const processData = {
  title: '拔牙及智慧齒脫除過程',
  tabs: ['智慧齒脫除','手術性脫牙','非手術性脫牙'],
  context: ['※拔牙一般不需要進行手術，','但若牙齒歪生或非常接近神經，則有機會需','要進行手術式脫牙。'],
  lists: [
    {
      listItem: [
          {
            title: '1',
            text: '透過口腔檢查及口腔全景X光片，了解智慧齒生長的狀況及準確位置',
            textIn: ''
          },
          {
            title: '2',
            text: '注射局部麻醉藥',
            textIn: ''
          },
          {
            title: '3',
            text: '如智慧齒出現阻生，需把牙齦割開、翻起，將智慧齒切成數個部分再逐一移除',
            textIn: ''
          },
          {
            title: '4',
            text: '清潔及縫合傷口',
            textIn: ''
          },
          {
            title: '5',
            text: '手術後腫痛的情況會維持兩至三日，醫生會處方止痛藥和抗生素（需要時服用）舒緩情況，一般約一星期後便完全康復。',
            textIn: ''
          }
      ]
    },
    {
      listItem: [
          {
            title: '1',
            text: '注射局部麻醉或全身麻醉藥（特殊情況下）',
            textIn: ''
          },
          {
            title: '2',
            text: '翻起牙齦',
            textIn: ''
          },
          {
            title: '3',
            text: '除去部分覆蓋牙齒的牙槽骨，使牙根外露',
            textIn: ''
          },
          {
            title: '4',
            text: '把牙齒搖鬆或分割成幾部分取出',
            textIn: ''
          },
          {
            title: '5',
            text: '縫合傷口',
            textIn: ''
          },
          {
            title: '6',
            text: '咬緊棉花或紗布止血',
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
            text: '把牙齒搖鬆，拔掉',
            textIn: ''
          },
          {
            title: '3',
            text: '咬緊棉花或紗布止血',
            textIn: ''
          }
      ]
    },
  ]
}

const problemData = {
  title: 'pages.dental-service.wisdom-teeth-extraction.problem.title',
  lists: [
    {
      Q: 'pages.dental-service.wisdom-teeth-extraction.problem.lists[0].Q',
      A: 'pages.dental-service.wisdom-teeth-extraction.problem.lists[0].A'
    },
    {
      Q: 'pages.dental-service.wisdom-teeth-extraction.problem.lists[1].Q',
      A: 'pages.dental-service.wisdom-teeth-extraction.problem.lists[1].A'
    },
    {
      Q: 'pages.dental-service.wisdom-teeth-extraction.problem.lists[2].Q',
      A: 'pages.dental-service.wisdom-teeth-extraction.problem.lists[2].A'
    },
    {
      Q: 'pages.dental-service.wisdom-teeth-extraction.problem.lists[3].Q',
      A: 'pages.dental-service.wisdom-teeth-extraction.problem.lists[3].A'
    },
    {
      Q: 'pages.dental-service.wisdom-teeth-extraction.problem.lists[4].Q',
      A: 'pages.dental-service.wisdom-teeth-extraction.problem.lists[4].A'
    },
    {
      Q: 'pages.dental-service.wisdom-teeth-extraction.problem.lists[5].Q',
      A: 'pages.dental-service.wisdom-teeth-extraction.problem.lists[5].A'
    },
  ]
}
</script>

<template>
<div>
  <div class="wisdomTeethExtractionPage">
    <ServiceBanner :bannerData="bannerData" :pageName="'invisalign'" />
    <ServiceIntroduce :introduceData="orthodonticsIntroduceData" :reasonData="reasonData" />
    <div class="issue pageCon">
      <div class="issue-top">
        {{issueData.title}}
      </div>
      <div class="issue-bottom">
        <div class="issue-bottom-img">
          <img :src="issueData.imgUrl" alt="">
        </div>
        <div class="issue-bottom-lists">
          <div class="issue-bottom-lists-in" v-for="(issueItem,issueIndex) in issueData.issueLists" :key="issueIndex">
            <div>·</div>
            <div>{{issueItem}}</div>
          </div>
        </div>
      </div>
    </div>
    <ServiceProcess :processData="processData" />
    <ServiceNote :noteData="noteData" />
    <div class="note-line">
      <RippleLine :type="'4'" />
    </div>
    <ServiceProblem :problemData="problemData" />
    <serviceCard />
    <RippleLine :type="'4'" />
    <ContactUs />
  </div>
</div>
</template>

<style lang="scss" scoped>
.wisdomTeethExtractionPage{
  margin-top: -20px;
  padding-bottom: 140px;
}

.issue{
  margin-top: 200px;
  text-align: center;
  &-top{
    font-size: 31.766px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    letter-spacing: 7.942px;
    color: var(--topic-text-color);
    display: inline-block;
    position: relative;
    &::after{
      content: '';
      position: absolute;
      z-index: -1;
      left: -20px;
      bottom: 5px;
      height: 23px;
      border-radius: 8px;
      opacity: 0.5;
      background: #FFB0CA;
      width: calc(100% + 40px);
    }
  }
  &-bottom{
    width: 100%;
    max-width: 967px;
    margin: 92px auto 0;
    display: flex;
    text-align: left;
    justify-content: space-between;
    align-items: center;
    &-img{
      width: 50%;
      max-width: 408px;
      img{
        width: 100%;
        height: auto;
      }
    }
    &-lists{
      width: 50%;
      max-width: 460px;
      &-in{
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 200%;
        letter-spacing: 4.8px;
        color: #666666;
        &:not(:last-child){
          margin-bottom: 10px;
        }
        &>div:first-child{
          display: inline;
          margin-right: 5px;
          margin-left: 5px;
        }
        &>div:last-child{
          flex: 1;
          display: inline;
        }
      }
    }
  }
}
.note-line{
  margin-top: 170px;
}

@media (min-width: 768px) and (max-width: 1452px) {
  // .issue{
  //   margin-top: 10vw;
  //   &-top{
  //     margin-left: 13vw;
  //     font-size: 3vw;
  //   }
  //   &-bottom{
  //     margin-left: 13vw;
  //     margin-top: 2vw;
  //     &-img{
  //       width: 23vw;
  //       height: 23vw;
  //       margin-right: 2vw;
  //     }
  //     &-lists{
  //       max-width: 45vw;
  //       &-in{
  //         font-size: 1.7vw;
  //       }
  //     }
  //   }
  // }
}
@media only screen and (max-width: 760px) {
  .issue{
    margin-top: 50px;
    padding: 30px;
    &-top{
      font-size: 20px;
      letter-spacing: 5px;
      &::after{
        height: 10px;
        left: -10px;
        width: calc(100% + 20px);
      }
    }
    &-bottom{
      margin-top: 39px;
      flex-direction: column;
      &-img{
        width: 100%;
        height: 100%;
      }
      &-lists{
        width: 100%;
        max-width: 100%;
        margin-top: 39px;
        padding: 0 20px;
        &-in{
          font-weight: 500;
          font-size: 15px;
          letter-spacing: 4.5px;
        }
      }
    }
  }
  .note-line{
    margin-top: 82px;
  }
}
</style>