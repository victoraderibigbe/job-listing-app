<template>
  <NavBar />
  <div class="text-center">
    <div class="w-2/4 mx-auto px-56 m-10">
      <h1>Get your dream job with Find Jobs.</h1>
    </div>
    <p class="font-medium">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit, sit amet consectetur ipdum
      adipisicing.
    </p>
    <form
      class="w-2/6 flex items-center justify-between mx-auto my-5 h-16 rounded-full gap-5 pl-2 shadow"
    >
      <icon-search></icon-search>
      <input
        type="text"
        class="h-14 w-full border-none outline-none focus:ring-0 px-5"
        placeholder="Job title, keywords..."
      />
      <button
        type="button"
        class="bg-dark-dark text-light rounded-full w-48 h-16 hover:bg-dark-soft transition-all hover:w-60"
      >
        Search
      </button>
    </form>
  </div>
</template>

<script setup>
import NavBar from '@/components/navbar/NavBar.vue'
import IconSearch from './components/icons/IconSearch.vue'
</script>

<style></style>
