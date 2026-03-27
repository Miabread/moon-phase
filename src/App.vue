<script setup lang="ts">
import { SidebarProvider } from './components/shadcn/sidebar';
import AppSidebar from './components/custom/sidebar/AppSidebar.vue';
import { Card, CardContent, CardHeader, CardTitle } from './components/shadcn/card';
import { NAV_ITEMS_ARRAY } from './constants/nav';
import { Progress } from './components/shadcn/progress';
</script>

<template>
    <SidebarProvider open default-open>
        <AppSidebar />
        <main class="mt-2 flex flex-1 flex-col gap-4 p-4 pt-0 pb-2">
            <Card v-for="item in NAV_ITEMS_ARRAY" :key="item.title" :id="item.url" class="w-full">
                <CardHeader>
                    <CardTitle>
                        <span class="flex flex-row items-center gap-5 text-nowrap">
                            <component :is="item.icon" /> {{ item.title }}
                            <Progress :model-value="item.progress.value" />
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
