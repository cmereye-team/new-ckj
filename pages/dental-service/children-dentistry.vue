<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
const appState = useAppState()
appState.setDentistryService('children-dentistry')
useHead({
  title: "兒童牙科保健｜牙科服務",
  meta: [
   {
      hid: 'description',
      name: 'description',
      content: '愛康健提供兒童牙科保健服務，家長可以定期帶孩子去合格的牙醫進行牙科檢查和諮詢，早期發現兒童牙齒的潛在問題，例如蛀牙和其他口腔疾病，並採取針對性的治療。小朋友口腔和牙齒問題成因與成年人不同，牙科治療上需要留意，同時需要照顧兒童的心靈，讓他們放心接受牙科治療。愛康健兒童牙科保健服務提供適合兒童的治療方式，讓小朋友能夠在舒適安全的環境下接受牙科治療。',
   },
   {
      hid: 'Keywords',
      name: 'Keywords',
      content: '兒童牙科 兒童牙科保健 兒童牙科診所 兒童牙科醫院 學童牙科診所 學童牙科醫院 兒童牙科護理 學童牙科保健 學童牙科 幼童牙科保健 兒童牙齒保健 小兒牙科保健 愛康健 深圳愛康健 深圳專業牙科中心 愛康健醫院 愛康健口腔醫院 深圳愛康健口腔醫院愛康健 CKJ愛康健齒科集團 深圳口腔專科醫院 愛康健齒科集團 深圳牙科醫院牙科服務內地牙科 深圳口腔專科',
   },
  ]
})

const bannerData = {
  img: 'https://static.cmereye.com/imgs/2023/08/9a147138319763f0.jpg',
  mbImg: 'https://static.cmereye.com/imgs/2023/08/3b1b35c6febb6e99.jpg',
  gif: 'https://static.cmereye.com/imgs/2023/08/0edc8793314c4da3.gif',
  text1: '#回歸自然微笑 恢復咀嚼功能',
  text2: '牙齒更加整齊、美觀、自信、舒適',
  tabNavName: 'pages.dental-service.children-dentistry.introduce.tabNavName'
}

const headerConfig = {
  img: 'https://static.cmereye.com/imgs/2023/06/67f203a9b4c651be.png',
  bg: 'https://static.cmereye.com/imgs/2023/06/4a26475cb4471cee.jpg',
  mbImg: 'https://static.cmereye.com/imgs/2023/06/671098dc7b098348.jpg',
  pageName: 'children-dentistry',
  pcText: ['關注口腔健康，從定期檢查開始','立即預約檢查，展開護牙行動'],
  mbText: ['關注口腔健康','從定期檢查開始']
}

const orthodonticsIntroduceData = {
  title: 'pages.dental-service.children-dentistry.introduce.title',
  content: 'pages.dental-service.children-dentistry.introduce.content',
  mbImg: 'https://static.cmereye.com/imgs/2023/05/482f1dd094438e98.jpg',
  pcImg: 'https://static.cmereye.com/imgs/2023/08/1dd1c23bea20216f.jpg',
  tabNavName: 'pages.dental-service.children-dentistry.introduce.tabNavName',
}

const reasonData = {
  title: 'pages.dental-service.children-dentistry.reason.title',
  text: 'pages.dental-service.children-dentistry.reason.text',
  imgUrl: 'https://static.cmereye.com/imgs/2023/05/e47c1087b9625bf0.jpg',
  reasonLists:[
    {
      context: 'pages.dental-service.children-dentistry.reason.lists[0].context',
    },
    {
      context: 'pages.dental-service.children-dentistry.reason.lists[1].context',
    },
    {
      context: 'pages.dental-service.children-dentistry.reason.lists[2].context',
    }
  ],
  isMediumCW: true,
  pageName: 'children-dentistry' 
}

const noteData = {
  title: '兒童牙科保健及治療',
  lists: [
    {
      name: '作為一個家長，你可能時刻關注著孩子的身體健康，但在孩子的口腔健康方面，很多人可能會認為等待孩子就讀小學時參加政府提供的牙科保健就足夠了。然而，等到孩子6歲才開始檢查牙齒，可能已經太晚了。因為很多孩子喜歡食用糖果或甜食，又不喜歡刷牙，這極大地增加了他們患上蛀牙的風險。因此，家長們應該早早地關注孩子的口腔健康問題，培養孩子良好的口腔衛生習慣，包括定期刷牙、少吃糖果等甜食，以及定期進行口腔檢查和洁牙，這樣可以有效地預防孩子患上口腔疾病。',
    },
    {
      name: '小朋友擁有第一隻牙開始，就可以定期檢查牙齒。定期進行牙科保健，從小了解保持口腔健康的知識和重要性，家長們亦可以緊貼小朋友的牙齒發育進度，及早發現兒童牙齒的潛在問題，作出針對性治療。',
    }
  ],
  pageName: 'children-dentistry',
}

const problemData = {
  title: 'pages.dental-service.children-dentistry.problem.title',
  lists: [
    {
      Q: 'pages.dental-service.children-dentistry.problem.lists[0].Q',
      A: 'pages.dental-service.children-dentistry.problem.lists[0].A'
    },
    {
      Q: 'pages.dental-service.children-dentistry.problem.lists[1].Q',
      A: 'pages.dental-service.children-dentistry.problem.lists[1].A'
    },
    {
      Q: 'pages.dental-service.children-dentistry.problem.lists[2].Q',
      A: 'pages.dental-service.children-dentistry.problem.lists[2].A'
    },
    {
      Q: 'pages.dental-service.children-dentistry.problem.lists[3].Q',
      A: 'pages.dental-service.children-dentistry.problem.lists[3].A'
    },
  ]
}

const skillData ={
  title: ['從乳牙開始培養好的口腔衛生', '習慣，有助於建立良好的牙齒健康基礎。'],
  lists: [
    {
      title: '窩溝封閉',
      introduce: '用高分子材料把牙齒的窩溝填平，使牙面變得光滑易清潔，一方面，窩溝封閉後，窩溝內原有的細菌斷絕了營養的來源，逐漸死亡；另一方面外面的致齲細菌不能再進入，從而達到預防窩溝齲的目的。',
      characteristic: '操作簡單、兒童易配合，有效避免齲齒發生。',
      adapt: '3—12歲乳磨牙、第一恒磨牙、第二恒磨牙。'
    },
    {
      title: '塗氟',
      introduce: '塗氟是一種保護孩子牙齒的方法，通常使用氟化物溶液塗抹在孩子的乳牙或恒牙表面，以增強牙齒質地，預防蛀牙和齲齒的形成。',
      characteristic: '簡單操作無需局部麻醉，使用的氟化物溶液濃度低，長期效果穩定，可以持續保護孩子的牙齒長達數月至一年的時間。',
      adapt: '一般為孩子乳牙長出後至恒牙長成之前的時間段，這個時間段通常是從孩子3歲開始到12歲左右。建議孩子每年至少進行一次塗氟治療，以保護他們的牙齒健康。'
    },
    {
      title: '補牙(蛀牙)',
      introduce: '採用人造物質修補牙體缺損的方法，用於修補的物質叫充填材料。凡因齲齒、楔狀缺損、外傷等造成牙體組織缺損者都需要修補，以恢復其外形和功能。',
      characteristic: '預防繼續齲齒；恢復正常咬合，維持牙弓長度。',
      adapt: '乳磨牙齲壞、年輕恒牙齲壞。'
    },
    {
      title: '兒童牙齒矯正',
      introduce: '通過矯治器的方式可以改善兒童牙齒反頜、牙齒不齊等情況。',
      characteristic: '恢復牙齒美觀和功能；改善口腔不良習慣；舒適、健康、便捷。',
      adapt: '牙列畸形、反頜、牙齒錯位。'
    },
    {
      title: '舒適拔牙',
      introduce: '兒童牙科拔牙是一種治療方法，常用於治療牙齒損傷、感染、畸形或擁擠等问题。\n•使用麻醉技術，對孩子的疼痛感受最小化。\n•將拔牙傷害降到最小，減少感染及出血。\n•手術時間短，恢復快。',
      characteristic: '對孩子的身心健康影響較小，疼痛輕微。傷口癒合迅速，不會影響孩子的飲食和日常生活，並可以解決牙齒問題，保護健康的牙齒和口腔健康。',
      adapt: '一般來說，孩子的乳牙在6-12歲之間掉落，而恒牙則在11-14歲之間生長。如果孩子有牙齒問題，建議及早就診，根據醫生的建議決定是否需要拔牙治療。'
    },
    {
      title: '根管治療',
      introduce: '根管治療是一種治療乳牙或恒牙牙髓炎或牙髓壞死等問題的方法。\n• 使用麻醉技術對孩子的疼痛感受最小化。\n• 將治療風險降到最小，減少感染和出血。\n• 根管治療技術使其保留牙齒和神經系統的功能，減少後續治療。',
      characteristic: '對孩子的身心健康影響較小，疼痛輕微。效果長期穩定，可以保護孩子的牙齒健康，並可以避免拔牙對口腔造成的影響，保留自然牙齒。',
      adapt: '兒童牙科根管治療需要根據孩子的年齡、牙齒狀況以及治療需要等多方面因素進行綜合考慮，建議家長及時就醫，並根據醫生的建議進行治療。'
    }
  ]
}

const changeSkillTitle = (_idx:number) => {
  let a = ['適應期','適應期','適用','適用','適應期','注意事項']
  return a[_idx]
}

let skillCur = ref(0)
const handleSkillTab = (_idx:number) => {
  skillCur.value = _idx
}
</script>


<template>
<div>
  <div class="servicePageConfig">
    <ServiceBanner :bannerData="bannerData" pageName="children-dentistry" />
    <ServiceIntroduce :introduceData="orthodonticsIntroduceData" :reasonData="reasonData" introduceType="2" moduleType="5" titleType="2" />
    <div class="faq">
      <div class="faq-title bigPageCon">
        <!-- <div class="dentistryServices-title-in bb">兒童常見口腔問題</div> -->
        <img src="https://static.cmereye.com/imgs/2023/08/41afb375adaa22f7.jpg" alt="">
      </div>
      <div class="faq-in bigPageCon">
        <div class="faq-in-content">
          <div class="contentIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400" fill="none">
              <path d="M293.372 321.527C254.621 425.514 145.554 425.514 106.8 321.523C104.398 315.087 100.641 309.242 95.7838 304.385C90.9263 299.527 85.0816 295.771 78.6454 293.369C-25.3449 254.621 -25.3414 145.551 78.6454 106.8C85.0816 104.399 90.9264 100.642 95.7839 95.7843C100.641 90.9268 104.398 85.082 106.8 78.6459C145.547 -25.3445 254.621 -25.3445 293.372 78.6424C295.774 85.0785 299.53 90.9233 304.388 95.7808C309.245 100.638 315.09 104.395 321.526 106.797C425.524 145.558 425.513 254.621 321.526 293.373C315.09 295.774 309.245 299.531 304.388 304.388C299.53 309.246 295.774 315.091 293.372 321.527Z" fill="#FC1682"/>
            </svg>
            <span>牙齒畸形</span>
          </div>
          <div class="contentIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400" fill="none">
              <path d="M293.372 321.527C254.621 425.514 145.554 425.514 106.8 321.523C104.398 315.087 100.641 309.242 95.7838 304.385C90.9263 299.527 85.0816 295.771 78.6454 293.369C-25.3449 254.621 -25.3414 145.551 78.6454 106.8C85.0816 104.399 90.9264 100.642 95.7839 95.7843C100.641 90.9268 104.398 85.082 106.8 78.6459C145.547 -25.3445 254.621 -25.3445 293.372 78.6424C295.774 85.0785 299.53 90.9233 304.388 95.7808C309.245 100.638 315.09 104.395 321.526 106.797C425.524 145.558 425.513 254.621 321.526 293.373C315.09 295.774 309.245 299.531 304.388 304.388C299.53 309.246 295.774 315.091 293.372 321.527Z" fill="#089CFE"/>
            </svg>
            <span>乳牙滯留</span>
          </div>
          <div class="contentIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400" fill="none">
              <path d="M293.372 321.527C254.621 425.514 145.554 425.514 106.8 321.523C104.398 315.087 100.641 309.242 95.7838 304.385C90.9263 299.527 85.0815 295.771 78.6454 293.369C-25.3449 254.621 -25.3414 145.551 78.6454 106.8C85.0816 104.399 90.9264 100.642 95.7839 95.7843C100.641 90.9268 104.398 85.082 106.8 78.6459C145.547 -25.3445 254.621 -25.3445 293.372 78.6424C295.774 85.0785 299.53 90.9233 304.388 95.7808C309.245 100.638 315.09 104.395 321.526 106.797C425.524 145.558 425.513 254.621 321.526 293.373C315.09 295.774 309.245 299.531 304.388 304.388C299.53 309.246 295.774 315.091 293.372 321.527Z" fill="#FECB02"/>
            </svg>
            <span>兒童蛀牙</span>
          </div>
          <div class="contentIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400" fill="none">
              <path d="M291.967 321.002L291.967 321.003C272.75 372.569 236.261 398.017 200.087 398.017C163.913 398.016 127.423 372.567 108.205 321L108.205 320.999C105.728 314.361 101.854 308.334 96.8445 303.324C91.835 298.315 85.8073 294.44 79.1698 291.964L79.1692 291.964C27.6015 272.749 2.15356 236.26 2.15401 200.086C2.15443 163.912 27.6033 127.422 79.1692 108.206L79.1698 108.205C85.8073 105.729 91.835 101.855 96.8446 96.845C101.854 91.8355 105.728 85.8078 108.205 79.1702L108.205 79.1696C127.42 27.602 163.91 2.15311 200.085 2.15268C236.259 2.15225 272.75 27.6003 291.967 79.1662L291.967 79.1667C294.443 85.8043 298.318 91.8319 303.327 96.8415C308.337 101.851 314.365 105.725 321.002 108.202L321.003 108.202C372.574 127.424 398.022 163.915 398.02 200.088C398.019 236.262 372.569 272.751 321.003 291.967L321.002 291.967C314.364 294.444 308.337 298.318 303.327 303.328C298.318 308.337 294.443 314.365 291.967 321.002Z" fill="white" stroke="#FC1682" stroke-width="3"/>
            </svg>
            <span>牙齒外傷</span>
          </div>
          <img class="icon_1" src="https://static.cmereye.com/imgs/2023/08/9254bd712120c79b.png" alt="">
          <img class="icon_2" src="https://static.cmereye.com/imgs/2023/08/a3d7cc1d94be53ab.png" alt="">
          <img class="icon_3" src="https://static.cmereye.com/imgs/2023/08/09cb4c29a9d4452d.png" alt="">
          <img class="icon_4" src="https://static.cmereye.com/imgs/2023/08/a160dd6781c5ab24.png" alt="">
          <img class="icon_5" src="https://static.cmereye.com/imgs/2023/08/0edc8793314c4da3.gif" alt="">
        </div>
        <!-- <div class="faq-in-icon">
          <img class="icon_1" src="https://static.cmereye.com/imgs/2023/08/9254bd712120c79b.png" alt="">
          <img class="icon_2" src="https://static.cmereye.com/imgs/2023/08/a3d7cc1d94be53ab.png" alt="">
          <img class="icon_3" src="https://static.cmereye.com/imgs/2023/08/09cb4c29a9d4452d.png" alt="">
          <img class="icon_4" src="https://static.cmereye.com/imgs/2023/08/a160dd6781c5ab24.png" alt="">
          <img class="icon_5" src="https://static.cmereye.com/imgs/2023/08/0edc8793314c4da3.gif" alt="">
        </div> -->
      </div>
    </div>
    <div class="skill">
      <div class="skill-title">
        <div class="skill-title-in">
          <span>從乳牙開始培養好的口腔衛生</span>
          <span>習慣，有助於建立良好的牙齒健康基礎。</span>
        </div>
        <div class="skill-title-image bigPageCon">
          <img src="https://static.cmereye.com/imgs/2023/08/0c725256740985d4.jpg" alt="">
        </div>
      </div>
      <div class="skill-tab pcBox">
        <div class="skill-tab-t">
          <div :class="{'cur': skillCur === skillIndex}" v-for="(skillItem,skillIndex) in skillData.lists" :key="skillIndex" @click="handleSkillTab(skillIndex)">
            {{skillItem.title}}
          </div>
        </div>
        <div class="skill-tab-b">
          <div class="con-l"><img src="https://static.cmereye.com/imgs/2023/08/9254bd712120c79b.png" alt=""></div>
          <div class="con-c">
            <div>
              <div>技術介紹</div>
              <div>{{skillData.lists[skillCur].introduce}}</div>
            </div>
            <div>
              <div>技術特點</div>
              <div>{{skillData.lists[skillCur].characteristic}}</div>
            </div>
            <div>
              <div>{{changeSkillTitle(skillCur)}}</div>
              <div>{{skillData.lists[skillCur].adapt}}</div>
            </div>
          </div>
          <div class="con-r"><img src="https://static.cmereye.com/imgs/2023/08/a160dd6781c5ab24.png" alt=""></div>
        </div>
      </div>
      <!-- <div class="skill-collapse mbBox">
        <el-collapse v-model="skillCur" accordion>
          <el-collapse-item :name="skillIndex" v-for="(skillItem,skillIndex) in skillData.lists" :key="skillIndex">
            <template #title>
              <div class="skill-collapse-title">
                {{skillItem.title}}
              </div>
            </template>
            <div class="skill-collapse-b">
              <div>
                <div>技術介紹</div>
                <div>{{skillItem.introduce}}</div>
              </div>
              <div>
                <div>技術特點</div>
                <div>{{skillItem.characteristic}}</div>
              </div>
              <div>
                <div>{{changeSkillTitle(skillIndex)}}</div>
                <div>{{skillItem.adapt}}</div>
              </div>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div> -->
    </div>
    <!-- <ServiceNote :noteData="noteData" /> -->
    <div class="note bigPageCon">
      <img class="left-star" src="https://static.cmereye.com/imgs/2023/09/60d6dba2f70f9b16.png" alt="">
      <img class="right-star" src="https://static.cmereye.com/imgs/2023/09/60d6dba2f70f9b16.png" alt="">
      <img class="left-center-star" src="https://static.cmereye.com/imgs/2023/09/d38d7a7fe96d74b4.png" alt="">
      <img class="right-center-star" src="https://static.cmereye.com/imgs/2023/09/5dc7d3ccee286ca0.png" alt="">
      <img class="mascot" src="https://static.cmereye.com/imgs/2023/08/0edc8793314c4da3.gif" alt="">
      <div class="note-bg">
        <div class="note-title">
          <img src="https://static.cmereye.com/imgs/2023/09/4caaf1abc0d77dd5.png" alt="">
        </div>
        <div class="note-lists">
          <div class="listsIn" v-for="(noteItem,noteIndex) in noteData.lists" :key="noteIndex">
            <div>
              <img src="https://static.cmereye.com/imgs/2023/09/c0e756de759ebf44.png" alt="">
              <span>{{noteItem.name}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ServiceProblem :problemData="problemData" />
    <serviceCard />
    <RippleLine :type="'4'" />
    <ContactUs />
  </div>
</div>
</template>



<style lang="scss" scoped>
.servicePageConfig{
  margin-top: -20px;
  padding-bottom: 140px;
}
.faq{
  margin-top: 120px;
  &-title{
    img{
       
    }
  }
  &-in{
    position: relative;
    &-content{
      width: 100%;
      max-width: 1381px;
      height: 0;
      position: relative;
      padding-bottom: calc((1200 / 1920) * 100%);
      margin: 0 auto;
      .contentIn{
        position: absolute;
        z-index: 2;
        width: calc((331 / 1381) * 100%);
        &:nth-of-type(1){
          top: calc((125 / 1381) * 100%);
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-of-type(2){
          top: calc((387 / 1381) * 100%);
          left: 50%;
          transform: translateX(-125%);
        }
        &:nth-of-type(3){
          top: calc((387 / 1381) * 100%);
          left: 50%;
          transform: translateX(25%);
        }
        &:nth-of-type(4){
          top: calc((640 / 1381) * 100%);
          left: 50%;
          transform: translateX(-50%);
          span{
            color: #FC1682;
          }
        }
        svg{
          width: 100%;
        }
        span{
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%,-50%);
          color: #FFF;
          font-size: 3.8vw;
          font-weight: 500;
          line-height: 110%;
          max-width: calc((100 / 331) * 100%);
        }
      }
      .icon_1{
        position: absolute;
        top: calc((86 / 1381) * 100%);
        left: 80%;
        width: calc((221 / 1381) * 100%);
        z-index: 1;
      }
      .icon_2{
        position: absolute;
        left: 70%;
        top: calc((806 / 1381) * 100%);
        width: calc((119 / 1381) * 100%);
        z-index: 1;
      }
      .icon_3{
        position: absolute;
        left: 0;
        top: calc((510 / 1381) * 100%);
        width: calc((189 / 1381) * 100%);
        z-index: 1;
      }
      .icon_4{
        position: absolute;
        left: 10%;
        top: calc((850 / 1381) * 100%);
        width: calc((264 / 1381) * 100%);
        z-index: 1;
      }
      .icon_5{
        position: absolute;
        left: 15%;
        top: calc((320 / 1381) * 100%);
        width: calc((221 / 1381) * 100%);
        transform: rotate(-20deg);
        z-index: 1;
      }
    }
  }
}
.skill{
  &-title{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    &-in{
      color: var(--topic-color);
      text-align: center;
      font-family: CP Font;
      font-size: 59px;
      font-style: normal;
      font-weight: 400;
      line-height: 157%; /* 92.63px */
      letter-spacing: 11.8px;
      span{
        display: block;
      }
    }
    &-image{
      transform: translateY(-10%);
      position: relative;
      z-index: -1;
    }
  }
  &-tab{
    width: 100%;
    max-width: 1648px; //calc(100% - (272 / 1920) * 100%); 
    margin: 46px auto 0;
    // box-shadow: 0px 4px 8px #FFDDDA;
    &-t{
      display: flex;
      &>div{
        flex: 1;
        text-align: center;
        // background: #FFDDDA;
        font-style: normal;
        font-weight: 700;
        border-radius: 25px;
        font-size: 28px;
        height: 50px;
        line-height: 50px;
        color: var(--topic-color);
        cursor: pointer;
        &:not(:last-child){
          margin-right: 3px;
        }
        &:hover{
          // background: #FFA09E;
        }
        &.cur{
          background: var(--topic-color);
          color: #fff;
          position: relative;
          &::before{
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            background: url(https://static.cmereye.com/imgs/2023/08/0edc8793314c4da3.gif);
            background-size: 100% auto;
            width: 100px;
            height: 120px;
            z-index: -1;
          }
        }
      }
    }
    &-b{
      // min-height: 286px;
      margin-top: 133px;
      display: flex;
      justify-content: center;
      .con-l{
        display: flex;
        justify-content: flex-end;
        align-items: flex-start;
        img{
          width: 76px;
          height: auto;
          transform: translate(-50px,-60px) rotate(-50deg);
        }
      }
      .con-c{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        &>div{
          display: flex;
          width: 100%;
          max-width: 824px;
          margin: 0 auto;
          border-top: 1px solid var(--topic-text-color);
          padding: 21px 0;
          &>div:first-child{
            font-style: normal;
            font-weight: 700;
            font-size: 20px;
            line-height: 160%;
            color: var(--topic-color);
            width: 152px;
          }
          &>div:last-child{
            flex: 1;
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            line-height: 160%;
            color: var(--topic-text-color);
            // padding-top: 10px;
            white-space: pre-wrap;
          }
        }
      }
      .con-r{
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
        img{
          width: 92px;
          height: auto;
          transform: translate(10px,20px) rotate(50deg);
        }
      }
    }
  }
}
.note{
  width: 100%;
  position: relative;
  &-bg{
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    width: 100%;
    padding: 450px 0 190px;
    &::before{
      content: '';
      width: 200%;
      bottom: calc(100% - 225px);
      left: 0;
      margin-left: -50%;
      height: 200%;
      border-radius: 50%;
      position: absolute;
      background: #fff;
      z-index: 2;
    }
    &::after{
      content: '';
      position: absolute;
      width: 200%;
      border-radius: 50%;
      bottom: 0;
      left: 0;
      margin-left: -50%;
      height: 200%;
      background: #FECB02;
      z-index: 1;
    }
  }
  &-title{
    position: relative;
    z-index: 3;
    display: flex;
    justify-content: center;
    img{
      width: calc((513 / 1920) * 100%);
    }
  }
  &-lists{
    position: relative;
    z-index: 3;
    display: flex;
    width: 100%;
    max-width: 1294px;
    margin: 74px auto 0;
    .listsIn{
      flex: 1;
      &>div{
        color: var(--topic-text-color);
        text-align: justify;
        font-size: 19px;
        font-style: normal;
        font-weight: 500;
        line-height: 23.5px; /* 123.684% */
        letter-spacing: 3.8px;
        position: relative;
        span{
          position: absolute;
          width: auto;
          inset: 20%;
        }
      }
      &:first-child{
        margin-right: calc((72 / 1294) * 100%);
      }
    }
  }
  .left-star{
    position: absolute;
    top: 0;
    left: 5%;
    z-index: 3;
    transform: translateY(-20%);
  }
  .right-star{
    position: absolute;
    top: 0;
    right: 5%;
    z-index: 3;
    transform: translateY(-20%) rotateY(180deg);
  }
  .left-center-star{
    position: absolute;
    top: 35%;
    left: 10%;
    z-index: 3;
  }
  .right-center-star{
    position: absolute;
    top: 35%;
    right: 10%;
    z-index: 3;
  }
  .mascot{
    position: absolute;
    z-index: 4;
    top: 70%;
    right: 15%;
    width: 211px;
    height: auto;
    transform: rotate(-20deg);
  }
}
@media (min-width: 768px) and (max-width: 1000px) {
  .skill{
    &-tab{
      &-t{
        &>div{
          font-size: 24px;
        }
      }
    }
  }
}
@media only screen and (min-width: 1381px) {
  .faq{
    &-in{
      &-content{
        .contentIn{
          &:nth-of-type(1){
            top: calc((160 / 1381) * 100%);
          }
          &:nth-of-type(4){
            top: calc((600 / 1381) * 100%);
          }
          span{
            font-size: 50px;
          }
        }
      }
    }
  }
}
@media only screen and (max-width: 768px) {
.faq{
  margin-top: 90px;
  &-in{
    flex-direction: column;
    margin-top: 28px;
    &>div{
      font-size: 26px;
      height: 67.8px;
      line-height: 67.8px;
      margin: 0 30px;
      &:not(:last-child){
        margin-right: 30px;
        margin-bottom: 13.2px;
      }
    }
  }
}
.skill{
  margin-top: 90px;
  padding: 0 30px;
  &-title{
    &-in{
      font-weight: 700;
      font-size: 26px;
      span{
        display: inline;
      }
    }
  }
  &-collapse{
    margin-top: 33px;
    box-shadow: 0px 4px 8px #FFDDDA;
    &-b{
      &>div{
        margin-top: 25px;
        padding: 0 24px;
        &>div:first-child{
          font-style: normal;
          font-weight: 600;
          font-size: 20px;
          line-height: 160%;
          text-align: center;
          color: #666666;
        }
        &>div:last-child{
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 160%;
          text-align: center;
          color: #666666;
          margin-top: 5px;
          white-space: pre-wrap;
        }
      }
    }
    :deep(.el-collapse){
      border: none;
    }
    :deep(.el-collapse-item){
      margin-bottom: 2px;
      border: none;
    }
    :deep(.el-collapse-item__wrap){
      border: none;
    }
    :deep(.el-collapse-item__header){
      padding: 10.5px 0;
      background: #FFDDDA;
      border: none;
      box-sizing: initial;
      color: #FFFFFF;
      font-weight: 700;
      font-size: 26px;
      justify-content: center;
    }
    :deep(.el-collapse-item__header.is-active){
      background: #FFA09E;
      .skill-collapse-title{
        color: #FFFFFF;
      }
    }
    :deep(.el-icon){
     display: none;
    }
  }
}
}
</style>