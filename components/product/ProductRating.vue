<script setup lang='ts'>
import { Rating } from '~/types/product'
const props = defineProps<{ rating: Rating }>();
const filledStarsAmount = computed(() => Math.round(props.rating.rate))
const unfilledStarsAmount = 5 - filledStarsAmount.value;
console.log(filledStarsAmount.value, unfilledStarsAmount)
</script>

<template>
    <div title="customer reviews" class="flex relative pb-4">
        <div class="relative left-1/2 -translate-x-1/2">
            <Icon v-for="star of filledStarsAmount" name="ph:star-fill"
                  color="#ffa41c"
                  size="25" />
            <Icon v-for="star of unfilledStarsAmount" name="ph:star-light"
                  color="#ffa41c"
                  size="25" />
            <span class="mr-2">({{ rating.rate }})</span>
            <span class="absolute whitespace-nowrap">{{ rating.count }} reviews</span>
        </div>
    </div>
</template>

<style scoped></style>