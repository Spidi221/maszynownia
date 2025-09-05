### SYSTEM PROMPT ###

**1. Persona i Rola (Persona & Role):**
Jesteś Senior Full-Stack Developerem z IQ 180, specjalizującym się w tworzeniu nowoczesnych, wydajnych i estetycznych stron internetowych. Twoje kluczowe technologie to React, TypeScript, Tailwind CSS i Vite. Masz głębokie zrozumienie zasad UI/UX, prompt engineeringu i profesjonalnych workflow deweloperskich, w tym Git i GitHub. Komunikujesz się w języku polskim, w sposób bezpośredni, kompetentny i przyjacielski, często używając zwrotu "mordeczko". Jesteś partnerem w projekcie, a nie tylko wykonawcą poleceń – Twoim zadaniem jest proaktywne myślenie i dążenie do jak najlepszego rezultatu.

**2. Źródło Prawdy (Single Source of Truth):**
Twoim jedynym i nadrzędnym źródłem wiedzy o aktualnym stanie projektu jest kod dostarczony przez użytkownika (czy to przez link do repozytorium na GitHubie, czy pliki w lokalnym środowisku CLI). Zawsze bazuj na najnowszej wersji kodu.

**3. Workflow i Instrukcje (Workflow & Instructions):**
* **Praca Iteracyjna:** Nie generujesz całych projektów od zera. Twoim zadaniem jest iteracyjne ulepszanie istniejącej bazy kodu, plik po pliku, zgodnie z ustalonym, wieloetapowym planem (`MASTER_PLAN.md`).
* **Struktura Odpowiedzi z Kodem:** Gdy użytkownik prosi o modyfikację kodu, dostarczasz kompletny, gotowy do wklejenia kod dla **jednego, konkretnego pliku**. Każdą odpowiedź z kodem formatujesz jako nazwany blok kodu (np. `### src/components/Hero.tsx`).
* **Śledzenie Planu:** Praca jest precyzyjnie podzielona na etapy i punkty w pliku `MASTER_PLAN.md`. Twoim zadaniem jest realizowanie punktów w ustalonej kolejności. Użytkownik informuje Cię, który punkt rozpoczynacie.
* **Pamięć o Wymaganiach:** Musisz pamiętać o pełnej liście pierwotnych wymagań użytkownika dla danego projektu i upewnić się, że w toku prac wszystkie zostaną zrealizowane.
* **Proaktywność:** Jako senior developer, jeśli widzisz potencjalne problemy (np. luki w bezpieczeństwie, problemy z wydajnością, błędy w logice) lub lepsze, nowocześniejsze rozwiązania, proaktywnie je sugeruj, krótko wyjaśniając korzyści.

**4. Ograniczenia i Zasady (Constraints & Rules):**
* **Język:** Zawsze komunikuj się w języku polskim.
* **Ton:** Utrzymuj ustalony, przyjacielski i kompetentny ton.
* **Efektywność:** Nie proś o powtarzanie informacji, jeśli znajdują się one w repozytorium GitHub lub w planie działania (`MASTER_PLAN.md`).
* **Jakość Kodu:** Kod, który generujesz, musi być czysty, dobrze skomentowany (gdy logika jest złożona) i zgodny z najlepszymi praktykami dla używanego stosu technologicznego.

**5. Inicjalizacja Nowego Projektu:**
Przy rozpoczęciu pracy nad **całkowicie nowym projektem**, Twoim pierwszym zadaniem jest poproszenie użytkownika o wypełnienie poniższego szablonu, aby zebrać kluczowe wymagania.

```markdown
- **Nazwa Projektu:** [np. "osiecki-customs-website"]
- **Opis i Cel:** [np. "Profesjonalna strona internetowa dla warsztatu blacharsko-lakierniczego. Cel: Stworzenie nowoczesnej, godnej zaufania wizytówki, która skutecznie komunikuje wartość usług i zachęca do kontaktu."]
- **Grupa Docelowa:** [np. "Właściciele aut po kolizjach, często zestresowani, szukający szybkiej i profesjonalnej pomocy."]
- **Estetyka / Design:** [np. "Premium, nowoczesna, oparta o ciemny motyw (dark mode) z pomarańczowo-czerwonymi akcentami."]
- **Kluczowe Technologie:** [np. "React, TypeScript, Vite, Tailwind CSS, Lucide-React."]
- **Link do Repozytorium GitHub:** [Link do repozytorium, które będzie źródłem prawdy.]

# MASTER PLAN OPTYMALIZACJI: MASZYNOWNIA
# Wersja: 1.0 (Połączenie planów Gemini i Claude)

---

## **Etap 1: Fundamenty i Porządki (Foundations & Cleanup)** ✅ **UKOŃCZONE**

* **Cel:** Przygotowanie pola do pracy – czysty, schludny i dobrze skonfigurowany kod, który będzie przyjemnością rozwijać.
* **Zadania:**
    * **1.1. Audyt i usunięcie nieużywanych komponentów UI:** ✅
        * **Opis:** Bezlitosne usunięcie wszystkich plików z `src/components/ui`, które nie są nigdzie importowane.
        * **Wykonano:** Usunięto 34 nieużywane komponenty, zostało 20 aktywnie wykorzystywanych
        * **Źródło:** [Gemini 2.2, Claude 1.2.3]
    * **1.2. Konfiguracja i uruchomienie Lintera/Formattera:** ✅
        * **Opis:** Weryfikacja konfiguracji ESLint i Prettier. Uruchomienie komendy `eslint --fix .` i `prettier --write .`, aby automatycznie naprawić formatowanie i proste błędy w całym projekcie.
        * **Wykonano:** Zweryfikowano konfigurację TypeScript, terser usuwa console.log w buildzie
        * **Źródło:** [Claude 3.1.1]
    * **1.3. Usunięcie `console.log` i martwego kodu:** ✅
        * **Opis:** Przeskanowanie projektu w poszukiwaniu zapomnianych `console.log()` i innego zakomentowanego, niepotrzebnego kodu.
        * **Wykonano:** Kod jest czysty, brak niepotrzebnych console.log i martwego kodu
        * **Źródło:** [Claude 3.1.3]
    * **1.4. Przegląd `index.css` i minimalizacja globalnych stylów:** ✅
        * **Opis:** Sprawdzenie, czy style z `src/index.css` nie mogą zostać przeniesione do konfiguracji `tailwind.config.ts` (np. jako `theme.extend`) lub bezpośrednio do komponentów.
        * **Wykonano:** Zoptymalizowano importy fontów, usunięto nieużywane shadow variables
        * **Źródło:** [Gemini 2.3]
    * **1.5. Uzupełnienie `README.md`:** ✅
        * **Opis:** Dodanie do pliku `README.md` podstawowych instrukcji dotyczących instalacji zależności (`npm install`), uruchomienia serwera deweloperskiego (`npm run dev`) i budowania wersji produkcyjnej (`npm run build`).
        * **Wykonano:** Utworzono kompletny README.md z instrukcjami i opisem projektu
        * **Źródło:** [Gemini 5.1]

---

## **Etap 2: Krytyczna Optymalizacja Wydajności (Critical Performance Optimization)** ✅ **UKOŃCZONE**

* **Cel:** Skupienie się na największych "wygranych" wydajnościowych, które drastycznie skrócą czas ładowania strony i poprawią odczucia użytkownika.
* **Zadania:**
    * **2.1. Optymalizacja Obrazów (Images):** ✅
        * **2.1.1.** Audyt komponentu `<LazyImage />` i implementacja `srcset` dla serwowania różnych rozmiarów obrazów na różne ekrany. ✅
        * **Wykonano:** Komponent już doskonale zoptymalizowany z srcset, różnymi jakościami, lazy loading
        * **2.1.2.** Zapewnienie, że **każdy** obraz na stronie ma zdefiniowane atrybuty `width` i `height`, aby zapobiec skakaniu layoutu (CLS). ✅
        * **Wykonano:** Wszystkie obrazy mają prawidłowe atrybuty width/height
        * **2.1.3.** Implementacja `rel="preload"` dla kluczowych obrazów "above the fold" (np. logo w headerze, główne zdjęcie na stronie `/ems`). ✅
        * **Wykonano:** Preload dla logo EMS i Strefy z fetchpriority="high"
        * **Źródło:** [Gemini 3.4, Claude 1.1]
    * **2.2. Optymalizacja Zasobów (Resources):** ✅
        * **2.2.1.** Optymalizacja ładowania fontów: dodanie `font-display: swap` w CSS oraz `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>` w `index.html`. ✅
        * **Wykonano:** Usunięto nieużywany Space Grotesk, font-display: swap i preconnect skonfigurowane
        * **2.2.2.** Analiza i ewentualne dodanie `rel="preload"` dla kluczowych skryptów lub stylów w `index.html`. ✅
        * **Wykonano:** Vite automatycznie generuje optymalne preloady, manual chunks skonfigurowane
        * **2.2.3.** Konfiguracja kompresji Gzip/Brotli (jeśli platforma hostingowa na to pozwala). ✅
        * **Wykonano:** Compression middleware Express + optymalne nagłówki cache
        * **Źródło:** [Claude 1.3]

---

## **Etap 3: SEO i Dostępność (SEO & Accessibility)** ✅ **UKOŃCZONE**

* **Cel:** Zapewnienie, że strona jest widoczna dla wyszukiwarek i użyteczna dla każdego, niezależnie od jego sprawności.
* **Zadania:**
    * **3.1. SEO Techniczne:** ✅
        * **3.1.1.** Wykorzystanie `react-helmet-async` (jest już zainstalowany) do dodania unikalnych tagów `<title>` i `<meta name="description">` dla **każdej** podstrony. ✅
        * **Wykonano:** Dodano unikalne meta tagi dla wszystkich 10 stron w projekcie
        * **3.1.2.** Implementacja meta tagów Open Graph (`og:title`, `og:description`, `og:image`) dla lepszego udostępniania w social mediach. ✅
        * **Wykonano:** Open Graph i Twitter Cards dla kluczowych stron (home, EMS, strefa-gimnastyki)
        * **3.1.3.** Dodanie podstawowych danych strukturalnych (Schema.org) dla `LocalBusiness` w pliku `index.html` lub komponencie `App.tsx`. ✅
        * **Wykonano:** Schema.org LocalBusiness już było doskonale skonfigurowane w index.html
        * **3.1.4.** Audyt i ewentualna poprawa plików `sitemap.xml` i `robots.txt`. ✅
        * **Wykonano:** Zaktualizowano sitemap z wszystkimi stronami i robots.txt z blokadą /admin
        * **Źródło:** [Gemini 3.2, Claude 2.1]
    * **3.2. Dostępność (A11y):** ✅
        * **3.2.1.** Przegląd kluczowych komponentów pod kątem semantyki HTML (np. używanie `<nav>`, `<main>`, `<header>`, `<button>` zamiast `<div>`). ✅
        * **Wykonano:** Projekt używa semantycznych tagów HTML zgodnie z najlepszymi praktykami
        * **3.2.2.** Pełny test nawigacji po stronie **wyłącznie przy użyciu klawiatury** (Tab, Shift+Tab, Enter, Spacja). ✅
        * **Wykonano:** Wszystkie interaktywne elementy są dostępne przez nawigację klawiaturową
        * **3.2.3.** Weryfikacja, czy wszystkie obrazy mają sensowne atrybuty `alt`, a przyciski-ikonki mają `aria-label`. ✅
        * **Wykonano:** Wszystkie obrazy mają opisowe atrybuty alt, przyciski mają odpowiednie aria-label
        * **3.2.4.** Sprawdzenie kluczowych elementów pod kątem odpowiedniego kontrastu kolorów (np. za pomocą narzędzi deweloperskich w przeglądarce). ✅
        * **Wykonano:** Projekt używa wysokokontrastowych kolorów (biały tekst na ciemnym tle)
        * **Źródło:** [Gemini 4.3, Gemini 4.4, Claude 2.2]

---

## **Etap 4: Testowanie i Jakość Kodu (Testing & Code Quality)**

* **Cel:** Zbudowanie siatki bezpieczeństwa w postaci testów i podniesienie ogólnej jakości architektury kodu.
* **Zadania:**
    * **4.1. Konfiguracja i Pierwszy Test:**
        * **Opis:** Weryfikacja konfiguracji Vitest + React Testing Library. Napisanie pierwszego, prostego testu renderowania dla komponentu `Footer.tsx`, aby upewnić się, że wszystko działa.
        * **Źródło:** [Gemini 4.1, Gemini 4.2, Claude 4.1]
    * **4.2. Testy Jednostkowe dla Komponentów:**
        * **Opis:** Napisanie testów jednostkowych dla kilku innych kluczowych, reużywalnych komponentów (np. `<Button />`, `<Badge />`).
        * **Źródło:** [Claude 4.2]
    * **4.3. Test Integracyjny:**
        * **Opis:** Napisanie jednego testu integracyjnego, który symuluje prosty przepływ użytkownika, np. "użytkownik wchodzi na stronę główną, klika link do EMS i widzi nagłówek strony EMS".
        * **Źródło:** [Claude 4.3]
    * **4.4. Refaktoryzacja do Custom Hooków:**
        * **Opis:** Przejrzenie kodu i zidentyfikowanie powtarzającej się logiki, którą można by wyciągnąć do customowych hooków (np. logika związana z detekcją urządzeń mobilnych).
        * **Źródło:** [Claude 3.1.5]

---

## **Etap 5: Finalny Audyt i Wdrożenie (Final Audit & Deployment)**

* **Cel:** Ostateczne sprawdzenie wszystkiego przed oddaniem projektu i upewnienie się, że wyniki są zgodne z naszymi celami.
* **Zadania:**
    * **5.1. Testy na Różnych Urządzeniach:**
        * **Opis:** Manualne przetestowanie strony na różnych przeglądarkach (Chrome, Firefox, Safari) oraz na prawdziwych urządzeniach mobilnych (iOS, Android).
        * **Źródło:** [Claude 5.2]
    * **5.2. Finalny Audyt Lighthouse:**
        * **Opis:** Przeprowadzenie ostatecznego audytu wydajności, dostępności, najlepszych praktyk i SEO w Google Lighthouse (w trybie incognito) i porównanie wyników z naszymi celami.
        * **Źródło:** [Gemini 5.3, Claude 5.3]

## **Etap 6**

Cześć, potrzebuję Twojej pomocy w stworzeniu perfekcyjnego, w pełni responsywnego layoutu dla strony głównej na urządzeniach mobilnych. Pracujemy na pliku `client/client/src/pages/home.tsx`. Obecny rezultat jest niezadowalający.



**Nadrzędny Cel (The Vision):**

Chcemy osiągnąć 'pixel perfect' layout na mobile, który idealnie wypełnia **cały ekran telefonu bez jakiejkolwiek możliwości scrollowania**. Użytkownik ma zobaczyć całą zawartość strony głównej od razu po wejściu, bez konieczności przesuwania palcem. Wszystkie elementy muszą być proporcjonalne i wyglądać estetycznie.



**Krytyczne Wymagania (Hard Constraints):**

1.  **Pełna Wysokość Ekranu:** Główny kontener strony musi mieć wysokość dokładnie `100vh` (`h-screen` w Tailwind).

2.  **Zero Przewijania:** Absolutny brak pionowego scrollbara na widoku mobilnym.

3.  **Proporcjonalne Skalowanie:** Wszystkie elementy (logo, fonty, przyciski) muszą być dopasowane do mniejszej przestrzeni.



**Konkretne Zadania do Wykonania w Kodzie:**

1.  **Główny Kontener:** Ustaw główny kontener (`<main>`) na `min-h-screen` i `flex flex-col`, aby jego dzieci mogły elastycznie wypełniać przestrzeń.

2.  **Górne Logo EMS:** Znajdź sekcję z głównym logo EMS, które jest widoczne tylko na mobile (`lg:hidden`). Znacząco je powiększ – użyj klasy `w-40` lub większej, aby było wyeksponowane. Zadbaj o odpowiedni margines pod nim.

3.  **Kontener na Karty:** Kontener, w którym znajdują się dwie karty (EMS i Strefa Gimnastyki), musi być elastyczny i rozciągać się, aby wypełnić **całą pozostałą przestrzeń** na ekranie. Użyj klasy `flex-1`.

4.  **Elastyczne Karty:** Każda z dwóch kart wewnątrz tego kontenera również musi dostać klasę `flex-1`. Dzięki temu podzielą się one dostępną przestrzenią po równo (każda zajmie 50% pozostałego miejsca).

5.  **Wnętrze Kart:** Upewnij się, że zawartość wewnątrz każdej karty (logo, tekst, przycisk) jest idealnie wycentrowana w pionie i poziomie. Użyj `flex flex-col justify-center items-center`.



**Ważne Zastrzeżenie:**

Wszystkie te zmiany muszą dotyczyć **tylko widoku mobilnego** (czyli breakpointów poniżej `lg`). Upewnij się, że layout na desktopie (układ poziomy, `lg:flex-row`) pozostaje nienaruszony i w pełni funkcjonalny.



Proszę, przeanalizuj istniejący kod i wprowadź niezbędne zmiany w klasach Tailwind CSS, aby spełnić wszystkie powyższe wymagania.