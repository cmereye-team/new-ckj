
import menus from '~~/assets/js/menu'
import { useAppState } from '~~/stores/appState'
export default defineNuxtRouteMiddleware(to => {
    let _a:any = useAppState()
    let _b:any = useCookie('adminPage')
    if(_b.value != '1'){
        let _obj = menus.find(item=>item.path === to.path);
        if(!_obj){
            return navigateTo(`/devMassage?url=${to.path}`)
        }
    }
})

