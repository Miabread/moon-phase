<script setup lang="ts">
import { Check, History, X } from 'lucide-vue-next';
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarHeader } from '@/components/shadcn/sidebar';
import { Input } from '@/components/shadcn/input';
import { data, loadSavedata, loadUnlockdata } from '@/data';
import { parseINI } from 'confbox';
import { BUNDLES, DIFFICULTIES } from '@/constants';
import { formatDate, readFileAsText } from '@/lib/utils';
import { reactive } from 'vue';

const fresh = reactive(Object.fromEntries(BUNDLES.map((bundle) => [bundle, false])));

const fileUpload = async (e: Event) => {
    const input = e.target as HTMLInputElement;
    const files = Array.from(input?.files || []);

    for (const file of files) {
        if (file.name.includes('savedata')) {
            loadSavedata(parseINI(await readFileAsText(file)));
            data.bundles.savedata!.lastUploaded = Date.now();
            fresh.savedata = true;
        }

        if (file.name.includes('unlockdata')) {
            loadUnlockdata(parseINI(await readFileAsText(file)));
            data.bundles.unlockdata!.lastUploaded = Date.now();
            fresh.unlockdata = true;
        }
    }
};
</script>

<template>
    <SidebarHeader>
        <SidebarMenu>
            <SidebarMenuItem>
                <Input type="file" multiple accept=".ini" @change="fileUpload" />
            </SidebarMenuItem>
            <SidebarMenuItem v-for="bundle of BUNDLES" :key="bundle">
                <SidebarMenuButton size="lg">
                    <div
                        v-if="data.bundles[bundle]!.lastUploaded === 0"
                        class="flex aspect-square size-8 items-center justify-center rounded-lg text-background"
                        :style="{ backgroundColor: DIFFICULTIES.hard.color }"
                    >
                        <X class="size-4" />
                    </div>
                    <div
                        v-else-if="fresh[bundle]"
                        class="flex aspect-square size-8 items-center justify-center rounded-lg text-background"
                        :style="{ backgroundColor: DIFFICULTIES.cute.color }"
                    >
                        <Check class="size-4" />
                    </div>
                    <div
                        v-else
                        class="flex aspect-square size-8 items-center justify-center rounded-lg text-background"
                        :style="{ backgroundColor: DIFFICULTIES.normal.color }"
                    >
                        <History class="size-4" />
                    </div>
                    <div class="flex flex-col gap-0.5 leading-none">
                        <span class="font-semibold">{{ bundle }}.ini</span>
                        <span v-if="data.bundles[bundle]!.lastUploaded === 0">Missing!</span>
                        <span v-else-if="fresh[bundle]">Uploaded!</span>
                        <span v-else>{{ formatDate(data.bundles[bundle]!.lastUploaded) }}</span>
                    </div>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
    </SidebarHeader>
</template>
