<script setup lang="ts">
import { Github, MoonStar, Music, Rabbit, ScanHeart, Swords, Trophy } from 'lucide-vue-next';
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
import { rabbitPercentAll } from '@/data';
import SidebarFooter from '@/components/shadcn/sidebar/SidebarFooter.vue';

// Menu items.
const items = [
    {
        title: 'Completion',
        url: '#',
        icon: MoonStar,
    },
    {
        title: 'Achievements',
        url: '#',
        icon: Trophy,
    },
    {
        title: 'Rabbits',
        url: '#',
        icon: Rabbit,
    },
    {
        title: 'Loot',
        url: '#',
        icon: Swords,
    },
    {
        title: 'Trinkets',
        url: '#',
        icon: ScanHeart,
    },
    {
        title: 'Music',
        url: '#',
        icon: Music,
    },
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
                                <a :href="item.url">
                                    <component :is="item.icon" />
                                    <span>{{ item.title }}</span>
                                    <Progress :model-value="rabbitPercentAll()" />
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
