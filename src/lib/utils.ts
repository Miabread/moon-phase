import type { ClassValue } from 'clsx';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const uppercaseFirstLetter = (input: string) => input.charAt(0).toUpperCase() + input.slice(1);

export const formatDate = (date: number | Date) =>
    Intl.DateTimeFormat(undefined, { dateStyle: 'short', timeStyle: 'short' }).format(date);

export const readFileAsText = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => resolve(event.target!.result as string);
        reader.onerror = (error) => reject(error);
        reader.readAsText(file);
    });
