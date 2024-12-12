<script setup>
import {ref} from "vue"

const icons = ["noteOS", "docRoll", "dbWizard", "uniStack", "Rote"]
const iconPath = icons.map(iconName => {
  return {
    color: new URL(`../assets/images/logo/${iconName}.svg`, import.meta.url).href,
    gray: new URL(`../assets/images/logo/${iconName}-white.svg`, import.meta.url).href,
  };
})
const descriptions = [
  "Your central vault for personal knowledge. Fully powered by AI.",
  "Turn doc site into slides. Learn better with auto-generated videos.",
  "Story-based database exploration. Cast spells like a database wizard!",
  "The one and only technolgy stack you need to create everyting.",
  "The gym for your brain. Train for better memory retention."
]
const statuses = [
  "launched",
  "wip",
  "draft",
  "draft",
  "draft",
]
const links = [
  "https://noteos.org",
  "https://docroll.fly.dev",
  "https://noteos.org/buwei/what-is-dbwizard",
  "https://noteos.org/buwei/what-is-unistack",
  "https://noteos.org/buwei/what-is-rote",
]
const hoveredIndex = ref(0)
const navigateTo = link => window.location.href = link
</script>

<template>
  <div class="section bg-midnight">
    <div class="bg-daylight rounded-2xl">
      <h2 class="text-3xl font-sans  text-midnight text-center font-bold py-10">Our current progress</h2>
      <ul class="grid grid-cols-5 gap-4 mx-10 pb-20">
        <li v-for="(icon, index) in icons" class="icon-container cursor-pointer" :key="index"
            @mouseover="hoveredIndex = index"
            @click="navigateTo(links[index])"
            :class="{ active: hoveredIndex === index }">
          <img v-if="hoveredIndex === index" class="logo block max-h-6 mx-auto"
               :src="iconPath[index].color"
          />
          <img v-else="hoveredIndex !== index" class="logo block max-h-6 mx-auto"
               :src="iconPath[index].gray"
          />
          <p class="desc font-serif text-sm text-midnight text-center leading-tight px-2 my-6">
            {{ descriptions[index] }}</p>
          <span
              class="label tracking-wide rounded-sm text-[11px] font-bold uppercase absolute left-3 bottom-2 text-white px-1 bg-forrest">{{
              statuses[index]
            }}</span>
          <a class="link absolute bottom-1 right-1" :href="links[index]">
            <img src="../assets/images/arrow-right.svg"/>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

</style>
