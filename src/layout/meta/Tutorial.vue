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
import { CircleQuestionMark } from 'lucide-vue-next';
</script>

<template>
    <Dialog>
        <DialogTrigger>
            <SidebarMenuItem>
                <SidebarMenuButton as-child>
                    <a href="#tutorial">
                        <CircleQuestionMark />
                        <span>How to Use</span>
                    </a>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>
                    <span class="flex flex-row items-center gap-5 text-nowrap text-xl">
                        <CircleQuestionMark />
                        <h1>How to Use</h1>
                    </span>
                </DialogTitle>
                <DialogDescription class="gap-5 flex flex-col p-5">
                    <p>
                        Use the button on the top of the sidebar to upload your
                        <code class="text-primary">savefile.ini</code> and
                        <code class="text-primary">unlockdata.ini</code> files. These can be located at
                        <code class="text-primary">C:\Users\$USER\AppData\Local\RabbitSteel\SaveFile</code> if using
                        Windows.
                    </p>
                    <p>
                        All data is stored purely local and is not sent anywhere. You can also reset this data by using
                        the button on the bottom of the sidebar.
                    </p>
                    <p>
                        You can now see your progress for achievements, rabbits clears, trinket unlocks, loot clears,
                        and music unlocks. Some of these are still a work in progress.
                    </p>
                </DialogDescription>
            </DialogHeader>
        </DialogContent>
    </Dialog>
</template>
