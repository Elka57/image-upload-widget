# 🖼️ ImageUpload Виджет

Переиспользуемый React-компонент для загрузки и предварительного просмотра изображений. Построен с React, Vite, MUI и Emotion — обеспечивает современный, доступный и легко интегрируемый виджет для работы с картинками.

---

## 🚀 Оглавление

- [🖼️ ImageUpload Виджет](#️-imageupload-виджет)
  - [🚀 Оглавление](#-оглавление)
  - [💻 Технологии](#-технологии)
  - [✨ Возможности](#-возможности)
  - [📸 Превью компонента](#-превью-компонента)
  - [🌐 Demo](#-demo)
  - [📦 Установка](#-установка)
  - [🏃 Локальный запуск](#-локальный-запуск)
  - [📚 Демо в Storybook](#-демо-в-storybook)
  - [🔧 Использование](#-использование)
  - [📋 Параметры (Props)](#-параметры-props)
  - [📝 Лицензия](#-лицензия)
  - [📦 Зависимости и лицензии](#-зависимости-и-лицензии)

---

## 💻 Технологии

- React 18
- Vite
- MUI (Material UI)
- Emotion (`@emotion/react` & `@emotion/styled`)
- Storybook

---

## ✨ Возможности

- Мгновенный превью выбранного изображения
- Валидация типа файла (только изображения)
- Валидация размера файла (не более 5 МБ)
- Удаление/сброс выбранного файла
- Пользовательская надпись (label) и стилизация
- Доступность (ARIA) и адаптивная вёрстка
- Лёгкая интеграция в любые формы

---

## 📸 Превью компонента

![Превью ImageUpload_1](docs/screenshot_1.png)
![Превью ImageUpload_2](docs/screenshot_2.png)

## 🌐 Demo

Попробовать компонент в действии можно здесь:  
https://elka57.github.io/image-upload-widget/

## 📦 Установка

1. Клонируйте репозиторий и перейдите в папку:

```bash
  git clone https://github.com/Elka57/image-upload-widget.git
  cd image-upload-widget
```

2. Установите зависимости:

```bash
  npm install
```

3. Установите peer-зависимости для MUI:

```bash
  npm install @mui/material @mui/icons-material @emotion/react @emotion/styled
```

## 🏃 Локальный запуск

Чтобы увидеть компонент в минимальном приложении через Vite:

```bash
npm run dev
```

Откройте в браузере: http://localhost:5173

## 📚 Демо в Storybook

Storybook позволяет интерактивно исследовать состояния компонента:

```bash
npm run storybook
```

Откройте в браузере: http://localhost:6006

Чтобы собрать статичную версию Storybook:

```bash
npm run build-storybook
```

## 🔧 Использование

Импортируйте компонент и вставьте в вашу форму:

```jsx
import React, { useState } from "react";
import ImageUpload from "./src/ImageUpload";

function ProfileForm() {
  const [imageData, setImageData] = useState(null);

  return (
    <form>
      <ImageUpload
        label="Фото профиля"
        value={imageData}
        onChange={setImageData}
        required
      />
      {/* Другие поля формы… */}
    </form>
  );
}
```

Поле value должно быть либо null, либо объектом:

```js
{
  file: File,         // выбранный файл
  previewUrl: string, // URL.createObjectURL(file)
}
```

## 📋 Параметры (Props)

| Параметр   | Тип                                                     | По умолчанию    | Описание                                                   |
|------------|---------------------------------------------------------|-----------------|------------------------------------------------------------|
| `label`    | `string`                                                | `""`            | Текстовая надпись (лейбл) над областью предпросмотра       |
| `value`    | `{ file: File; previewUrl: string } \| null`            | `null`          | Текущее состояние: выбранный файл и его URL для предпросмотра |
| `onChange` | `(value: { file: File; previewUrl: string } \| null)`  | `() => {}`      | Функция-обработчик при выборе или удалении изображения     |
| `required` | `boolean`                                               | `false`         | Если `true`, добавляет HTML-валидацию `required` к input    |


## 📝 Лицензия

Этот проект распространяется под лицензией MIT. Подробности см. в файле LICENSE.

## 📦 Зависимости и лицензии

Компонент использует сторонние open-source библиотеки, каждая из которых распространяется под лицензией MIT:

- [React](https://reactjs.org/)  
- [Vite](https://vitejs.dev/)  
- [MUI (Material UI)](https://mui.com/)  
- [Emotion](https://emotion.sh/docs/introduction)  
- [Storybook](https://storybook.js.org/)  

Все эти технологии свободны для использования в коммерческих и некоммерческих проектах.  
Если вы интегрируете ImageUpload Widget в свой продукт, убедитесь, что соблюдаете условия соответствующих лицензий (MIT).



