<script lang="ts" setup>
import { defineProps } from "vue";
let props = defineProps({
  problemData:{
    type: Object,
    default(){
      return{
        title: '',
        lists: [
          
        ]
      }
    }
  }
})
// const activeNames = ref(0)
const activeNames = ref([0,1])
onMounted(()=>{
  let a = props.problemData.lists.length
  // console.log(a)
  var i = ref(0)
  while(i.value < a){
    activeNames.value.push(i.value)
    i.value++
  }
  // console.log(activeNames)
})
const handleChange = (val: string[]) => {
  console.log(val)
}
</script>

<template>
  <div class="problem">
    <div class="problem-title">
      <div class="problem-title-in">
        <!-- {{$t(problemData.title)}} -->
        <serviceTitle :title="'植牙常見問題'" />
      </div>
    </div>
    <div class="problem-in pageCon">
      <el-collapse v-model="activeNames" :accordion="false">
        <el-collapse-item :name="problemIndex" :disabled="true" v-for="(problemItem,problemIndex) in props.problemData.lists" :key="problemIndex">
          <template #title>
            <div class="problem-in-title">
              <!-- <div>Q</div> -->
              <div>{{$t(problemItem.Q)}}</div>
              <!-- <div>
                <img src="@/assets/images/icon_9.png" alt="">
              </div> -->
            </div>
          </template>
          <div class="problem-in-context">
            <!-- <span>A</span> -->
            <span>{{$t(problemItem.A)}}</span>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
    <RippleLine :type="'4'" />
  </div>
</template>


<style lang="scss" scoped>
.problem{
  margin-top: 120px;
  &-title{
    display: flex;
    justify-content: center;
  }
  &-in{
    margin-top: 120px;
    margin-bottom: 120px;
    width: 100%;
    max-width: 1510px;
    &-title{
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      position: relative;
      // &>div:nth-of-type(1){
      //   font-style: normal;
      //   font-weight: 700;
      //   font-size: 40px;
      //   color: #FFA09E;
      //   margin-left: 32px;
      //   margin-top: -6px;
      // }
      &>div:nth-of-type(1){
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        color: #505050;
        max-width: 100%;
        flex: 1;
        // margin-left: 20px;
        padding: 0 20px;
        text-align: center;
      }
      &>div:nth-of-type(2){
        margin-right: 32px;
      }
      &::before{
        content: '';
        position: absolute;
        left: 50px;
        bottom: -36px;
        width: 28px;
        height: 24px;
        border-left: 14px solid var(--topic-color);
        border-right: 14px solid transparent;
        border-top: 12px solid transparent;
        border-bottom: 12px solid transparent;
      }
    }
    &-context{
      margin-top: 34px;
      margin-bottom: 75px;
      display: flex;
      // &>span:first-child{
      //   font-style: normal;
      //   font-weight: 700;
      //   font-size: 40px;
      //   line-height: 160%;
      //   color: #FFA09E;
      //   margin-left: 32px;
      //   margin-top: 20px;
      // }
      &>span:last-child{
        flex: 1;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 160%;
        color: var(--topic-color);
        // padding: 45px 82px 26px 19px;
        padding: 25px 30px;
        white-space: pre-wrap;
        background: #F5F4F4;
        border-radius: 20px;
      }
    }
  }
}
:deep(.el-collapse){
  border: none;
  display: flex;
  flex-wrap: wrap;
  padding-left: 6.33%;
}
:deep(.el-collapse-item){
  margin-bottom: 4px;
  border: none;
  width: calc(27%);
  margin-right: 6.33%;
}
:deep(.el-collapse-item__wrap){
  border: none;
}
:deep(.el-collapse-item__header){
  padding: 12px 0;
  background: #FFF1F0;
  border: none;
  box-sizing: initial;
  line-height: 160%;
  height: auto;
  min-height: 45px;
}
:deep(.el-collapse-item__header.is-active){
  // background: #FFA09E;
  background: var(--topic-color);
  border-radius: 35px;
  .problem-in-title>div:nth-of-type(1){
    color: #FFF1F0;
  }
  .problem-in-title>div:nth-of-type(2){
    color: #FFFFFF;
  }
}
:deep(.el-icon){
 display: none;
}
@media (min-width: 768px) and (max-width: 1452px) {}
@media screen and (max-width: 768px) {
  .problem{
    margin-top: 90px;
    &-in{
      margin-top: 30px;
      width: calc(100% - 60px);
      &-title{
        &>div:nth-of-type(1){
          font-size: 26px;
          margin-left: 3px;
        }
        &>div:nth-of-type(2){
          font-size: 16px;
          margin-left: 0px;
        }
        &>div:nth-of-type(3){
          width: 13px;
          margin-right: 8px;
        }
      }
      &-context{
        &>span:first-child{
          margin-left: 3px;
          font-size: 26px;
        }
        &>span:last-child{
          padding: 20px 17px 1px 14px;
          font-size: 14px;
        }
      }
    }
  }
  :deep(.el-collapse-item__header){
    // height: 43px;
    min-height: 43px;
    box-sizing: border-box;
  }
}
</style>