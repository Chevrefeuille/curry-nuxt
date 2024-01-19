<script setup>
import { ref } from "vue";
import { Dialog, DialogPanel } from "@headlessui/vue";
import { XMarkIcon, Bars3Icon } from "@heroicons/vue/24/outline";

const mobileMenuOpen = ref(false);
</script>

<template>
  <header class="absolute top-0 z-10 w-full">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div class="hidden lg:flex lg:gap-x-12">
        <NuxtLink to="/" class="-m-1.5 p-1.5">
          <span class="sr-only">Curry or not curry</span>
          <img class="h-8 w-8" src="/curry.svg" alt="Curry" />
        </NuxtLink>
        <NuxtLink
          class="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-700"
          to="/curries"
          >Curries</NuxtLink
        >
        <!-- <NuxtLink
          class="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-700"
          to="/gallery"
          >Gallery</NuxtLink
        > -->
      </div>
      <div></div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
    </nav>
    <Dialog
      as="div"
      class="lg:hidden"
      @close="mobileMenuOpen = false"
      :open="mobileMenuOpen"
    >
      <div class="fixed inset-0 z-10" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <NuxtLink to="/" class="-m-1.5 p-1.5" @click="mobileMenuOpen = false">
            <span class="sr-only">Curry or not curry</span>
            <img class="h-8 w-8" src="/curry.svg" alt="Curry" />
          </NuxtLink>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <NuxtLink
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                to="/curries"
                @click="mobileMenuOpen = false"
                >Curries</NuxtLink
              >
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>
