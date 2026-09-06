# Дабравесце

Expo (React Native + web) дадатак «Дабравесце» — праваслаўныя тэксты па-беларуску, экспартаваныя як вэб-сайт. Маршрутызацыя праз expo-router (`app/`). Няма каталога `node_modules` у кантролі версій.

## Каманды

- `npm run tsc:no:emit` — праверка тыпаў (`npx tsc --noEmit`). Запускай пасля змен.
- `npm run lint` / `npm run lint:fix` — ESLint.
- `npm run web:start` — лакальны вэб-сервер (`expo start --web`).
- `npm run web:build` — экспарт статыкі (у `dist/`).
- `npm run ios:start` — iOS (Expo Dev Client).

Тэстаў у праекце няма; асноўная праверка — `tsc` + `lint`.

## Структура

- `app/(tabs)/` — экраны табаў: `index` (каляндар/Евангелле дня), `calendar`, `menu` (Крыніцы), `content` (старонка чытання).
- `applets/<экран>/` — фрагменты па старонках (кампаненты календара, меню, старонкі чытання); падпапкі `model`, `view`, `logic`, `data`, `types`.
- `components/` — пераўжывальныя: `themed/` (ThemedText, ThemedView, ThemedLink, ThemedOption), `round.button.jsx`, `external.link.tsx`, `icons/` (IconSymbol).
- `services/` — бізнэс-логіка: `page.ts` (URL-шляхі), `menu.ts`, `search.ts`, `daily.ts`, `web.ts`; `mapping/` — keychain↔slugchain.
- `assets/albums/` — кантэнт: JS-модулі з альбомамі (Новы/Стары Запавет, малітвы, песні, кнігі, праект). Складальнік — `app.sources.js`.
- `constants/` — `breakpoints.ts` (WIDTH_LIMIT), `colors.ts`, `styles/common.styles.ts`.
- `hooks/` — `use.theme.color`, `use.daily.gospel.url`, `use.redirect.to.page.on.wide.screens`.
- `contexts/global.context.ts` — keychain (бібліятэка/саюз/альбом для старонкі чытання).

## Канвенцыі

- Імпарты ўнутранных модуляў — толькі праз аліяс `@/` (напрыклад `@/components/themed/themed.text`); адносныя `./` дапускаюцца толькі для суседзяў у той жа дырэкторыі. Не выкарыстоўвай `../`.
- Праект змешвае `.ts`/`.tsx` і `.js`/`.jsx` (у tsconfig `allowJs: true`). Датафайлы кантэнту — `.js`.
- Стыль: выкарыстоўвай ThemedText з тыпамі (`item`, `link`, `header`, `title`...), колеры праз `useThemeColor({}, 'text'|'link'|'primary'|...)`. Шрыфты: `Monomakh` (загалоўкі), `Vollkorn` (асноўны).
- Знешнія спасылкі — праз `ExternalLink` (адкрывае in-app браўзер на натыўных, новую ўкладку на вэбе).
- Увесь чытэльны кантэнт карыстальніка — па-беларуску.
