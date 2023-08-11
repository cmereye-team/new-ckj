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

let menuIsOpen = ref(false)

const handleMenu = (_data:any) => {
  if(_data.link){
    location.href = _data.link
  }
}
</script>

<template>
  <div class="headerPage">
    <div class="headerPage-in">
      <div class="headerPage-in-t">
        <div>
          <span>7.06~ 成功種牙或矯齒即送專業洗牙服務1次!（※名額有限）</span>
          <span>7.06~ 金屬矯正牙箍即減￥2000!!</span>  
        </div>
      </div>
      <div class="headerPage-in-c" :class="{openMenu: menuIsOpen}">
        <div>
          <div class="logo" @click="handleMenu({link: '/'})">
            <img src="https://static.cmereye.com/imgs/2023/07/b79d00b40c36feef.jpg" alt="爱康健">
          </div>
          <div class="menu">
            <div v-for="(item,index) in menuLists" :key="index">
              <div class="enName">{{item.enName}}</div>
              <div class="name">{{$t(item.name)}}</div>
              <div class="menu-child" v-if="item.child.length && !item.link.includes('/dental-service')">
                <div class="menu-child-border">
                  <div class="menu-child-in" v-for="(childItem,childIndex) in item.child" :key="childIndex" @click="handleMenu(childItem)">
                    <div>{{$t(childItem.name)}}</div>
                  </div>
                </div>
              </div>
              <div class="menu-child" v-if="item.link.includes('/dental-service')">
                <div class="menu-child-border">
                  <div class="serviceCard">
                    <div class="serviceCard-in" v-for="(service,serviceIndex) in servicesCardLists" :key="serviceIndex" @click="handleMenu(service)">
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
          <div class="openMenu" @click="menuIsOpen = !menuIsOpen"></div>
        </div>
      </div>
      <div class="headerPage-in-b"></div>
    </div>
    <!-- <div class="headerPage-mb">
      
    </div> -->
  </div>
</template>

<style lang="scss" scoped>
.headerPage{
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 40;
  &-in{
    width: 100%;
    position: relative;
    z-index: 20;
    &-t{
      color: #FFF;
      font-family: 'cwTeXYen';
      font-size: 15px;
      font-style: normal;
      font-weight: 600;
      letter-spacing: 3.9px;
      height: 28px;
      line-height: 28px;
      background: var(--topic-color);
      text-align: center;
      position: relative;
      overflow: hidden;
      span{
        &:not(:last-child){
          margin-right: 60px;
        }
      }
      div{
        width: max-content;
        animation: topAnim 14s linear infinite;
        position: absolute;
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
          min-width: 158px;
        }
        .menu{
          display: flex;
          flex: 1;
          &>div{
            flex: 1;
            font-style: normal;
            font-weight: 600;
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
              font-family: 'cwTeXYen';
              font-size: 20px;
              line-height: 1; /* 50.22px */
              letter-spacing: 4.5px;
              text-align: center;
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
                &::after{
                  content: '';
                  width: 100%;
                  height: 100%;
                  position: absolute;
                  top: 0;
                  left: 0;
                  border-radius: 10px;
                  border: 10px solid transparent;
                  border-image: url(@/assets/images/headerBorder.png) 16% round;
                  z-index: 2;
                  display: none;
                }
                &::before{
                  content: '';
                  width: 100%;
                  height: 100%;
                  position: absolute;
                  top: 0;
                  left: 0;
                  opacity: 0.699999988079071;
                  background: #FFF;
                  border-radius: 15px;
                  z-index: 1;
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
                        max-width: 60%;
                        max-height: 40%;
                      }
                      div{
                        color: var(--topic-text-color);
                        text-align: center;
                        font-family: 'cwTeXYen';
                        font-size: 16px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 160%; /* 19.2px */
                        letter-spacing: 3px;
                        margin: 4px 0 7px;
                        white-space: nowrap;
                        position: relative;
                        &::after{
                          // content: '';
                          // font-family: '黑体';
                          // display: inline-block;
                          // color: var(--topic-color);
                          // transform: scale(.8);
                          content: '';
                          color: var(--topic-color);
                          background: url(https://static.cmereye.com/imgs/2023/07/5331fed4a9f0f487.png) no-repeat;
                          width: 5px;
                          height: 10px;
                          background-size: 100% 100%;
                          position: absolute;
                          font-weight: bold;
                          top: 25%;
                        }
                      }
                    }
                  }
                }
              }
              &-in{
                position: relative;
                z-index: 5;
                &>div{
                  padding: 0 14px;
                  color: #6B6B6B;
                  font-family: 'cwTeXYen';
                  font-size: 18px;
                  font-style: normal;
                  font-weight: 600;
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
                  &::after{
                    display: block;
                  }
                  // border: 1.5px dashed var(--topic-color);
                  // border: 10px solid transparent;
                  // padding: 15px;
                  // border-image: url(@/assets/images/headerBorder.png) 16% round;
                }
              }
            }
          }
        }
        .booking{
          background: var(--topic-color);
          padding: 8px 40px 13px;
          border-radius: 10px;
          min-width: 260px;
          &>div{
            color: #FFF;
            text-align: center;
            font-family: 'MYuen HK';
            font-size: 16px;
            font-style: normal;
            font-weight: 600;
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
                // top: 100%;
                // left: -200%;
                transition: all 1s;
                z-index: 1;
                border-radius: 50%;
                // width: 200%;
                // height: 200%;
                width: 0;
                height: 0;
                left: -10px;
                bottom: -10px;
              }
              &:hover{
                color: var(--topic-color);
                &::after{
                  // top: 50%;
                  left: -50px;
                  bottom: -100px;
                  // border-radius: 30px 30px 0 0;
                  width: 250px;
                  height: 200px;
                }
              }
            }
          }
        }
        .openMenu{
          display: none;
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
@keyframes topAnim {
  0%{
    left: 100%;
    transform: translateX(0);
  }
  100%{
    left: 0;
    transform: translateX(-100%);
  }
}
@media (min-width: 768px) and (max-width: 1920px) {}
@media screen and (max-width: 768px) {
  .headerPage{
    // position: relative;
    position: sticky;
    top: 0;
    z-index: 90;
    &-in{
      &-t{
        width: 100%;
        overflow: hidden;
        div{
          width: max-content;
          animation: topAnim 14s linear infinite;
        }
      }
      &-c{
        height: auto;
        transition: all .3s;
        &.openMenu{
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 120;
          padding: 23px 17px;
          &>div{
            flex-direction: column;
            justify-content: flex-start;
            padding: 40px 32px 29px;
            border: 3px solid var(--topic-color);
            border-radius: 10px;
            overflow: hidden;
            overflow-y: auto;
            box-sizing: border-box;
            &::-webkit-scrollbar{
              display: none;
            }
            .menu{
              display: flex;
              flex-wrap: wrap;
              margin-top: 34px;
              width: 100%;
              justify-content: space-between;
              flex: none;
              &>div{
                flex: none;
                width: 100%;
                border-top: 2px solid #FECB02;
                padding: 10px 0 15px;
                &:nth-of-type(2){
                  border-top: none;
                  .enName{
                    display: none;
                  }
                  .name{
                    display: none;
                  }
                  .menu-child{
                    width: 100%;
                    &-border{
                      width: 100%;
                      display: flex;
                      justify-content: space-between;
                      &::before{
                        background: none;
                      }
                    }
                    &-in{
                      width: calc(50% - 9px);
                      text-align: center;
                      border-top: 2px solid #FECB02;
                      &>div{
                        padding-top: 35px;
                        line-height: 1.6;
                        &::after{
                          content: 'PROMISES';
                          top: 15px;
                          height: auto;
                          width: 100%;
                          background: none;
                          color: var(--topic-color);
                          text-align: center;
                          font-family: '.SF NS Rounded';
                          font-size: 11px;
                          line-height: 1.6; /* 30.69px */
                          letter-spacing: 3.3px;
                          position: absolute;
                          left: 50%;
                          transform: translateX(-50%);
                        }
                      }
                      &:not(:last-child){
                        &>div{
                          &::after{
                            content: 'PROMISES';
                            top: 15px;
                            height: auto;
                            width: 100%;
                            background: none;
                            color: var(--topic-color);
                            text-align: center;
                            font-family: '.SF NS Rounded';
                            font-size: 11px;
                            line-height: 1.6; /* 30.69px */
                            letter-spacing: 3.3px;
                          }
                        }
                      }
                    }
                  }
                }
                &:nth-of-type(4){
                  width: calc(50% - 9px);
                  .menu-child{
                    display: none;
                  }
                }
                &:nth-of-type(5){
                  width: calc(50% - 9px);
                }
                &:not(:last-child){
                  border-right: none;
                }
                .name{
                  text-align: center;
                }
                .menu-child{
                  position: relative;
                  top: 0;
                  left: 0;
                  height: auto;
                  transform: none;
                  padding-top: 0;
                  width: 100%;
                  &-border{
                    border: none;
                    .serviceCard{
                      width: 100%;
                      padding: 20px 0 10px;
                      &-in{
                        .serviceBox{
                          box-shadow: 0 2px 2px 2px #ccc;
                        }
                      }
                    }
                  }
                }
                &:hover{
                  .menu-child{
                    padding-top: 0;
                    &-border{
                      border: none;
                      &::after{
                        display: none;
                      }
                    }
                  }
                }
              }
            }
            .booking{
              width: 100%;
              display: block;
              &>div{
                white-space: nowrap;
                &:last-child{
                  padding: 0 20px;
                  width: max-content;
                  margin: 8px auto 0;
                }
              }
            }
            .openMenu{
              top: 45px;
              right: 36px;
              background: url(https://static.cmereye.com/imgs/2023/07/7de65ac9af35e33f.png) no-repeat;
              background-position: center center;
            }
          }
        }
        &>div{
          justify-content: center;
          padding-top: 18px;
          .menu{
            display: none;
          }
          .booking{
            display: none;
          }
          .openMenu{
            display: block;
            position: fixed;
            z-index: 50;
            right: 25px;
            top: 48px;
            width: 31px;
            height: 31px;
            transition: all .3s;
            border: 2px solid var(--topic-color);
            background: url(https://static.cmereye.com/imgs/2023/07/eca2a691410ded61.png) no-repeat;
            background-position: center center;
          }
        }

      }
      &-b{
        height: 30px;
      }
    }
  }
}
// @keyframes topAnim {
//   0%{
//     transform: translateX(100%);
//   }
//   100%{
//     transform: translateX(-100%);
//   }
// }
</style>