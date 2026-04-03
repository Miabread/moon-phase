<script setup lang="ts">
import { Github, Trash2 } from 'lucide-vue-next';
import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/shadcn/sidebar';
import SidebarFooter from '@/components/shadcn/sidebar/SidebarFooter.vue';
import { resetData } from '@/data';
import { VERSION } from '@/constants';
</script>

<template>
    <SidebarFooter>
        <SidebarGroup>
            <SidebarGroupLabel>Moon Phase v{{ VERSION }}</SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton as-child>
                            <a @click="resetData">
                                <Trash2 />
                                <span>Reset Data</span>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton as-child>
                            <a href="https://github.com/Miabread/moon-phase">
                                <Github />
                                <span>Source Code</span>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    </SidebarFooter>
</template>
