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
        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="34" viewBox="0 0 33 34" fill="none">
            <rect x="4.125" y="24.4326" width="5.71154" height="9.51923" rx="2.69712" :fill="color"/>
            <rect x="23.1631" y="24.4326" width="5.71154" height="9.51923" rx="2.69712" :fill="color"/>
            <rect x="1.58691" width="29.8269" height="30.4615" rx="3.17308" :fill="color"/>
            <rect x="4.125" y="5.0769" width="24.75" height="12.6923" rx="3.17308" fill="white"/>
            <circle cx="6.66346" cy="25.3847" r="2.53846" fill="white"/>
            <circle cx="26.3363" cy="25.3847" r="2.53846" fill="white"/>
            <path d="M6.98047 2.53857H26.0189" stroke="white" stroke-width="1.26923" stroke-linecap="round"/>
            <path d="M0 9.20185C0 8.50087 0.568254 7.93262 1.26923 7.93262V15.548C0.568254 15.548 0 14.9797 0 14.2788V9.20185Z" :fill="color"/>
            <path d="M33 9.20185C33 8.50087 32.4317 7.93262 31.7308 7.93262V15.548C32.4317 15.548 33 14.9797 33 14.2788V9.20185Z" :fill="color"/>
        </svg>
    </div>
</template>


<style lang="scss" scoped>
@media (min-width: 768px) and (max-width: 1452px) {}
@media screen and (max-width: 768px) {}
</style>