# 🌙 [Moon Phase](https://miabread.github.io/moon-phase/) 🐇

Online completion tracker for the game [Rabbit & Steel](https://store.steampowered.com/app/2132850/Rabbit_and_Steel/).

## How to Use

Use the button on the top of the sidebar to upload your `savefile.ini` and `unlockdata.ini` files. If using Windows, these are located at `C:\Users\$USER\AppData\Local\RabbitSteel\SaveFile`.

All data is stored purely local and is not sent anywhere. You can also reset this data by using the button on the bottom of the sidebar.

You can now see your progress breakdown for trinket unlocks, rabbit clears, achievements, loot clears, and music unlocks.

## Changelog

### Future

|               |                                                                                    |
| ------------- | ---------------------------------------------------------------------------------- |
| _Meta_        | Refactor constants                                                                 |
| _Loot Clears_ | Optimize searching routines                                                        |
| _Loot Clears_ | Improve loot sets (include their unlock status, conditions, and boss pity amounts) |
| _Completion_  | Add section for global boss pity tracking                                          |

### v1.2 (2026-05-05)

|                 |                                               |
| --------------- | --------------------------------------------- |
| _Meta_          | Improve changelog                             |
| _Loot Clears_   | Add Treasuresphere color filter for loot sets |
| _Music Unlocks_ | Add boss pity amounts for music unlocks       |
| _Rabbit Clears_ | Add boss pity amounts for rabbit unlocks      |

### v1.1 (2026-04-27)

|                   |                                            |
| ----------------- | ------------------------------------------ |
| _Trinket Unlocks_ | Add section to track Alt Levitation Ring   |
| _Trinket Unlocks_ | Add section to track the 3rd trinkets page |

### v1.0 (2026-04-26)

|                 |                                                   |
| --------------- | ------------------------------------------------- |
| _Loot Clears_   | Add section for loot that hasn't been cleared yet |
| _Loot Clears_   | Redo searching code                               |
| _Music Unlocks_ | Fill in missing icons                             |
| _Completion_    | Add section for fancy overview table              |
| _Completion_    | Add section for silly encouragement text          |
| _Achievements_  | Finish tracking for area clears                   |
| _Achievements_  | Finish tracking for story clears                  |
| _Achievements_  | Finish tracking for all other achievements        |

## Development Setup

Implemented using Vue 3 and VSCode.

### Install dependencies

```sh
npm install
```

### Compile and run

```sh
npm run dev
```
