import { useStorage } from '@vueuse/core'
import menus from '~~/assets/js/menu'
import { useAppState } from '~~/stores/appState'
export default defineNuxtRouteMiddleware(to => {
    let _a:any = useAppState()
    // console.log('排序：=====0')
    let _b:any = useCookie('adminPage')
    if(_b.value != '1'){
        // console.log('排序：=====2')
        let _obj = menus.find(item=>item.path === to.path);
        if(!_obj){
            return navigateTo(`/devMassage?url=${to.path}`)
        }
    }
    
})

