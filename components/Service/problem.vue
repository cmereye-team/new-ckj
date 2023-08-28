<script lang="ts" setup>
import { defineProps } from "vue";
let props = defineProps({
  problemData:{
    type: Object,
    default(){
      return{
        title: '',
        lists: [
          
        ],
        pageName: ''
      }
    }
  }
})
// const activeNames = ref(0)
const activeNames = ref([0])
let windowWidth = ref(1920)
const getWindowWidth = () => {
  windowWidth.value = window.innerWidth
}
onMounted(()=>{
  getWindowWidth()
  window.addEventListener('resize',getWindowWidth)
  if(windowWidth.value > 768){
    let a = props.problemData.lists.length
    var i = ref(0)
    while(i.value < a){
      activeNames.value.push(i.value)
      i.value++
    }
  }
})
const handleChange = (val: string[]) => {
  console.log(val)
}


</script>

<template>
  <div :class="['problem',problemData.pageName]">
    <div class="problem-title">
      <div class="problem-title-in">
        <!-- {{$t(problemData.title)}} -->
        <serviceTitle :title="problemData.title" />
      </div>
    </div>
    <div :class="['problem-in','pageCon',problemData.pageName]">
      <el-collapse v-model="activeNames" :accordion="false">
        <el-collapse-item :name="problemIndex"  v-for="(problemItem,problemIndex) in props.problemData.lists" :key="problemIndex">
          <template #title>
            <div class="problem-in-title">
              <!-- <div>Q</div> -->
              <div :contenteditable="false">{{$t(problemItem.Q)}}</div>
              <div>
                <!-- <img src="@/assets/images/icon_9.png" alt=""> -->
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="10" fill="white"/>
                  <path d="M5 10H14" stroke="#FC1682" stroke-width="2" stroke-linecap="round"/>
                  <path v-show="!activeNames.includes(problemIndex)" d="M9.5 5.5L9.5 14.5" stroke="#FC1682" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </div>
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
  &.scaling-and-polishing{
    margin-top: 185px;
  }
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
      &>div:nth-of-type(1){
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        color: #fff;
        max-width: 100%;
        flex: 1;
        padding: 0 20px;
        text-align: center;
      }
      &>div:nth-of-type(2){
        display: none;
      }
      
    }
    &-context{
      margin-top: 34px;
      display: flex;
      &>span:last-child{
        flex: 1;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 160%;
        color: var(--topic-color);
        padding: 25px 30px;
        white-space: pre-wrap;
        background: #F5F4F4;
        border-radius: 20px;
      }
    }
    :deep(.el-collapse){
      border: none;
      display: flex;
      flex-wrap: wrap;
      padding-left: 6.33%;
    }
    :deep(.el-collapse-item){
      margin-bottom: 80px;
      border: none;
      width: calc(27%);
      margin-right: 6.33%;
    }
    :deep(.el-collapse-item__wrap){
      border: none;
    }
    :deep(.el-collapse-item__header){
      padding: 12px 0;
      background: var(--topic-color);
      border: none;
      box-sizing: initial;
      line-height: 160%;
      height: auto;
      border-radius: 25px;
      position: relative;
      &::before{
        content: '';
        position: absolute;
        left: 50px;
        bottom: -10px;
        width: 28px;
        height: 24px;
        border-left: 14px solid var(--topic-color);
        border-right: 14px solid transparent;
        border-top: 12px solid transparent;
        border-bottom: 12px solid transparent;
      }
    }
    :deep(.el-collapse-item__header.is-active){
      background: var(--topic-color);
      .problem-in-title>div:nth-of-type(1){
        color: #fff;
      }
      .problem-in-title>div:nth-of-type(2){
        color: #fff;
      }
    }
    :deep(.el-icon){
      display: none;
    }
    &.scaling-and-polishing,&.general-oral-examination{
      max-width: 1360px;
      :deep(.el-collapse-item){
        width: calc((100% - 12.66%) / 2);
      }
    }
  }
}

@media (min-width: 768px) and (max-width: 1452px) {}
@media screen and (max-width: 768px) {
  .problem{
    margin-top: 10px;
    &.scaling-and-polishing{
      margin-top: 10px;
    }
    &-in{
      margin-top: 30px;
      width: calc(100% - 60px);
      &-title{
        &>div:nth-of-type(1){
          font-size: 15px;
          margin-left: 0px;
          text-align: left;
        }
        &>div:nth-of-type(2){
          display: block;
          margin-right: 7px;
        }
        
      }
      &-context{
        margin-top: -15px;
        &>span:last-child{
          padding: 45px 30px 30px;
          font-size: 15px;
          border-radius: 0 0 15px 15px;
        }
      }
      :deep(.el-collapse){
        display: block;
        padding-left: 0;
      }
      :deep(.el-collapse-item){
        width: 100%;
        margin-right: 0;
        margin-bottom: 26px;
      }
      :deep(.el-collapse-item__wrap){
        overflow: initial;
      }
      :deep(.el-collapse-item__header){
        padding: 5px 0;
        min-height: 0;
        box-sizing: border-box;
        position: relative;
        &::before{
          bottom: -9px;
          width: 22px;
          height: 18px;
          border-left: 11px solid var(--topic-color);
          border-right: 11px solid transparent;
          border-top: 9px solid transparent;
          border-bottom: 9px solid transparent;
        }
      }
      :deep(.problem-in-title){
        align-items: flex-end;
      }
    }
    
  }
  
}
</style>