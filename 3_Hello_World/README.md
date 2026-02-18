# ✅ Zadanie 1 – Tworzenie i uruchamianie pierwszej aplikacji Expo

**Cel:**  
Stwórz i uruchom nowy projekt Expo (mobile, web i emulator) przy użyciu **Expo Router** i **TypeScript**.

---

## 1️⃣ Wymagania wstępne
- Zainstaluj najnowszy **Node.js LTS**.
- Zainstaluj aplikację **Expo Go** na swoim telefonie (Google Play / App Store).
- *(Opcjonalnie)* Zainstaluj **Android Studio** z emulatorem Android.

---

## 2️⃣ Utwórz nowy projekt

```bash
# wewnątrz folderu warsztatowego
npx create-expo-app@latest Hello_World_App --template
```

W kreatorze konfiguracji wybierz **"Blank + TypeScript"**.

> 💡 Projekt będzie korzystał z nowego systemu routowania opartego na plikach (folder `app/`).  
> Edytuj główny ekran w pliku `app/index.tsx`.

---

## 3️⃣ Uruchom serwer deweloperski

```bash
cd 2_Hello_World
npm install
npm start
```

Spowoduje to otwarcie **Expo DevTools (bundler Metro)** w przeglądarce.

### Skróty klawiszowe w terminalu:
- `a` → otwórz w emulatorze Android
- `i` → otwórz w symulatorze iOS (tylko macOS)
- `w` → otwórz w przeglądarce internetowej
- `r` → zrestartuj bundler

---

## 4️⃣ Uruchom na fizycznym urządzeniu (Expo Go)

Zeskanuj kod QR z DevTools za pomocą aplikacji **Expo Go**.

Upewnij się, że telefon i komputer są w **tej samej sieci Wi-Fi**.

W przypadku iOS uruchom z:

```bash
npx expo start --tunnel
```

---

## 5️⃣ Uruchom w przeglądarce (Web)

```bash
npx expo start --web
```

Lub po prostu naciśnij **`w`** w działającym terminalu.

---

## 6️⃣ Uruchom w emulatorze Android

Uruchom z:

```bash
npx expo start
```

Następnie naciśnij **`a`**.

Alternatywnie zbuduj i uruchom pełny projekt natywny (zazwyczaj niepotrzebne na tym etapie):

```bash
npx expo run:android
```

---

## 7️⃣ Fast Refresh

Otwórz `app/index.tsx` i zmień coś w JSX.

Zapisz – ekran natychmiast się zaktualizuje dzięki **Fast Refresh** (który zastąpił stare "Hot Reload").

---

✅ **Gotowe!** Udało Ci się stworzyć i uruchomić swoją pierwszą aplikację Expo na urządzeniu mobilnym, w przeglądarce i emulatorze.
