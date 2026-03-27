import type { ClassValue } from 'clsx';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { computed, type ComputedRef } from 'vue';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const uppercaseFirstLetter = (input: string) => input.charAt(0).toUpperCase() + input.slice(1);

const timeFormat = new Intl.RelativeTimeFormat('en', { numeric: 'always' });

const unitCutoffs = [
    [31536000, 'years'],
    [2592000, 'months'],
    [86400, 'days'],
    [3600, 'hours'],
    [60, 'minutes'],
    [0, 'seconds'],
] as const;

// I hate js why do I gotta implement this myself
export const formatDate = (date: number) => {
    const seconds = Math.floor((Date.now() - date) / 1000);

    for (const [cutoff, unit] of unitCutoffs) {
        if (seconds >= cutoff) {
            return timeFormat.format(-Math.floor(seconds / cutoff), unit);
        }
    }
};

export const readFileAsText = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => resolve(event.target!.result as string);
        reader.onerror = (error) => reject(error);
        reader.readAsText(file);
    });

/**
 * Calculate the percentage a particular `data` object passes a condition
 * @param input The object from `data` to loop over
 * @param condition The condition to check on each entry
 * @returns A Vue computed property, holding a number 0 to 100, representing the percent that those objects passed the condition
 */
export const computedEntriesPercent = <T>(input: T[] | Record<string, T>, condition: (item: T) => boolean) =>
    computed(() => {
        const inputArray = input instanceof Array ? input : Object.values(input);
        const count = inputArray.filter(condition).length;
        return Math.floor((count / inputArray.length) * 100);
    });

/**
 * Calculate the overall percent from multiple sub-percents
 * @param percents A list of each sub-percent, each a number 0 to 100
 * @returns A Vue computed property, holding a number 0 to 100, representing the total percent
 */
export const computedSumPercent = (percents: ComputedRef<number>[]) =>
    computed(() => percents.reduce((a, b) => a + b.value, 0) / percents.length);
