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
      name: 'components.footer.nav_medical_team',
      link: `/medical-team`,
      child: []
    },
    {
      name: 'components.footer.nav_contactUs',
      link: '/contactUs',
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


</script>

<template>
  <footer class="footerPage">
    <div class="footerPage-bgTop"></div>
    <div class="footer-content">
      <div class="footer-content-logo_one">
        <nuxt-link :to="'/'">
          <img src="@/assets/images/logo_2.png" alt="" />
        </nuxt-link>
      </div>
      <div class="footer-content-text">
        {{$t('components.footer.text1')}} {{'\n'}}{{$t('components.footer.text2')}}
      </div>
      <div class="footer-content-nav">
        <div class="nav-list" v-for="(navItem, navIndex) in navLists" :key="navIndex">
          <!-- <nuxt-link :to="navItem.link">
            {{ $t(navItem.name) }}
          </nuxt-link> -->
          <div class="nav-list-in" v-for="(menuItem,menuIndex) in navItem" :key="menuIndex">
            <div class="nav-list-in-name">
              {{$t(menuItem.name)}}
            </div>
            <div class="nav-list-in-child">
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
            <img src="@/assets/images/icon_3.png" />
          </nuxt-link>
        </div>
        <div class="footer-content-icon-in">
          <nuxt-link to="https://www.youtube.com/channel/UCKYINBITo-8P37-SQDRSr_g" target="_blank">
            <img src="@/assets/images/xiaohonshu.png" />
          </nuxt-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footerPage{
  
  &-bgTop{
    background: url(https://static.cmereye.com/imgs/2023/07/12b3f8a89e2db3a4.png);
    background-size: auto 100%;
    height: 60px;
    width: 100%;
    // transform: rotate(180deg);
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
          font-family: 'Yuanti TC';
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: 160%; /* 28.8px */
          letter-spacing: 4.5px;
          cursor: pointer;
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
              font-family: 'Yuanti TC';
              font-size: 15px;
              font-style: normal;
              font-weight: 400;
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
    & > img {
      width: 150px;
    }
  }
  &-text {
    color: #fff;
    font-size: 22px;
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
      img {
        width: 100%;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .footer-content {
    padding: 50px 30px 170px;
    &-nav {
      flex-direction: column;
      text-align: center;
      font-size: 18px;
    }
    &-text {
      margin-top: 20px;
    }
    &-icon {
      margin: 30px 0;
    }
  }
}
</style>
