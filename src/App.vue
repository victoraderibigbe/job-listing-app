<template>
  <header class="fixed z-50 w-full">
    <NavBar />
  </header>

  <main class="px-24">
    <section class="flex items-center justify-between pt-32">
      <div>
        <img src="/src/assets/electricity.svg" alt="Electricity" />
      </div>
      <div class="text-center">
        <div class="px-48 mb-10">
          <h1>Get your dream job with NovaJobs.</h1>
        </div>
        <div class="mb-10">
          <p class="font-medium">
            Explore thousands of opportunities and land your perfect role today.
          </p>
        </div>
        <div class="px-24">
          <form
            class="flex items-center justify-between w-full h-16 gap-5 pl-10 mx-auto my-5 bg-white rounded-full shadow"
          >
            <icon-search class="text-dark-soft"></icon-search>
            <input
              type="text"
              class="w-full px-5 border-none outline-none h-14 focus:ring-0"
              placeholder="Job title, keywords..."
            />
            <button
              type="button"
              class="w-48 h-16 transition-all rounded-full bg-dark-dark text-light hover:bg-dark-soft hover:w-60"
            >
              Search
            </button>
          </form>
        </div>
      </div>
      <div>
        <img src="/src/assets/fun.svg" alt="Electricity" />
      </div>
    </section>

    <!-- <div class="flex items-center justify-center">
      <img src="/src/assets/interview.svg" alt="Job interview" />
    </div> -->

    <section class="mb-10">
      <div class="flex items-center justify-between my-16">
        <h2>Our Featured Jobs</h2>
        <RouterLink
          class="px-5 py-3 font-medium rounded-full bg-dark-dark text-light hover:bg-dark-soft"
          >View All</RouterLink
        >
      </div>
      <div class="grid grid-cols-3 gap-5">
        <div class="p-8 transition-all bg-white rounded-xl hover:shadow-lg">
          <div class="flex items-center justify-start gap-5 mb-10">
            <div class="p-2 border-2 rounded-full border-dark-soft">Full Time</div>
            <div class="p-2 border-2 rounded-full border-dark-soft">Glendale, CA</div>
          </div>
          <div class="flex items-center justify-start gap-5 mb-10">
            <icon-spotify class="text-green-400"></icon-spotify>
            <h3>Product Manager</h3>
          </div>
          <div class="mb-10">
            <p>Marketing | $2,000 - $5,000 /Month</p>
          </div>
          <div>
            <button
              class="w-full h-12 transition-opacity rounded-full bg-dark-dark text-light hover:bg-dark-soft"
            >
              Apply Now
            </button>
          </div>
        </div>

        <div class="p-8 transition-all bg-white rounded-xl hover:shadow-lg">
          <div class="flex items-center justify-start gap-5 mb-10">
            <div class="p-2 border-2 rounded-full border-dark-soft">Full Time</div>
            <div class="p-2 border-2 rounded-full border-dark-soft">Glendale, CA</div>
          </div>
          <div class="flex items-center justify-start gap-5 mb-10">
            <icon-spotify class="text-green-400"></icon-spotify>
            <h3>Product Manager</h3>
          </div>
          <div class="mb-10">
            <p>Marketing | $2,000 - $5,000 /Month</p>
          </div>
          <div>
            <button
              class="w-full h-12 transition-opacity rounded-full bg-dark-dark text-light hover:bg-dark-soft"
            >
              Apply Now
            </button>
          </div>
        </div>

        <div class="p-8 transition-all bg-white rounded-xl hover:shadow-lg">
          <div class="flex items-center justify-start gap-5 mb-10">
            <div class="p-2 border-2 rounded-full border-dark-soft">Full Time</div>
            <div class="p-2 border-2 rounded-full border-dark-soft">Glendale, CA</div>
          </div>
          <div class="flex items-center justify-start gap-5 mb-10">
            <icon-spotify class="text-green-400"></icon-spotify>
            <h3>Product Manager</h3>
          </div>
          <div class="mb-10">
            <p>Marketing | $2,000 - $5,000 /Month</p>
          </div>
          <div>
            <button
              class="w-full h-12 transition-opacity rounded-full bg-dark-dark text-light hover:bg-dark-soft"
            >
              Apply Now
            </button>
          </div>
        </div>

        <div class="p-8 transition-all bg-white rounded-xl hover:shadow-lg">
          <div class="flex items-center justify-start gap-5 mb-10">
            <div class="p-2 border-2 rounded-full border-dark-soft">Full Time</div>
            <div class="p-2 border-2 rounded-full border-dark-soft">Glendale, CA</div>
          </div>
          <div class="flex items-center justify-start gap-5 mb-10">
            <icon-spotify class="text-green-400"></icon-spotify>
            <h3>Product Manager</h3>
          </div>
          <div class="mb-10">
            <p>Marketing | $2,000 - $5,000 /Month</p>
          </div>
          <div>
            <button
              class="w-full h-12 transition-opacity rounded-full bg-dark-dark text-light hover:bg-dark-soft"
            >
              Apply Now
            </button>
          </div>
        </div>

        <div class="p-8 transition-all bg-white rounded-xl hover:shadow-lg">
          <div class="flex items-center justify-start gap-5 mb-10">
            <div class="p-2 border-2 rounded-full border-dark-soft">Full Time</div>
            <div class="p-2 border-2 rounded-full border-dark-soft">Glendale, CA</div>
          </div>
          <div class="flex items-center justify-start gap-5 mb-10">
            <icon-spotify class="text-green-400"></icon-spotify>
            <h3>Product Manager</h3>
          </div>
          <div class="mb-10">
            <p>Marketing | $2,000 - $5,000 /Month</p>
          </div>
          <div>
            <button
              class="w-full h-12 transition-opacity rounded-full bg-dark-dark text-light hover:bg-dark-soft"
            >
              Apply Now
            </button>
          </div>
        </div>

        <div class="p-8 transition-all bg-white rounded-xl hover:shadow-lg">
          <div class="flex items-center justify-start gap-5 mb-10">
            <div class="p-2 border-2 rounded-full border-dark-soft">Full Time</div>
            <div class="p-2 border-2 rounded-full border-dark-soft">Glendale, CA</div>
          </div>
          <div class="flex items-center justify-start gap-5 mb-10">
            <icon-spotify class="text-green-400"></icon-spotify>
            <h3>Product Manager</h3>
          </div>
          <div class="mb-10">
            <p>Marketing | $2,000 - $5,000 /Month</p>
          </div>
          <div>
            <button
              class="w-full h-12 transition-opacity rounded-full bg-dark-dark text-light hover:bg-dark-soft"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="my-16 text-center">Our Categories</h2>
      <div class="flex items-center justify-between gap-10">
        <div
          class="flex flex-col items-center justify-center w-full gap-5 py-5 bg-white rounded-xl"
        >
          <div class="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-light">
            <icon-monitor-cellphone></icon-monitor-cellphone>
          </div>
          <span class="text-lg font-medium">Web Design</span>
        </div>
        <div
          class="flex flex-col items-center justify-center w-full gap-5 py-5 bg-dark-dark rounded-xl"
        >
          <div class="flex items-center justify-center w-16 h-16 mx-auto bg-white rounded-full">
            <icon-monitor-cellphone></icon-monitor-cellphone>
          </div>
          <span class="text-lg font-medium text-light">Web Design</span>
        </div>
        <div
          class="flex flex-col items-center justify-center w-full gap-5 py-5 bg-white rounded-xl"
        >
          <div class="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-light">
            <icon-monitor-cellphone></icon-monitor-cellphone>
          </div>
          <span class="text-lg font-medium">Web Design</span>
        </div>
        <div
          class="flex flex-col items-center justify-center w-full gap-5 py-5 bg-white rounded-xl"
        >
          <div class="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-light">
            <icon-monitor-cellphone></icon-monitor-cellphone>
          </div>
          <span class="text-lg font-medium">Web Design</span>
        </div>
        <div
          class="flex flex-col items-center justify-center w-full gap-5 py-5 bg-white rounded-xl"
        >
          <div class="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-light">
            <icon-monitor-cellphone></icon-monitor-cellphone>
          </div>
          <span class="text-lg font-medium">Web Design</span>
        </div>
        <div
          class="flex flex-col items-center justify-center w-full gap-5 py-5 bg-white rounded-xl"
        >
          <div class="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-light">
            <icon-monitor-cellphone></icon-monitor-cellphone>
          </div>
          <span class="text-lg font-medium">Web Design</span>
        </div>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="my-16">Contact Us</h2>
      <div class="p-16 bg-white rounded-xl">
        <form class="grid grid-cols-2 gap-10">
          <input
            type="text"
            class="px-10 text-lg transition-all border-none h-14 rounded-xl bg-light focus:ring-2 focus:ring-dark-soft"
            placeholder="First Name"
          />
          <input
            type="text"
            class="px-10 text-lg transition-all border-none h-14 rounded-xl bg-light focus:ring-2 focus:ring-dark-soft"
            placeholder="Last Name"
          />
          <input
            type="email"
            class="px-10 text-lg transition-all border-none h-14 rounded-xl bg-light focus:ring-2 focus:ring-dark-soft"
            placeholder="Email"
          />
          <input
            type="text"
            class="px-10 text-lg transition-all border-none h-14 rounded-xl bg-light focus:ring-2 focus:ring-dark-soft"
            placeholder="Location"
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            class="col-span-2 px-10 text-lg transition-all border-none rounded-xl bg-light focus:ring-2 focus:ring-dark-soft"
            placeholder="Message"
          ></textarea>
          <div class="flex items-center justify-end col-span-2">
            <button
              type="submit"
              class="px-10 transition bg-dark-dark hover:bg-dark-soft rounded-xl text-light h-14"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  </main>

  <footer>
    <FooterComponent />
  </footer>
</template>

<script setup>
import NavBar from '@/components/navbar/NavBar.vue'
import { RouterLink } from 'vue-router'
import FooterComponent from './components/footer/FooterComponent.vue'
import IconMonitorCellphone from './components/icons/IconMonitorCellphone.vue'
import IconSearch from './components/icons/IconSearch.vue'
import IconSpotify from './components/icons/IconSpotify.vue'
</script>
