<script setup lang="ts">
import { Github } from 'lucide-vue-next';
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
import Progress from '@/components/shadcn/progress/Progress.vue';
import SidebarFooter from '@/components/shadcn/sidebar/SidebarFooter.vue';
import { NAV_ITEMS_ARRAY } from '@/constants/nav';

const footerItems = [
    {
        title: 'Source Code',
        url: 'https://github.com/Miabread/moon-phase',
        icon: Github,
    },
];
</script>

<template>
    <Sidebar variant="floating">
        <AppSidebarHeader />
        <SidebarContent>
            <SidebarGroup>
                <SidebarGroupLabel>Overview</SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu>
                        <SidebarMenuItem v-for="item in NAV_ITEMS_ARRAY" :key="item.title">
                            <SidebarMenuButton as-child>
                                <a :href="'#' + item.url" class="text-nowrap">
                                    <component :is="item.icon" :style="{ color: item.color }" />
                                    <span>{{ item.title }}</span>
                                    <Progress
                                        :model-value="item.progress.value"
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
        <SidebarFooter>
            <SidebarGroup>
                <SidebarGroupLabel>About</SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu>
                        <SidebarMenuItem v-for="item in footerItems" :key="item.title">
                            <SidebarMenuButton as-child>
                                <a :href="item.url">
                                    <component :is="item.icon" />
                                    <span>{{ item.title }}</span>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
        </SidebarFooter>
    </Sidebar>
</template>
