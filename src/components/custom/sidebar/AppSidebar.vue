<script setup lang="ts">
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/shadcn/sidebar';
import AppSidebarHeader from './AppSidebarHeader.vue';
import { NAVIGATION } from '@/constants/navigation';
import PercentProgress from '../PercentProgress.vue';
import AppSidebarFooter from './AppSidebarFooter.vue';
</script>

<template>
    <Sidebar variant="floating">
        <AppSidebarHeader />
        <SidebarContent>
            <SidebarGroup>
                <SidebarGroupLabel>Navigation</SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu>
                        <SidebarMenuItem v-for="item in NAVIGATION" :key="item.title">
                            <SidebarMenuButton as-child>
                                <a :href="'#' + item.url" class="text-nowrap">
                                    <component :is="item.icon" :style="{ color: item.color }" />
                                    <span>{{ item.title }}</span>
                                    <PercentProgress
                                        :percent="item.progress"
                                        :color="item.color"
                                        class="ml-auto w-20"
                                    />
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
        </SidebarContent>
        <AppSidebarFooter />
    </Sidebar>
</template>
