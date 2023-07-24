<script lang="ts" setup>
import { defineProps } from "vue";
import { useAppState } from '~/stores/appState'
import serviceLists from '~/assets/js/service'
defineProps({
  str:{
    type: String,
    default: ''
  }
})

const appState = useAppState()
const menuLists = [
  {
    name: 'components.header.menuLists.menu_index.name',
    enName: 'HOME',
    link: '/',
    child: [],
  },
  {
    name: 'components.header.menuLists.menu_brand.name',
    enName: 'PROMISES',
    link: `/brand/${appState.brand}`,
    child: [
      {
        name: 'components.header.menuLists.menu_brand.course',
        link: '/brand/course',
      },
      {
        name: 'components.header.menuLists.menu_brand.honor',
        link: '/brand/honor',
      },
    ],
  },
  {
    name: 'components.header.menuLists.menu_dental_service.name',
    enName: 'SERVICES',
    link: `/dental-service`,
    child: [
      {
        name: 'service.implant',
        link: '/dental-service/implant',
      },
      {
        name: 'service.orthodontics',
        link: '/dental-service/orthodontics',
      },
      {
        name: 'service.rootCanal',
        link: '/dental-service/rootCanal',
      },
      {
        name: 'service.invisalign',
        link: '/dental-service/invisalign',
      },
      {
        name: 'service.veneers',
        link: '/dental-service/veneers',
      },
      {
        name: 'service.all_ceramic_crowns',
        link: '/dental-service/all-ceramic-crowns',
      },
      {
        name: 'service.wisdom_teeth_extraction',
        link: '/dental-service/wisdom-teeth-extraction',
      },
      {
        name: 'service.periodontal',
        link: '/dental-service/periodontal',
      },
      {
        name: 'service.toothtray',
        link: '/dental-service/toothtray',
      },
      {
        name: 'service.teeth_whitening',
        link: '/dental-service/teeth-whitening',
      },
      {
        name: 'service.scaling_and_polishing',
        link: '/dental-service/scaling-and-polishing',
      },
      {
        name: 'service.fillings',
        link: '/dental-service/fillings',
      },
      {
        name: 'service.general_oral_examination',
        link: '/dental-service/general-oral-examination',
      },
      {
        name: 'service.children_dentistry',
        link: '/dental-service/children-dentistry',
      }
    ],
  },
  {
    name: 'components.header.menuLists.menu_medical_team.name',
    enName: 'DOCTORS',
    link: `/medical-team`,
    child: [
      {
        name: 'components.areaTabs.luohu',
        link: '/medical-team',
      },
      {
        name: 'components.areaTabs.futian',
        link: '/medical-team',
      },
      {
        name: 'components.areaTabs.nanshan',
        link: '/medical-team',
      },
      {
        name: 'components.areaTabs.baoan',
        link: '/medical-team',
      },
      {
        name: 'components.areaTabs.longhua',
        link: '/medical-team',
      },
    ],
  },
  {
    name: 'components.header.menuLists.menu_contactUs.name',
    enName: 'CONTACT',
    link: '/contactUs',
    child: [],
  },
]

const servicesCardLists = serviceLists
</script>

<template>
  <div class="headerPage">
    <div class="headerPage-in">
      <div class="headerPage-in-t">
        <span>7.06~ 成功種牙或矯齒即送專業洗牙服務1次!（※名額有限）</span>
        <span>7.06~ 金屬矯正牙箍即減￥2000!!</span>  
      </div>
      <div class="headerPage-in-c">
        <div>
          <div class="logo">
            <img src="https://static.cmereye.com/imgs/2023/07/b79d00b40c36feef.jpg" alt="爱康健">
          </div>
          <div class="menu">
            <div v-for="(item,index) in menuLists" :key="index">
              <div class="enName">{{item.enName}}</div>
              <div class="name">{{$t(item.name)}}</div>
              <div class="menu-child" v-if="item.child.length && !item.link.includes('/dental-service')">
                <div class="menu-child-border">
                  <div class="menu-child-in" v-for="(childItem,childIndex) in item.child" :key="childIndex">
                    <div>{{$t(childItem.name)}}</div>
                  </div>
                </div>
              </div>
              <div class="menu-child" v-if="item.link.includes('/dental-service')">
                <div class="menu-child-border">
                  <div class="serviceCard">
                    <div class="serviceCard-in" v-for="(service,serviceIndex) in servicesCardLists" :key="serviceIndex">
                      <div class="serviceBox">
                        <img :src="service.imgUrl" alt="">
                        <div>{{$t(service.name)}}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="booking">
            <div>
              展開你的{{'\n'}}健康微笑之旅
              </div>
            <div>
              <div>
                立即預約
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="headerPage-in-b"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.headerPage{
  width: 100%;
  &-in{
    width: 100%;
    position: relative;
    z-index: 20;
    &-t{
      color: #FFF;
      font-family: 'Yuanti TC';
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      letter-spacing: 3.9px;
      height: 28px;
      line-height: 28px;
      background: var(--topic-color);
      text-align: center;
      span{
        &:not(:last-child){
          margin-right: 60px;
        }
      }
    }
    &-c{
      height: 140px;
      background: #fff;
      display: flex;
      justify-content: center;
      &>div{
        width: 100%;
        max-width: 1565px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 30px;
        .logo{
          cursor: pointer;
        }
        .menu{
          display: flex;
          &>div{
            padding: 0 70px;
            font-style: normal;
            font-weight: 400;
            cursor: pointer;
            position: relative;
            &:not(:last-child){
              border-right: 2px solid #FECB02;
            }
            .enName{
              color: var(--topic-color);
              text-align: center;
              font-family: '.SF NS Rounded';
              font-size: 11px;
              line-height: 2.5; /* 30.69px */
              letter-spacing: 3.3px;
            }
            .name{
              color: var(--topic-text-color);
              font-family: 'Yuanti TC';
              font-size: 18px;
              line-height: 1; /* 50.22px */
              letter-spacing: 4.5px;
            }
            .menu-child{
              position: absolute;
              top: 100%;
              left: 50%;
              transform: translateX(-50%);
              width: max-content;
              height: 0;
              overflow: hidden;
              transition: all .3s;
              z-index: 5;
              padding-top: 0;
              &-border{
                border-radius: 10px;
                position: relative;
                &::before{
                  content: '';
                  width: 100%;
                  height: 100%;
                  position: absolute;
                  top: 0;
                  left: 0;
                  opacity: 0.699999988079071;
                  background: #FFF;
                  border-radius: 10px;
                }
                .serviceCard{
                  max-width: 335px;
                  display: flex;
                  flex-wrap: wrap;
                  padding: 20px 10px 0;
                  position: relative;
                  z-index: 5;
                  &-in{
                    width: 33.333%;
                    display: flex;
                    justify-content: center;
                    .serviceBox{
                      margin-bottom: 20px;
                      width: 87px;
                      height: 87px;
                      border-radius: 50%;
                      background: #F5F4F4;
                      display: flex;
                      flex-direction: column;
                      justify-content: flex-end;
                      align-items: center;
                      img{
                        width: 60%;
                      }
                      div{
                        color: var(--topic-text-color);
                        text-align: center;
                        font-family: 'Yuanti TC';
                        font-size: 12px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 160%; /* 19.2px */
                        letter-spacing: 3px;
                        margin: 4px 0 15px;
                        white-space: nowrap;
                        &::after{
                          content: '>';
                          font-family: '黑体';
                          display: inline-block;
                          color: var(--topic-color);
                          transform: scale(.8);
                        }
                      }
                    }
                  }
                }
              }
              &-in{
                &>div{
                  padding: 0 14px;
                  color: #6B6B6B;
                  font-family: 'Yuanti TC';
                  font-size: 18px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 279%; /* 50.22px */
                  letter-spacing: 4.5px;
                  position: relative;
                }
                &:not(:last-child){
                  &>div{
                    &::after{
                      content: '';
                      position: absolute;
                      bottom: 0;
                      left: 50%;
                      transform: translateX(-50%);
                      width: 56px;
                      height: 2px;
                      background: var(--topic-color);
                    }
                  }
                }
              }
            }
            &:hover{
              .menu-child{
                padding-top: 20px;
                height: auto;
                &-border{
                  border: 1.5px dashed var(--topic-color);
                }
              }
            }
          }
        }
        .booking{
          background: var(--topic-color);
          padding: 8px 40px 13px;
          border-radius: 10px;
          &>div{
            color: #FFF;
            text-align: center;
            font-family: 'MYuen HK';
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 160%; /* 22.4px */
            letter-spacing: 3.5px;
            white-space: pre-wrap;
            text-align: center;
            &:last-child{
              cursor: pointer;
              padding: 0 40px;
              background: #FECB02;
              border-radius: 15px;
              height: 25px;
              line-height: 25px;
              margin-top: 8px;
              box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
              overflow: hidden;
              position: relative;
              transition: all 1s;
              div{
                position: relative;
                z-index: 2;
              }
              &::after{
                content: '';
                background: #fff;
                position: absolute;
                top: 100%;
                left: 50%;
                transform: translateX(-50%);
                transition: all 1s;
                z-index: 1;
                border-radius: 50% 50% 0 0;
                width: 0;
                height: 0;
              }
              &:hover{
                color: var(--topic-color);
                &::after{
                  top: 0;
                  border-radius: 15px 15px 0 0;
                  width: 100%;
                  height: 100%;
                }
              }
            }
          }
        }
      }
    }
    &-b{
      background: url(https://static.cmereye.com/imgs/2023/07/02bad1b54114fb3a.png);
      background-size: auto 100%;
      height: 60px;
      width: 100%;
      transform: rotate(180deg);
    }
  }
}
@media (min-width: 768px) and (max-width: 1452px) {}
@media screen and (max-width: 768px) {}
</style>