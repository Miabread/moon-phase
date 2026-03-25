import type { ClassValue } from 'clsx';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const uppercaseFirstLetter = (input: string) => input.charAt(0).toUpperCase() + input.slice(1);
