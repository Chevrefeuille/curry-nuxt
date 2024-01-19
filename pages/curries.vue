<script setup lang="ts">
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";

import type { Curry } from "@/types";
import moment from "moment";

const { find } = useStrapi();

const route = useRoute();
const currentPage = computed(() => route.query?.page || "1");

const { data: curries } = await useAsyncData(
  "curries",
  () =>
    find<Curry>("curries", {
      populate: "images",
      sort: "date:desc",
      pagination: {
        page: parseInt(currentPage.value as string),
        pageSize: 5,
        withCount: true,
      },
    }),
  { watch: [currentPage] }
);

const totalPages = computed(() => {
  if (!curries.value) return 0;
  // @ts-ignore
  return curries.value.meta.pagination.pageCount;
});

const prevPage = computed(() => {
  if (!curries.value) return 0;
  // @ts-ignore
  return curries.value.meta.pagination.page - 1;
});

const nextPage = computed(() => {
  if (!curries.value) return 0;
  // @ts-ignore
  return curries.value.meta.pagination.page + 1;
});

const isLastPage = computed(() => {
  if (!curries.value) return false;
  return (
    // @ts-ignore
    curries.value.meta.pagination.page ===
    // @ts-ignore
    curries.value.meta.pagination.pageCount
  );
});

const isFirstPage = computed(() => {
  if (!curries.value) return false;
  // @ts-ignore
  return curries.value.meta.pagination.page === 1;
});

const formatDate = (date: string) => moment(date).format("MMMM Do YYYY");
</script>

<template>
  <main className="mt-12 mb-4 px-8">
    <div className="flex flex-col space-y-8">
      <div>
        <div
          v-for="curry in curries?.data"
          :key="curry.id"
          class="mx-auto max-w-xl p-4"
        >
          <h3 class="mb-2 text-xl">{{ formatDate(curry.attributes.date) }}</h3>
          <h2 class="mb-2 text-3xl font-bold">
            <a :href="curry.attributes.url ? curry.attributes.url : '#'">{{
              curry.attributes.restaurant
            }}</a>
          </h2>
          <div class="mb-4">
            <Carousel>
              <Slide
                v-for="image in curry.attributes.images.data"
                :key="image.id"
              >
                <div class="w-full">
                  <img
                    class="object-cover w-full h-96"
                    :src="useStrapiMedia(image.attributes.url)"
                    :alt="image.attributes.name"
                  />
                </div>
              </Slide>
              <template #addons v-if="curry.attributes.images.data.length > 1">
                <Navigation />
                <Pagination />
              </template>
            </Carousel>
          </div>
          <div class="text-gray-500">
            <MDC
              class="prose"
              :value="curry.attributes.description"
              tag="article"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-between">
      <div>
        <NuxtLink
          :to="`/curries?page=${prevPage}`"
          rel="next"
          v-if="!isFirstPage"
        >
          ← Previous Page
        </NuxtLink>
      </div>
      <div>
        <NuxtLink
          :to="`/curries?page=${nextPage}`"
          rel="next"
          v-if="!isLastPage"
        >
          Next Page →
        </NuxtLink>
      </div>
    </div>
  </main>
</template>
