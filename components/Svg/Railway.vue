<script lang="ts" setup>
import { defineProps } from "vue";
defineProps({
  color:{
    type: String,
    default: '#FF6096'
  }
})
</script>

<template>
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="43" viewBox="0 0 34 43" fill="none">
            <path d="M2.73535 39.5701L30.8511 39.5701" :stroke="color" stroke-width="1.57009" stroke-linecap="round"/>
            <path d="M5.5127 35.405L28.0747 35.405" :stroke="color" stroke-width="1.57009" stroke-linecap="round"/>
            <path d="M1 42L8.41489 30.5455" :stroke="color" stroke-width="1.57009" stroke-linecap="round"/>
            <path d="M32.7129 42L25.298 30.5455" :stroke="color" stroke-width="1.57009" stroke-linecap="round"/>
            <path d="M1.80068 11.5304C1.93415 5.12387 7.16587 0 13.5738 0H20.3592C26.7672 0 31.9989 5.12386 32.1324 11.5304L32.5029 29.3153C32.5487 31.5147 30.7783 33.3223 28.5785 33.3223H5.35454C3.15469 33.3223 1.38434 31.5147 1.43016 29.3153L1.80068 11.5304Z" :fill="color"/>
            <path d="M3.77637 11.8343C3.77637 8.36577 6.58819 5.55396 10.0567 5.55396H23.8762C27.3447 5.55396 30.1565 8.36577 30.1565 11.8343V18.4715C30.1565 19.7723 29.1021 20.8267 27.8014 20.8267H6.13151C4.8308 20.8267 3.77637 19.7723 3.77637 18.4715V11.8343Z" fill="white"/>
            <circle cx="7.24744" cy="26.38" r="3.47107" fill="white"/>
            <circle cx="26.6849" cy="26.38" r="3.47107" fill="white"/>
            <path d="M11.4131 2.77686H22.5205" stroke="white" stroke-width="1.57009" stroke-linecap="round"/>
            <path d="M12.1074 24.9917H21.8264" stroke="white" stroke-width="1.57009" stroke-linecap="round"/>
            <path d="M12.1074 27.7688H21.8264" stroke="white" stroke-width="1.57009" stroke-linecap="round"/>
        </svg>
    </div>
</template>


<style lang="scss" scoped>
@media (min-width: 768px) and (max-width: 1452px) {}
@media screen and (max-width: 768px) {}
</style>