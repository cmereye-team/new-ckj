<script lang="ts" setup>
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
onMounted(() => {
  // gsap.registerPlugin(ScrollTrigger);
  // const animRightIn = (name: string) => {
  //   return gsap.from(name, {
  //     opacity: 0, 
  //     x: 100, 
  //     duration: 2
  //   })
  // }
  // const animBottomIn = (name: string) => {
  //   return gsap.from(name, {
  //     opacity: 0, 
  //     y: 100, 
  //     duration: 2
  //   })
  // }
  // ScrollTrigger.create({
  //   trigger: ".brandConcept-right",
  //   animation: animRightIn(".brandConcept-right"),
  //   start: "bottom bottom",
  // })
  // ScrollTrigger.create({
  //   trigger: ".brandConceptTitle",
  //   animation: animBottomIn(".brandConceptTitle"),
  //   start: "bottom bottom",
  // })
  // ScrollTrigger.create({
  //   trigger: ".brandConcept-title",
  //   animation: animBottomIn(".brandConcept-title"),
  //   start: "bottom bottom",
  // })
  // ScrollTrigger.create({
  //   trigger: ".brandConceptContent",
  //   animation: animBottomIn(".brandConceptContent"),
  //   start: "bottom bottom",
  // })
});
</script>


<template>
  <div class="index-brandConcept">
    <div class="index-brandConcept-t"></div>
    <div class="index-brandConcept-c">
      <div class="index-brandConcept-c-in">
        <div class="context">
          <div>{{$t('pages.brand.title')}}</div>
          <div>
            <span>{{$t('components.brandConcept.title.span_1')}}</span>
            <span>{{$t('components.brandConcept.title.span_2')}}</span>
          </div>
          <div>{{$t('components.brandConcept.content')}}</div>
        </div>
        <div class="image">
          <img src="https://static.cmereye.com/imgs/2023/07/4d7c6dabd0bcfc14.png" alt="">
        </div>
      </div>
    </div>
    <div class="index-brandConcept-b"></div>
  </div>
</template>


<style lang="scss" scoped>
.index-brandConcept {
  // margin-top: 192px;
  &-t{
    background: url(https://static.cmereye.com/imgs/2023/07/ad0e9ea982d66127.png);
    background-size: auto 100%;
    height: 60px;
    width: 100%;
  }
  &-c{
    background: #FECB02;
    margin: -3px 0;
    width: 100%;
    &-in{
      width: 100%;
      max-width:1465px;
      margin: 0 auto;
      display: flex;
      padding: 100px 0;
      align-items: center;
      .context{
        flex: 1;
        margin-right: 136px;
        &>div{
          color: #FFF;
          &:nth-of-type(1){
            color: #FFF;
            font-family: 'Yuanti TC';
            font-size: 31.766px;
            font-style: normal;
            font-weight: 400;
            line-height: 160%; /* 50.826px */
            letter-spacing: 7.942px;
            position: relative;
            padding-bottom: 10px;
            &::after{
              content: '';
              background: #fff;
              height: 5px;
              width: 40px;
              position: absolute;
              bottom: 0;
              left: 0;
              border-radius: 3px;
            }
          }
          &:nth-of-type(2){
            margin-top: 38px;
            span{
              display: inline-block;
              color: var(--topic-text-color);
              font-family: 'Yuanti TC';
              font-size: 33.934px;
              font-style: normal;
              font-weight: 400;
              line-height: normal;
              letter-spacing: 4.751px;
              background: #fff;
              padding: 5px 20px;
              transform: skewY(-5deg);
              border: 2px solid var(--topic-text-color);
              &:first-child{
                position: relative;
                z-index: 2;
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
                margin-top: -10px;
                margin-left: 60px;
              }
            }
          }
          &:nth-of-type(3){
            margin-top: 50px;
            text-align: justify;
            font-family: 'Yuanti TC';
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 181%; /* 28.96px */
            letter-spacing: 4.8px;
          }
        }
      }
      .image{
        // flex: 1;
        width: 820px;
        // margin-left: 136px;
      }
    }
  }
  &-b{
    background: url(https://static.cmereye.com/imgs/2023/07/ad0e9ea982d66127.png);
      background-size: auto 100%;
      height: 60px;
      width: 100%;
      transform: rotate(180deg);
  }   
}

@media (min-width: 768px) and (max-width: 1452px) {
  .index-brandConcept {
    
  }
}

@media screen and (max-width: 768px) {
  .index-brandConcept {
    
  }

}
</style>