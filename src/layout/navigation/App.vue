<script setup lang="ts">
import { SidebarProvider } from '@/components/shadcn/sidebar';
import Navigation from '@/layout/navigation/Navigation.vue';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/shadcn/card';
import { NAVIGATION } from '@/constants/navigation';
import SpecialProgress from '@/layout//completion/SpecialProgress.vue';
import PercentProgress from '@/components/custom/PercentProgress.vue';
</script>

<template>
    <SidebarProvider open default-open>
        <Navigation />
        <main class="mt-2 flex flex-1 flex-col gap-4 p-4 pt-0 pb-2">
            <Card v-for="(item, i) in NAVIGATION" :key="item.title" :id="item.url" class="w-full">
                <CardHeader>
                    <CardTitle>
                        <span class="flex flex-row items-center gap-5 text-nowrap text-lg">
                            <component :is="item.icon" :style="{ color: item.color }" />
                            {{ item.title }}
                            <SpecialProgress v-if="i === 0" />
                            <PercentProgress v-else :percent="item.progress" :color="item.color" />
                        </span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <component :is="item.card" />
                </CardContent>
            </Card>
        </main>
    </SidebarProvider>
</template>
