import type { ClassValue } from 'clsx';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

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
    [1, 'seconds'],
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
