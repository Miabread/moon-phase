<script setup lang="ts">
import { Input } from './components/ui/input';
import { cacheData } from './data';
import { loadSavedata } from './data/loadSavedata';
import { loadUnlockdata } from './data/loadUnlockdata';
import RabbitTable from './RabbitTable.vue';
import { parseINI } from 'confbox';

const readFileAsText = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => resolve(event.target!.result as string);
        reader.onerror = (error) => reject(error);
        reader.readAsText(file);
    });

const fileUpload = async (e: Event) => {
    const input = e.target as HTMLInputElement;
    const files = Array.from(input?.files || []);

    for (const file of files) {
        if (file.name.includes('savedata')) {
            loadSavedata(parseINI(await readFileAsText(file)));
        }

        if (file.name.includes('unlockdata')) {
            loadUnlockdata(parseINI(await readFileAsText(file)));
        }
    }

    cacheData();
};
</script>

<template>
    <Input type="file" multiple accept=".ini" @change="fileUpload" />
    <br />
    <br />
    <br />
    <RabbitTable />
</template>
