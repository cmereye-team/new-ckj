
import menus from '@/plugins/menu'
import nuxt from '@vueuse/nuxt';
export interface middlewareData {
    sessionStorage: any
}
export default defineNuxtRouteMiddleware( async (to, from) => {
    let _defaultMenus = ['/404','/devMassage','/messagePage']
    // let _a = sessionStorage.getItem('adminPage') || '0'
    // console.log(to)
    let _a:any = '0'
    // console.log(_a)
    if(_a !== '1'){
        // console.log('_a !== 1',_a !== '1')
        let _obj = menus.find(item=>item.path === to.path);
        if(_obj){
        }else{
            return navigateTo(`/devMassage?url=${to.path}`)
        }
    }
})

