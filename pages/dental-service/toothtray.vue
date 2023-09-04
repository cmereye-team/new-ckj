<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
import { Scrollbar } from 'swiper';
const appState = useAppState()
appState.setDentistryService('toothtray')
useHead({
  title: "牙托 | 牙科服務",
  meta: [
   {
      hid: 'description',
      name: 'description',
      content: '愛康健提供牙托即活動式假牙，牙托即活動式假牙，分為局部及全口牙托兩種，可改善缺牙的影響。局部牙托適用於口腔內還有健康牙齒的人士，以金屬支架或金屬勾設計，方便自行配戴。全口牙托適用於所有牙齒已脫落的人士，利用口中黏膜和齒槽骨脊固定，也可自行配戴。牙托底部有金屬鉤讓牙托能固定在真牙上，代替缺去的牙齒。活動式假牙可自行配戴，適合缺齒較多的人士使用。',
   },
   {
      hid: 'Keywords',
      name: 'Keywords',
      content: '牙托 假牙 全口牙托 局部牙托 活動式假牙 假牙 固定式假牙 牙托 牙橋 假牙托 愛康健 深圳愛康健 深圳專業牙科中心 愛康健醫院 愛康健口腔醫院 深圳愛康健口腔醫院愛康健 CKJ愛康健齒科集團 深圳口腔專科醫院 愛康健齒科集團 深圳牙科醫院牙科服務內地牙科 深圳口腔專科',
   },
  ]
})

const bannerData = {
  img: 'https://static.cmereye.com/imgs/2023/08/6812edc00b543a05.jpg',
  mbImg: 'https://static.cmereye.com/static/ckjnewsite/img/banner/9.jpg',
  gif: 'https://static.cmereye.com/imgs/2023/08/0edc8793314c4da3.gif',
  text1: '#回歸自然微笑 恢復咀嚼功能',
  text2: '牙齒更加整齊、美觀、自信、舒適',
  tabNavName: 'pages.dental-service.periodontal.introduce.tabNavName'
}

const headerConfig = {
  img: 'https://static.cmereye.com/imgs/2023/06/e421c3bfe25668cf.png',
  bg: 'https://static.cmereye.com/imgs/2023/06/ac0953834f7561e4.jpg',
  mbImg: 'https://static.cmereye.com/imgs/2023/06/5659637e703a6559.jpg',
  pageName: 'toothtray',
  pcText: ['回歸自然微笑，恢復咀嚼功能','牙齒更加整齊、美觀、自信、舒適'],
  mbText: ['回歸自然微笑','恢復咀嚼功能']
}

const introduceData = {
  title: 'pages.dental-service.toothtray.introduce.title',
  content: 'pages.dental-service.toothtray.introduce.content',
  mbImg: 'https://static.cmereye.com/imgs/2023/05/97b2cb567b59ccdc.jpg',
  pcImg: 'https://static.cmereye.com/imgs/2023/05/eff373fe8976c4f0.jpg',
  tabNavName: 'pages.dental-service.toothtray.introduce.tabNavName',
}

const reasonData = {
  title: 'pages.dental-service.toothtray.reason.title',
  text: 'pages.dental-service.toothtray.reason.text',
  imgUrl: 'https://static.cmereye.com/imgs/2023/05/5aaed24997e19f64.jpg',
  reasonLists:[
    {
      name: 'pages.dental-service.toothtray.reason.lists[0].context',
      context: 'pages.dental-service.toothtray.reason.lists[1].context',
    },
    {
      name: 'pages.dental-service.toothtray.reason.lists[2].context',
      context: 'pages.dental-service.toothtray.reason.lists[3].context',
    }
  ],
  pageName: 'toothtray'
}

const contrastData = {
  title: {
    span1: '固定式假牙 VS 活動式假牙',
    span2: '點揀好？'
  },
  context: '固定式假牙與活動式假牙各有其優缺點及適用的情況，通常會經由牙醫評估口內缺牙的情況及剩下牙齒的狀況，再進一步進行全面的考量及建議。',
  tableRemark: '以下為你分析固定式/活動式假牙的優缺點：',
  table: {
    title: [
      ['類別'],['適用','人士'],['物料'],['優點'],['缺點']
    ],
    data: [
      {
        th: '固定式假牙',
        td: ['牙套','牙橋'],
        content: [
          {
            l: ['牙根健康','牙齒損耗範圍太大','已接受杜牙根治療'],
            r: ['缺牙兩旁尚有健康牙齒','牙齒連牙根被全隻拔起']
          },
          {
            l: ['全金屬、全鋯、全瓷'],
            r: ['全金屬、全鋯、全瓷']
          },
          {
            l: ['保留真牙牙根'],
            r: ['提高假牙穩定度']
          },
          {
            l: ['需修磨牙齒'],
            r: ['需修磨兩側牙齒，若其中一顆牙齒出現問題，需重新製作整組牙橋']
          }
        ]
      },
      {
        th: '活動定式假牙',
        td: ['局部牙托','全口牙托'],
        content: [
          {
            l: ['口腔內尚有健康牙齒'],
            r: ['口腔內已沒有健康牙齒']
          },
          {
            l: ['金屬支架或金屬勾','牙齒部分多由塑膠材料製造'],
            r: ['塑膠支架','牙齒部分多由塑膠製造']
          },
          {
            l: ['自由裝取'],
            r: ['自由裝取']
          },
          {
            l: ['容易磨損口腔內璧，造成潰瘍及疼痛','適應期較長'],
            r: ['咬合感覺與真牙的感覺相差甚大，適應期長','假牙容易晃動及移位']
          }
        ]
      }
    ]
  }
}

const problemData = {
  title: 'pages.dental-service.toothtray.problem.title',
  lists: [
    {
      Q: 'pages.dental-service.toothtray.problem.lists[0].Q',
      A: 'pages.dental-service.toothtray.problem.lists[0].A'
    },
    {
      Q: 'pages.dental-service.toothtray.problem.lists[1].Q',
      A: 'pages.dental-service.toothtray.problem.lists[1].A'
    },
    {
      Q: 'pages.dental-service.toothtray.problem.lists[2].Q',
      A: 'pages.dental-service.toothtray.problem.lists[2].A'
    },
    {
      Q: 'pages.dental-service.toothtray.problem.lists[3].Q',
      A: 'pages.dental-service.toothtray.problem.lists[3].A'
    },
  ]
}

</script>


<template>
<div>
  <div class="toothtrayPage">
    <ServiceBanner :bannerData="bannerData" />
    <ServiceIntroduce :introduceData="introduceData" :reasonData="reasonData" :moduleType="'3'" />
    <RippleLine :type="'4'" />
    <div class="contrast">
      <div class="contrast-bg">
        <div class="contrast-title">
          <div class="contrast-title-in">
            <span>{{contrastData.title.span1}}</span>
            <span>{{contrastData.title.span2}}</span>
          </div>
          <div class="svgQuestionMark">
            <SvgQuestionMark />
          </div>
        </div>
        <div class="contrast-context">
          {{contrastData.context}}
        </div>
        <div class="contrast-tableRemark">
          {{contrastData.tableRemark}}
        </div>
        <div class="contrast-table">
          <div class="bgBox">
            <div class="bgBox-in">
              <div class="contrast-table-in">
                <div v-for="(tableTitleItem,tableTitleIndex) in contrastData.table.title" :key="tableTitleIndex">
                  <span v-for="item in tableTitleItem" :key="item">{{item}}</span>
                </div>
              </div>
            </div>
            <div class="bgBox-in" v-for="(contrastTableItem,contrastTableIndex) in contrastData.table.data" :key="contrastTableIndex">
              <div class="contrast-table-in">
                <div>
                  <div class="th">{{contrastTableItem.th}}</div>
                  <div>
                    <span class="td" v-for="(tdItem,tdIndex) in contrastTableItem.td" :key="tdIndex">{{tdItem}}</span>
                  </div>
                </div>
                <div class="content" v-for="(contentItem,contentIndex) in contrastTableItem.content" :key="contentIndex">
                  <div class="content-l">
                    <div v-for="(contentIn,contentInIndex) in contentItem.l" :key="contentInIndex">
                      <span>· </span>
                      <span>{{contentIn}}</span>
                    </div>
                  </div>
                  <div class="content-r">
                    <div v-for="(contentIn,contentInIndex) in contentItem.r" :key="contentInIndex">
                      <span>· </span>
                      <span>{{contentIn}}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <RippleLine :type="'4'" />
    <ServiceProblem :problemData="problemData" />
    <serviceCard />
    <RippleLine :type="'4'" />
    <ContactUs />
  </div>
</div>
</template>



<style lang="scss" scoped>
.toothtrayPage{
  margin-top: -20px;
  padding-bottom: 140px;
}
.contrast{
  margin-top: 147px;
  &-bg{
    padding: 76px 0 186px;
  }
  &-title{
    display: flex;
    justify-content: center;
    position: relative;
    &-in{
      display: flex;
      flex-direction: column;
      position: relative;
      span{
        font-size: 30px;
        color: var(--topic-color);
        text-align: center;
        &:last-child{
          font-size: 40px;
        }
      }
      &::before{
        content: '';
        width: 12px;
        height: 12px;
        transform: rotate(45deg);
        background: var(--topic-color);
        position: absolute;
        left: -40px;
        bottom: 50%;
        transform: translateY(-50%) rotate(45deg);
      }
      &::after{
        content: '';
        width: 12px;
        height: 12px;
        transform: rotate(-45deg);
        background: var(--topic-color);
        position: absolute;
        right: -40px;
        bottom: 50%;
        transform: translateY(-50%) rotate(45deg);
      }
    }
    .svgQuestionMark{
      position: absolute;
      left: 50%;
      top: 0;
      transform: translate(-50%,-40%);
    }
  }
  &-context{
    text-align: center;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 160%;
    color: var(--topic-text-color);
    max-width: 780px;
    margin: 69px auto 0;
    letter-spacing: 3.8px;
  }
  &-tableRemark{
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 160%;
    letter-spacing: 3.8px;
    color: var(--topic-color);
    text-align: center;
  }
  &-table{
    margin: 72px auto 0;
    max-width: 1200px;
    width: 100%;
    &-in{
      display: flex;
      flex-direction: column;
      &>div{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        &.content{
          flex-direction: row;
          border-bottom: 1px solid var(--topic-color);
          &>div{
            flex: 1;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 160%;
            color: var(--topic-text-color);
            padding: 0 18px;
            background: #FFFFFF;
            &>div{
              display: flex;
              span{
                &:first-child{
                  width: 20px;
                }
                &:last-child{
                  flex: 1;
                }
              }
            }
          }
          .content-l{
            border-left: 1px solid var(--topic-color);
            border-right: 1px solid var(--topic-color);
          }
        }
        &:nth-of-type(1){
          height: 138px;
          display: flex;
          margin-bottom: 2px;
          margin-left: 2px;
          .th{
            background: var(--topic-color);
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 160%;
            color: #FFFFFF;
            margin-bottom: 2px;
          }
          &>div{
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            .td{
              background: #FFB0CA;
              font-style: normal;
              font-weight: 500;
              font-size: 18px;
              line-height: 160%;
              color: #fff;
            }
            span{
              flex: 1;
              height: 100%;
              text-align: center;
              display: flex;
              justify-content: center;
              align-items: center;
              &:last-child{
                margin-left: 2px;
              }
            }
          }
        } 
        &:nth-of-type(2){
          height: 183px;
        } 
        &:nth-of-type(3){
          height: 144px;
        } 
        &:nth-of-type(4){
          height: 109px;
        } 
        &:nth-of-type(5){
          height: 182px;
        }
      }
    }
    .bgBox{
      display: flex;
      .bgBox-in{
        width: 43.1%;
        &:nth-of-type(1){
          width: 13.5%;
          overflow: hidden;
          .contrast-table-in{
            &>div{
              font-style: normal;
              font-weight: 500;
              font-size: 18px;
              line-height: 160%;
              background: #FFFFFF;
              color: var(--topic-color);
              border-bottom: 1px solid var(--topic-color);
              &:nth-of-type(1){
                border-right: none;
                margin-right: 2px;
              }
            }
          }
        }
        &:nth-of-type(3){
          overflow: hidden;
          .contrast-table-in{
            &>div{
              border-right: none;
            }
          }
        } 
      }
    }
  }
}

@media (min-width: 768px) and (max-width: 1452px) {
  // .contrast{
  //   margin-top: 120px;
  //   &-bg{
  //     padding: 55px 0 70px;
  //   }
  //   &-context{
  //     margin: 25px auto 0;
  //     font-size: 17px;
  //   }
  //   &-tableRemark{
  //     font-size: 17px;
  //     margin-top: 18px;
  //   }
  //   &-table{
  //     &-in{
  //       &>div{
  //         &.content{
  //             &>div{
  //               font-size: 20px;
  //               padding-left: 15px;
  //               &>div{
  //                 span{
  //                   &:first-child{
  //                     width: 17px;
  //                   }
  //                 }
  //               }
  //             }
  //         }
  //         &:nth-of-type(1){
  //           .th{
  //             font-size: 24px;
  //           }
  //           &>div{
  //             .td{
  //               font-size: 23px;
  //             }
  //             span{
  //               &:last-child{
  //                 margin-left: 3.4px;
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //     .swiper{
  //       .swiper-slide{
  //         &:nth-of-type(1){
  //           .contrast-table-in{
  //             &>div{
  //               font-size: 24px;
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // }
}

@media only screen and (max-width: 768px) {
  .contrast{
    margin-top: 0px;
    &-bg{
      padding: 76px 0 80px;
    }
    &-title{
      &-in{
        span{
          font-size: 20px;
          &:last-child{
            font-size: 24px;
          }
        }
        &::before{
          width: 6px;
          height: 6px;
          left: -20px;
          top: 15%;
          transform: rotate(45deg);
        }
        &::after{
          width: 6px;
          height: 6px;
          right: -20px;
          top: 15%;
          transform: rotate(45deg);
        }
      }
      .svgQuestionMark{
        transform: translate(-50%,-40%) scale(.6);
      }
    }
    &-context{
      margin: 50px 30px 0;
      font-weight: 500;
      font-size: 15px;
    }
    &-tableRemark{
      max-width: 60%;
      font-weight: 500;
      font-size: 15px;
      margin: 8px auto 0;
    }
    &-table{
      margin: 40px auto 0;
      &-in{
        &>div{
          &.content{
            // margin-bottom: 3.5px;
              &>div{
                font-size: 15px;
                padding: 0;
                font-size: 12px;
                letter-spacing: 1.8px;
                line-height: 180%;
                &>div{
                  span{
                    &:first-child{
                      width: 12px;
                    }
                  }
                }
              }
              .content-l{
                // margin-right: 2px;
              }
          }
          &:nth-of-type(1){
            height: 40px;
            // margin-bottom: 3.5px;
            .th{
              font-size: 12px;
              // margin-bottom: 3.5px;
            }
            &>div{
              .td{
                font-size: 12px;
              }
              span{
                &:last-child{
                  // margin-left: 2.5px;
                }
              }
            }
          } 
          &:nth-of-type(2){
            height: 154px;
          } 
          &:nth-of-type(3){
            height: 154px;
          } 
          &:nth-of-type(4){
            height: 88px;
          } 
          &:nth-of-type(5){
            height: 176px;
          } 
        }
      }
      .bgBox{
        .bgBox-in{
          width: calc((100% - 41px)/2);
          &:nth-of-type(1){
            width: 41px;
            .contrast-table-in{
              &>div{
                font-size: 12px;
              }
            }
          }
        }
      }
      :deep(.swiper-scrollbar){
        opacity: 1 !important;
        width: calc(100% - 60px);
        margin: 0 30px;
        background: #FFF1F0;
      }
      :deep(.swiper-scrollbar-drag){
        background: #FFA09E;
      }
    }
  }
}
</style>