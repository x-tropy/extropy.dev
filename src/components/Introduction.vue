<script setup>
import {ref} from 'vue'

defineProps({
  msg: String,
})

</script>

<template>
  <div class="bg-midnight section pt-0 relative">
    <div class="wrapper">
    <a href="https://github.com/x-tropy/extropy.dev" target="_blank" class="block absolute right-6 sm:right-14 top-5 sm:top-14">
      <img class=" block p-2 border-2 border-white border-opacity-30 transition-all hover:border-opacity-100 rounded-lg"
           src="../assets/images/github.svg"/>
    </a>
    <div draggable="false" class="pt-20 sm:pt-40 grid grid-cols-2 sm:grid-cols-3 select-none pointer-events-none ">
      <div class="relative col-span-1 sm:col-span-2 md:col-span-1 z-20"><img class="absolute -top-6 sm:-top-32 -left-2 sm:-left-4"
                                                                        src="../assets/images/top-left.svg"/></div>
      <div class="hidden md:block"></div>
      <div class="rounded-tl-2xl col-span-1 rounded-tr-2xl relative bg-white corner-intro-1">
        <img class="w-3/4 sm:w-2/3 mx-auto mt-10 mb-8 "
             src="../assets/images/extropy-subline.svg"/>
      </div>
    </div>
    <div class="rounded-2xl rounded-tr-none bg-white p-4 lg:p-10 article-intro">
      <p>
        At <i class="font-semibold">Extropy Educational Technologies</i>, we believe that learning and creating should
        be intuitive, inspiring, and
        accessible to everyone. Our mission is to eliminate unnecessary complexity in programming and educational tools,
        enabling users to focus on what truly matters: their creativity and ideas.</p>
      <p>We design innovative digital tools and platforms that empower learners, educators, and developers by
        simplifying technical barriers and enhancing the creative process. Whether you’re learning to code for the first
        time or designing your next big project, our tools help you turn challenges into opportunities for growth with
        ease.</p>
      <p>At Extropy, we don’t just develop tools—we cultivate confidence and empower the next generation of creators to
        unleash their potential.
      </p>
    </div>
  </div>
  </div>
</template>
