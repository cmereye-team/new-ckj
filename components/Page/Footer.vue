<script lang="ts" setup>

import { useAppState } from '~/stores/appState'
const appState = useAppState()
const navLists = [
  [
    {
      name: 'components.footer.nav_index',
      link: '/',
      child: []
    },
    {
      name: 'components.footer.nav_brand',
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
  ],[
    {
      name: 'components.footer.nav_contactUs',
      link: '/contactUs',
      child: []
    },
    {
      name: 'components.footer.nav_medical_team',
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
  ],[
    {
      name: 'components.footer.nav_dental_service',
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
  ]
]

let toTopType = ref(false)

const toPageTop = () =>{
  toTopType.value = true
  setTimeout(()=>{
    let top = document.documentElement.scrollTop || document.body.scrollTop;
    // 实现滚动效果 
    const timeTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top -= 50;
        if (top <= 0) {
            clearInterval(timeTop);
            toTopType.value = false
        }
    }, 10);
  },500)
}


let _arr:any = ref([])
const handleMenu = (item:any,index:any) => {
  console.log(index)
  console.log(_arr.value)
  if(_arr.value.indexOf(index) === -1){
    _arr.value.push(index)
  }else{
    _arr.value.splice(_arr.value.indexOf(index),1)
  }
  console.log(_arr.value)
}

</script>

<template>
  <footer class="footerPage">
    <div class="footerPage-bgTop"></div>
    <div class="footer-content">
      <div class="footer-content-logo_one">
        <nuxt-link :to="'/'">
          <img src="https://static.cmereye.com/imgs/2023/08/8324b35b12f6ac6a.png" alt="" />
        </nuxt-link>
      </div>
      <div class="footer-content-text">
        {{$t('components.footer.text1')}} {{'\n'}}{{$t('components.footer.text2')}}
      </div>
      <div class="footer-content-nav">
        <div class="nav-list" v-for="(navItem, navIndex) in navLists" :key="navIndex">
          <div class="nav-list-in" v-for="(menuItem,menuIndex) in navItem" :key="menuIndex">
            <div :class="{'nav-list-in-name':true,'isOpen':_arr.includes(`${navIndex}-${menuIndex}`),'haveChild': menuItem.child.length>0}" @click="handleMenu(menuItem,`${navIndex}-${menuIndex}`)">
              {{$t(menuItem.name)}}
            </div>
            <div class="nav-list-in-child pcChild">
              <div>
                <div v-for="(menuChild,childIndex) in menuItem.child.slice(0,6)" :key="childIndex">
                  {{$t(menuChild.name)}}
                </div>
              </div>
              <div v-if="menuItem.child.length > 6">
                <div v-for="(menuChild,childIndex) in menuItem.child.slice(6,12)" :key="childIndex">
                  {{$t(menuChild.name)}}
                </div>
              </div>
              <div v-if="menuItem.child.length > 12">
                <div v-for="(menuChild,childIndex) in menuItem.child.slice(12,14)" :key="childIndex">
                  {{$t(menuChild.name)}}
                </div>
              </div>
            </div>
             <!-- v-show="_arr.includes(`${navIndex}-${menuIndex}`)" -->
            <div :class="{'nav-list-in-child':true, 'mbChild':true, 'act':_arr.includes(`${navIndex}-${menuIndex}`)}">
              <div>
                <div v-for="(menuChild,childIndex) in menuItem.child.slice(0,7)" :key="childIndex">
                  {{$t(menuChild.name)}}
                </div>
              </div>
              <div v-if="menuItem.child.length > 6">
                <div v-for="(menuChild,childIndex) in menuItem.child.slice(7,14)" :key="childIndex">
                  {{$t(menuChild.name)}}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-content-icon">
        <div class="footer-content-icon-in">
          <nuxt-link to="https://www.facebook.com/ckjdental.hk/" target="_blank">
            <img src="@/assets/images/icon_1.png" />
          </nuxt-link>
        </div>
        <div class="footer-content-icon-in">
          <nuxt-link to="https://www.instagram.com/ckj_hk/" target="_blank">
            <img src="@/assets/images/icon_2.png" />
          </nuxt-link>
        </div>
        <div class="footer-content-icon-in">
          <nuxt-link to="https://www.youtube.com/channel/UCKYINBITo-8P37-SQDRSr_g" target="_blank">
            <!-- <img src="@/assets/images/icon_3.png" /> -->
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="21" viewBox="0 0 26 21" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M24.6163 2.43802C25.0197 2.85963 25.3094 3.38387 25.4564 3.95828C26 6.07839 26 10.4996 26 10.4996C26 10.4996 26 14.9209 25.4564 17.041C25.3094 17.6154 25.0197 18.1397 24.6163 18.5613C24.2129 18.9829 23.7099 19.2871 23.1577 19.4434C21.125 20.011 13 20.011 13 20.011C13 20.011 4.875 20.011 2.84227 19.4434C2.29009 19.2871 1.78713 18.9829 1.38373 18.5613C0.980326 18.1397 0.690631 17.6154 0.543636 17.041C0 14.9209 0 10.4996 0 10.4996C0 10.4996 0 6.07839 0.543636 3.95828C0.690631 3.38387 0.980326 2.85963 1.38373 2.43802C1.78713 2.01641 2.29009 1.71222 2.84227 1.55589C4.875 0.988281 13 0.988281 13 0.988281C13 0.988281 21.125 0.988281 23.1577 1.55589C23.7099 1.71222 24.2129 2.01641 24.6163 2.43802ZM17.1364 10.4997L10.3409 6.48502V14.5144L17.1364 10.4997Z" fill="white"/>
            </svg>
          </nuxt-link>
        </div>
        <div class="footer-content-icon-in">
          <nuxt-link to="https://www.youtube.com/channel/UCKYINBITo-8P37-SQDRSr_g" target="_blank">
            <svg t="1690539888492" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="811" width="200" height="200"><path d="M996.152 56.513c-7.986-10.852-17.61-20.885-28.871-28.87C944.143 10.442 916.09 0 885.377 0H138.419c-30.715 0-59.176 10.443-82.314 27.642-10.852 7.986-20.885 17.61-28.87 28.87C10.444 79.448 0.001 107.703 0.001 138.623V885.58c0 30.715 10.442 59.176 27.641 81.905 7.986 10.852 17.61 20.885 28.871 28.87 23.138 17.2 51.19 27.643 81.904 27.643h746.959c30.714 0 59.175-10.443 81.904-27.642 10.852-7.986 20.885-17.61 28.87-28.87 17.2-23.139 27.643-51.19 27.643-81.905V138.622c0-30.92-10.852-59.175-27.642-82.11z m-629.633 410.54c16.38-36.241 34.81-71.87 52.213-107.497h59.995c-14.743 29.28-31.124 57.947-41.566 85.794 24.366-1.433 46.48-2.662 72.484-4.095-13.923 27.847-26.209 52.623-38.494 77.398-1.639 3.276-3.277 6.757-4.915 10.033-12.9 25.8-12.9 26.004 15.767 26.62 3.071 0 5.938 0.41 11.466 1.022-7.985 15.767-15.152 30.1-22.728 44.228-1.229 2.253-4.71 4.915-6.962 4.915-21.09 0-42.385 0.614-63.475-1.639-15.152-1.638-21.09-13.309-15.152-27.642 7.166-17.814 15.766-35.219 23.752-52.828 2.662-6.143 5.528-12.08 9.42-21.09-11.673 0-20.272 0.206-28.872 0-24.776-1.023-33.17-12.285-22.933-35.218zM76.171 658.299c-12.695-22.114-24.16-42.59-35.832-63.065 0-2.458 22.933-72.485 17.814-151.726h63.065s2.253 148.45-45.047 214.791z m147.222-7.985c0.614 37.061-24.98 37.061-24.98 37.061H162.17l-38.085-50.37h39.928v-277.45h59.994c0 90.915-0.204 199.846-0.614 290.76z m87.227 4.71c-28.666-25.186-44.227-100.333-43.818-211.925h59.175c-4.504 58.765 14.538 137.187 14.538 137.187s-17.404 38.495-29.895 74.737z m129.817 26.004c-1.638 3.071-6.757 5.938-10.443 6.142-27.847 0.41-55.9 0.205-87.842 0.205 12.081-24.16 22.114-43.818 30.92-61.018h95.621c-10.647 20.885-19.042 38.085-28.256 54.67z m244.481 6.552h-215.2c10.442-20.68 29.075-57.537 29.075-57.537h61.428V441.87h-38.29v-58.766h138.622v57.947h-37.88v189.196h62.245v57.333z m284.615-43.409c0 43.409-42.385 42.18-42.385 42.18h-55.285l-23.138-49.756 59.995 0.205s0.614-45.047 0-60.609c-0.41-13.105-7.576-21.5-20.886-21.704-26.618-0.615-53.442-0.205-82.722-0.205v132.274h-59.38V555.1h-59.995v-61.222h58.356v-51.804h-38.7v-57.947h39.315v-24.571h59.994l0.41 24.57h47.708s44.024-1.023 44.228 41.77c0.205 12.697 0.41 54.263 0.41 68.187 50.575-0.205 72.075 10.033 72.075 45.25V644.17z m-25.39-200.46H912.2v-30.507c0-11.057 5.528-21.295 14.947-27.233 10.647-6.757 25.39-11.057 39.314 2.252 0.614 0.41 1.024 1.024 1.433 1.638 19.247 20.27 4.095 53.852-23.752 53.852z" fill="#ffffff" p-id="812"></path><path d="M805.521 493.878h39.723v-52.01h-40.132z" fill="#ffffff" p-id="813"></path></svg>
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="toTop" @click="toPageTop">
      <div class="arrowTop" :style="{display: toTopType?'none':'block'}"></div>
      <img class="ya" :style="{top:toTopType?'40%':'50%'}" src="https://static.cmereye.com/imgs/2023/07/892481994eb017a0.png" alt="">
      <div class="toTopline">
        <span :style="{height: toTopType?'10px':'0px'}"></span>
        <span :style="{height: toTopType?'20px':'0px'}"></span>
        <span :style="{height: toTopType?'15px':'0px'}"></span>
      </div>
      <img class="pageTop" src="https://static.cmereye.com/imgs/2023/07/ad1a9b08f00ef155.png" alt="">
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footerPage{
  position: relative;
  &-bgTop{
    background: url(https://static.cmereye.com/imgs/2023/07/12b3f8a89e2db3a4.png);
    background-size: auto 100%;
    height: 60px;
    width: 100%;
    // transform: rotate(180deg);
  }
  .toTop{
    position: absolute;
    bottom: 30px;
    right: 30px;
    width: 100px;
    height: 100px;
    cursor: pointer;
    .arrowTop{
      position: absolute;
      top: 18px;
      left: 50%;
      width: 8px;
      height: 8px;
      border: 2px solid #fff;
      border-right: none;
      border-bottom: none;
      transform: translateX(-50%) rotate(45deg);
      transform-origin: center center;
      transition: all .7s;
    }
    .ya{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      transition: all .7s;
    }
    .toTopline{
      position: absolute;
      top: 65%;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      justify-content: space-between;
      width: 15px;
      span{
        width: 3px;
        height: 0;
        background: #fff;
        transition: all .7s;
        display: block;
      }
    }
    .pageTop{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      animation: toTopRoto 5s linear infinite;
    }
  }
}
@keyframes toTopRoto {
  0%{
    transform: rotate(0);
  }
  100%{
    transform: rotate(360deg);
  }
}
.footer-content {
  background: #FF6096;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  font-weight: 700;
  width: 100%;
  padding: 20px 0 120px;
  box-sizing: border-box;
  margin-top: -3px;
  &-nav {
    display: flex;
    justify-content: space-around;
    width: 100%;
    max-width: 1000px;
    margin-top: 75px;
    .nav-list{
      &-in{
        margin-bottom: 15px;
        &-name{
          color: #FFF;
          font-family: 'cwTeXYen';
          font-size: 19px;
          font-style: normal;
          font-weight: 800;
          line-height: 160%; /* 28.8px */
          letter-spacing: 4.5px;
          cursor: pointer;
        }
        .pcChild{
          display: flex;
        }
        .mbChild{
          display: none;
        }
        &-child{
          display: flex;
          &>div{
            &:not(:last-child){
              margin-right: 90px;
            }
            &>div{
              cursor: pointer;
              color: #FFF;
              font-family: 'cwTeXYen';
              font-size: 17px;
              font-style: normal;
              font-weight: 700;
              line-height: 160%; /* 24px */
              letter-spacing: 3.75px;
              margin-top: 11px;
              &::before{
                content: '-';
                margin-right: 10px;
              }
            }
          }
        }
      }
    }
  }
  &-logo_one {
    padding: 25px 0;
    img {
      width: 150px;
    }
  }
  &-text {
    color: #fff;
    font-size: 23px;
    font-weight: 600;
    text-align: center;
    line-height: 160%;
    text-shadow: 0px 0px 4px rgba(255, 120, 117, 0.45);
    white-space: pre-wrap;
  }
  &-icon {
    margin-top: 56px;
    display: flex;
    &-in {
      padding: 0 12.5px;
      display: flex;
      align-items: center;
      cursor: pointer;
      max-width: 50px;
      svg{
        width: 100%;
        height: auto;
      }
      img {
        width: 100%;
      }
      &:last-child{
        svg{
          width: 70%;
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .footerPage{
    .toTop{
      display: none;
      right: 20px;
      bottom: 80px;
      width: 64px;
      height: 64px;
      .arrowTop{
        top: 14px;
        width: 6px;
        height: 6px;
      }
      .ya{
        width: 20px;
      }
      .toTopline{
        width: 10px;
        span{
          width: 2px;
        }
      }
    }
  }
  .footer-content {
    padding: 10px 70px 100px;
    &-logo_one {
      padding: 0;
      img{
        width: 133px;
      }
    }
    &-text {
      margin-top: 20px;
      font-size: 12px;
      letter-spacing: 2.7px;
    }
    &-nav {
      margin-top: 40px;
      flex-direction: column;
      justify-content: flex-start;
      .nav-list{
        &-in{
          margin-bottom: 15px;
          &-name{
            font-size: 13px;
            letter-spacing: 2.822px;
            position: relative;
            &.haveChild{
               &::before{
                content: '';
                font-family: 'swiper-icons';
                color: #fff;
                position: absolute;
                width: 6px;
                height: 6px;
                border: 1px solid #fff;
                border-right: none;
                border-bottom: none;
                top: 50%;
                left: 0;
                transform: translate(-200%,-65%) rotate(135deg);
                transform-origin: center center;
                transition: all .7s;
              }
            }
            &.isOpen{
              &::before{
                transform: translate(-200%,-75%) rotate(225deg);
              }
            }
          }
          .pcChild{
            display: none;
          }
          // .mbChild{
          //   display: flex;
          // }
          &-child{
            display: none;
            &.act{
              display: flex;
              animation: childAnim .3s;
              animation-fill-mode: forwards;
            }
            &>div{
              width: 100%;
              justify-content: space-between;
              &:not(:last-child){
                margin-right: 0;
              }
              &>div{
                font-size: 12px;
                letter-spacing: 2.5px;
                margin-top: 8px;
              }
            }
          }
        }
      }
    }
    &-icon {
      margin: 30px 0 0;
      &-in {
        padding: 0 7px;
        &:nth-of-type(2){
          padding: 0 5px 0 0;
        }
      }
    }
  }
}
@keyframes childAnim {
  0%{
    opacity: 0;
    transform: translateY(-50px);
    // display: none;
  }
  100%{
    opacity: 1;
    // display: flex;
    transform: translateY(0);
  }
}
</style>
