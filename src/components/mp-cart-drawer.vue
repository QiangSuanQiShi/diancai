<script setup lang="ts">
import { computed } from 'vue';
import { useMpStore } from '@/store';
import MpCartItem from '@/components/mp-cart-item.vue';

const props = defineProps({
    show: {
        type: Boolean,
        default: false,
    },
});

const store = useMpStore();
const emits = defineEmits(['update:show']);

const s = computed({
    get: () => props.show,
    set: (value) => {
        emits('update:show', value);
    },
});
</script>

<template>
    <mp-drawer
        height="40"
        show-bottom
        v-model:show="s">
        <view>
            <view>
                <mp-cart-item
                    v-for="(cart, index) in store.carts"
                    :key="index"
                    v-bind="cart"></mp-cart-item>
            </view>
        </view>
        <template #footer>
            <view class="store-footer">
                <mp-settlement-bar></mp-settlement-bar>
            </view>
        </template>
    </mp-drawer>
</template>

<style scoped lang="scss">
.store-footer {
    width: 100%;
    box-sizing: border-box;
}
</style>
