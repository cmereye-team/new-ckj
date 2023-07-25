<script lang="ts" setup>
import { defineProps } from "vue";
defineProps({
  str:{
    type: String,
    default: ''
  }
})

const colorLists = [
    '#089CFE',
    '#FC1682',
    '#FECB02',
    '#fff'
]
const starLists:any = ref([])

let starNum = ref(14)


const setStar = () =>{
    while(starNum.value>0){
        let _size = window.innerWidth > 768 ? Math.random()*10+5 : Math.random()*4+3
        let _top = `${Math.floor(Math.random()*60)}%`
        let _delay = `${Math.floor(Math.random()*20)}s`
        let _color = colorLists[Math.floor((Math.random()*5) === 5 ? 4: Math.random()*5)]
        let _name = `starTo_${Math.floor(Math.random()*10)}`
        let obj = {
            size: _size,
            color: _color,
            delay: _delay,
            top: _top,
            name: _name
        }
        starLists.value.push(obj)
        starNum.value--
    }
}

const getWindowResize = () => {
  if(window.innerWidth > 768){
    starNum.value = 14
    setStar()
  }else{
    starNum.value = 10
    setStar()
  }
}

onMounted(()=>{
    getWindowResize()
})

</script>

<template>
    <div class="starModule">
        <div class="starModule-in" v-for="(starItem,starIndex) in starLists" :key="starIndex" :style="{
            top: starItem.top,
            'animation-name': starItem.name,
            'animation-delay': `${starItem.delay}`
        }">
            <SvgStar :color="starItem.color" :size="starItem.size" />
        </div>
    </div>
</template>

<style>
@keyframes starTo_1 {
    to{
        left: 0;
        top: 80%;
        transform: translate(-100%,-100%);
    }
}
@keyframes starTo_2 {
    to{
        left: 0;
        top: 85%;
        transform: translate(-100%,-100%);
    }
}
@keyframes starTo_3 {
    to{
        left: 0;
        top: 90%;
        transform: translate(-100%,-100%);
    }
}
@keyframes starTo_4 {
    to{
        left: 0;
        top: 95%;
        transform: translate(-100%,-100%);
    }
}
@keyframes starTo_5 {
    to{
        left: 0;
        top: 100%;
        transform: translate(-100%,-100%);
    }
}
@keyframes starTo_6 {
    to{
        left: 5%;
        top: 100%;
        transform: translate(-100%,-100%);
    }
}
@keyframes starTo_7 {
    to{
        left: 10%;
        top: 100%;
        transform: translate(-100%,-100%);
    }
}
@keyframes starTo_8 {
    to{
        left: 15%;
        top: 100%;
        transform: translate(-100%,-100%);
    }
}
@keyframes starTo_9 {
    to{
        left: 20%;
        top: 100%;
        transform: translate(-100%,-100%);
    }
}
@keyframes starTo_10 {
    to{
        left: 25%;
        top: 100%;
        transform: translate(-100%,-100%);
    }
}
</style>
<style lang="scss" scoped>
.starModule{
    position: absolute;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 4;
    top: 0;
    left: 0;
    overflow: hidden;
    &-in{
        position: absolute;
        left: 110%;
        // animation: starTo 20s linear infinite;
        animation-name: starTo_1;
        animation-duration: 20s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }
}


@media (min-width: 768px) and (max-width: 1452px) {}
@media screen and (max-width: 768px) {}
</style>