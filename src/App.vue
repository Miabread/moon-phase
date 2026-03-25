<script setup lang="ts">
import RabbitTable from './RabbitTable.vue';
import { SidebarProvider } from './components/shadcn/sidebar';
import AppSidebar from './components/custom/sidebar/AppSidebar.vue';
</script>

<template>
    <SidebarProvider open default-open>
        <AppSidebar />
        <main>
            <RabbitTable />
        </main>
    </SidebarProvider>
</template>
