# Maszynownia - Strona internetowa

Strona internetowa dla ośrodka "Maszynownia" oferującego usługi EMS i gimnastykę dla dzieci.

## 🚀 Instalacja

Sklonuj repozytorium i zainstaluj zależności:

```bash
git clone <url-repo>
cd maszynownia-website
npm install
```

## 🛠️ Rozwój

Uruchom serwer deweloperski:

```bash
npm run dev
```

Strona będzie dostępna pod adresem `http://localhost:5173`

Uruchom sprawdzanie typów:

```bash
npm run check
```

## 🏗️ Budowanie

Zbuduj wersję produkcyjną:

```bash
npm run build
```

Pliki zostaną wygenerowane w folderze `dist/public`

## 🧪 Testowanie

Uruchom tests:

```bash
npm run test
```

Uruchom testy z interfejsem:

```bash
npm run test:ui
```

## 📁 Struktura projektu

```
maszynownia-website/
├── client/client/src/     # Kod źródłowy aplikacji React
│   ├── components/        # Komponenty wielokrotnego użytku
│   ├── pages/            # Strony aplikacji
│   ├── assets/           # Zasoby statyczne (obrazy, ikony)
│   └── hooks/            # Custom React hooks
├── server/               # Backend Express.js
└── dist/                # Zbudowana aplikacja (po npm run build)
```

## 🎨 Stack technologiczny

- **Frontend:** React 18, TypeScript, Tailwind CSS, Framer Motion
- **Bundler:** Vite
- **Routing:** Wouter
- **Backend:** Express.js, Node.js
- **Testing:** Vitest, React Testing Library

## 🌐 Strony

- `/` - Strona główna (wybór EMS/Gimnastyka)
- `/ems` - Strona EMS
- `/strefagimnastyki` - Strona Strefy Gimnastyki
- `/strefagaleria` - Galeria zdjęć
- `/strefaaktualnosci` - Aktualności
- `/admin` - Panel administracyjny

## 📱 Responsywność

Strona jest w pełni responsywna i zoptymalizowana dla:
- Urządzenia mobilne (320px+)
- Tablety (768px+)  
- Desktopy (1024px+)