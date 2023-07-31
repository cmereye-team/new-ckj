<script lang="ts" setup>

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
          <img src="https://static.cmereye.com/imgs/2023/07/1d5820c78099839f.jpg" alt="">
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
            font-family: 'cwTeXYen';
            font-size: 36px;
            font-style: normal;
            font-weight: 600;
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
              font-family: 'cwTeXYen';
              font-size: 35px;
              font-style: normal;
              font-weight: 600;
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
                margin-top: -8px;
                margin-left: 60px;
              }
            }
          }
          &:nth-of-type(3){
            margin-top: 50px;
            text-align: justify;
            font-family: 'cwTeXYen';
            font-size: 18px;
            font-style: normal;
            font-weight: 500;
            line-height: 181%; /* 28.96px */
            letter-spacing: 4.8px;
          }
        }
      }
      .image{
        // flex: 1;
        width: 820px;
        img{
          width: 100%;
          border-radius: 20px;
          box-shadow: 10px 10px 10px -6px rgba(118, 71, 0, 0.25);
        }
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
    &-c{
      &-in{
        flex-direction: column-reverse;
        justify-content: center;
        padding: 0 40px;
        padding-top: 90px;
        position: relative;
        .context{
          width: 100%;
          margin-right: 0;
          &>div{
            &:nth-of-type(1){
              position: absolute;
              top: 0;
              left: 50%;
              transform: translateX(-50%);
              text-align: center;
              font-size: 20px;
              letter-spacing: 5px;
              padding-bottom: 15px;
              &::after{
                height: 3px;
                left: 50%;
                transform: translateX(-50%);
              }
            }
            &:nth-of-type(2){
              margin-top: 30px;
              span{
                padding: 5px 8px;
                font-size: 18.798px;
                letter-spacing: 2.632px;
                border: 1px solid var(--topic-text-color);
              }
            }
            &:nth-of-type(3){
              width: calc(100% - 40px);
              margin: 20px auto 0;
              font-size: 15px;
              letter-spacing: 4.5px;
            }
          }
        }
        .image{
          width: 100%;
        }
      }
    }
  }
}
</style>