<script lang="ts" setup>
let aboutUsCurrent = ref(1)

const onSlideAboutUsSwiperChange = (swiper:any) => {
  aboutUsCurrent.value = swiper.realIndex + 1
}

const aboutUsLists = [
  {
    title: 'components.aboutUs.item_1.title',
    text: 'components.aboutUs.item_1.text',
    context: 'components.aboutUs.item_1.context',
    img: 'https://static.cmereye.com/imgs/2023/04/312ab3f184b7daf5.jpg',
  },
  {
    title: 'components.aboutUs.item_2.title',
    text: 'components.aboutUs.item_2.text',
    context: 'components.aboutUs.item_2.context',
    img: 'https://static.cmereye.com/imgs/2023/05/57398ce56ec905ad.jpg',
  }
]

let aboutUsSwiperRef ={
  slideToLoop: (a)=>{}
}
const setAboutUsSwiperRef = (swiper:any) => {
  aboutUsSwiperRef = swiper;
}
const handleLineCur = (_value:number) =>{
  // console.log(_value)
  aboutUsSwiperRef.slideToLoop(_value-1)
}
</script>

<template>
  <div class="index-aboutUs">
    <StarModule />
    <div class="index-aboutUs-t"></div>
    <div class="index-aboutUs-c">
      <div class="title">{{$t('components.aboutUs.title')}}</div>
      <div class="content">
        <div v-for="(item,index) in aboutUsLists" :key="index">
          <div><img :src="item.img" alt=""></div>
          <div>
            <span>{{$t(item.title)}}</span>
            <span>{{$t(item.text)}}</span>
          </div>
          <div>{{$t(item.context)}}</div>
        </div>
      </div>
    </div>
    <div class="index-aboutUs-b"></div>
  </div>
</template>
<style lang="scss" scoped>
  
//關於我們
.index-aboutUs{
  position: relative;
  width: 100%;
  &-t{
    background: url(https://static.cmereye.com/imgs/2023/07/c19dfcc03bbba56d.png);
    background-size: auto 100%;
    height: 60px;
    width: 100%;
  }
  &-c{
    background: #089CFE;
    width: 100%;
    margin: -3px 0;
    padding: 100px 0 40px;
    .title{
      color: #FFF;
      font-family: 'cwTeXYen';
      font-size: 31.766px;
      font-style: normal;
      font-weight: 400;
      line-height: 160%; /* 50.826px */
      letter-spacing: 7.942px;
      text-align: center;
      position: relative;
      padding-bottom: 20px;
      &::after{
        content: '';
        background: #fff;
        height: 5px;
        width: 40px;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 3px;
      }
    }
    .content{
      width: 100%;
      max-width: 1166px;
      margin: 70px auto 0;
      display: flex;
      &>div{
        flex: 1;
        padding: 0 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
        &>div{
          &:nth-of-type(1){
            img{
              border-radius: 19px;
              box-shadow: 5px 5px 10px -3px rgba(0, 0, 0, 0.25);
            }
          }
          &:nth-of-type(2){
            margin-top: 38px;
            display: flex;
            flex-direction: column;
            span{
              width: max-content;
              display: inline-block;
              color: var(--topic-text-color);
              font-family: 'cwTeXYen';
              font-size: 38px;
              font-style: normal;
              font-weight: 400;
              line-height: normal;
              letter-spacing: 6.08px;
              background: #fff;
              padding: 5px 20px;
              transform: skewY(-5deg);
              border: 2px solid var(--topic-text-color);
              &:first-child{
                position: relative;
                z-index: 2;
                // margin-right: 30px;
                &::after{
                  content: '';
                  position: absolute;
                  bottom: -3px;
                  right: 0;
                  height: 6px;
                  width: calc(100% - 60px);
                  background: #fff;
                }
              }
              &:last-child{
                position: relative;
                z-index: 1;
                margin-top: -8px;
                margin-left: 60px;
              }
            }
          }
          &:nth-of-type(3){
            margin-top: 30px;
            color: #FFF;
            text-align: justify;
            font-family: 'cwTeXYen';
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 170%; /* 27.2px */
            letter-spacing: 4.8px;
          }
        }
      }
    }
  }
  &-b{
    background: url(https://static.cmereye.com/imgs/2023/07/c19dfcc03bbba56d.png);
    background-size: auto 100%;
    height: 60px;
    width: 100%;
    transform: rotate(180deg);
    position: relative;
    z-index: 1;
  }   
}
@media (min-width: 768px) and (max-width: 1452px) {
  .index-aboutUs{}
}
@media (min-width: 768px) and (max-width: 1000px) {
  .index-aboutUs{
   
  }
}
@media screen and (max-width: 768px) {
//關於我們
  .index-aboutUs{
    &-c{
      padding: 0 40px 20px;
      .title{
        font-size: 20px;
        letter-spacing: 5px;
        &::after{
          height: 3px;
        }
      }
      .content{
        flex-direction: column;
        &>div{
          padding: 0;
          &:first-child{
            margin-bottom: 65px;
          }
          &>div{
            &:nth-of-type(2){
              font-size: 33.35px;
              letter-spacing: 5.336px;
            }
            &:nth-of-type(3){
              font-size: 15px;
              letter-spacing: 4.5px;
            }
          }
        }
      }
    }
  }
}

</style>


