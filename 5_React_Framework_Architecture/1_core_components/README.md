# Przykłady podstawowych komponentów React Native

Ten projekt demonstruje kompleksowe przykłady podstawowych komponentów React Native z interaktywnymi demonstracjami i treściami edukacyjnymi.

## 🚀 Pierwsze kroki

### Wymagania wstępne
- Node.js (v16 lub wyższy)
- npm lub yarn
- Expo CLI
- Android Studio (do tworzenia aplikacji na Android)
- Xcode (do tworzenia aplikacji na iOS)

### Instalacja

1. Przejdź do katalogu projektu:
```bash
cd workspace/core_components
```

2. Zainstaluj zależności:
```bash
npm install
# lub
yarn install
```

3. Uruchom serwer deweloperski:
```bash
npm start
# lub
yarn start
```

4. Uruchom na wybranej platformie:
```bash
# Android
npm run android

# iOS
npm run ios

# Web
npm run web
```

## 📱 Omawiane komponenty

### 1. **View**
- Podstawowy komponent kontenera
- Układy Flexbox
- Stylowanie i pozycjonowanie
- Efekty obramowania i cienia

### 2. **Text**
- Wyświetlanie i stylowanie tekstu
- Rodziny i grubości czcionek
- Wyrównanie i dekoracja tekstu
- Zagnieżdżone komponenty tekstowe

### 3. **ScrollView**
- Przewijalne kontenery treści
- Przewijanie poziome i pionowe
- Kontrolka odświeżania
- Wskaźniki przewijania

### 4. **FlatList**
- Listy zoptymalizowane pod względem wydajności
- Renderowanie i separacja elementów
- Funkcja przeciągnij-aby-odświeżyć
- Wzorce ładowania kolejnych danych

### 5. **SectionList**
- Listy z nagłówkami i sekcjami
- Przyklejone nagłówki
- Separatory sekcji
- Złożone struktury danych

### 6. **Komponenty dotykowe**
- TouchableOpacity
- TouchableHighlight
- TouchableWithoutFeedback
- Pressable (nowoczesna alternatywa)

### 7. **Image**
- Obrazy lokalne i zdalne
- Różne tryby dopasowania
- Stany ładowania i obsługa błędów
- Tła z obrazem

### 8. **TextInput**
- Pola wprowadzania tekstu
- Różne typy klawiatury
- Walidacja danych wejściowych
- Obsługa formularzy

### 9. **Modal**
- Nakładkowe okna dialogowe
- Różne typy animacji
- Niestandardowe stylowanie
- Dolne arkusze (bottom sheets)

### 10. **ActivityIndicator**
- Animacje ładowania (spinnery)
- Różne rozmiary i kolory
- Stany ładowania
- Wskaźniki postępu

## 🎯 Kluczowe funkcje

- **Interaktywne przykłady**: Każdy komponent zawiera działające, interaktywne demonstracje
- **Kompleksowe omówienie**: Przykłady prezentują różne propsy, opcje stylowania i przypadki użycia
- **Treści edukacyjne**: Wyjaśnienia najlepszych praktyk i popularnych wzorców
- **Obsługa TypeScript**: Pełna implementacja TypeScript z odpowiednim typowaniem
- **Responsywny design**: Przykłady działają na różnych rozmiarach ekranów
- **Nowoczesne wzorce**: Korzysta z aktualnych najlepszych praktyk React Native

## 📂 Struktura projektu

```
core_components/
├── app/
│   ├── (tabs)/
│   │   ├── index.tsx          # Główny ekran komponentów
│   │   ├── two.tsx            # Ekran informacyjny
│   │   └── _layout.tsx        # Nawigacja zakładkowa
│   ├── _layout.tsx            # Główny layout
│   └── +not-found.tsx
├── components/
│   ├── ViewExample.tsx        # Przykłady komponentu View
│   ├── TextExample.tsx        # Przykłady komponentu Text
│   ├── ScrollViewExample.tsx  # Przykłady ScrollView
│   ├── FlatListExample.tsx    # Przykłady FlatList
│   ├── SectionListExample.tsx # Przykłady SectionList
│   ├── TouchableExample.tsx   # Komponenty dotykowe
│   ├── ImageExample.tsx       # Przykłady komponentu Image
│   ├── TextInputExample.tsx   # Przykłady TextInput
│   ├── ModalExample.tsx       # Przykłady Modal
│   ├── ActivityIndicatorExample.tsx # Przykłady ActivityIndicator
│   ├── CoreComponentsExamples.tsx # Główny komponent nawigacyjny
│   └── index.ts               # Eksporty komponentów
├── constants/
├── assets/
├── package.json
├── tsconfig.json
└── README.md
```

## 🛠 Rozwój projektu

### Dodawanie nowych przykładów

1. Utwórz nowy plik komponentu w katalogu `components/`
2. Postępuj według istniejącego wzorca z sekcjami i stylowaniem
3. Dodaj komponent do `CoreComponentsExamples.tsx`
4. Zaktualizuj eksporty w `components/index.ts`

### Wytyczne dotyczące stylowania

- Używaj TypeScript dla wszystkich komponentów
- Stosuj najlepsze praktyki stylowania React Native
- Dodawaj interaktywne elementy tam, gdzie to stosowne
- Zapewniaj czytelne tytuły sekcji i opisy

## 📚 Zasoby edukacyjne

Każdy przykład komponentu zawiera:

- **Demonstrację propsów**: Pokazuje różne kombinacje propsów
- **Przykłady stylowania**: Różne podejścia do stylowania
- **Elementy interaktywne**: Przyciski, pola wejściowe i obsługę dotyku
- **Najlepsze praktyki**: Popularne wzorce i rekomendacje
- **Obsługę błędów**: Stany ładowania i scenariusze błędów

---

**Miłej nauki! 🎉**

Eksploruj każdy komponent, wchodź w interakcję z przykładami i rozwijaj swoje umiejętności w React Native!
