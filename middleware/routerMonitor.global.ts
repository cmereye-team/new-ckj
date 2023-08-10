
import menus from '@/plugins/menu'
export default defineNuxtRouteMiddleware((to:any, from) => {
    const _a:any = useSessionStorage('adminPage','')
    if(_a.value === '1'){
        return
    }else{
        let _obj = menus.find(item=>item.path === to.path);
        // console.log(_obj)
        if(!_obj){
            // console.log('?')
            return navigateTo(`/devMassage?url=${to.path}`)
        }
    }
    // let _defaultMenus = ['/404','/devMassage','/messagePage']
    // if(_defaultMenus.includes(to.path)){
    //     return
    // }
    // console.log(from)
    // console.log(_a.value)
    // if(to.path === '/devMassage'){
    //     if(_a.value !== '1'){
    //         return navigateTo(to.query.url)
    //     }
    // }
    // if(_a.value !== '1'){
    //     // console.log('_a.value !== 1',_a.value !== '1')
        
    // }
    
})

