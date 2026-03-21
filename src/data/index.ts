import { reactive } from 'vue';
import { RABBITS } from './constants';

export const data = reactive({
    rabbits: Object.fromEntries(
        RABBITS.map((rabbit) => [
            rabbit.key,
            {
                unlocked: false,
                palettes: {
                    kingdomHard: false,
                    extraHard: false,
                    kingdomLunar: false,
                    extraLunar: false,
                },
                rings: {
                    normal: false,
                    hard: false,
                    lunar: false,
                },
            },
        ]),
    ),
});
