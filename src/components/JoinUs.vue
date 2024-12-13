<script setup>
import {ref} from "vue"

const copySuccess = ref(false)
const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText("join@extropy.dev");
    copySuccess.value = true;
    // Clear success message after a short time
    setTimeout(() => {
      copySuccess.value = false;
    }, 2000);
  } catch (error) {
    console.error("Failed to copy text: ", error);
  }
}
</script>

<template>
  <div class="section bg-midnight relative text-daylight text-center pb-0">
    <div class="wrapper">
    <h2 class="text-2xl leading-tight sm:text-3xl  font-extrabold ">
      Join our journey
    </h2>
    <p class="w-full sm:w-1/2 font-serif text-md px-4 mx-0 sm:text-lg sm:mx-auto mt-6">
      We welcome designers, programmers, and educational content creators of all experience levels to join our community
      and help shape the future of learning—your contributions matter!
    </p>
    <div class="px-4">
      <div class="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 flex items-center mx-auto my-10 border-2 border-daylight rounded-lg p-1 sm:p-2 relative">
        <img class=" h-8 sm:h-10 ml-1" src="../assets/images/mail.svg"/>
        <span class=" font-serif font-mono text-md w-full">join@extropy.dev</span>
        <img v-if="copySuccess" @click="copyToClipboard" src="../assets/images/check.svg"
             class=" p-1 h-8 sm:h-10 sm:p-2 rounded bg-daylight hover:bg-grass cursor-pointer"/>
        <img v-else @click="copyToClipboard" src="../assets/images/copy.svg"
             class=" p-1 h-8 sm:h-10 sm:p-2 rounded bg-daylight hover:bg-grass cursor-pointer"/>
      </div>
    </div>
    <img class="h-10 select-none pointer-events-none block mx-auto "
         src="../assets/images/members.png" draggable="false"/>
    <footer class=" text-[14px] tracking-wide text-daylight text-center relative pt-20 pb-10">
      © 2024 Extropy Educational Technologies, All rights reserved.
    </footer>
  </div>
  </div>
</template>

<style scoped>

</style>
