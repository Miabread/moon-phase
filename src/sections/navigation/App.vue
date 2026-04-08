<script setup lang="ts">
import { SidebarProvider } from '@/components/shadcn/sidebar';
import Navigation from '@/sections/navigation/Navigation.vue';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/shadcn/card';
import { NAVIGATION } from '@/sections/navigation/navigation';
import SpecialProgress from '@/sections//completion/SpecialProgress.vue';
import PercentProgress from '@/components/custom/PercentProgress.vue';
</script>

<template>
    <SidebarProvider open default-open>
        <Navigation />
        <main class="mt-2 flex flex-1 flex-col gap-4 p-4 pt-0 pb-2">
            <Card v-for="item in NAVIGATION" :key="item.title" :id="item.url" class="w-full">
                <CardHeader>
                    <CardTitle>
                        <span class="flex flex-row items-center gap-5 text-nowrap text-xl">
                            <component :is="item.icon" :style="{ color: item.color }" />
                            <h1>{{ item.title }}</h1>
                            <SpecialProgress v-if="item.specialProgressBar" />
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
