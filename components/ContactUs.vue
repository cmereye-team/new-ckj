<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
import { Autoplay,Navigation } from 'swiper';
const appState = useAppState()
const mapConShow = ref(true)


onMounted(()=>{
  getWindowResize()
  window.addEventListener('resize',getWindowResize)
})

const getWindowResize = () => {
  if(window.innerWidth > 768)
    mapConShow.value = true
  else
    mapConShow.value = false
  // console.log(mapConShow)
}

let currentAddress = ref('0')

const allAddressLists = [
  // 罗湖区
  [
    {
      id: '102',
      name: 'contactUs.addressLists.address_102.name',
      address: 'contactUs.addressLists.address_102.address',
      time: 'contactUs.addressLists.address_102.time',
      phone: '+852 69122011',
      busRoutes: 'contactUs.addressLists.address_102.busRoutes',
      metroRoutes: 'contactUs.addressLists.address_102.metroRoutes',
      addressUrl: 'https://static.cmereye.com/imgs/2023/07/f3f2f73ce1582235.jpg',
      googleMap: 'https://goo.gl/maps/HQsN5jNMTeZNbxuf7?coh=178572&entry=tt',
      baiduMap: 'https://j.map.baidu.com/a5/GtH',
      color_1: '#FECB02',
      color_3: '#089CFE',
      right: '37%',
      bottom: '58%'
    },
    {
      id: '103',
      name: 'contactUs.addressLists.address_103.name',
      address: 'contactUs.addressLists.address_103.address',
      time: 'contactUs.addressLists.address_103.time',
      phone: '+852 69122011',
      busRoutes: 'contactUs.addressLists.address_103.busRoutes',
      metroRoutes: 'contactUs.addressLists.address_103.metroRoutes',
      addressUrl: 'https://static.cmereye.com/imgs/2023/07/fd4e197874107cf6.jpg',
      googleMap: 'https://goo.gl/maps/JMK7Huhaf9k88nbf8?coh=178572&entry=tt',
      baiduMap: 'https://j.map.baidu.com/24/Rxk',
      color_1: '#089CFE',
      color_3: '#FECB02',
      right: '59%',
      bottom: '23%'
    },
    {
      id: '101',
      name: 'contactUs.addressLists.address_101.name',
      address: 'contactUs.addressLists.address_101.address',
      time: 'contactUs.addressLists.address_101.time',
      phone: '+852 69122011',
      busRoutes: 'contactUs.addressLists.address_101.busRoutes',
      metroRoutes: 'contactUs.addressLists.address_101.metroRoutes',
      addressUrl: 'https://static.cmereye.com/imgs/2023/07/c139bb6c9b8127ac.jpg',
      googleMap: 'https://goo.gl/maps/yuWB8353yF3u4EJS6?coh=178572&entry=tt',
      baiduMap: 'https://j.map.baidu.com/b3/j3Yu',
      color_1: '#FECB02',
      color_3: '#FF6096',
      right: '48%',
      bottom: '45%'
    },
    {
      id: '104',
      name: 'contactUs.addressLists.address_104.name',
      address: 'contactUs.addressLists.address_104.address',
      time: 'contactUs.addressLists.address_104.time',
      phone: '+852 69122011',
      busRoutes: 'contactUs.addressLists.address_104.busRoutes',
      metroRoutes: 'contactUs.addressLists.address_104.metroRoutes',
      addressUrl: 'https://static.cmereye.com/imgs/2023/07/6e9e6397eabb7da0.jpg',
      googleMap: 'https://goo.gl/maps/nSmd9ZL66E4Yizp67?coh=178572&entry=tt',
      baiduMap: 'https://j.map.baidu.com/a9/Xgch',
      color_1: '#FECB02',
      color_3: '#FF6096',
      right: '59%',
      bottom: '54%'
    },
    {
      id: '105',
      name: 'contactUs.addressLists.address_105.name',
      address: 'contactUs.addressLists.address_105.address',
      time: 'contactUs.addressLists.address_105.time',
      phone: '+852 69122011',
      busRoutes: 'contactUs.addressLists.address_105.busRoutes',
      metroRoutes: 'contactUs.addressLists.address_105.metroRoutes',
      addressUrl: 'https://static.cmereye.com/imgs/2023/07/acd7d51a3762a6ed.jpg',
      googleMap: 'https://goo.gl/maps/HefFWPuSqmdHbyBo9?coh=178572&entry=tt',
      baiduMap: 'https://j.map.baidu.com/d3/Awch',
      color_1: '#FECB02',
      color_3: '#FF6096',
      right: '33%',
      bottom: '19%'
    }
  ],
  // 福田區
  [
    {
      id: '201',
      name: 'contactUs.addressLists.address_201.name',
      address: 'contactUs.addressLists.address_201.address',
      time: 'contactUs.addressLists.address_201.time',
      phone: '+852 69122011',
      busRoutes: 'contactUs.addressLists.address_201.busRoutes',
      metroRoutes: 'contactUs.addressLists.address_201.metroRoutes',
      addressUrl: 'https://static.cmereye.com/imgs/2023/07/89d386b92b090a74.jpg',
      googleMap: 'https://goo.gl/maps/evH9Z41S1o4fH3HR6?coh=178572&entry=tt',
      baiduMap: 'https://j.map.baidu.com/ea/Yhh',
      color_1: '#FECB02',
      color_3: '#FF6096',
      right: '45%',
      bottom: '42%'
    },
    {
      id: '202',
      name: 'contactUs.addressLists.address_202.name',
      address: 'contactUs.addressLists.address_202.address',
      time: 'contactUs.addressLists.address_202.time',
      phone: '+852 69122011',
      busRoutes: 'contactUs.addressLists.address_202.busRoutes',
      metroRoutes: 'contactUs.addressLists.address_202.metroRoutes',
      addressUrl: 'https://static.cmereye.com/imgs/2023/07/25ae2044bd153dc5.jpg',
      googleMap: 'https://goo.gl/maps/mQgJXrTxvaaLB9Y1A?coh=178572&entry=tt',
      baiduMap: 'https://j.map.baidu.com/1f/kY0',
      color_1: '#FECB02',
      color_3: '#FF6096',
      right: '42%',
      bottom: '60%'
    },
  ],
  // 南山区
  [
    {
      id: '301',
      name: 'contactUs.addressLists.address_301.name',
      address: 'contactUs.addressLists.address_301.address',
      time: 'contactUs.addressLists.address_301.time',
      phone: '+852 69122011',
      busRoutes: 'contactUs.addressLists.address_301.busRoutes',
      metroRoutes: 'contactUs.addressLists.address_301.metroRoutes',
      addressUrl: 'https://static.cmereye.com/imgs/2023/07/2917eb1064f4fbca.jpg',
      googleMap: 'https://goo.gl/maps/nK2iuEusGFcbqE216?coh=178572&entry=tt',
      baiduMap: 'https://j.map.baidu.com/2e/Pmif',
      color_1: '#FECB02',
      color_3: '#FF6096',
      right: '58%',
      bottom: '7%'
    },
    {
      id: '302',
      name: 'contactUs.addressLists.address_302.name',
      address: 'contactUs.addressLists.address_302.address',
      time: 'contactUs.addressLists.address_302.time',
      phone: '+852 69122011',
      busRoutes: 'contactUs.addressLists.address_302.busRoutes',
      metroRoutes: 'contactUs.addressLists.address_302.metroRoutes',
      addressUrl: 'https://static.cmereye.com/imgs/2023/07/7eef5d6012b716e8.jpg',
      googleMap: 'https://goo.gl/maps/WkeuvYNKWeLNhSzE7?coh=178572&entry=tt',
      baiduMap: 'https://j.map.baidu.com/36/4FH',
      color_1: '#FECB02',
      color_3: '#FF6096',
      right: '58%',
      bottom: '71%'
    },
    {
      id: '303',
      name: 'contactUs.addressLists.address_303.name',
      address: 'contactUs.addressLists.address_303.address',
      time: 'contactUs.addressLists.address_303.time',
      phone: '+852 69122011',
      busRoutes: 'contactUs.addressLists.address_303.busRoutes',
      metroRoutes: 'contactUs.addressLists.address_303.metroRoutes',
      addressUrl: 'https://static.cmereye.com/imgs/2023/07/2f865de7ca6054d1.jpg',
      googleMap: 'https://goo.gl/maps/ud217ArM8ZGDJ8DJ8?coh=178572&entry=tt',
      baiduMap: 'https://j.map.baidu.com/b8/Mzj',
      color_1: '#FECB02',
      color_3: '#FF6096',
      right: '62%',
      bottom: '63%'
    },
  ],
  // 寶安區
  [
    {
      id: '401',
      name: 'contactUs.addressLists.address_401.name',
      address: 'contactUs.addressLists.address_401.address',
      time: 'contactUs.addressLists.address_401.time',
      phone: '+852 69122011',
      busRoutes: 'contactUs.addressLists.address_401.busRoutes',
      metroRoutes: 'contactUs.addressLists.address_401.metroRoutes',
      addressUrl: 'https://static.cmereye.com/imgs/2023/07/19ba1e430f8a2246.jpg',
      googleMap: 'https://goo.gl/maps/ntfTf49VNaY9D9VL6?coh=178572&entry=tt',
      baiduMap: 'https://j.map.baidu.com/89/2LD',
      color_1: '#FECB02',
      color_3: '#FF6096',
      right: '62%',
      bottom: '25%'
    },
  ],
  // 龍華區
  [
    {
      id: '501',
      name: 'contactUs.addressLists.address_501.name',
      address: 'contactUs.addressLists.address_501.address',
      time: 'contactUs.addressLists.address_501.time',
      phone: '+852 69122011',
      busRoutes: 'contactUs.addressLists.address_501.busRoutes',
      metroRoutes: 'contactUs.addressLists.address_501.metroRoutes',
      addressUrl: 'https://static.cmereye.com/imgs/2023/07/5618a96fe08038ec.jpg',
      googleMap: 'https://goo.gl/maps/jtcrLmft7h8s3xfX6?coh=178572&entry=tt',
      baiduMap: 'https://j.map.baidu.com/3a/nbch',
      color_1: '#FECB02',
      color_3: '#FF6096',
      right: '27%',
      bottom: '38%'
    },
    {
      id: '502',
      name: 'contactUs.addressLists.address_502.name',
      address: 'contactUs.addressLists.address_502.address',
      time: 'contactUs.addressLists.address_502.time',
      phone: '+852 69122011',
      busRoutes: 'contactUs.addressLists.address_502.busRoutes',
      metroRoutes: 'contactUs.addressLists.address_502.metroRoutes',
      addressUrl: 'https://static.cmereye.com/imgs/2023/07/4b2ac57ebf8c0f11.jpg',
      googleMap: 'https://goo.gl/maps/VKT1orRbiS8mAiN39?coh=178572&entry=tt門診門',
      baiduMap: 'https://j.map.baidu.com/c5/AZ4c',
      color_1: '#FECB02',
      color_3: '#FF6096',
      right: '18%',
      bottom: '17%'
    },
  ]
]

// --------------------------------------------------
let contactUsSwiperRef ={
  slideTo: (a,b)=>{}
}
//轮播图setRef事件
const setContactUsSwiperRef = (swiper:any) => {
  contactUsSwiperRef = swiper;
};

const onSlideContactUsSwiperChange = (swiper:any) => {
  // console.log('Change',swiper.realIndex)
  currentAddress.value = swiper.realIndex
}
// --------------------------------------------------

const handleAddress = (_idx: string) => {
  // if(currentAddress.value === _idx){
  //   currentAddress.value = '0'
  //   return
  // }
  currentAddress.value = _idx
}
const closeAddress = () => {
  currentAddress.value = '0'
}

const dateLists=[
  {
    name: 'MON',
    key: '1'
  },
  {
    name: 'TUE',
    key: '2'
  },
  {
    name: 'WED',
    key: '3'
  },
  {
    name: 'THU',
    key: '4'
  },
  {
    name: 'FRI',
    key: '5'
  },
  {
    name: 'SAT',
    key: '6'
  },
  {
    name: 'SUN',
    key: '7'
  },
  {
    name: 'HOLIDAY',
    key: '8'
  }
]

const getColor = (_idx?: number) => {
  let _color = '#FF6096'
  if(_idx === 0){
    _color = '#089CFE'
  }else if(_idx === 1){
    _color = '#FECB02'
  }
  return _color
}

let addressCurrent = ref(1)

const handleLineCur = (_value:number) =>{
  // console.log(_value)
  addressSwiperRef.slideToLoop(_value-1)
}

let addressSwiperRef = {
  slideToLoop: (a)=>{}
}
const setAddressSwiperRef = (swiper:any) => {
  addressSwiperRef = swiper;
}

const onSlideChange = (swiper:any) => {
  addressCurrent.value = swiper.realIndex + 1
}
</script>


<template>
  <div class="index-contactUs">
      <!-- <div class="index_title">聯絡我們</div> -->
      <div class="index-contactUs-t pageCon">
        <div class="title">
          <div>
            {{$t('contactUs.title')}}
          </div>
        </div>
        <div class="date">
          <div class="date-lists">
            <div>
              <div>營業時間</div>
              <div>9:00-18:00</div>
            </div>
            <div v-for="dateItem in dateLists" :key="dateItem.key">
              <div>{{dateItem.name}}</div>
              <div>·</div>
            </div>
          </div>
          <div class="date-masker">
            <span class="spanColor">恆潔口腔門診部（羅湖）</span>
            <span>營運至17:30；</span>
            <span class="spanColor">康輝口腔門診部（羅湖）</span>
            <span>營運至20:30</span>
          </div>
        </div>
        <div class="area">
          <AreaTab />
        </div>
      </div>
      <div class="address">
        <div :class="{'address-in':true,'isA': addressItem.id === '102','isB': addressItem.id === '103',isOne: allAddressLists[appState.areaTabAct].length===1}" v-for="(addressItem,addressIndex) in allAddressLists[appState.areaTabAct]" :key="addressIndex">
          <div class="addressBox">
            <div class="addressBox-t">
              <div class="addressImg">
                <img class="addressImg-in" :src="addressItem.addressUrl" alt="">
                <div class="addressIcon" :style="{right: addressItem.right,bottom: addressItem.bottom}">
                  <a :href="addressItem.baiduMap" target="_blank">
                    <SvgAddressHouse :color_1="addressItem.color_1" :color_3="addressItem.color_3" />
                  </a>
                </div>
              </div>
            </div>
            <div class="addressBox-b">
              <div>
                <div class="addressBox-b-address">
                  <div>{{$t('contactUs.hospital_address')}}</div>
                  <div>{{$t(addressItem.address)}}</div>
                </div>
                <div class="addressBox-b-phone">
                  <div>{{$t('contactUs.check_the_phone')}}</div>
                  <div>{{addressItem.phone}}</div>
                </div>
              </div>
            </div>
            <div class="addressBox-c">{{$t(addressItem.name)}}</div>
            <div :class="['addressBox-bus',{'cur': currentAddress === addressItem.id}]" :style="{background: currentAddress === addressItem.id?'#fff':'transparent',
              width: currentAddress === addressItem.id?'150%':'69px',
              height: currentAddress === addressItem.id?'100%':'69px',
              left: currentAddress === addressItem.id?'50%':'20px',
              transform: currentAddress === addressItem.id?'translate(-50%,-50%)':'none',
              top: currentAddress === addressItem.id?'50%':(addressIndex>1?'246px':'446px'),
              'border-radius': currentAddress === addressItem.id?'0':'50%',
            }">
              <div class="bus-image" @click="handleAddress(addressItem.id)">
                <img src="https://static.cmereye.com/imgs/2023/07/075ccbc4b3a80af6.png" alt="" >
              </div>
              <div class="bus-in" :style="{
                  opacity: currentAddress === addressItem.id?'1':'0',
                  width: currentAddress === addressItem.id?'500px':'0',
                  height: currentAddress === addressItem.id?'700px':'0',
                  padding: currentAddress === addressItem.id?'0 70px':'0',
                }">
                <div class="bus-in-btn" @click="closeAddress">
                  <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                    <path d="M31.2188 2.14209L2.12404 31.2368" :stroke="getColor(addressIndex)" stroke-width="3" stroke-linecap="round"/>
                    <path d="M2.12305 2.14209L31.2178 31.2368" :stroke="getColor(addressIndex)" stroke-width="3" stroke-linecap="round"/>
                  </svg>
                </div>
                <div class="bus-in-name">{{$t(addressItem.name)}}</div>
                <div class="bus-in-title">{{$t('contactUs.traffic_route')}}</div>
                <div class="bus-in-content">
                  <div><SvgBus :color="getColor(addressIndex)" /></div>
                  <div>
                    <p>{{$t('contactUs.bus_route')}}</p>
                    <p>{{$t(addressItem.busRoutes)}}</p>
                  </div>
                </div>
                <div class="bus-in-railway">
                  <div><SvgRailway :color="getColor(addressIndex)" /></div>
                  <div>
                    <p>{{$t('contactUs.metro_lines')}}</p>
                    <p>{{$t(addressItem.metroRoutes)}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="address-in-leftBox" v-if="addressItem.id === '102'">
            <div>
              <p>{{$t(addressItem.name)}}</p>
              <p>營運至17:30</p>
            </div>
            <img src="https://static.cmereye.com/imgs/2023/07/3a40fcfc57e3b381.png" alt="">
          </div>
          <div class="address-in-rightBox" v-if="addressItem.id === '103'">
            <div>
              <p>{{$t(addressItem.name)}}</p>
              <p>營運至20:30</p>
            </div>
            <img src="https://static.cmereye.com/imgs/2023/07/96e33002c7340b68.png" alt="">
          </div>
        </div>
      </div>
      <div class="address-swiper">
        <swiper
          class="swiperBox"
          :loop="true"
          :navigation="true"
          :modules="[Navigation]"
          @swiper="setAddressSwiperRef"
          @slideChange="onSlideChange"
        >
          <swiper-slide class="addressSlide" v-for="(addressItem,addressIndex) in allAddressLists[appState.areaTabAct]" :key="addressIndex">
            <div :class="{'addressBox': true,'isA': addressItem.id === '102','isB': addressItem.id === '103'}">
              <div class="addressBox-t">
                <div class="addressImg">
                  <img class="addressImg-in" :src="addressItem.addressUrl" alt="">
                  <div class="addressIcon" :style="{right: addressItem.right,bottom: addressItem.bottom}">
                    <a :href="addressItem.baiduMap" target="_blank">
                      <SvgAddressHouse :color_1="addressItem.color_1" :color_3="addressItem.color_3" />
                    </a>
                  </div>
                </div>
              </div>
              <div class="addressBox-b">
                <div>
                  <div class="addressBox-b-address">
                    <div>{{$t('contactUs.hospital_address')}}</div>
                    <div>{{$t(addressItem.address)}}</div>
                  </div>
                  <div class="addressBox-b-phone">
                    <div>{{$t('contactUs.check_the_phone')}}</div>
                    <div>{{addressItem.phone}}</div>
                  </div>
                </div>
              </div>
              <div class="addressBox-c">{{$t(addressItem.name)}}</div>
              <div :class="['addressBox-bus',{'cur': currentAddress === addressItem.id,'bbb':currentAddress !== addressItem.id}]">
                <div class="bus-image" @click="handleAddress(addressItem.id)">
                  <img src="https://static.cmereye.com/imgs/2023/07/075ccbc4b3a80af6.png" alt="" >
                </div>
                <div :class="['bus-in',{'ccur':currentAddress === addressItem.id}]" :style="{
                }">
                <div class="bus-in-btn" @click="closeAddress">
                  <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                    <path d="M31.2188 2.14209L2.12404 31.2368" :stroke="getColor(addressIndex)" stroke-width="3" stroke-linecap="round"/>
                    <path d="M2.12305 2.14209L31.2178 31.2368" :stroke="getColor(addressIndex)" stroke-width="3" stroke-linecap="round"/>
                  </svg>
                </div>
                <div class="bus-in-name">{{$t(addressItem.name)}}</div>
                <div class="bus-in-title">{{$t('contactUs.traffic_route')}}</div>
                <div class="bus-in-content">
                  <div><SvgBus :color="getColor(addressIndex)" /></div>
                  <div>
                    <p>{{$t('contactUs.bus_route')}}</p>
                    <p>{{$t(addressItem.busRoutes)}}</p>
                  </div>
                </div>
                <div class="bus-in-railway">
                  <div><SvgRailway :color="getColor(addressIndex)" /></div>
                  <div>
                    <p>{{$t('contactUs.metro_lines')}}</p>
                    <p>{{$t(addressItem.metroRoutes)}}</p>
                  </div>
                </div>
                </div>
              </div>
            </div>
            <div class="address-swiper-leftBox" v-if="addressItem.id === '102'">
              <div>
                <p>營運至17:30</p>
              </div>
              <img src="https://static.cmereye.com/imgs/2023/07/3a40fcfc57e3b381.png" alt="">
            </div>
            <div class="address-swiper-leftBox leftBox103" v-if="addressItem.id === '103'">
              <div>
                <p>營運至20:30</p>
              </div>
              <img src="https://static.cmereye.com/imgs/2023/07/8bb7db9834831faa.png" alt="">
            </div>
          </swiper-slide>
        </Swiper>
        
        <div class="address-swiper-line">
          <PageSwiperPointLine :latestNewsNum="allAddressLists[appState.areaTabAct].length" :latestNewsCurrent="addressCurrent" @changeLineCur="handleLineCur"></PageSwiperPointLine>
        </div>
      </div>
      <!-- <div class="address">
        <div class="address-in" v-for="(addressItem,addressIndex) in allAddressLists[appState.areaTabAct]" :key="addressIndex">
          <h3>{{$t(addressItem.name)}}</h3>
          <div class="content">
            <span>{{$t('contactUs.hospital_address')}}：{{$t(addressItem.address)}}</span>
            <span>{{$t('contactUs.hours_of_Operation')}}：{{$t(addressItem.time)}}</span>
            <span>{{$t('contactUs.check_the_phone')}}：{{addressItem.phone}}</span>
          </div>
          <span class="showIcon" @click="handleAddress(addressItem.id)">{{$t('contactUs.traffic_route')}}:</span>
          <div class="route" v-show="currentAddress === addressItem.id ">
            <span>{{$t('contactUs.bus_route')}}</span>
            <span>{{$t(addressItem.busRoutes)}}</span>
            <span>{{$t('contactUs.metro_lines')}}</span>
            <span>{{$t(addressItem.metroRoutes)}}</span>
          </div>
          <div class="mapBtn">
            <a :href="addressItem.baiduMap" target="_blank">
              <div class="mapBtn-in">{{$t('contactUs.baidu_map')}}</div>
            </a>
          </div>
        </div>
      </div> -->
    </div>
</template>

<style lang="scss" scoped>

.index-contactUs{
  padding: 140px 0 0;
  max-width: 1650px; 
  margin: 0 auto;
  position: relative;
  // overflow: hidden;
  &-t{
    .title{
      text-align: center;
      &>div{
        color: #6B6B6B;
        font-family: 'cwTeXYen';
        font-size: 31.766px;
        font-style: normal;
        font-weight: 600;
        line-height: 160%; /* 50.826px */
        letter-spacing: 7.942px;
        padding-bottom: 20px;
        position: relative;
        &::after{
          content: '';
          background: var(--topic-color);
          height: 5px;
          width: 40px;
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          border-radius: 3px;
        }
      }
      
    }
    .date{
      width: 100%;
      max-width: 900px;
      margin: 123px auto 0;
      &-lists{
        display: flex;
        justify-content: center;
        &>div{
          width: 100%;
          &>div{
            border-bottom: 2px solid #F5F4F4;
            line-height: 54px;
            height: 54px;
            font-style: normal;
            font-weight: 600;
            font-family: 'cwTeXYen';
            color: var(--topic-text-color);
            text-align: center;
            font-size: 17px;
            &:first-child{
              letter-spacing: 4.25px;
            }
            &:last-child{
              letter-spacing: 1.7px;
            }
          }
          &:first-child{
            min-width: 130px;
            &>div{
              &:first-child{
                &::after{
                  content: '#';
                  color: var(--topic-color);
                  font-family: 'cwTeXYen';
                  font-size: 17px;
                  font-style: normal;
                  font-weight: 600;
                  line-height: 180%; /* 30.6px */
                  letter-spacing: 1.7px;
                  margin-top: -18px;
                  vertical-align: middle;
                  display: inline-block;
                }
              }
            }
          }
          &:not(:first-child){
            &>div{
              &:first-child{
                font-family: '.SF NS Rounded';
                font-weight: 700;
                letter-spacing: 2.04px;
              }
              &:last-child{
                font-size: 50px;
                line-height: 55px;
                color: var(--topic-color);
              }
            }
          }
        }
      }
      &-masker{
        margin-top: 24px;
        &::before{
          content: '#';
          font-family: 'cwTeXYen';
          font-size: 20.564px;
          font-style: normal;
          font-weight: 600;
          line-height: 180%; /* 37.015px */
          letter-spacing: 2.056px;
          margin-top: -18px;
          vertical-align: middle;
          display: inline-block;
          color: var(--topic-color);
        }
        span{
          color: var(--topic-text-color);
          font-family: 'cwTeXYen';
          font-size: 20.564px;
          font-style: normal;
          font-weight: 600;
          line-height: 180%;
          letter-spacing: 2.056px;
          &.spanColor{
            color: var(--topic-color);
          }
        }
      }
    }
    .area{
      margin-top: 62px;
      display: flex;
      justify-content: flex-end;
    }
  }
  //这里一开始时间着急设计可能有些问题(没时间设计)，所以颜色设计写的复杂了，加油看
  .address{
    display: flex;
    flex-wrap: wrap;
    margin-top: 60px;
    justify-content: center;
    &-in{
      width: 33.33%;
      min-width: 516px;
      margin-bottom: 45px;
      display: flex;
      justify-content: center;
      position: relative;
      &.isA{
        .addressBox{
          border: 3px solid #089CFE;
          &-t{
            background: #089CFE;
          }
          &-b{
            &>div{
              &>div{
                &>div{
                  color: #089CFE;
                }
              }
            }
          }
          &-c{
            border: 3px solid #089CFE;
            color: #089CFE;
          }
          &-bus{
            .bus-in{
              color: #089CFE;
              &-btn{
                border: 3px solid #089CFE;
              }
            }
          }
        }
      }
      &.isB{
        .addressBox{
          border: 3px solid #FECB02;
          &-t{
            background: #FECB02;
          }
          &-b{
            &>div{
              &>div{
                &>div{
                  color: #FECB02;
                }
              }
            }
          }
          &-c{
            border: 3px solid #FECB02;
            color: #FECB02;
          }
          &-bus{
            .bus-in{
              color: #FECB02;
              &-btn{
                border: 3px solid #FECB02;
              }
            }
          }
        }
      }
      &:nth-of-type(1){
        width: 50%;
        padding-right: 23px;
        justify-content: flex-end;
        margin-bottom: 45px;
        &.isOne{
          justify-content:center;
        }
        .addressBox{
          display: flex;
          flex-direction: column;
          // border: 3px solid #089CFE;
          border-radius: 250px 250px 0 0;
          &-t{
            border-radius: 250px 250px 0 0;
            // background: #089CFE;
            padding-bottom: 85px;
            padding-top: 30px;
          }
          &-b{
            padding: 20px 30px 0;
            &>div{
              &>div{
                &>div{
                  // color: #089CFE;
                }
              }
            }
          }
          &-c{
            // border: 3px solid #089CFE;
            // color: #089CFE;
            top: auto;
            bottom: 168px;
          }
          &-bus{
            top: 446px;
            .bus-in{
              // color: #089CFE;
              &-btn{
                // border: 3px solid #089CFE;
                order: 0;
                margin: 0 auto 40px;
              }
            }
          }
        }
      }
      &:nth-of-type(2){
        width: 50%;
        justify-content: flex-start;
        margin-bottom: 45px;
        padding-left: 23px;
        .addressBox{
          // border: 3px solid #FECB02;
          display: flex;
          flex-direction: column;
          border-radius: 250px 250px 0 0;
          &-t{
            border-radius: 250px 250px 0 0;
            // background: #FECB02;
            padding-bottom: 85px;
            padding-top: 30px;
          }
          &-b{
            padding: 20px 30px 0;
            &>div{
              &>div{
                &>div{
                  // color: #FECB02;
                }
              }
            }
          }
          &-c{
            // border: 3px solid #FECB02;
            // color: #FECB02;
            top: auto;
            bottom: 168px;
          }
          &-bus{
            top: 446px;
            .bus-in{
              // color: #FECB02;
              order: 0;
              &-btn{
                // border: 3px solid #FECB02;
                order: 0;
                margin: 0 auto 40px;
              }
            }
          }
        }
      }
      .addressBox{
        width: 500px;
        box-sizing: border-box;
        position: relative;
        overflow: hidden;
        display: flex;
        flex-direction: column-reverse;
        border: 3px solid #FF6096;
        border-radius: 0 0 250px 250px;
        &-t{
          padding-top: 85px;
          border-radius: 0 0 250px 250px;
          padding-bottom: 30px;
          background: #FF6096;
          position: relative;
          .addressImg{
            width: 440px;
            height: 440px;
            margin: auto;
            border-radius: 50%;
            cursor: pointer;
            transition: all .3s;
            position: relative;
            overflow: hidden;
            &-in{
              width: 100%;
            }
          }
          .addressIcon{
            position: absolute;
            cursor: pointer;
            transition: all .3s;
            // filter: drop-shadow(0 5px 5px rgba(0,0,0,.6));
            &:hover{
              transform: scale(1.1);
              // transform: scale(1.1) translateY(-10px);
              // filter: drop-shadow(0 7px 5px rgba(0,0,0,.5));
            }
          }
        }
        &-b{
          height: 200px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          padding: 0 30px 20px;
          &>div{
            &>div{
              display: flex;
              &>div{
                color: #FF6096;
                font-family: 'cwTeXYen';
                font-size: 20px;
                font-style: normal;
                font-weight: 400;
                line-height: 180%; /* 30.6px */
                letter-spacing: 1.7px;
                &:first-child{
                  margin-right: 66px;
                  min-width: 90px;
                }
              }
            }
          }
        }
        &-c{
          color: #FF6096;
          border: 3px solid #FF6096;
          text-align: center;
          font-family: 'cwTeXYen';
          font-style: normal;
          position: absolute;
          text-align: center;
          width: 380px;
          height: 64px;
          line-height: 56px;
          font-size: 20.483px;
          font-weight: 400;
          letter-spacing: 5.121px;
          left: 50%;
          transform: translateX(-50%);
          top: 168px;
          border-radius: 32px;
          background: #fff;
        }
        &-bus{
          position: absolute;
          left: 20px;
          top: 246px;
          width: 69px;
          height: 69px;
          border-radius: 50%;
          background: transparent;
          cursor: pointer;
          transition: all 1s;
          transform: none;
          display: flex;
          justify-content: center;
          align-items: center;
          .bus-image{
            width: 100%;
            height: 100%;
            border: 3px solid #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            &>img{
              width: 60%;
            }
          }
          .bus-in{
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            text-align: center;
            color: #FF6096;
            // padding: 0 70px;
            box-sizing: border-box;
            transition: all 2s;
            width: 0;
            height: 0;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            &-btn{
              font-family: '圆幼';
              border-radius: 50%;
              border: 3px solid #FF6096;
              width: 78px;
              height: 78px;
              font-size: 50px;
              // font-weight: bold;
              margin: 40px auto 0;
              text-align: center;
              line-height: 60px;
              display: flex;
              justify-content: center;
              align-items: center;
              order: 5;
            }
            &-name{
              text-align: center;
              font-family: 'cwTeXYen';
              font-size: 17px;
              font-style: normal;
              font-weight: 400;
              line-height: 180%; /* 30.6px */
              letter-spacing: 1.7px;
            }
            &-title{
              font-family: 'cwTeXYen';
              font-size: 17px;
              font-style: normal;
              font-weight: 400;
              line-height: 180%; /* 30.6px */
              letter-spacing: 1.7px;
              margin-bottom: 25px;
            }
            &-content,&-railway{
              display: flex;
              &>div{
                text-align: left;
                &:first-child{
                  margin-right: 15px;
                }
                p{
                  font-family: 'cwTeXYen';
                  font-size: 17px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 180%; /* 30.6px */
                  letter-spacing: 1.7px;
                }
              }
            }
            &-content{
              margin-bottom: 30px;
            }
          }
        }
      }
      &-leftBox{
        position: absolute;
        right: 430px;
        top: -20px;
        &>div{
          color: #089CFE;
          text-align: center;
          font-family: 'cwTeXYen';
          font-size: 27px;
          font-style: normal;
          font-weight: 600;
          line-height: 160%; /* 43.824px */
          letter-spacing: 6px;
          transform: rotate(-15deg);
          white-space: nowrap;
        }
        img{
          position: absolute;
          // width: 100%;
          left: 0;
          top: -60px;
          transform: scale(1.3);
        }
      }
      &-rightBox{
        position: absolute;
        left: 570px;
        bottom: 80px;
        &>div{
          color: #FECB02;
          text-align: center;
          font-family: 'cwTeXYen';
          font-size: 24px;
          font-style: normal;
          font-weight: 600;
          line-height: 160%; /* 43.824px */
          letter-spacing: 6px;
          position: relative;
          z-index: 2;
          transform: rotate(15deg);
          white-space: nowrap;
        }
        img{
          position: absolute;
          width: 100%;
          left: -10px;
          bottom: -85px;
          transform: scale(1.2);
        }
      }
    }
  }
  .address-swiper{
    display: none;
  }
}
@media (min-width: 768px) and (max-width: 1800px) {
  .index-contactUs{
    padding: 110px 0 0;
    .address{
      margin-top: 50px;
      &-in{
        padding: 0 23px 75px;
        min-width: 545px;
        &.isA{
          width: 60%;
        }
        &.isB{
          width: 60%;
          margin-left: 20%;
        }
      }
    }
  }
}
@media (min-width: 1100px) and (max-width: 1300px) {
  .index-contactUs{
    .address{
      &-in{
        &.isB{
          width: 50%;
          margin-left: 5%;
          margin-right: 20%;
        }
      }
    }
  }
}
@media (min-width: 768px) and (max-width: 1100px) {
  .index-contactUs{
    .address{
      &-in{
        &.isA{
          margin-left: 30%;
        }
        &.isB{
          margin-left: 0%;
          margin-right: 40%;
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .index-contactUs{
    padding: 0;
    &-t{
      flex-direction: column;
      .title{
        &>div{
          font-size: 20px;
          letter-spacing: 5px;
          padding-bottom: 10px;
          &::after{
            height: 3px;
            border-radius: 2px;
          }
        }
      }
      .date{
        margin: 40px auto 0;
        &-lists{
          overflow: hidden;
          overflow-x: scroll;
          padding: 0;
          justify-content: flex-start;
          &::-webkit-scrollbar{
            display: none;
          }
          &>div{
            &>div{
              line-height: 1;
              font-size: 15px;
              height: 63px;
              line-height: 63px;
              padding: 0 11px;
            }
            &:first-child{
              min-width: 60px;
              &>div{
                line-height: 1;
                padding-top: 15px;
                position: relative;
                &:first-child{
                  &::after{
                    font-size: 15px;
                    position: absolute;
                    margin-top: -25px;
                  }
                }
              }
            }
            &:not(:first-child){
              &>div{
                &:first-child{
                }
                &:last-child{
                  font-size: 30px;
                  line-height: 65px;
                }
              }
            }
          }
        }
        &-masker{
          margin: 13px 28px 0;
          &::before{
            font-size: 12px;
            letter-spacing: 1.5px;
            margin-top: -5px;
          }
          span{
            display: inline-block;
            font-size: 15px;
            letter-spacing: 1.5px;
          }
        }
      }
      .area{
        margin-right: 23px;
        margin-top: 47px;
      }
    }
    .address{
      display: none;
    }
    .address-swiper{
      display: block;
      // margin-top: 54px;
      position: relative;
      .addressSlide{
        display: flex;
        justify-content: center;
        position: relative;
      }
      .swiperBox{
        padding-top: 60px;
      }
      :deep(.swiper-button-prev::after){
        color: var(--topic-color);
        font-size: 20px;
        font-weight: bold;
      }
      :deep(.swiper-button-next::after){
        color: var(--topic-color);
        font-size: 20px;
        font-weight: bold;
      }
      .addressBox{
        width: 300px;
        box-sizing: border-box;
        position: relative;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        border: 2px solid #FF6096;
        border-radius: 150px 150px 0 0;
        &-t{
          padding-top: 25px;
          border-radius: 150px 150px 0 0;
          padding-bottom: 60px;
          background: #FF6096;
          position: relative;
          .addressImg{
            width: 250px;
            height: 250px;
            margin: auto;
            border-radius: 50%;
            cursor: pointer;
            transition: all .3s;
            position: relative;
            overflow: hidden;
            &-in{
              width: 100%;
              height: 100%;
            }
          }
          .addressIcon{
            position: absolute;
            cursor: pointer;
            transition: all .3s;
            transform: translate(20%,20%) scale(0.57);
            &:hover{
              transform: scale(0.8);
            }
          }
        }
        &-b{
          height: 150px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          padding: 20px 22px 0;
          &>div{
            &>div{
              display: flex;
              &>div{
                color: #FF6096;
                font-family: 'cwTeXYen';
                font-size: 15px;
                font-style: normal;
                font-weight: 600;
                line-height: 160%; /* 30.6px */
                letter-spacing: 1.5px;
                &:first-child{
                  margin-right: 0;
                  min-width: 70px;
                }
              }
            }
          }
        }
        &-c{
          color: #FF6096;
          border: 2px solid #FF6096;
          text-align: center;
          font-family: 'cwTeXYen';
          font-style: normal;
          position: absolute;
          text-align: center;
          width: max-content;
          padding: 0 10px;
          min-width: 230px;
          height: 39px;
          line-height: 35px;
          font-size: 15px;
          font-weight: 600;
          letter-spacing: 3.75px;
          left: 50%;
          transform: translateX(-50%);
          top: 317px;
          border-radius: 32px;
          background: #fff;
        }
        &-bus{
          position: absolute;
          left: 20px;
          bottom: 180px;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: transparent;
          cursor: pointer;
          transform: none;
          display: flex;
          justify-content: center;
          align-items: center;
          animation: busAnim 4s ease-in infinite;
          -webkit-animation-delay: 3s;
          &.cur{
            animation: busAnim2 1s linear;
            animation-fill-mode: forwards;
          }
          .bus-image{
            width: 100%;
            height: 100%;
            border: 2px solid #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            position: relative;
            z-index: 1;
            &>img{
              width: 60%;
            }
          }
          .bus-in{
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            text-align: center;
            color: #FF6096;
            padding: 0;
            box-sizing: border-box;
            // transition: all 2s;
            width: 100%;
            height: 100%;
            overflow: hidden;
            display: flex;
            opacity: 0;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            z-index: 0;
            &.ccur{
              animation: busAnim3 1s linear 1s;
              animation-fill-mode: forwards;
              // display: flex;
            }
            &-btn{
              font-family: '圆幼';
              border-radius: 50%;
              border: 2px solid #FF6096;
              width: 50px;
              height: 50px;
              // font-size: 24px;
              // font-weight: bold;
              margin: 0px auto 20px;
              text-align: center;
              line-height: 60px;
              display: flex;
              justify-content: center;
              align-items: center;
              svg{
                transform: scale(.6);
              }
            }
            &-name{
              text-align: center;
              font-family: 'cwTeXYen';
              font-size: 15px;
              font-style: normal;
              font-weight: 600;
              line-height: 160%; /* 30.6px */
              letter-spacing: 1px;
            }
            &-title{
              font-family: 'cwTeXYen';
              font-size: 15px;
              font-style: normal;
              font-weight: 600;
              line-height: 160%; /* 30.6px */
              letter-spacing: 1px;
              margin-bottom: 15px;
            }
            &-content,&-railway{
              display: flex;
              align-items: flex-start;
              width: 100%;
              &>div{
                text-align: left;
                &:first-child{
                  width: 30px;
                  margin-right: 10px;
                  transform: scale(.6) translateY(-10px);
                }
                &:last-child{
                  flex: 1;
                }
                p{
                  font-family: 'cwTeXYen';
                  font-size: 13px;
                  font-style: normal;
                  font-weight: 600;
                  line-height: 160%; /* 30.6px */
                  letter-spacing: 1px;
                }
              }
            }
            &-content{
              margin-bottom:10px;
            }
          }
        }
        &.isA{
          border: 2px solid #089CFE;
          .addressBox-t{
            background: #089CFE;
          }
          .addressBox-b{
            &>div{
              &>div{
                &>div{
                  color: #089CFE;
                }
              }
            }
          }
          .addressBox-c{
            color: #089CFE;
            border: 2px solid #089CFE;
          }
          .addressBox-bus{
            .bus-in{
              color: #089CFE;
              &-btn{
                border: 2px solid #089CFE;
              }
            }
          }
        }
        &.isB{
          border: 2px solid #FECB02;
          .addressBox-t{
            background: #FECB02;
          }
          .addressBox-b{
            &>div{
              &>div{
                &>div{
                  color: #FECB02;
                }
              }
            }
          }
          .addressBox-c{
            color: #FECB02;
            border: 2px solid #FECB02;
          }
          .addressBox-bus{
            .bus-in{
              color: #FECB02;
              &-btn{
                border: 2px solid #FECB02;
              }
            }
          }
        }
      }
      &-leftBox{
        position: absolute;
        top: -40px;
        left: 30px;
        &>div{
          color: #089CFE;
          text-align: center;
          font-family: 'cwTeXYen';
          font-size: 15px;
          font-style: normal;
          font-weight: 600;
          line-height: 160%; /* 43.824px */
          letter-spacing: 2px;
          transform: rotate(-15deg)
        }
        &.leftBox103{
          &>div{
            color: #FECB02;
          }
        }
        img{
          position: absolute;
          // width: 100%;
          left: 0;
          top: -18px;
          transform: scale(1.3);
        }
      }
      &-line{
        margin-top: 44px;
      }
    }
  }
}
@keyframes busAnim {
  0%{
    transform: scale(1);
  }
  90%{
    transform: scale(1);
  }
  94%{
    transform: scale(1.5);
  }
  96%{
    transform: scale(1);
  }
  98%{
    transform: scale(1.2);
  }
  100%{
    transform: scale(1);
  }
}
@keyframes busAnim2 {
  0%{
    width: 42px;
    height: 42px;
    left: 20px;
    bottom: 180px;
    border-radius: 50%;
    background: transparent;
  }
  25%{
    width: 42px;
    height: 42px;
    background: #fff;
    left: 20px;
    bottom: 180px;
    border-radius: 50%;
  }
  50%{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    left: 10px;
    bottom: 150px;
    background: #fff;
  }
  75%{
    border-radius: 50%;
    width: 200px;
    height: 200px;
    bottom: 100px;
  }
  90%{
    border-radius: 50%;
    width: 300px;
    height: 300px;
  }
  100%{
    width: 100%;
    height: 100%;
    left: 0;
    bottom: 0;
    border-radius: 0;
    background: #fff;
  }
}
@keyframes busAnim3 {
  0%{
    padding: 0;
    opacity: 0;
    z-index: 0;
  } 
  100%{
    padding: 20px;
    opacity: 1;
    z-index: 2;
  }
}
</style>



