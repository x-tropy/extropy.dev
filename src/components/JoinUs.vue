<script setup>
import {onMounted, ref} from "vue"
import {preloadImage} from "./util.js";

const copySuccess = ref(false)
const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText("join@extropy.dev");
    copySuccess.value = true;
  console.log(copySuccess.value)
    // Clear success message after a short time
    setTimeout(() => {
      copySuccess.value = false;
    }, 2000);
  } catch (error) {
    console.error("Failed to copy text: ", error);
  }
}

onMounted(() => {
  preloadImage("../assets/images/check.svg")
  preloadImage("../assets/images/copy.svg")
})
</script>

<template>
  <div class="section bg-midnight relative text-daylight text-center">
    <h2 class="text-3xl  font-extrabold ">
      Join our journey
    </h2>
    <p class="w-1/2 font-serif text-lg mx-auto mt-6">
      We welcome designers, programmers, and educational content creators of all experience levels to join our community
      and help shape the future of learning—your contributions matter!
    </p>
    <div class=" w-1/3 flex mx-auto my-10 border-2 border-daylight rounded-lg p-2 relative">
      <img class="mx-3" src="../assets/images/mail.svg"/>
      <span class="mt-2 font-sans tracking-wider text-lg w-full">join@extropy.dev</span>
      <img @click="copyToClipboard" :src="copySuccess ? '/src/assets/images/check.svg' : '/src/assets/images/copy.svg'"
           class=" p-2 rounded bg-daylight hover:bg-grass cursor-pointer"/>
    </div>
    <img class="h-10 select-none pointer-events-none block mx-auto "
         src="../assets/images/members.png" draggable="false"/>
    <footer class=" text-[14px] tracking-wide text-daylight text-center relative top-20 py-4">
      © 2024 Extropy Educational Technologies, All rights reserved.
    </footer>
  </div>
</template>

<style scoped>

</style>
