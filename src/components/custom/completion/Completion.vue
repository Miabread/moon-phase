<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from '@/components/shadcn/card';
import { Moon } from 'lucide-vue-next';
import { totalCompletion } from './calc';
import { Progress } from '@/components/shadcn/progress';
</script>

<template>
    <Card class="w-full" id="completion">
        <CardHeader>
            <CardTitle>
                <span class="flex flex-row items-center gap-5 text-nowrap">
                    <Moon /> Completion <Progress :model-value="totalCompletion" />
                </span>
            </CardTitle>
        </CardHeader>
        <CardContent> test </CardContent>
    </Card>
</template>
