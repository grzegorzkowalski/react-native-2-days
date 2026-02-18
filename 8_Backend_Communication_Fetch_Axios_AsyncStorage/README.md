## Pobierz adres IP

1. Wyślij żądanie o swój adres IP i poczekaj na odpowiedź.
2. Skorzystaj z serwisu `https://www.ipify.org/`.
3. Po otrzymaniu odpowiedzi odpytaj serwis `https://ip-api.com/` o szczegóły dotyczące Twojego adresu IP.
4. Gdy dane z drugiego serwisu zostaną zwrócone, wyrenderuj je.
5. Nie renderuj komponentu dopóki nie zostanie odebrana druga odpowiedź.

<details>
<summary>Przykładowe rozwiązanie</summary>

```typescript
// types/ip.types.ts
export interface IpInfo {
  ip: string;
  country: string;
  city: string;
  timezone: string;
}

// app/index.tsx
import { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

export default function IpScreen() {
  const [ipInfo, setIpInfo] = useState<IpInfo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchIpInfo();
  }, []);

  const fetchIpInfo = async () => {
    try {
      const ipResponse = await fetch('https://api.ipify.org?format=json');
      const { ip } = await ipResponse.json();
      
      const detailsResponse = await fetch(`https://ip-api.com/json/${ip}`);
      const details = await detailsResponse.json();
      
      setIpInfo({
        ip,
        country: details.country,
        city: details.city,
        timezone: details.timezone
      });
    } catch (error) {
      console.error('Błąd podczas pobierania informacji o IP:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View>
      <Text>IP: {ipInfo?.ip}</Text>
      <Text>Kraj: {ipInfo?.country}</Text>
      <Text>Miasto: {ipInfo?.city}</Text>
      <Text>Strefa czasowa: {ipInfo?.timezone}</Text>
    </View>
  );
}
```
</details>

---

## Aplikacja pogodowa (Pogodynka)

### Opis projektu
Stwórz mobilną aplikację pogodową z użyciem nowoczesnego stosu technologicznego: Expo Router, Axios i React Query.

### Wymagania techniczne

#### 1. Inicjalizacja projektu

```bash
npx create-expo-app@latest weather-app --template
cd weather-app
```

#### 2. Instalacja wymaganych pakietów

```bash
# Axios do zapytań HTTP
npm install axios

# React Query do zarządzania stanem serwera
npm install @tanstack/react-query
```

#### 3. Konfiguracja projektu

Utwórz plik `.env` w głównym katalogu projektu:

```env
EXPO_PUBLIC_WEATHER_API_KEY=twój_klucz_openweather
EXPO_PUBLIC_PIXABAY_API_KEY=twój_klucz_pixabay
```

### Kroki realizacji zadania

1. Utwórz nową aplikację Expo z szablonem TypeScript.

2. Skonfiguruj nawigację z 3 ekranami/zakładkami: `Home`, `CityWeather`, `FindWeather` używając Expo Router.

3. Na każdym ekranie przygotuj przyciski umożliwiające nawigację między ekranami.

4. W komponencie Home utwórz tablicę z listą wybranych miast (np. Warszawa, Kraków, Gdańsk, Wrocław, Poznań, Łódź).

5. Użyj komponentu `FlatList` do wyrenderowania listy miast z przyciskiem przekierowującym do podstrony `CityWeather`.

6. W przekierowaniu przekaż nazwę miasta jako parametr.

7. Utwórz konto na portalu `https://openweathermap.org/api`.

8. W komponencie `CityWeather`, na podstawie przekazanej nazwy miasta, wykonaj zapytanie do powyższego API zwracające prognozę pogody przy użyciu Axios i React Query.

9. Wyświetl w komponencie: nazwę miasta, aktualną temperaturę i ogólny opis pogody.

10. Utwórz konto na portalu `https://pixabay.com/api/docs/`.

11. Na podstawie opisu pogody z Weather API wyślij zapytanie do portalu Pixabay i znajdź zdjęcie ilustrujące opisaną pogodę.

12. Wyświetl zdjęcie w komponencie.

13. W komponencie `FindWeather` utwórz `TextInput` i `Button`. Pozwól użytkownikowi wpisać nazwę miasta i zapisz ją w stanie komponentu.

14. Po naciśnięciu przycisku wyślij zapytanie do API o pogodę dla podanego miasta.

15. Jeśli pogoda dla podanego miasta zostanie znaleziona, wykonaj kroki z punktów 9–12.

16. Jeśli pogoda dla podanego miasta nie zostanie znaleziona, wyświetl komponent z komunikatem „Błąd 404: Brak dostępnych danych".

### Kluczowe funkcje do zaimplementowania

- **Konfiguracja Axios**: Tworzenie instancji axios z interceptorami do obsługi błędów
- **Hooki React Query**: Tworzenie własnych hooków `useWeather` i `useWeatherImage` do pobierania danych
- **Typy TypeScript**: Definiowanie odpowiednich interfejsów dla WeatherData i PixabayImage
- **Obsługa błędów**: Elegancka obsługa błędów 404 i problemów z siecią
- **Stany ładowania**: Wyświetlanie wskaźników ładowania podczas wywołań API
- **Cache zapytań**: Konfiguracja cache React Query

### Struktura projektu

```
weather-app/
├── app/
│   ├── _layout.tsx
│   ├── (tabs)/
│   │   ├── _layout.tsx
│   │   ├── index.tsx
│   │   ├── city-weather.tsx
│   │   └── find-weather.tsx
├── components/
│   ├── WeatherCard.tsx
│   └── ErrorMessage.tsx
├── services/
│   ├── api.ts
│   ├── weatherService.ts
│   └── pixabayService.ts
├── hooks/
│   ├── useWeather.ts
│   └── useWeatherImage.ts
├── types/
│   └── weather.types.ts
├── constants/
│   ├── cities.ts
│   └── config.ts
└── providers/
    └── QueryProvider.tsx
```

### Dodatkowe wyzwania

- Dodaj funkcję pull-to-refresh
- Zaimplementuj historię wyszukiwania przy użyciu AsyncStorage
- Dodaj konwersję jednostek (Celsjusz/Fahrenheit)
- Wyświetl rozszerzoną prognozę (5-dniową)
- Dodaj pogodę opartą na lokalizacji urządzenia (GPS)
- Zaimplementuj tryb offline z danymi z cache
- Dodaj alerty pogodowe i powiadomienia

---

## Dookoła świata!!!

1. Stwórz aplikację, której celem jest wyświetlenie listy wszystkich krajów na naszym globie. Aplikacja pobiera dane z publicznego API dostępnego pod adresem [Kliknij!](https://countrylayer.com/documentation/). Zapoznaj się z danymi pobranymi z API.

2. Musisz założyć darmowe konto, aby otrzymać klucz API [pod tym adresem](https://manage.countrylayer.com/signup/free).

3. Użyj komponentu `FlatList` do wyświetlenia listy krajów, flag i szczegółowych informacji o kraju.

4. Nie martw się, że nie wszystkie flagi są dostępne.

5. Sprawdź w konsoli, jakie dane otrzymujesz z serwera.

6. Potrzebujesz inspiracji:
    - Wyświetl stolicę kraju.
    - Wyświetl nazwę kraju w jego języku ojczystym.
    - Podaj przybliżoną odległość od stolicy kraju do Twojego rodzinnego miasta. Pobierz współrzędne swojego miasta z Google Maps, a współrzędne stolicy z pliku `capitalLangLong.js` w folderze `data`.

```javascript
function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  var R = 6371; // Promień Ziemi w km
  var dLat = deg2rad(lat2 - lat1);
  var dLon = deg2rad(lon2 - lon1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Odległość w km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}
```

7. Jeśli przekroczysz limit zapytań, dane są dodatkowo zapisane w folderze `data`.

### Wskazówki dotyczące nowoczesnej implementacji

- Użyj Expo Router do nawigacji
- Zaimplementuj z TypeScript dla bezpieczeństwa typów
- Użyj Axios z React Query do pobierania danych
- Przechowuj kraje w SQLite dla dostępu offline
- Buforuj odpowiedzi API, aby zminimalizować liczbę zapytań
- Twórz wielokrotnego użytku komponenty kart krajów
- Dodaj funkcję wyszukiwania i filtrowania
- Zaimplementuj paginację dla lepszej wydajności

---

## Fetch z nawigacją

1. Połącz się z https://jsonplaceholder.typicode.com/ i pobierz użytkowników, wysyłając zapytanie do odpowiedniego endpointu.

2. Wypisz w konsoli to, co otrzymałeś.

3. Przejdź przez dane odpowiedzi i wygeneruj element dla każdego użytkownika, wypełniając go odpowiednimi danymi.

4. Dodaj przycisk `pokaż-posty` do każdego elementu. Po kliknięciu takiego przycisku przejdź do nowego widoku i na podstawie przekazanego parametru pobierz i wyświetl listę postów danego użytkownika.

### Nowoczesna implementacja

- Użyj Expo Router do routingu opartego na plikach
- Utwórz `app/index.tsx` dla listy użytkowników
- Utwórz `app/posts/[userId].tsx` dla dynamicznych postów użytkownika
- Użyj Axios z React Query do pobierania danych
- Zaimplementuj interfejsy TypeScript dla typów User i Post
- Dodaj stany ładowania i obsługę błędów
- Użyj FlatList dla optymalnej wydajności renderowania

---

## Async Storage

1. Zainstaluj bibliotekę AsyncStorage: `npx expo install @react-native-async-storage/async-storage`

2. Zapisz swoje imię do AsyncStorage. Następnie pobierz je do stanu komponentu (zrób to również dla początkowej wartości `name` w useState).

3. Wewnątrz funkcji `handleGame` napisz logikę gry w kamień, papier, nożyce.

4. Po każdej grze zapisz informację o zwycięzcy do AsyncStorage. Uwaga: dane powinny być zapisywane do jednego klucza w formacie: `['Komputer wygrał', 'Imię wygrało', 'Komputer wygrał']` itp. Pamiętaj, że dane w AsyncStorage możesz zapisać jako ciąg znaków. Użyj funkcji `JSON.stringify` i `JSON.parse` do zapisywania i odczytywania historii.

5. Pokaż historię na ekranie – musisz przekazać ją z AsyncStorage do stanu.

6. Wyłącz aplikację i włącz ją ponownie, aby sprawdzić, czy dane zostały zachowane.

### Przewodnik implementacji

```typescript
import AsyncStorage from '@react-native-async-storage/async-storage';

type Choice = 'rock' | 'paper' | 'scissors';
type GameResult = string;

// Zapisz dane
const saveHistory = async (history: GameResult[]) => {
  try {
    await AsyncStorage.setItem('gameHistory', JSON.stringify(history));
  } catch (error) {
    console.error('Błąd podczas zapisywania historii:', error);
  }
};

// Wczytaj dane
const loadHistory = async (): Promise<GameResult[]> => {
  try {
    const saved = await AsyncStorage.getItem('gameHistory');
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error('Błąd podczas wczytywania historii:', error);
    return [];
  }
};
```

### Dodatkowe funkcje

- Dodaj statystyki gry (wygrane, przegrane, remisy)
- Zaimplementuj przycisk resetowania do wyczyszczenia historii
- Dodaj animacje dla wyborów w grze
- Stwórz tablicę wyników
- Dodaj efekty dźwiękowe

---

## Gra w stolice

1. Pamiętasz API z listą krajów z jednego z poprzednich zadań?

2. Losowo wybierz jeden klucz kraju z listy w zmiennej `countries`.

3. Wyślij zapytanie do API i pobierz informacje o kraju. Zapisz informacje do stanu i pokaż użytkownikowi nazwę kraju.

4. W polu input użytkownik może wpisać stolicę kraju. Sprawdź, czy jest prawidłowa – napisz logikę sprawdzania w funkcji `handleGame`.

5. Pokaż użytkownikowi informację o tym, czy podał prawidłową odpowiedź.

6. Dla ambitnych: Utwórz przycisk do restartu gry.

7. Dla ambitnych: Utwórz historię gry w AsyncStorage.

### Rozszerzona wersja z SQLite

Oprócz AsyncStorage do historii gry, użyj SQLite, aby:
- Przechowywać wszystkie dane krajów dla dostępu offline
- Śledzić szczegółowe statystyki gry
- Zaimplementować system najlepszych wyników
- Zapisywać znaczniki czasu dla każdej gry
- Tworzyć analizy (wskaźnik skuteczności, ulubione kraje itp.)

```typescript
import * as SQLite from 'expo-sqlite';

// Inicjalizacja bazy danych
const db = await SQLite.openDatabaseAsync('capitals.db');

await db.execAsync(`
  CREATE TABLE IF NOT EXISTS game_history (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    country TEXT,
    user_answer TEXT,
    correct_answer TEXT,
    is_correct INTEGER,
    timestamp INTEGER
  );
`);

// Zapisz wynik gry
await db.runAsync(
  'INSERT INTO game_history (country, user_answer, correct_answer, is_correct, timestamp) VALUES (?, ?, ?, ?, ?)',
  [country, userAnswer, correctAnswer, isCorrect ? 1 : 0, Date.now()]
);
```

### Funkcje gry

- Losowy wybór kraju
- Walidacja danych wejściowych
- Śledzenie punktów
- Licznik serii
- Poziomy trudności (kontynenty, regiony)
- System podpowiedzi
- Tryb na czas
- Obsługa wielu graczy

---
