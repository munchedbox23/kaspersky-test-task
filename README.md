<h1 align="center">Тестовое задания для Kaspersky Lab</h1>

<div align="center">
  <img src="https://s3.printskrin.ru/printskrin/413c5bf6-streamtube/2024/06/18/kaspersky-main.png" alt="kaspersky-main.png" border="0" />
</div>

<h2>Оглавление</h2>
<ol>
  <li><a href="#описание-проекта">Описание проекта</a></li>
  <li><a href="#стек-технологий">Реализация</a></li>
  <li><a href="#установка">Установка</a></li>
  <li><a href="#функционал">Функционал</a></li>
  <li><a href="#планы">Дальнейшие планы</a></li>
  <li><a href="#планы">Скриншоты</a></li>
</ol>

<h2 id="описание-проекта">1. Описание проекта</h2>
Данный проект представляет собой тестовое задание для стажерской программы в компании Kaspersky Lab. Он реализован на React с использованием Redux Toolkit для управления состоянием приложения. Для хранения данных пользователей используется JSON-Server. Приложение имеет два роута: страницу приветствия и страницу со списком пользователей. На странице со списком пользователей реализовано отображение пользователей в нескольких вариациях: общая таблица, список карточек и по группам (колонки). Списки сортируются как по поисковому фильтру, так и по другим опциям.

<h2 id="стек-технологий">2. Используемый стек технологий</h2>
<ul>
  <img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original-wordmark.svg" title="React" alt="React" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/redux/redux-original.svg" title="Redux" alt="Redux " width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/css3/css3-plain-wordmark.svg"  title="CSS3" alt="CSS" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/jest/jest-plain.svg"  title="Jest" alt="Jest" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/cypressio/cypressio-original.svg"  title="Cypress" alt="Cypress" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/typescript/typescript-original.svg"  title="TypeScript" alt="TypeScript" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/html5/html5-original.svg" title="HTML5" alt="HTML" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/webpack/webpack-original.svg" title="Webpack" alt="Webpack" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg" title="JavaScript" alt="JavaScript" width="40" height="40"/>&nbsp;
</ul>

<h2 id="установка">3. Установка и запуск</h2>
 <span>Клонирование проекта</span>   

- `https://github.com/munchedbox23/kaspersky-test-task.git` - clone project by HTTPS(HTTP + TSL)
- `cd src/utils`, далее `npx json-server fakeApi.json` - запустить json сервер с данными
- `npm install` - Установка зависимостей
- `npm start` - Запуск проекта на лольном сервере
- `npm run build` - Полная сборка проект
- `npm run predeploy` - Запуск сборки проекта перед деплоем
- `npm run deploy` - Запуск деплоя на GitHub Pages

<h2 id="функционал">4. Функционал</h2>

- Сортировка пользователей
- Drag and Drop
- Поиск конкретного пользователя
- Отображение пользователй в виде таблицы, карточек и колонок

<h2 id="планы">5. Дальнейшие планы</h2>

- Реализовать авторизацию и регистрацию
- Возможность добавления пользователя вручную
- Возможность удаление пользователей
- Редактирование данных пользователя

<h2 id="скрины">5. Скриншоты</h2>

<div align="center">
  <img src="https://s3.printskrin.ru/printskrin/413c5bf6-streamtube/2024/06/18/kaspersky-cards.png" alt="kaspersky-cards.png" border="0" />
  <img src="https://s3.printskrin.ru/printskrin/413c5bf6-streamtube/2024/06/18/kaspersky-table.png" alt="kaspersky-table.png" border="0" />
  <img src="https://s3.printskrin.ru/printskrin/413c5bf6-streamtube/2024/06/18/kaspersky-columns.png" alt="kaspersky-columns.png" border="0" />
</div>
