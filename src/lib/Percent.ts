import { type ComputedRef } from 'vue';
import { resolve } from './utils';

export class Percent {
    constructor(
        public current: number,
        public total: number,
        public label = '',
    ) {}

    /**
     * Calculate the percentage of items in an array that pass a condition
     * @param input The array to loop over
     * @param condition The condition to check on each item
     * @returns The percent of items that pass the condition
     */
    static array<T>(input: T[], condition: (item: T) => boolean | null): Percent {
        let current = 0;
        let total = 0;
        for (const item of input) {
            const check = condition(item);

            // Ignore this entry
            if (check === null) continue;

            if (check) current++;
            total++;
        }
        return new Percent(current, total);
    }

    /**
     * Calculate the percentage of entries in an object that pass a condition
     * @param input The object to loop over
     * @param condition The condition to check on each entry
     * @returns The percent of entries that pass the condition
     */
    static object<T>(input: Record<string, T>, condition: (item: T, key: string) => boolean | null): Percent {
        let current = 0;
        let total = 0;
        for (const [key, item] of Object.entries(input)) {
            const check = condition(item, key);

            // Ignore this entry
            if (check === null) continue;

            if (check) current++;
            total++;
        }
        return new Percent(current, total);
    }

    /**
     * Calculate an overall percent from multiple child percents
     * @param children A list of each child percent
     * @returns The total percent
     */
    static compound(children: (Percent | ComputedRef<Percent>)[]): Percent {
        let current = 0;
        let total = 0;
        for (const child of children) {
            current += resolve(child).current;
            total += resolve(child).total;
        }
        return new Percent(current, total);
    }

    weighted(weight: number): Percent {
        return new Percent(this.current * weight, this.total * weight);
    }

    labeled(label: string): Percent {
        return new Percent(this.current, this.total, label);
    }

    get percent(): number {
        if (this.total === 0) return 0;
        return (this.current / this.total) * 100;
    }

    [Symbol.toPrimitive](): number {
        return this.percent;
    }
}
