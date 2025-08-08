# 🚀 Руководство по развертыванию
## Sugrue Excavation Ltd - Премиум веб-сайт

### 📁 Структура проекта

```
sugrue-redesigned/
├── index.html                 # Главная страница
├── css/
│   ├── main.css              # Основные стили
│   ├── animations.css        # Анимации и эффекты
│   ├── components.css        # UI компоненты
│   └── responsive.css        # Адаптивные стили
├── js/
│   ├── main.js              # Основная логика
│   └── cursor.js            # Минималистичный курсор
├── images/                   # Реальные фотографии проектов
├── assets/                   # Дополнительные ресурсы
├── data/
│   └── company-info.json    # Данные компании
├── README.md                # Документация проекта
├── package.json             # Конфигурация проекта
└── DEPLOYMENT-GUIDE.md      # Это руководство
```

### 🌐 Способы развертывания

#### 1. GitHub Pages (Рекомендуется)

```bash
# 1. Создайте репозиторий на GitHub
# 2. Загрузите все файлы в репозиторий
git init
git add .
git commit -m "Initial commit: Premium Sugrue website"
git branch -M main
git remote add origin https://github.com/ваш-username/sugrue-website.git
git push -u origin main

# 3. В настройках репозитория включите GitHub Pages
# Settings → Pages → Source: Deploy from a branch → main
```

**URL будет:** `https://ваш-username.github.io/sugrue-website/`

#### 2. Netlify (Простое развертывание)

1. Перейдите на [netlify.com](https://netlify.com)
2. Зарегистрируйтесь или войдите
3. Перетащите папку `sugrue-redesigned` на панель Netlify
4. Сайт автоматически развернется

**Получите:** Бесплатный поддомен типа `amazing-site-123.netlify.app`

#### 3. Vercel (Для разработчиков)

```bash
# Установите Vercel CLI
npm i -g vercel

# В папке проекта выполните
vercel

# Следуйте инструкциям для развертывания
```

#### 4. Локальное тестирование

```bash
# Перейдите в папку проекта
cd sugrue-redesigned

# Запустите локальный сервер
python3 -m http.server 8000
# или
npx serve .

# Откройте в браузере
http://localhost:8000
```

### ⚙️ Настройка и кастомизация

#### Изменение контактной информации

Отредактируйте файл `data/company-info.json`:

```json
{
  "company": "Sugrue Excavation Ltd",
  "phone": "087-2491422",
  "office": "064-6644379",
  "email": "info@sugrue.ie",
  "address": {
    "line1": "Gortbee, Beaufort",
    "line2": "Killarney, Co. Kerry",
    "country": "Ireland"
  }
}
```

#### Замена изображений

1. Поместите новые изображения в папку `images/`
2. Обновите ссылки в `index.html`
3. Рекомендуемые форматы: JPG, WebP
4. Оптимальные размеры:
   - Hero изображение: 1920x1080px
   - Галерея: 800x600px
   - Профиль: 400x400px

#### Изменение цветовой схемы

В файле `css/main.css` измените CSS переменные:

```css
:root {
  --color-primary: #0A1628;      /* Основной темный */
  --color-accent: #00D4AA;       /* Бирюзовый акцент */
  --color-energy: #FF6B35;       /* Оранжевый энергии */
  --color-white: #FFFFFF;        /* Белый */
  --color-neutral-light: #F8FAFC; /* Светло-серый */
  --color-neutral-dark: #64748B;  /* Темно-серый */
}
```

### 🔧 Техническая оптимизация

#### Сжатие изображений

```bash
# Установите imagemin (опционально)
npm install -g imagemin-cli imagemin-webp

# Сжмите изображения
imagemin images/*.jpg --out-dir=images/optimized --plugin=webp
```

#### Минификация CSS/JS

```bash
# Установите инструменты минификации
npm install -g clean-css-cli uglify-js

# Минифицируйте CSS
cleancss -o css/main.min.css css/main.css

# Минифицируйте JS
uglifyjs js/main.js -o js/main.min.js
```

### 📱 Мобильная оптимизация

Сайт уже полностью адаптивен, но для дополнительной оптимизации:

1. **Тестирование на устройствах:**
   - iPhone: Safari
   - Android: Chrome
   - Планшеты: iPad, Android tablets

2. **Инструменты тестирования:**
   - Chrome DevTools (F12 → Device Mode)
   - [BrowserStack](https://browserstack.com)
   - [Responsive Design Checker](https://responsivedesignchecker.com)

### 🚀 Производительность

#### Рекомендации по скорости:

1. **Включите сжатие GZIP** на сервере
2. **Используйте CDN** для статических файлов
3. **Кэшируйте ресурсы** (CSS, JS, изображения)
4. **Оптимизируйте изображения** (WebP формат)

#### Добавление Service Worker (PWA):

Создайте файл `sw.js`:

```javascript
const CACHE_NAME = 'sugrue-v1';
const urlsToCache = [
  '/',
  '/css/main.css',
  '/js/main.js',
  '/images/hero-bg.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});
```

### 🔒 Безопасность

#### Рекомендуемые заголовки безопасности:

```
Content-Security-Policy: default-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline'
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
```

### 📊 Аналитика

#### Добавление Google Analytics:

В `<head>` секцию `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

### 🛠️ Обслуживание

#### Регулярные обновления:

1. **Контент:** Обновляйте проекты и достижения
2. **Изображения:** Добавляйте новые фотографии работ
3. **Безопасность:** Следите за обновлениями браузеров
4. **Производительность:** Мониторьте скорость загрузки

#### Резервное копирование:

```bash
# Создание резервной копии
tar -czf sugrue-backup-$(date +%Y%m%d).tar.gz sugrue-redesigned/

# Автоматическое резервное копирование (cron)
0 2 * * 0 tar -czf /backups/sugrue-backup-$(date +\%Y\%m\%d).tar.gz /path/to/sugrue-redesigned/
```

### 📞 Поддержка

При возникновении проблем:

1. **Проверьте консоль браузера** (F12)
2. **Убедитесь в правильности путей** к файлам
3. **Проверьте права доступа** к файлам на сервере
4. **Тестируйте в разных браузерах**

### 🎯 Чек-лист развертывания

- [ ] Все файлы загружены на сервер
- [ ] Изображения оптимизированы
- [ ] Контактная информация актуальна
- [ ] Сайт протестирован на мобильных устройствах
- [ ] Настроена аналитика
- [ ] Проверена скорость загрузки
- [ ] Настроено резервное копирование
- [ ] SSL сертификат установлен (HTTPS)

---

**Готово!** 🎉 Ваш премиум веб-сайт Sugrue Excavation Ltd готов к работе!

