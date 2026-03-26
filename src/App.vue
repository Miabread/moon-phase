<script setup lang="ts">
import RabbitClears from './components/custom/rabbitClears/RabbitClears.vue';
import { SidebarProvider } from './components/shadcn/sidebar';
import AppSidebar from './components/custom/sidebar/AppSidebar.vue';
</script>

<template>
    <SidebarProvider open default-open>
        <AppSidebar />
        <main class="mt-16 flex flex-1 flex-col gap-4 p-4 pt-0">
            <RabbitClears />
        </main>
    </SidebarProvider>
</template>
