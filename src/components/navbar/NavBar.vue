<template>
  <fwb-navbar>
    <template #logo>
      <fwb-navbar-logo alt="Flowbite logo" :image-url="logo" link="#" class="text-dark font-bold">
        NovaJobs
      </fwb-navbar-logo>
    </template>
    <template #default="{ isShowMenu }">
      <fwb-navbar-collapse :is-show-menu="isShowMenu">
        <RouterLink class="text-dark-soft font-medium">Home</RouterLink>
        <RouterLink class="text-dark-soft font-medium">Jobs</RouterLink>
        <RouterLink class="text-dark-soft font-medium">Categories</RouterLink>
        <RouterLink class="text-dark-soft font-medium">Testimonials</RouterLink>
        <RouterLink class="text-dark-soft font-medium">Contact Us</RouterLink>
      </fwb-navbar-collapse>
    </template>
    <template #right-side>
      <button class="bg-dark-dark hover:bg-dark-soft text-light px-4 transition h-12 rounded-lg">
        Get started
      </button>
    </template>
  </fwb-navbar>
</template>

<script setup>
import { FwbButton, FwbNavbar, FwbNavbarCollapse, FwbNavbarLink, FwbNavbarLogo } from 'flowbite-vue'
import { RouterLink } from 'vue-router'
import logo from '../../assets/logo.svg'
</script>
