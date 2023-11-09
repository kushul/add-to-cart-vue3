<template>
    <ul role="list" class="divide-y divide-gray-100">
        <li v-for="item in items" :key="item.product.id" class="flex justify-between gap-x-6 py-5">
            <div class="flex min-w-0 gap-x-4">
                <img class="h-12 w-12 flex-none  bg-gray-50 object-contain" :src="item.product.image" alt="" />
                <div class="min-w-0 flex-auto">
                    <p class="text-sm font-semibold leading-6 text-gray-900">{{ item.product.title }}</p>
                    <p class="mt-1 truncate text-xs leading-5 text-gray-500">Price: ${{ item.product.price }} | Quantity: {{
                        item.quantity }} | Line total = {{ item.product.price * item.quantity }}</p>
                </div>
            </div>
            <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <span class="isolate inline-flex rounded-md shadow-sm">
                    <button type="button" @click="incrementItem(item.product.id)"
                        class="bg-blue-600 relative inline-flex items-center rounded-l-md px-2 py-2 text-white hover:bg-blue-500 focus:z-10">
                        <span class="sr-only">Increment</span>
                        <PlusCircleIcon class="h-5 w-5" aria-hidden="true" />
                    </button>
                    <button type="button" @click="decrementItem(item.product.id)"
                        class="bg-yellow-600 relative -ml-px inline-flex items-center text-white px-2 py-2  hover:bg-yellow-500 focus:z-10">
                        <span class="sr-only">Decrement</span>
                        <MinusCircleIcon class="h-5 w-5" aria-hidden="true" />
                    </button>
                    <button type="button" @click="removeItem(item.product.id)"
                        class="bg-red-600 relative inline-flex items-center rounded-r-md px-2 py-2 text-white   hover:bg-red-500 focus:z-10">
                        <span class="sr-only">Delete</span>
                        <TrashIcon class="h-5 w-5" aria-hidden="true" />
                    </button>
                </span>
            </div>
        </li>
    </ul>
    <template v-if="total">Total: {{ total }}</template>
</template>

<script setup lang="ts">
import { useCart } from '../composables/useCart'
import { PlusCircleIcon, MinusCircleIcon, TrashIcon } from '@heroicons/vue/20/solid'


const { items, incrementItem, decrementItem, removeItem, total } = useCart()
</script>