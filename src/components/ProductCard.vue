<template>
    <div class="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white mb-4">
        <div class="flex flex-1 flex-col space-y-2 p-4">
            <h3 class="text-lg font-bold text-gray-900">
                {{ product.title }}
            </h3>
            <p class="mt-1 text-sm font-medium text-gray-900">Price: ${{ product.price }}</p>
            <p class="text-sm text-gray-500">{{ product.description }}</p>
            <div class="aspect-h-4 aspect-w-3">
                <img :src="product.image" :alt="product.title" class="w-[60px]" />
            </div>
            <div class="flex flex-1 justify-end">
                <router-link :to="{ name: 'detail', params: { id: product.id } }"
                    class="rounded-md mr-2 bg-gray-200 px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Details
                </router-link>
                <button type="button" @click="addItem(product, 1)"
                    class="rounded-md bg-sky-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Add to Cart
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { IProduct } from '../types'
import { useCart } from '../composables/useCart'

const { addItem } = useCart()
defineProps<{
    product: IProduct
}>()
</script>