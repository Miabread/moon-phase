<script setup lang="ts">
import { Check, Lock, LockOpen } from 'lucide-vue-next';

const props = defineProps<{
    unlocked?: boolean;
    alwaysUnlocked?: boolean;
    color?: string;
}>();
</script>

<template>
    <span class="flex justify-center items-center">
        <Check
            v-if="props.alwaysUnlocked"
            class="text-primary"
            :style="{
                color: props.color,
            }"
        />
        <LockOpen
            v-else-if="props.unlocked"
            class="text-primary"
            :style="{
                color: props.color,
            }"
        />
        <Lock
            v-else
            class="text-secondary"
            :style="{
                color: props.color && `color-mix(in srgb, ${props.color}, black 60%)`,
            }"
        />
    </span>
</template>
