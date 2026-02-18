# Zadanie 1: Wyświetlanie bieżącej daty i godziny

**Cel:** Ćwiczenie korzystania z wbudowanego obiektu JavaScript `Date` oraz formatowania danych daty do wyświetlenia w komponencie `Text`.

## Zadanie:
- Utwórz komponent funkcyjny o nazwie `DateDisplay`, który nie przyjmuje żadnych propsów.
- Wewnątrz komponentu użyj obiektu JavaScript `new Date()`, aby pobrać bieżącą datę.
- Sformatuj datę tak, aby wyświetlić dzień, miesiąc i rok (np. DD/MM/RRRR lub Dzień Miesiąc, Rok).
- Wyrenderuj sformatowaną datę wewnątrz komponentu `Text`.

---

# Zadanie 2: Komponent Image z źródłem i wymiarami

**Cel:** Ćwiczenie używania komponentu `Image`, ustawiania źródła (z internetu lub lokalnych zasobów) oraz definiowania jawnych wymiarów.

## Zadanie:
- Utwórz komponent o nazwie `MapImage`.
- Użyj komponentu `Image`, aby wyświetlić mapę Polski (użyj dowolnego publicznie dostępnego URL jako źródła obrazu).
- Zdefiniuj jawne style szerokości i wysokości (np. 300 szerokości i 200 wysokości), aby obraz był wyświetlany poprawnie.

---

# Zadanie 3: Stylowanie tekstu z zagnieżdżaniem

**Cel:** Ćwiczenie stylowania elementów tekstowych za pomocą zagnieżdżonych komponentów `Text` w celu uzyskania efektów pogrubienia, kursywy i koloru – React Native nie obsługuje standardowych tagów HTML jak `<b>` czy `<i>`.

## Zadanie:
Wyświetl poniższy tekst z odpowiednim stylowaniem:

*„Pizza to bardzo smaczne włoskie danie. Przygotowuje się ją z ciasta drożdżowego. Na ciasto wylewa się sos pomidorowy. Na wierzchu układa się składniki: kiełbasę, żółty ser, oliwki, paprykę. Istnieje wiele rodzajów pizzy – może być z mięsem, bezmięsna, rybna lub słodka z ananasem."*

Upewnij się, że:
- Lista składników (kiełbasa, żółty ser, oliwki, papryka) jest **pogrubiona**.
- Słowo *pizza* (oba wystąpienia) jest zapisane *kursywą* (lub pogrubioną kursywą, jeśli stylowanie na to pozwala).
- Słowo *ananas* jest wyświetlone w kolorze żółtym.

---

# Zadanie 4: Odtworzenie układu Flexbox

**Cel:** Opanowanie podstawowych właściwości Flexbox (`flexDirection`, `justifyContent`, `alignItems`) i używania `StyleSheet` do odwzorowania złożonego układu.

## Zadanie:
Używając obiektu `StyleSheet` i komponentu `View`, odtwórz następujący układ bloków:
- Główny kontener wypełniający cały ekran.
- Jeden niebieski prostokąt na górze (np. `flex: 1`).
- Jeden czerwony prostokąt pośrodku (np. `flex: 2`).
- Wiersz na dole (np. `flex: 1`) zawierający dwa równej wielkości żółte prostokąty obok siebie.

---

# Zadanie 5: Struktura komponentów funkcyjnych i klasowych

**Cel:** Ćwiczenie tworzenia i integrowania komponentów funkcyjnych oraz klasowych z użyciem nowoczesnych konwencji nazewnictwa i interfejsów TypeScript.

## Zadanie:
1. Utwórz komponent funkcyjny o nazwie `UserName` (używając interfejsu), który wyświetla Twoje imię.

2. Utwórz komponent klasowy o nazwie `UserSurname` (używając `Component` z React), który wyświetla Twoje nazwisko lub pseudonim.

3. Zaimportuj oba komponenty do głównego pliku `index.tsx` i wyrenderuj je.

4. Uruchom aplikację za pomocą Expo / emulatora Android / podglądu Web, aby zweryfikować wynik.

---

# Zadanie 6: Zagnieżdżone komponenty i izolacja stylów

**Cel:** Ćwiczenie kompozycji komponentów i stosowania izolowanych stylów za pomocą obiektu `StyleSheet.create` i układu flex.

## Zadanie:
- Utwórz wielokrotnego użytku komponent o nazwie `ColorBlock`, który przyjmuje prop `color: string` oraz prop `size: number`.
- W głównym komponencie funkcyjnym `LayoutWithBlocks` wyrenderuj trzy instancje `ColorBlock` z różnymi kolorami (np. Czerwony, Zielony, Niebieski).
- Upewnij się, że każda instancja `ColorBlock` ma zewnętrzny margines 10px i stały rozmiar (np. 80x80).
- Użyj kontenera `View` z `flexDirection: 'row'` w `LayoutWithBlocks`, aby wyświetlić je poziomo.

---

# Zadanie 7: Przekazywanie danych przez propsy i destrukturyzacja

**Cel:** Ćwiczenie przekazywania złożonych struktur danych przez propsy komponentów oraz stosowania destrukturyzacji obiektów dla czystszego kodu.

## Zadanie:
- W `index.tsx` utwórz interfejs TypeScript oraz obiekt o nazwie `inviteData` zawierający szczegóły urodzinowego przyjęcia:
    - `date: string`
    - `time: string`
    - `location: string`
    - `dressCode: string`
- Utwórz komponent funkcyjny o nazwie `InvitationCard`, który odbiera te pola danych przez propsy.
- Użyj destrukturyzacji na liście parametrów komponentu `InvitationCard` (`({ date, time, location, dressCode }) => ...`), aby uzyskać dostęp do propsów.
- Wyświetl treść zaproszenia i wszystkie pola danych w sposób czytelny wewnątrz `InvitationCard`.

---

# Zadanie 8: Wyświetlanie danych stanu początkowego (przed hookami)

**Cel:** Stworzenie punktu wyjścia do wyświetlania dynamicznych danych poprzez przekazanie migawki danych czasu przez propsy.

## Zadanie:
- W `index.tsx` utwórz zmienną `initialDateTime` i przypisz jej bieżącą datę i godzinę sformatowaną jako ciąg znaków za pomocą obiektu `Date()` i metody takiej jak `toLocaleTimeString()` lub `toLocaleString()`.
- Utwórz komponent funkcyjny `DataTimer`, który przyjmuje prop `currentTime: string`.
- Przekaż zmienną `initialDateTime` do komponentu `DataTimer` i wyświetl ciąg znaków z czasem/datą.

---

# Zadanie 9: Zegar cyfrowy w czasie rzeczywistym (hooki: useState i useEffect)

**Cel:** Wprowadzenie zarządzania stanem (`useState`) i efektów ubocznych (`useEffect`) z czyszczeniem (`setInterval`) w celu stworzenia dynamicznie aktualizowanego interfejsu.

## Zadanie:
- Zmodyfikuj poprzednie zadanie, używając `index.tsx` jako głównego komponentu.
- Dodaj hook `useState` do przechowywania ciągu znaków bieżącego czasu. Zainicjalizuj stan bieżącym czasem.
- Użyj hooka `useEffect`, aby uruchomić efekt uboczny raz po zamontowaniu komponentu (tablica zależności `[]`).
- Wewnątrz `useEffect` użyj `setInterval` (np. co 1000ms), aby aktualizować stan nowym ciągiem znaków czasu.
- Pamiętaj, aby zwrócić funkcję czyszczącą z `useEffect`, która wyczyści interwał przy odmontowaniu komponentu.
- Przekaż wartość stanu (zamiast statycznej zmiennej) do komponentu `DataTimer`.

**Wynik:** Stworzyłeś/aś działający zegar cyfrowy! 🕑

---

# Zadanie 10: Aktualizacja stanu przez interakcję użytkownika

**Cel:** Ćwiczenie używania handlera `onPress` na przycisku do aktualizowania stanu komponentu nadrzędnego dynamiczną wartością.

## Zadanie:
- W `index.tsx` zainicjalizuj zmienną stanu `randomNumber` (np. z wartością początkową 0).
- Utwórz komponent funkcyjny o nazwie `RandomNumberGenerator`.
- Wewnątrz `RandomNumberGenerator` umieść komponent `Button`, którego zadaniem jest generowanie nowej losowej liczby.
- Przekaż funkcję zwrotną (setter z `useState`) z `index.tsx` jako prop do `RandomNumberGenerator`.
- W handlerze `onPress` przycisku wywołaj przekazaną funkcję zwrotną, aby zaktualizować stan rodzica losową liczbą całkowitą z zakresu od 1 do 10.
    - **Wskazówka:** `Math.floor(Math.random() * (10 - 1 + 1) + 1)`
- Wyświetl bieżącą wartość `randomNumber` ze stanu `index.tsx`.
