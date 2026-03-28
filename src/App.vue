<script setup lang="ts">
import { SidebarProvider } from './components/shadcn/sidebar';
import AppSidebar from './components/custom/sidebar/AppSidebar.vue';
import { Card, CardContent, CardHeader, CardTitle } from './components/shadcn/card';
import { NAVIGATION } from './constants/navigation';
import { Progress } from './components/shadcn/progress';
import SpecialProgress from './components/custom/completion/SpecialProgress.vue';
</script>

<template>
    <SidebarProvider open default-open>
        <AppSidebar />
        <main class="mt-2 flex flex-1 flex-col gap-4 p-4 pt-0 pb-2">
            <Card v-for="(item, i) in NAVIGATION" :key="item.title" :id="item.url" class="w-full">
                <CardHeader>
                    <CardTitle>
                        <span class="flex flex-row items-center gap-5 text-nowrap text-lg">
                            <component :is="item.icon" :style="{ color: item.color }" /> {{ item.title }}
                            <SpecialProgress v-if="i === 0" />
                            <Progress v-else :model-value="item.progress.value" :color="item.color" />
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
