<script lang="ts" setup>
import { Autoplay,Navigation } from 'swiper';

let latestNewsCurrent = ref(1)

//走马灯事件
const onSlideChange = (swiper:any) => {
  latestNewsCurrent.value = swiper.realIndex + 1
}
// let newsLists = ref([{
//   title: '',
//   imgUrl: '',
//   mbUrl: '',
//   link: ''
// }])
const getNewsLists = async () => {
  const _res:any = await useFetch('https://admin.ckjhk.com/api.php/list/12',{
    method: 'post',
  });
  let res = JSON.parse(_res.data.value) || null
  // if(res){
  //   if(res.data && res.data.length){
  //     newsLists.value = res.data.map(item=>{
  //       let _mbUrl = item.ext_mbImg_hk && `https://admin.ckjhk.com${item.ext_mbImg_hk}`
  //       let _imgUrl = item.ext_pcImg_hk && `https://admin.ckjhk.com${item.ext_pcImg_hk}`
  //       if(item.ext_mbImg_hk && item.ext_mbImg_hk.indexOf('https://') !== -1){
  //         _mbUrl = item.ext_mbImg_hk
  //       }
  //       if(item.ext_pcImg_hk && item.ext_pcImg_hk.indexOf('https://') !== -1){
  //         _imgUrl = item.ext_pcImg_hk
  //       }
  //       return {
  //         title: item.title || '',
  //         imgUrl: _imgUrl,
  //         mbUrl: _mbUrl,
  //         link: item.ext_banner_link || ''
  //       }
  //     })
  //   }
  // }
}
// setTimeout(()=>{
//   getNewsLists()
// },0)

const filterBanner = () =>{
  if(windowWidth.value>768){
    // return newsLists.value.filter(item => item.imgUrl !== '')
  }else{
    // return newsLists.value.filter(item => item.mbUrl !== '')
  }
}

let newsLists = [
  {
    title: '歐美種植牙 即減￥2000元/顆',
    imgUrl: 'https://static.cmereye.com/imgs/2023/07/637e61a798944524.jpg',
    mbUrl: 'https://static.cmereye.com/imgs/2023/07/893793c6b2db820b.jpg',
    link: '/dental-service/implant'
  },
  {
    title: '隱形牙箍  即減￥5000元',
    imgUrl: 'https://static.cmereye.com/imgs/2023/07/1c3ad3cd69cf67bd.jpg',
    mbUrl: 'https://static.cmereye.com/imgs/2023/07/c064db5f0444c91e.jpg',
    link: '/dental-service/invisalign'
  },
  {
    title: '金屬矯正牙箍 即減￥2000元',
    imgUrl: 'https://static.cmereye.com/imgs/2023/07/e34677d1bcfdd11d.jpg',
    mbUrl: 'https://static.cmereye.com/imgs/2023/07/e362c42d5a90012f.jpg',
    link: '/dental-service/orthodontics'
  },
  {
    title: '成功種牙或矯齒，免費贈送專業潔牙1次',
    imgUrl: 'https://static.cmereye.com/imgs/2023/08/4f549633dc58edc8.jpg',
    mbUrl: 'https://static.cmereye.com/imgs/2023/08/04d2fda78d9af644.jpg',
    link: '/dental-service'
  }
]

let windowWidth = ref(1920)

const getWindowWidth = () => {
  windowWidth.value = window.innerWidth
  // console.log(windowWidth)
}

const handleLineCur = (_value:number) =>{
  // console.log(_value)
  latestNewsSwiperRef.slideToLoop(_value-1)
}

onMounted(()=>{
  // getNewsLists()
  getWindowWidth()
  window.addEventListener('resize',getWindowWidth)
})

let latestNewsSwiperRef = {
  slideToLoop: (a)=>{}
}
const setLatestNewsSwiperRef = (swiper:any) => {
  latestNewsSwiperRef = swiper;
}

</script>

<template>
  <div class="index-latestNews">
    <!-- <StarModule /> -->
      <div class="index-latestNews-t">
        <div>最新優惠</div>
      </div>
      <swiper
        class="swiperBox"
        :loop="true"
        :slidesPerView="windowWidth>768?1:1.4"
        :centeredSlides="true"
        :navigation="windowWidth>768"
        :modules="[Autoplay,Navigation]"
        :autoplay="{
          delay: 2500,
        }"
        @swiper="setLatestNewsSwiperRef"
        @slideChange="onSlideChange"
      >
        <swiper-slide v-for="(latestNewsItem,latestNewsIndex) in newsLists" :key="latestNewsIndex">
          <div class="index-latestNews-in">
            <nuxt-link :to="latestNewsItem.link">
              <img class="newsImg" :src="windowWidth>768?latestNewsItem.imgUrl:latestNewsItem.mbUrl" :alt="latestNewsItem.title" :title="latestNewsItem.title" />
            </nuxt-link>
          </div>
        </swiper-slide>
      </Swiper>
      <div class="index-latestNews-line">
        <PageSwiperPointLine :latestNewsNum="newsLists.length" :latestNewsCurrent="latestNewsCurrent" @changeLineCur="handleLineCur"></PageSwiperPointLine>
      </div>
    </div>
</template>

<style lang="scss" scoped>
@keyframes bgIcon {
  0%{
    transform: translate(100%,-100%);
  }
  100%{
    transform: translate(-150%,400%);
  }
}
  //最新消息
.index-latestNews {
  padding: 90px 0 192px;
  // max-width: 1590px;
  width: 100%;
  margin: 0 auto;
  width: 100%;
  position: relative;
  overflow: hidden;
  .swiperBox{
    width: 100%;
    max-width: 1300px;
    margin-top: 68px;
    overflow: hidden;
    border-radius: 20px;
    position: relative;
    .lineBox{
      width: 42%;
      position: absolute;
      bottom: 50px;
      right: 0;
      display: flex;
      justify-content: center;
      z-index: 100;
      &-in{
        width: 324px;
        margin: 0 auto;
      }
    }
  }
  :deep(.swiper-button-next){
    width: 19px;
    height: 41px;
    color: var(--topic-color);
    &::after{
      content: '';
      background: url(https://static.cmereye.com/imgs/2023/07/5331fed4a9f0f487.png) no-repeat;
      background-size: 100% auto;
      width: 19px;
      height: 41px;
    }
  }
  :deep(.swiper-button-prev){
    width: 19px;
    height: 41px;
    color: var(--topic-color);
    &::after{
      content: '';
      background: url(https://static.cmereye.com/imgs/2023/07/638d8106c1f85272.png) no-repeat;
      background-size: 100% auto;
      width: 19px;
      height: 41px;
    }
  }
  &-in{
    cursor: pointer;
    border-radius: 20px;
    overflow: hidden;
    display: flex;
    padding: 0 70px;
  }
  &-t{
    display: flex;
    justify-content: center;
    &>div{
      color: var(--topic-text-color);
      font-family: 'cwTeXYen';
      font-size: 35px;
      font-style: normal;
      font-weight: 600;
      line-height: 160%; /* 50.826px */
      letter-spacing: 7.942px;
      position: relative;
      padding-bottom: 24px;
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
  .newsImg{
    width: 100%;
    border-radius: 300px;
  }
  &-line{
    width: 324px;
    margin: 38px auto 0;
  }
}
@media (min-width: 768px) and (max-width: 1452px) {
  .index-latestNews {
    .swiperBox{
      .lineBox{
        width: 42%;
        bottom: 10%;
        &-in{
          width: 50%;
          margin: 0 auto;
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
//最新消息
  .index-latestNews {
    padding: 45px 0 56px;
    .swiperBox{
      margin-top: 35px;
      border-radius: 0;
    }
    &-t{
      &>div{
        color: var(--topic-text-color);
        font-size: 20px;
        letter-spacing: 5px;
        padding-bottom: 14px;
        &::after{
          height: 3px;
        }
      }
    }
    &-in{
      padding: 0 10px;
    }
  }
}
</style>