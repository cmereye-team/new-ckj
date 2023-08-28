<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
const appState = useAppState()
appState.setDentistryService('all-ceramic-crowns')
useHead({
  title: "全瓷牙冠 | 牙科服務",
  meta: [
   {
      hid: 'description',
      name: 'description',
      content: '愛康健提供全瓷牙冠（牙套）服務，全瓷冠又稱全瓷牙冠、全瓷冠假牙、陶瓷假牙，而牙冠（牙套）是修復牙齒的方法，用於覆蓋形狀參差不齊或變色的牙齒。當牙齒因各種原因損壞時、需要修復裂縫或保護脆弱的牙齒時，會建議使用牙冠（牙套）進行修復。',
   },
   {
      hid: 'Keywords',
      name: 'Keywords',
      content: '牙套 全瓷冠全瓷牙冠 全瓷冠假牙 陶瓷假牙 假牙 牙冠 愛康健 深圳愛康健 深圳專業牙科中心 愛康健醫院 愛康健口腔醫院 深圳愛康健口腔醫院愛康健 CKJ愛康健齒科集團 深圳口腔專科醫院 愛康健齒科集團 深圳牙科醫院牙科服務內地牙科 深圳口腔專科',
   },
  ]
})

const bannerData = {
  img: 'https://static.cmereye.com/imgs/2023/08/86f3f6e503d4a34b.jpg',
  mbImg: 'https://static.cmereye.com/imgs/2023/08/3b1b35c6febb6e99.jpg',
  gif: 'https://static.cmereye.com/imgs/2023/08/0edc8793314c4da3.gif',
  text1: '#自然、耐久、性價比首選',
  text2: '讓您恢復美麗微笑 重拾自信',
  tabNavName: 'pages.dental-service.all-ceramic-crowns.introduce.tabNavName'
}

const headerConfig = {
  img: 'https://static.cmereye.com/imgs/2023/06/5d98a050a1163042.png',
  bg: 'https://static.cmereye.com/imgs/2023/06/1bd88089085e1d68.jpg',
  mbImg: 'https://static.cmereye.com/imgs/2023/06/cb2cff6cdf17d72b.jpg',
  pageName: 'all-ceramic-crowns',
  pcText: ['自然、耐久、性價比首選','讓您恢復美麗微笑，重拾自信'],
  mbText: ['讓您恢復美麗微笑','重拾自信']
}

const introduceData = {
  title: 'pages.dental-service.all-ceramic-crowns.introduce.title',
  content: 'pages.dental-service.all-ceramic-crowns.introduce.content',
  mbImg: 'https://static.cmereye.com/imgs/2023/05/9fc2655c5c081f7d.jpg',
  pcImg: 'https://static.cmereye.com/imgs/2023/08/b931537ee7ff486c.jpg',
  tabNavName: 'pages.dental-service.all-ceramic-crowns.introduce.tabNavName',
}

const foiblesData = {
  title: '全瓷牙冠及全鋯牙冠點揀好？',
  context: {
    span1: '有多種製作牙冠的物料，包括：',
    span2: '金屬、全鋯及全瓷。每種物料各有優點，可讓患者按需要選擇。',
    span3: '以下為你分析全瓷牙冠及全鋯牙冠的優缺點：'
  },
  foiblesLists: [
    {
      title: '金屬牙冠',
      meritLists: [
        '耐用度高，適合需要咬合力較強的後牙',
        '損耗度與真牙非常接近',
        '堅固穩定，不用大幅度磨小牙齒，可保留大部分原牙'
      ],
      shortcomingLists: [
        '金屬顏色，不適合用於前牙，影響外觀',
        '價格較為昂貴',
        '有致癌疑慮',
        '較容易發炎或出現過敏'
      ]
    },
    {
      title: '烤瓷合金牙冠',
      meritLists: [
        '內層金屬，外層陶瓷，可以選擇外層顏色，較為美觀'
      ],
      shortcomingLists: [
        '由於有內外兩層，相對較厚，需磨掉較多牙齒',
        '牙套顏色不夠自然',
        '牙套邊緣會顯出金屬黑影，影響外觀',
        '表層陶瓷較金屬容易剝落或斷裂'
      ]
    },
    {
      title: '全瓷牙冠',
      meritLists: [
        '仿真度最高，透光度高，顏色相似，自然',
        '適合用於前牙，外觀與真牙相似，不影響美觀',
        '可根據需要的堅固度，選擇不同強度的物料'
      ],
      shortcomingLists: [
        '比金屬牙套的強度較低'
      ]
    }
  ]
}

let foiblesSwiperRef ={
  slideToLoop: (a)=>{}
}
const setFoiblesSwiperRef = (swiper:any) => {
  foiblesSwiperRef = swiper;
}
const handleLineCur = (_value:number) =>{
  foiblesSwiperRef.slideToLoop(_value-1)
}

let foiblesCurrent = ref(1)

//走马灯事件
const onSlideChange = (swiper:any) => {
  foiblesCurrent.value = swiper.realIndex + 1
}

let windowWidth = ref(1920)

onMounted(()=>{
  getWindowWidth()
  window.addEventListener('resize',getWindowWidth)
})

const getWindowWidth = () => {
  windowWidth.value = window.innerWidth
}
</script>


<template>
<div>
  <div class="allCeramicCrownPage">
    <!-- <div class="index_title pageCon">{{$t('pages.dental-service.title')}}</div> -->
    <ServiceBanner :bannerData="bannerData" />
    <ServiceIntroduce :introduceData="introduceData" :moduleType="'2'" :animConfig="{color: '#F6CD46',text: 'ALL CERAMIC CROWN'}" />
    <div class="foibles-line">
      <RippleLine :type="'4'" />
    </div>
    <div class="foibles">
      <div class="foibles-title">
        <div class="foibles-title-in bb">
          <!-- {{foiblesData.title}} -->
          <serviceTitle :title="foiblesData.title" />
        </div>
      </div>
      <div class="foibles-context">
        <div>
          <span>{{foiblesData.context.span1}}</span>
          <span>{{foiblesData.context.span2}}</span>
        </div>
        <span>{{foiblesData.context.span3}}</span>
      </div>
      <div class="foibles-in">
        <div class="foibles-in-box">
            <div class="div">
              <div class="foibles-in-box-th">
                <div class="title"></div>
                <div class="listsTh">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                    <ellipse cx="9" cy="9.5" rx="9" ry="9.5" fill="#FC1682"/>
                    <path d="M4 9.92188L7.78261 14L13 6" stroke="white" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                  優點
                </div>
                <div class="listsTh">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                    <ellipse cx="9" cy="9.5" rx="9" ry="9.5" fill="#FC1682"/>
                    <path d="M4 9.92188L7.78261 14L13 6" stroke="white" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                  缺點
                </div>
              </div>
              <div class="foibles-in-box-item">
                <div class="title">{{foiblesData.foiblesLists[0].title}}</div>
                <div class="merit listsBox">
                  <div class="listsBox-in" v-for="(meritItem,meritIndex) in foiblesData.foiblesLists[0].meritLists" :key="meritIndex">
                    <div>· </div>
                    <div>{{meritItem}}</div>
                  </div>
                </div>
                <div class="shortcoming listsBox">
                  <div class="listsBox-in" v-for="(shortcomingItem,shortcomingIndex) in foiblesData.foiblesLists[0].shortcomingLists" :key="shortcomingIndex">
                    <div>· </div>
                    <div>{{shortcomingItem}}</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="div">
              <div class="foibles-in-box-item">
                <div class="title">{{foiblesData.foiblesLists[1].title}}</div>
                <div class="merit listsBox">
                  <div class="listsBox-in" v-for="(meritItem,meritIndex) in foiblesData.foiblesLists[1].meritLists" :key="meritIndex">
                    <div>· </div>
                    <div>{{meritItem}}</div>
                  </div>
                </div>
                <div class="shortcoming listsBox">
                  <div class="listsBox-in" v-for="(shortcomingItem,shortcomingIndex) in foiblesData.foiblesLists[1].shortcomingLists" :key="shortcomingIndex">
                    <div>· </div>
                    <div>{{shortcomingItem}}</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="div">
              <div class="foibles-in-box-item">
                <div class="title">{{foiblesData.foiblesLists[2].title}}</div>
                <div class="merit listsBox">
                  <div class="listsBox-in" v-for="(meritItem,meritIndex) in foiblesData.foiblesLists[2].meritLists" :key="meritIndex">
                    <div>· </div>
                    <div>{{meritItem}}</div>
                  </div>
                </div>
                <div class="shortcoming listsBox">
                  <div class="listsBox-in" v-for="(shortcomingItem,shortcomingIndex) in foiblesData.foiblesLists[2].shortcomingLists" :key="shortcomingIndex">
                    <div>· </div>
                    <div>{{shortcomingItem}}</div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
    <RippleLine :type="'4'" />
    <serviceCard />
    <RippleLine :type="'4'" />
    <ContactUs />
  </div>
  <!-- <PageFooter /> -->
  <!-- <PageNavbar /> -->
</div>
</template>



<style lang="scss" scoped>
.allCeramicCrownPage{
  margin-top: -20px;
  padding-bottom: 140px;
}
.foibles-line{
  margin-top: 174px;
}
.foibles{
  margin-top: 182px;
  margin-bottom: 172px;
  &-title{
    display: flex;
    justify-content: center;
  }
  &-context{
    margin-top: 65px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    letter-spacing: 4.8px;
    text-align: center;
    color: var(--topic-text-color);
    div{
      display: flex;
      justify-content: center;
    }
    &>span{
      &:last-child{
        display: block;
        color: var(--topic-color)
      }
    }
  }
  &-in{
    margin-top: 74px;
    &-box{
      width: 100%;
      margin: 0 auto;
      max-width: 1164px;
      display: flex;
      &-th{
        width: 121px;
        text-align: center;
        .title{
          height: 48px;
          border-bottom: 1px solid var(--topic-color);
        }
        .listsTh{
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          letter-spacing: 4.5px;
          color: var(--topic-color);
          border-bottom: 1px solid var(--topic-color);
          display: flex;
          align-items: center;
          justify-content: center;
          svg{
            margin-right: 5px;
          }
          &:nth-of-type(2){
            height: 246px;
          }
          &:last-child{
            height: 279px;
          }
        }
      }
      &-item{
        .title{
          text-align: center;
          height: 48px;
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 48px;
          color: #FFFFFF;
          margin-left: 1px;
        }
        .listsBox{
          background: #fff;
          display: flex;
          padding: 0 23px;
          flex-direction: column;
          justify-content: center;
          &-in{
            display: flex;
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 160%;
            letter-spacing: 3.6px;
            color: var(--topic-text-color);
            justify-content: center;
            div:first-child{
              width: 20px;
            }
            div:last-child{
              flex: 1;
            }
          }
        }
        .merit{
          height: 246px;
          border-bottom: 1px solid var(--topic-color);
          border-left: 1px solid var(--topic-color);
        }
        .shortcoming{
          height: 279px;
          border-bottom: 1px solid var(--topic-color);
          border-left: 1px solid var(--topic-color);
        }
        &:last-child{
          overflow: hidden;
          .title{
            background: #FFB0CA;
          }
        }
        &:nth-of-type(2){
          overflow: hidden;
          .title{
            background: var(--topic-color);
          }
        }
        &:nth-of-type(3){
          .title{
            background: #fff;
          }
        }
      }
      .div{
        &:nth-of-type(1){
          display: flex;
          width: calc(40% - 6px);
        }
        &:nth-of-type(2){
          width: 30%;
          
        }
        &:nth-of-type(3){
          width: 30%;
          overflow: hidden;
        }
      }
    }
  }
}

@media (min-width: 768px) and (max-width: 1452px) {
  // .foibles{
  //   &-context{
  //     font-size: 18px;
  //     &>span{
  //       font-size: 18px;
  //     }
  //   }
  //   &-in{
  //     margin-top: 49px;
  //     &-box{
  //       &-th{
  //         .listsTh{
  //           font-weight: 600;
  //           font-size: 20px;
  //         }
  //       }
  //       &-item{
  //         .listsBox{
  //           padding: 0 23px 0 16px;
  //           padding: 10px 2.5vw 0 22px;
  //           &-in{
  //             font-weight: 500;
  //             font-size: 17px;
  //             div:first-child{
  //               width: 15px;
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // }
}

@media only screen and (max-width: 760px) {
  .foibles-line{
    margin-top: 80px;
  }
  .foibles{
    margin-top: 40px;
    margin-bottom: 83px;
    &-context{
      font-size: 15px;
      margin-top: 30px;
      letter-spacing: 4.5px;
      div{
        flex-direction: column;
        align-items: center;
        &>span{
          width: 80%;
        }
      }
      &>span{
        margin: 0 auto;
        font-weight: 500;
        font-size: 15px;
        width: 60%;
      }
    }
    &-in{
      margin-top: 35px;
      &-box{
        width: 100%;
        &-th{
          width: 40px;
          text-align: left;
          // margin-left: 30px;
          .title{
            height: 20px;
            // padding-top: 3px;
          }
          .listsTh{
            font-weight: 400;
            font-size: 14px;
            letter-spacing: 0px;
            svg{
              display: none;
            }
            &:nth-of-type(2){
              height: 202px;
              // line-height: 202px;
            }
            &:last-child{
              height: 220px;
              // line-height: 220px;
            }
          }
        }
        &-item{
          flex: 1;
          .title{
            font-weight: 400;
            font-size: 12px;
            height: 20px;
            line-height: 20px;
            padding-top: 2px;
          }
          .listsBox{
            padding: 0 8px;
            justify-content: center;
            &-in{
              font-weight: 500;
              font-size: 12px;
              letter-spacing: 0px;
              div:first-child{
                width: max-content;
              }
            }
          }
          .merit{
            height: 202px;
          }
          .shortcoming{
            height: 220px;
            // margin-top: 8px;
          }
        }
        .div{
          &:nth-of-type(1){
            // width: 90% !important;
            width: calc((100% / 3) + 30px);
          }
          &:nth-of-type(2){
            // width: 75% !important;
            width: calc((100% / 3) - 15px);
          }
          &:nth-of-type(3){
            // width: 75% !important;
            width: calc((100% / 3) - 15px);
          }
        }
      }
    }
  }
}
</style>