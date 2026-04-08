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
import NavigationHeader from './NavigationHeader.vue';
import { NAVIGATION } from '@/sections/navigation/constants';
import PercentProgress from '@/components/custom/PercentProgress.vue';
import NavigationFooter from './NavigationFooter.vue';
</script>

<template>
    <Sidebar variant="floating">
        <NavigationHeader />
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
        <NavigationFooter />
    </Sidebar>
</template>
