## Статус проекта

<a href="https://github.com/ZverevichLeonid/aston-games/actions"><img src="https://github.com/ZverevichLeonid/aston-games/actions/workflows/main.yml/badge.svg" /></a>

# ClosedCritic

Сайт-агрегатор, собирающий рецензии о компьютерных играх и высчитывающий среднюю оценку для каждой игры вне зависимости от платформы.

**API** - используется [OpenCriticApi](https://rapidapi.com/opencritic-opencritic-default/api/opencritic-api)

## Деплой

[vercel](https://aston-games.vercel.app/)

## Локальный запуск

Установка зависимостей
```javascript
npm run i
```
Запуск дев сервера 
```javascript
npm run dev
```

## **Функционал**

- 🔐 **Регистрация и авторизация** пользователи могут создать учетную запись и авторизоваться в приложении
- 🔎 **Поиск** приложение предоставляет возможность поиска игр
- 🖤 **Избранное** пользователи могут добавлять игры в избранное
- 🕣 **История поиска:** приложение дает пользователям доступ к истории поиска

## Реализованные требования:

### **1 уровень (обязательный - необходимый минимум)**

- [x] Реализованы **Требования к функциональности**

- [x] Для хранения учетных записей пользователей, их Избранного и Истории поиска, используется [**Firebase**](https://github.com/ZverevichLeonid/aston-games/blob/main/src/firebase/db.config.ts)

**React**

- [x] **Функциональные компоненты c хуками** в приоритете над классовыми
- [x] Есть разделение на **[глупые](https://github.com/ZverevichLeonid/aston-games/blob/main/src/components/SearchList/SearchList.tsx)** и **[умные](https://github.com/ZverevichLeonid/aston-games/blob/main/src/components/SearchBar/SearchBar.tsx)** компоненты

- [x] Есть [**рендеринг списков**](https://github.com/ZverevichLeonid/aston-games/blob/main/src/components/GamesList/GamesList.tsx)

- [x] Реализована хотя бы одна [**форма**](https://github.com/ZverevichLeonid/aston-games/blob/main/src/components/Form/Form.tsx)

- [x] Есть применение [**Контекст API**](https://github.com/ZverevichLeonid/aston-games/blob/main/src/components/ThemeProvider/ThemeProvider.tsx)

- [x] Есть применение **предохранителя** [тут](https://github.com/ZverevichLeonid/aston-games/blob/main/src/App.tsx) 

- [x] Есть хотя бы один [**кастомный хук**](https://github.com/ZverevichLeonid/aston-games/blob/main/src/hooks/useAuth.ts)

- [x] Хотя бы несколько компонентов используют **PropTypes** [тут](https://github.com/ZverevichLeonid/aston-games/blob/main/src/components/GamesList/Game/Game.tsx) и [тут](https://github.com/ZverevichLeonid/aston-games/blob/main/src/components/ProtectedRoute/ProtectedRoute.tsx)

- [x] Поиск не должен триггерить много запросов к серверу [**debounce**](https://github.com/ZverevichLeonid/aston-games/blob/main/src/components/SearchBar/SearchBar.tsx)

- [x] Есть применение [lazy + Suspense](https://github.com/ZverevichLeonid/aston-games/blob/main/src/pages/HomePage.tsx)

**Redux**

- [x] Используем [**Modern Redux with Redux Toolkit**](https://github.com/ZverevichLeonid/aston-games/blob/main/src/redux/store/store.ts)
- [x] Используем [**слайсы**](https://github.com/ZverevichLeonid/aston-games/blob/main/src/redux/store/favoritesSlice/favoritesSlice.tsx)

- [x] Есть хотя бы одна **кастомная мидлвара** или [**createListenerMiddleware**](https://github.com/ZverevichLeonid/aston-games/blob/main/src/redux/middleware/loggerMiddleware.ts)

- [x] Используется [**RTK Query**](https://github.com/ZverevichLeonid/aston-games/blob/main/src/redux/services/gameService.ts)

- [x] Используется [**Transforming Responses**](https://github.com/ZverevichLeonid/aston-games/blob/main/src/utils/transformGamesData.ts) [**Тут**](https://github.com/ZverevichLeonid/aston-games/blob/main/src/redux/services/gameService.ts)

### **2 уровень (необязательный)**

- [x] Используется **TypeScript**
    
- [x] Использование [FireBase](https://github.com/ZverevichLeonid/aston-games/blob/main/src/firebase/db.config.ts) для учетных записей, избранного и истории поиска
      
- [x] Настроен CI/CD:
    - [x] Настроен CI: [CI](https://github.com/ZverevichLeonid/aston-games/blob/main/.github/workflows/main.yml)
        - [x] Проверки Eslint, TS, build
    - [x] Настроен CD: [Deploy Link](https://aston-games.vercel.app/)
          
- [x] Реализована [**виртуализация списков**](https://github.com/ZverevichLeonid/aston-games/blob/main/src/components/HistoryList/HistoryList.tsx) (Нужен список истории не меньше 6 единиц. Рендер элементов списка только в видимой области пользователя)
      
- [x] Используются [**мемоизированные селекторы** (createSelector)](https://github.com/ZverevichLeonid/aston-games/blob/main/src/redux/store/favoritesSlice/favoritesSlice.tsx)
      
- [x] Связь UI и бизнес-логики построена не через команды, а через [**события**](https://github.com/ZverevichLeonid/aston-games/blob/main/src/components/SearchBar/SearchBar.tsx) (Компонент не знает что происходит в хендлерах, а только вызывает их по событию)
И ещё [**тут**](https://github.com/ZverevichLeonid/aston-games/blob/main/src/pages/SignIn.tsx) и [**тут**](https://github.com/ZverevichLeonid/aston-games/blob/main/src/components/Form/Form.tsx) 
