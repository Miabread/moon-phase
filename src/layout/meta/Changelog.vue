<script setup lang="ts">
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/shadcn/dialog';
import { SidebarMenuItem } from '@/components/shadcn/sidebar';
import SidebarMenuButton from '@/components/shadcn/sidebar/SidebarMenuButton.vue';
import { FileClock } from 'lucide-vue-next';
</script>

<template>
    <Dialog>
        <DialogTrigger>
            <SidebarMenuItem>
                <SidebarMenuButton as-child>
                    <a href="#changelog">
                        <FileClock />
                        <span>Changelog</span>
                    </a>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>
                    <span class="flex flex-row items-center gap-5 text-nowrap text-xl">
                        <FileClock />
                        <h1>Changelog</h1>
                    </span>
                </DialogTitle>
                <DialogDescription> Work in Progress </DialogDescription>
            </DialogHeader>
        </DialogContent>
    </Dialog>
</template>
