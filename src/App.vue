<script setup lang="ts">
import ProductList from './components/ProductList.vue'
import MyCart from './components/MyCart.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { ArrowPathIcon } from '@heroicons/vue/20/solid'

const route = useRoute()
const currentProductId = computed(() => route.params.id)
</script>

<template>
  <div>
    <div>
      <a href="/" type="button"
        class="rounded-full bg-blue-600 ml-2 mt-2 p-2 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
        <ArrowPathIcon class="h-5 w-5" aria-hidden="true" />
      </a>
    </div>
    <div class="flex gap-10">
      <div class="max-h-[100vh] overflow-y-auto flex-1 rounded-md bg-white p-4">
        <ProductList />
      </div>
      <div class="flex-1 rounded-md bg-white p-4">
        <RouterView :key="currentProductId" />
      </div>
      <div class="flex-1 rounded-md bg-white overflow-y-auto p-4">
        <MyCart />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
