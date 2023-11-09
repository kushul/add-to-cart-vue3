<template>
    <div class="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white mb-4">
        <div class="flex flex-1 flex-col space-y-2 p-4">
            <h2 class="text-lg font-bold text-gray-900">
                {{ product.title }}
            </h2>
            <p class="mt-1 text-sm font-medium text-gray-700">Price: ${{ product.price }} | Category: {{ product.category }}
                | Rating: {{ product.rating.rate }}</p>
            <p class="text-sm text-gray-500 pb-4">{{ product.description }}</p>
            <div class="aspect-h-4 aspect-w-3">
                <img :src="product.image" :alt="product.title" class="w-[120px]" />
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import { IProduct } from '../types'

defineProps<{
    product: IProduct
}>()
</script>