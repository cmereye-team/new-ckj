
import menus from '@/plugins/menu'
import nuxt from '@vueuse/nuxt';
export interface middlewareData {
    sessionStorage: any
}
export default defineNuxtRouteMiddleware( async (to, from) => {
    const _a:any = useSessionStorage('adminPage','')
    // let _defaultMenus = ['/404','/devMassage','/messagePage']
    // console.log(to)
    // console.log(_a.value)
    if(_a.value !== '1'){
        // console.log('_a !== 1',_a !== '1')
        let _obj = menus.find(item=>item.path === to.path);
        if(_obj){
            // return navigateTo(to.path)
        }else{
            return navigateTo(`/devMassage?url=${to.path}`)
        }
    }
    // return navigateTo(to.path)
})

