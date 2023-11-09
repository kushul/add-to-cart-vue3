<script setup lang="ts">
import ProductDetail from '../components/ProductDetail.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { useFetch } from '@vueuse/core'
import { IProduct } from '../types';

const route = useRoute()
const currentProductId = computed(() => route.params.id)

const url = import.meta.env.VITE_APP_API_ENDPOINT + `/${currentProductId.value}`
const { isFetching, error, data } = useFetch<string>(url)

const product = computed<IProduct>(() => {
    if (data?.value !== null) {
        return JSON.parse(data.value)
    }
    return []
})
</script>

<template>
    <div v-if="isFetching">loading...</div>
    <template v-else>
        <ProductDetail :product="product" />
    </template>

    <div v-if="error">{{ error }}</div>
</template>

<style scoped></style>
