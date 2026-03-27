<script setup lang="ts">
import { Github, Music, Rabbit } from 'lucide-vue-next';
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
import { rabbitClearPercent } from '@/components/custom/rabbitClears/calc';
import SidebarFooter from '@/components/shadcn/sidebar/SidebarFooter.vue';
import { musicPercent } from '../music/calc';

const items = [
    // {
    //     title: 'Completion',
    //     url: '#',
    //     icon: MoonStar,
    // },
    // {
    //     title: 'Achievements',
    //     url: '#',
    //     icon: Trophy,
    // },
    {
        title: 'Rabbits',
        url: '#rabbitClears',
        icon: Rabbit,
        progress: rabbitClearPercent,
    },
    // {
    //     title: 'Trinkets',
    //     url: '#',
    //     icon: ScanHeart,
    // },
    {
        title: 'Music',
        url: '#music',
        icon: Music,
        progress: musicPercent,
    },
    // {
    //     title: 'Loot',
    //     url: '#',
    //     icon: Swords,
    // },
];

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
                        <SidebarMenuItem v-for="item in items" :key="item.title">
                            <SidebarMenuButton as-child>
                                <a :href="item.url" class="text-nowrap">
                                    <component :is="item.icon" />
                                    <span>{{ item.title }}</span>
                                    <Progress :model-value="item.progress.value" />
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
