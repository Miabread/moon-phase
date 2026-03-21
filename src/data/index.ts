import { reactive } from 'vue';
import { RABBITS } from './constants';

export const data = reactive({
    rabbits: Object.fromEntries(
        RABBITS.map((rabbit) => [
            rabbit.key,
            {
                unlocked: false,
                palettes: {
                    adept: false,
                    challenger: false,
                    master: false,
                    spellbound: false,
                },
                rings: {
                    flower: false,
                    star: false,
                    lunar: false,
                },
            },
        ]),
    ),

    rabbitMath(cond: (rabbit: (typeof data)['rabbits'][string]) => boolean) {
        const count = Object.values(this.rabbits).filter(cond).length;
        return Math.floor((count / RABBITS.length) * 100);
    },

    ultraRabbitMath() {
        let count = 0;
        for (const rabbit of Object.values(this.rabbits)) {
            if (rabbit.unlocked) count++;
            if (rabbit.palettes.adept) count++;
            if (rabbit.palettes.challenger) count++;
            if (rabbit.palettes.master) count++;
            if (rabbit.palettes.spellbound) count++;
            if (rabbit.rings.flower) count++;
            if (rabbit.rings.star) count++;
            if (rabbit.rings.lunar) count++;
        }
        return Math.floor((count / 8 / RABBITS.length) * 100);
    },
});
