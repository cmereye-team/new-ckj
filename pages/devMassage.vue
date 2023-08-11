<script lang="ts" setup>
const route = useRoute()
let inputText = ref('')
let pageUrl:any = route.query.url || ''
let errorNum = ref(0)
let btnDisable = ref(false)
let errMessage = ref('')
let btnLoading = ref(false)
const sumj = () =>{
    // ElMessage.warning('功能暂未开放...')
    errMessage.value = ''
    btnLoading.value = true
    // return
    setTimeout(()=>{
        if(inputText.value === 'newckj'){
            errMessage.value = '密碼驗證成功！'
            let _a = useCookie('adminPage')
            _a.value = '1'
            location.href = pageUrl
        }else{
            errorNum.value++
            if(errorNum.value >= 5){
                // ElMessage.error('密碼錯誤，您輸入錯已經超過5次！請聯係管理員...')
                errMessage.value = '密碼錯誤，輸入錯誤已經超過5次！請聯係管理員...'
                btnDisable.value = true
            }else{
                errMessage.value = '密碼錯誤，請聯係管理員!'
                // ElMessage.error('密碼錯誤，請聯係管理員~')
            }
        }
        btnLoading.value = false
    },500)
}
</script>

<template>
    <div class="messagePage">
        <div class="messagePage-in">
          <div class="messagePage-in-context">
            網站正在開發中，請耐心等待
          </div>
          
          <div class="messagePage-in-btn">
            <nuxt-link :to="'/'">返回首頁</nuxt-link>
          </div>
          <div class="messagePage-in-password">
            <span>密碼訪問：</span>
            <el-input placeholder="請輸入密碼" v-model="inputText" show-password></el-input>
            <el-button type="primary" :disabled="btnDisable" :loading="btnLoading" @click.stop="sumj">繼續訪問</el-button>
          </div>
          <div class="messagePage-in-errMessage">
              {{errMessage}}
          </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.messagePage{
  &-in{
    background: #fff;
    min-height: calc(100vh - 400px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &-context{
      font-style: normal;
      font-weight: 700;
      font-size: 40px;
      line-height: 160%;
      color: #666666;
    }
    &-password{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 70px;
        span{
            min-width: max-content;
        }
    }
    &-errMessage{
        color: red;
        font-size: 16px;
        height: 30px;
    }
    &-btn{
      margin-top: 70px;
      cursor: pointer;
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 160%;
      color: #666666;
      border-bottom: 2px solid #666666;
    }
  }
}
@media (min-width: 768px) and (max-width: 1452px) {}
@media screen and (max-width: 768px) {}
</style>