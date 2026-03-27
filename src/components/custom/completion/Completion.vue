<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from '@/components/shadcn/card';
import { Moon } from 'lucide-vue-next';
</script>

<template>
    <Card class="w-full" id="completion">
        <CardHeader>
            <CardTitle>
                <span class="flex flex-row items-center gap-5 text-nowrap"> <Moon /> Completion </span>
            </CardTitle>
        </CardHeader>
        <CardContent> test </CardContent>
    </Card>
</template>
