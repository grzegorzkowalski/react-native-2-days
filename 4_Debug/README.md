# Zadanie 1: Rozumienie komunikatów w konsoli

**Cel:** Celem tego zadania jest ćwiczenie korzystania z podstawowych metod konsoli do wyświetlania różnych typów komunikatów.

## Opis

W folderze `App` w pliku `index.tsx` przećwicz używanie różnych metod konsoli, aby zrozumieć, jak wyglądają w konsoli:

1. Użyj `console.log()` do wyświetlenia zwykłego komunikatu, na przykład:
```javascript
console.log("Cześć! To jest zwykły komunikat log.");
```

2. Użyj `console.warn()` do wyświetlenia komunikatu ostrzegawczego (pojawi się na żółto), na przykład:
```javascript
console.warn("Ostrzeżenie: To jest testowy komunikat ostrzegawczy!");
```

3. Użyj `console.error()` do wyświetlenia komunikatu błędu (pojawi się na czerwono), na przykład:
```javascript
console.error("Błąd: To jest testowy komunikat błędu!");
```

4. Dodaj wiele komunikatów konsoli z różnymi informacjami, aby zobaczyć, jak układają się w konsoli.

## Cel praktyczny

Uruchom aplikację i otwórz konsolę (terminal, w którym działa Expo). Obserwuj różne kolory i formaty każdego typu komunikatu. Zrozum, która metoda konsoli jest odpowiednia w różnych sytuacjach (informacje, ostrzeżenia, błędy).

---

# Zadanie 2: Odkrywanie menu deweloperskiego

**Cel:** Celem tego zadania jest zapoznanie się z menu deweloperskim React Native i jego podstawowymi opcjami.

## Opis

Naucz się, jak uzyskać dostęp do menu deweloperskiego i poruszać się po nim w swojej aplikacji React Native.

## Kroki

1. **Otwórz menu deweloperskie:**
    - Przy użyciu Expo Go na fizycznym urządzeniu: potrząśnij urządzeniem
    - W symulatorze iOS: naciśnij `Cmd + D` (Mac) lub `Ctrl + D` (Windows/Linux)
    - W emulatorze Android: naciśnij `Cmd + M` (Mac) lub `Ctrl + M` (Windows/Linux)
    - W terminalu Expo CLI: naciśnij `m`

2. **Zapoznaj się z następującymi opcjami:**
    - **Reload**: ręczne przeładowanie aplikacji
    - **Toggle Performance Monitor**: włącz, aby zobaczyć FPS (klatki na sekundę) i zużycie pamięci na ekranie
    - **Toggle Element Inspector**: włącz, aby przeglądać elementy UI (więcej o tym później)
    - **Debug Remote JS**: otwiera narzędzia debugowania w przeglądarce

3. **Ćwicz przeładowanie:**
    - Zmień jakiś tekst w pliku `index.tsx`
    - Zapisz plik i obserwuj, jak Fast Refresh automatycznie aktualizuje aplikację
    - Spróbuj ręcznie przeładować aplikację za pomocą menu deweloperskiego

4. **Włącz monitor wydajności:**
    - Włącz Performance Monitor
    - Obserwuj wyświetlane wartości RAM i FPS
    - Pozostaw włączony podczas interakcji z aplikacją

## Cel praktyczny

Oswój się z korzystaniem z menu deweloperskiego i zrozum, jakie informacje dostarcza monitor wydajności. Będzie to Twoje główne narzędzie podczas tworzenia i debugowania aplikacji.

---

# Zadanie 3: Tworzenie pierwszego celowego błędu

**Cel:** Naucz się czytać i rozumieć komunikaty błędów, gdy coś pójdzie nie tak w kodzie.

## Opis

Celowo utwórz prosty błąd, aby zobaczyć, jak React Native wyświetla informacje o błędach, i naucz się go naprawiać.

## Kroki

1. W pliku `index.tsx` znajdź miejsce, gdzie znajduje się `<Text>` z jakąś zawartością.

2. **Utwórz błąd składniowy.**

3. Zapisz plik i obserwuj:
    - Aplikacja wyświetli **czerwony ekran błędu** (Redbox)
    - Uważnie przeczytaj komunikat błędu – powie Ci, co jest nie tak i gdzie
    - Zanotuj nazwę pliku i numer linii, w której wystąpił błąd

4. **Napraw błąd.**

## Cel praktyczny

Naucz się czytać komunikaty błędów bez obaw. Zrozum, że:
- Czerwone ekrany (Redbox) wskazują na krytyczne błędy, które zatrzymują działanie aplikacji
- Komunikaty błędów mówią dokładnie, co jest nie tak i gdzie szukać problemu
- Większość błędów to proste literówki lub brakujący kod, które łatwo naprawić, gdy zrozumie się komunikat
- Fast Refresh automatycznie zaktualizuje aplikację po naprawieniu błędu

Powodzenia z debugowaniem!
