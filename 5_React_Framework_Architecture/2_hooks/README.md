# Ćwiczenia z hooków React Native

## Ćwiczenie 1: useState – Przełączanie koloru przycisku
**Plik:** `components/UseStateExample.tsx`

Przeanalizuj komponent w pliku. Użyj stanu do zdefiniowania koloru przycisku. Dodaj zdarzenie, które zmieni kolor przycisku po kliknięciu.

**Cel:** Ćwiczenie zarządzania stanem komponentu za pomocą `useState` i obsługi interakcji użytkownika.

---

## Ćwiczenie 2: useEffect – Resetowanie informacji o błędzie
**Plik:** `components/UseEffectExample.tsx`

W pliku znajduje się zestaw pytań. Zresetuj informację o błędzie za każdym razem, gdy użytkownik przechodzi do następnego pytania.

**Cel:** Nauka używania `useEffect` do wykonywania efektów ubocznych na podstawie zmian zależności.

---

## Ćwiczenie 3: useRef – Eksploracja referencji
**Plik:** `components/UseRefExample.tsx`

Przeanalizuj przykład i zrozum, jak `useRef` działa – przechowuje wartości między renderowaniami bez wywoływania ponownego renderowania.

**Cel:** Zrozumienie przypadków użycia i zachowania `useRef` w React Native.

---

## Ćwiczenie 4: forwardRef – Fokusowanie inputu w komponencie potomnym
**Plik:** `components/ForwardRefExample.tsx`

Użyj referencji w komponencie nadrzędnym, aby ustawić fokus na inpucie w komponencie potomnym.

**Cel:** Nauka używania `forwardRef` do przekazywania referencji z komponentu nadrzędnego do potomnego.

---

## Ćwiczenie 5: useReducer – Naprawianie błędów w obliczeniach
**Plik:** `components/UseReducerExample.tsx`

Sprawdź kod i usuń błędy w równaniu.

**Cel:** Ćwiczenie używania `useReducer` do zarządzania złożoną logiką stanu i debugowania funkcji reduktora.

---

[//]: # (Opcjonalne)
## Ćwiczenie 6: useDeferredValue i useTransition – Optymalizacja wydajności
**Plik:** `components/UseDeferredValueExample.tsx`

Zoptymalizuj skrypt przy użyciu hooka `useDeferredValue`. Spróbuj również zastosować hook `useTransition`.

**Cel:** Zrozumienie, jak odraczać mniej pilne aktualizacje i poprawiać responsywność interfejsu użytkownika.

---

[//]: # (Opcjonalne)
## Ćwiczenie 7: useLayoutEffect – Efekty synchroniczne
**Plik:** `components/UseLayoutEffectExample.tsx`

Przeanalizuj komponent i zrozum różnicę między `useLayoutEffect` a `useEffect`.

**Cel:** Nauka, kiedy używać `useLayoutEffect` do synchronicznych mutacji DOM przed renderowaniem.

---

[//]: # (Opcjonalne)
## Ćwiczenie 8: useId – Unikalne identyfikatory
**Plik:** `components/UseIdExample.tsx`

Przeanalizuj komponent i dowiedz się, jak `useId` generuje unikalne identyfikatory dla atrybutów dostępności.

**Cel:** Zrozumienie, jak używać `useId` do generowania stabilnych, unikalnych identyfikatorów po stronie serwera i klienta.

---

[//]: # (Wrócimy tu innego dnia)
## Ćwiczenie 9: useMemo – Optymalizacja obliczania silni
**Plik:** `components/UseMemoExample.tsx`

Znajdziesz komponent z dwoma funkcjonalnościami: zmianą koloru i obliczaniem silni. Upewnij się, że silnia jest obliczana tylko wtedy, gdy jest to konieczne.

**Cel:** Nauka optymalizacji kosztownych obliczeń za pomocą `useMemo` w celu zapobiegania zbędnym przeliczeniom.

---

[//]: # (Wrócimy tu innego dnia)
## Ćwiczenie 10: useCallback – Zapobieganie zbędnym wywołaniom callbacków
**Plik:** `components/UseCallbackExample.tsx`

Przeanalizuj komponent. Zastanów się, dlaczego callback jest wywoływany co sekundę i spróbuj temu zapobiec.

**Cel:** Zrozumienie, jak `useCallback` pomaga optymalizować wydajność poprzez memoizację funkcji zwrotnych.

---

## Pierwsze kroki

1. Przejdź do każdego pliku w katalogu `components/`
2. Uważnie przeczytaj istniejący kod
3. Wykonaj zadanie opisane dla każdego ćwiczenia
4. Przetestuj swoją implementację, aby upewnić się, że działa poprawnie
5. Porównaj swoje rozwiązanie z najlepszymi praktykami

**Powodzenia w nauce hooków React Native!** 🚀
