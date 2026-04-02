import { type ComputedRef } from 'vue';
import { resolve } from './utils';

export class Percent {
    public label = '';

    constructor(
        public current: number,
        public total: number,
    ) {}

    /**
     * Calculate the percentage of the items of a object or array that pass a condition
     * @param input The object or array to loop over
     * @param condition The condition to check on each entry
     * @returns The percent of the entries that passed the condition
     */
    static count<T>(input: T[] | Record<string, T>, condition: (item: T) => boolean): Percent {
        const inputArray = input instanceof Array ? input : Object.values(input);
        let current = 0;
        for (const item of inputArray) {
            if (condition(item)) {
                current += 1;
            }
        }
        return new Percent(current, inputArray.length);
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
        this.current *= weight;
        this.total *= weight;
        return this;
    }

    labeled(label: string): Percent {
        this.label = label;
        return this;
    }

    get percent(): number {
        if (this.total === 0) return 0;
        return Math.floor((this.current / this.total) * 100);
    }

    [Symbol.toPrimitive](): number {
        return this.percent;
    }
}
