<template>
    <div>
        <div v-if="isFetching">loading...</div>
        <template v-else>
            <template v-for="product in products">
                <ProductCard :product="product" />
            </template>
        </template>

        <div v-if="error">{{ error }}</div>
    </div>
</template>

<script setup lang="ts">
import ProductCard from '../components/ProductCard.vue'
import { useFetch } from '@vueuse/core'
import { IProduct } from '../types'
import { computed } from 'vue'

const url = import.meta.env.VITE_APP_API_ENDPOINT
const { isFetching, error, data } = useFetch<string>(url)

const products = computed<IProduct[]>(() => {
    if (data?.value !== null) {
        return JSON.parse(data.value)
    }
    return []
})


</script>

<style lang="scss"></style>