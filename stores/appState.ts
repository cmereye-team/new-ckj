import { defineStore } from 'pinia'

export interface appState {
  areaTabCurNum: number,
  dentistryService: string,
  brand: string,
  areaTabAct:number,
  areaTabs: any,
  isShowForm: boolean
}

export const useAppState = defineStore('appData', {
  state: (): appState => ({
    areaTabCurNum: 0,
    dentistryService: 'implant',
    brand: 'course',
    areaTabAct: 0,
    areaTabs: [
      'components.areaTabs.luohu',
      'components.areaTabs.futian',
      'components.areaTabs.nanshan',
      'components.areaTabs.baoan',
      'components.areaTabs.longhua'
    ],
    isShowForm: false
  }),
  actions: {
    setCurNum(curNum: number){
      // if(this.areaTabCurNum === curNum) return
      this.areaTabCurNum = curNum
    },
    setareaTabAct(num: number){
      this.areaTabAct = num
    },
    setDentistryService(serviceName: string){
      this.dentistryService = serviceName
    },
    setBrand(brandName: string){
      this.brand = brandName
    },
    setIsShowForm(isShowForm: boolean){
      this.isShowForm = isShowForm
    },
    reset() {
      // this.count = 0
    },
  },
  getters: {
    getareaTabAct():number{
      return this.areaTabAct
    }
  }
})