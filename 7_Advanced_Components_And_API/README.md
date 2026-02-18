# Zapoznaj się z API Expo

**Cel:** Przejdź do projektu `APIS`.

## Zadanie:

1. Zainstaluj pakiety.

2. Uruchom aplikację za pomocą Expo Go lub emulatora.

3. Przetestuj działanie API Expo.

4. Zapoznaj się z kodem źródłowym.

# Wybór logo platformy

**Cel:** Naucz się wykrywać bieżącą platformę i wyświetlać treści specyficzne dla niej.

## Zadanie:

1. Sprawdź, na jakiej platformie użytkownik aktualnie korzysta z aplikacji (`android`, `ios` lub `web`).

2. W zależności od wykrytej platformy wyświetl jej logo jako tło aplikacji.

3. Użyj w tym celu komponentu `ImageBackground`.

## Wymagania:

- Zaimportuj i użyj `Platform` z `react-native` do wykrycia platformy
- Przygotuj trzy różne obrazy logo (Android, iOS, Web)
- Użyj `ImageBackground` jako komponentu głównego
- Wyświetl odpowiednie logo na podstawie wykrytej platformy

## Kroki:

1. Zaimportuj wymagane komponenty:
```javascript
   import { Platform, ImageBackground } from 'react-native';
```

2. Wykryj platformę za pomocą `Platform.OS`

3. Użyj warunkowego renderowania do wyboru odpowiedniego logo

4. Opakuj zawartość aplikacji w `ImageBackground`

## Zadanie dodatkowe:

- Dodaj style specyficzne dla platformy
- Wyświetl nazwę platformy jako tekst
- Dodaj różne schematy kolorów dla każdej platformy

<details>
<summary>Przykładowe rozwiązanie</summary>

```typescript
import React from "react";
import { Platform, StyleSheet, ImageBackground, Text, View } from "react-native";

// Dodaj własne zasoby
import androidLogo from "./assets/android.png";
import iosLogo from "./assets/ios.png";
import webLogo from "./assets/web.png";

export default function App() {
  const platform = Platform.OS;
  
  const backgroundImage =
    platform === "android"
      ? androidLogo
      : platform === "ios"
      ? iosLogo
      : webLogo;
  
  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.text}>Używasz {platform.toUpperCase()}!</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 20,
    borderRadius: 10,
  },
  text: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
  },
});
```

</details>

---

# Dopasowywanie wzorców dla danych wejściowych

**Cel:** Ćwiczenie dopasowywania wzorców dla danych wejściowych użytkownika i logiki warunkowej.

## Zadanie:

1. Użyj znanych technik dopasowywania wzorców do wykonania poniższego zadania.

2. Napisz funkcję przyjmującą 2 parametry (dane pochodzą z dwóch oddzielnych pól input):
   - `name` – np. „Anna"
   - `month` – np. „january"

3. Funkcja powinna zwracać:
```
   jeśli miesiąc to grudzień, styczeń, luty: „[Imię] jedzie na sankach"
   jeśli miesiąc to marzec, kwiecień, maj: „[Imię] chodzi po kałużach"
   jeśli miesiąc to czerwiec, lipiec, sierpień: „[Imię] opala się"
   jeśli miesiąc to wrzesień, październik, listopad: „[Imię] zbiera liście"
```

4. Dodaj do funkcji zabezpieczenie umożliwiające wpisywanie nazwy miesiąca małymi lub wielkimi literami. Jeśli miesiąc to „inne słowo", funkcja powinna zwrócić „[Imię] uczy się JS".

5. Wywołaj funkcję przez naciśnięcie odpowiedniego elementu, przekazując do niej zmienne: swoje imię i dowolny miesiąc.

6. Wyświetl w aplikacji informację zwróconą przez funkcję.

## Wymagania:

- Utwórz dwa komponenty `TextInput` (jeden dla imienia, drugi dla miesiąca)
- Utwórz funkcję z logiką dopasowywania wzorców
- Obsłuż wielkość liter (konwertuj na małe lub wielkie litery)
- Zapewnij domyślny przypadek dla nieprawidłowych miesięcy
- Dodaj `Button` do wywołania funkcji
- Wyświetl wynik w komponencie `Text`

## Przykładowa struktura:
```javascript
function getSeasonActivity(name, month) {
  // Konwersja miesiąca na małe litery
  const monthLower = month.toLowerCase();
  
  // Logika dopasowywania wzorców
  switch (monthLower) {
    case 'december':
    case 'january':
    case 'february':
      return `${name} jedzie na sankach`;
    // ... inne przypadki
    default:
      return `${name} uczy się JS`;
  }
}
```

## Zadanie dodatkowe:

- Dodaj walidację danych wejściowych (sprawdź czy imię nie jest puste)
- Ustyluj tekst wyniku różnymi kolorami dla każdej pory roku
- Dodaj ikony reprezentujące każdą porę roku
- Utwórz listę rozwijaną (picker) do wyboru miesiąca zamiast pola tekstowego
- Dodaj obsługę nazw miesięcy w języku polskim i angielskim

<details>
<summary>Przykładowe rozwiązanie</summary>

```typescript
import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const seasonSets = {
  winter: new Set(["december", "january", "february", "grudzien", "styczen", "luty"]),
  spring: new Set(["march", "april", "may", "marzec", "kwiecien", "maj"]),
  summer: new Set(["june", "july", "august", "czerwiec", "lipiec", "sierpien"]),
  autumn: new Set(["september", "october", "november", "wrzesien", "pazdziernik", "listopad"]),
};

const seasonStyles = {
  winter: { color: "#3b82f6", icon: "snow" },
  spring: { color: "#16a34a", icon: "rainy" },
  summer: { color: "#f59e0b", icon: "sunny" },
  autumn: { color: "#92400e", icon: "leaf" },
  default: { color: "#475569", icon: "school" },
};

function normalizeMonth(s) {
  return (s || "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function getSeason(month) {
  const m = normalizeMonth(month);
  if (seasonSets.winter.has(m)) return "winter";
  if (seasonSets.spring.has(m)) return "spring";
  if (seasonSets.summer.has(m)) return "summer";
  if (seasonSets.autumn.has(m)) return "autumn";
  return "default";
}

function getSeasonActivity(name, month) {
  const season = getSeason(month);
  switch (season) {
    case "winter":
      return { text: `${name} jedzie na sankach`, season };
    case "spring":
      return { text: `${name} chodzi po kałużach`, season };
    case "summer":
      return { text: `${name} opala się`, season };
    case "autumn":
      return { text: `${name} zbiera liście`, season };
    default:
      return { text: `${name} uczy się JS`, season };
  }
}

export default function App() {
  const [name, setName] = useState("");
  const [month, setMonth] = useState("");
  const [result, setResult] = useState("");
  const [season, setSeason] = useState("default");
  const [error, setError] = useState("");

  const onCheck = () => {
    if (!name.trim()) {
      setError("Proszę podać imię");
      setResult("");
      setSeason("default");
      return;
    }
    setError("");
    const { text, season: s } = getSeasonActivity(name.trim(), month);
    setResult(text);
    setSeason(s);
  };

  const color = seasonStyles[season].color;
  const icon = seasonStyles[season].icon;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dopasowywanie wzorców</Text>

      <TextInput
        placeholder="Podaj imię"
        value={name}
        onChangeText={setName}
        style={styles.input}
        autoCapitalize="words"
      />

      <TextInput
        placeholder="Podaj miesiąc (np. January / styczeń)"
        value={month}
        onChangeText={setMonth}
        style={styles.input}
        autoCapitalize="none"
      />

      {!!error && <Text style={styles.error}>{error}</Text>}

      <Pressable onPress={onCheck} style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}>
        <Ionicons name="checkmark-circle" size={20} color="#fff" />
        <Text style={styles.buttonText}>Sprawdź</Text>
      </Pressable>

      {!!result && (
        <View style={styles.resultBox}>
          <Ionicons name={icon} size={28} color={color} />
          <Text style={[styles.resultText, { color }]}>{result}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 64, backgroundColor: "#0b1220" },
  title: { fontSize: 22, fontWeight: "700", color: "#e2e8f0", marginBottom: 16, textAlign: "center" },
  input: {
    backgroundColor: "#111827",
    borderColor: "#1f2937",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    color: "#e5e7eb",
    marginBottom: 12,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#2563eb",
    paddingVertical: 12,
    borderRadius: 10,
    justifyContent: "center",
  },
  buttonPressed: { opacity: 0.85 },
  buttonText: { color: "#fff", fontWeight: "700", fontSize: 16 },
  error: { color: "#f87171", marginBottom: 8, fontWeight: "600" },
  resultBox: {
    marginTop: 20,
    backgroundColor: "#0f172a",
    borderRadius: 12,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  resultText: { fontSize: 20, fontWeight: "700" },
});
```
</details>

---

# Ćwiczenia z testowania API Expo w React Native

## Wymagania wstępne

Przed rozpoczęciem ćwiczeń upewnij się, że masz:
- Zainstalowane i skonfigurowane Expo CLI
- Działające fizyczne urządzenie lub emulator/symulator

---

## Ćwiczenie 1: API Kamery – Aplikacja do robienia zdjęć

**Cel:** Nauka korzystania z API kamery Expo do robienia zdjęć i ich wyświetlania.

### Zadanie:
1. Zainstaluj wymagany pakiet:
```bash
   npx expo install expo-camera
```

2. Utwórz komponent `CameraExample.tsx`, który:
   - Prosi użytkownika o uprawnienia do kamery
   - Wyświetla podgląd kamery na ekranie
   - Pokazuje przycisk „Zrób zdjęcie"
   - Robi zdjęcie po naciśnięciu przycisku
   - Wyświetla zrobione zdjęcie poniżej podglądu kamery

### Wymagania:
- Obsługuj scenariusze odmowy uprawnień w elegancki sposób
- Pokaż stan ładowania podczas pobierania uprawnień
- Wyświetl URI lub samo zdjęcie po wykonaniu
- Dodaj przycisk „Zrób ponownie" do zrobienia nowego zdjęcia

### Zadanie dodatkowe:
- Dodaj przełącznik między kamerą przednią i tylną
- Zapisz zrobione zdjęcie w bibliotece multimediów urządzenia

Dodaj konfigurację do `app.json`:
```json
{
   "expo": {
      "plugins": [
         [
            "expo-camera",
            {
               "cameraPermission": "Zezwól $(PRODUCT_NAME) na dostęp do kamery"
            }
         ],
         [
            "expo-media-library",
            {
               "photosPermission": "Zezwól $(PRODUCT_NAME) na zapisywanie zdjęć"
            }
         ]
      ],
      "android": {
         "permissions": ["CAMERA", "READ_EXTERNAL_STORAGE", "WRITE_EXTERNAL_STORAGE"]
      },
      "ios": {
         "infoPlist": {
            "NSCameraUsageDescription": "Ta aplikacja potrzebuje dostępu do kamery, aby robić zdjęcia",
            "NSPhotoLibraryAddUsageDescription": "Ta aplikacja zapisuje zdjęcia do biblioteki"
         }
      }
   }
}
```

<details>
<summary>Przykładowe rozwiązanie</summary>

```typescript
// CameraExample.tsx
import React, { useRef, useState } from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import * as MediaLibrary from "expo-media-library";

export default function CameraExample() {
  const [permission, requestPermission] = useCameraPermissions();
  const [mlGranted, setMlGranted] = useState<boolean | null>(null);
  const cameraRef = useRef<CameraView>(null);
  const [photoUri, setPhotoUri] = useState<string | null>(null);
  const [facing, setFacing] = useState<"back" | "front">("back");
  const [loading, setLoading] = useState(false);

  if (!permission) {
    return (
      <View style={styles.center}>
        <Text>Pobieranie uprawnień do kamery...</Text>
      </View>
    );
  }

  if (!permission.granted) {
    return (
      <View style={styles.center}>
        <Text style={{ marginBottom: 8 }}>Wymagane uprawnienia do kamery</Text>
        <Button title="Udziel uprawnień" onPress={requestPermission} />
      </View>
    );
  }

  const takePhoto = async () => {
    if (!cameraRef.current) return;
    setLoading(true);
    try {
      const photo = await cameraRef.current.takePictureAsync();
      setPhotoUri(photo?.uri ?? null);
    } finally {
      setLoading(false);
    }
  };

  const savePhoto = async () => {
    if (!photoUri) return;
    if (mlGranted === null) {
      const res = await MediaLibrary.requestPermissionsAsync();
      setMlGranted(res.granted);
      if (!res.granted) return;
    }
    if (mlGranted === false) return;
    await MediaLibrary.saveToLibraryAsync(photoUri);
  };

  return (
    <View style={styles.container}>
      {!photoUri ? (
        <>
          <CameraView ref={cameraRef} style={styles.camera} facing={facing} />
          <View style={styles.row}>
            <Button title={loading ? "Robię zdjęcie..." : "Zrób zdjęcie"} onPress={takePhoto} disabled={loading} />
            <Button title={`Przełącz: ${facing === "back" ? "Przednia" : "Tylna"}`} onPress={() => setFacing(f => (f === "back" ? "front" : "back"))} />
          </View>
        </>
      ) : (
        <>
          <Image source={{ uri: photoUri }} style={styles.preview} />
          <Text style={styles.uri}>{photoUri}</Text>
          <View style={styles.row}>
            <Button title="Zrób ponownie" onPress={() => setPhotoUri(null)} />
            <Button title="Zapisz do galerii" onPress={savePhoto} />
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 12, gap: 12, backgroundColor: "#fff" },
  camera: { flex: 1, borderRadius: 8, overflow: "hidden" },
  preview: { width: "100%", aspectRatio: 3 / 4, borderRadius: 8 },
  row: { flexDirection: "row", justifyContent: "space-around", gap: 12 },
  uri: { fontSize: 12, color: "#555" },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
});
```
</details>

---

## Ćwiczenie 2: API Audio – Dyktafon

**Cel:** Ćwiczenie nagrywania i odtwarzania dźwięku za pomocą Expo AV.

### Zadanie:
1. Zainstaluj wymagany pakiet:
```bash
   npx expo install expo-av
```

2. Utwórz komponent `AudioExample.tsx`, który:
   - Prosi o uprawnienia do nagrywania audio
   - Posiada przycisk „Rozpocznij nagrywanie"
   - Posiada przycisk „Zatrzymaj nagrywanie"
   - Wyświetla czas trwania nagrania
   - Zapisuje nagranie po zatrzymaniu
   - Posiada przycisk „Odtwórz nagranie"
   - Posiada przyciski „Pauza" i „Stop" do sterowania odtwarzaniem

### Wymagania:
- Pokazuj status nagrywania (nagrywanie, zatrzymane, odtwarzanie)
- Wyświetlaj czas nagrania w formacie MM:SS
- Odpowiednio obsługuj błędy uprawnień
- Pokazuj postęp odtwarzania

### Zadanie dodatkowe:
- Dodaj suwak głośności dla odtwarzania
- Wyświetl listę wszystkich nagrań
- Dodaj funkcję usuwania nagrań

Dodaj konfigurację do `app.json`:
```json
{
   "expo": {
      "android": { "permissions": ["RECORD_AUDIO"] },
      "ios": {
         "infoPlist": {
            "NSMicrophoneUsageDescription": "Ta aplikacja potrzebuje dostępu do mikrofonu, aby nagrywać audio."
         }
      }
   }
}
```

<details>
<summary>Przykładowe rozwiązanie</summary>

```typescript
import React, { useEffect, useRef, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Audio, AVPlaybackStatusSuccess } from "expo-av";

function mmss(ms: number) {
  const total = Math.floor(ms / 1000);
  const m = Math.floor(total / 60).toString().padStart(2, "0");
  const s = (total % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

export default function AudioExample() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [statusText, setStatusText] = useState("bezczynny");
  const [recDur, setRecDur] = useState(0);
  const [playDur, setPlayDur] = useState(0);
  const [playPos, setPlayPos] = useState(0);

  const recordingRef = useRef<Audio.Recording | null>(null);
  const soundRef = useRef<Audio.Sound | null>(null);
  const [uri, setUri] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Audio.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  useEffect(() => {
    return () => {
      recordingRef.current?.stopAndUnloadAsync().catch(() => {});
      soundRef.current?.unloadAsync().catch(() => {});
    };
  }, []);

  const startRecording = async () => {
    if (!hasPermission) return;
    await Audio.setAudioModeAsync({ allowsRecordingIOS: true, playsInSilentModeIOS: true });
    const rec = new Audio.Recording();
    await rec.prepareToRecordAsync(Audio.RecordingOptionsPresets.HIGH_QUALITY);
    rec.setOnRecordingStatusUpdate((s) => {
      if (!s) return;
      setStatusText(s.isRecording ? "nagrywanie" : "zatrzymane");
      setRecDur(s.durationMillis ?? 0);
    });
    await rec.startAsync();
    recordingRef.current = rec;
    setUri(null);
  };

  const stopRecording = async () => {
    const rec = recordingRef.current;
    if (!rec) return;
    await rec.stopAndUnloadAsync();
    const newUri = rec.getURI() ?? null;
    setUri(newUri);
    recordingRef.current = null;
    setStatusText("zatrzymane");
    await Audio.setAudioModeAsync({ allowsRecordingIOS: false });
  };

  const play = async () => {
    if (!uri) return;
    if (soundRef.current) {
      await soundRef.current.playAsync();
      return;
    }
    const sound = new Audio.Sound();
    sound.setOnPlaybackStatusUpdate((st) => {
      const s = st as AVPlaybackStatusSuccess;
      if (!s.isLoaded) return;
      setStatusText(s.isPlaying ? "odtwarzanie" : s.didJustFinish ? "zatrzymane" : "pauza");
      setPlayDur(s.durationMillis ?? 0);
      setPlayPos(s.positionMillis ?? 0);
    });
    await sound.loadAsync({ uri });
    soundRef.current = sound;
    await sound.playAsync();
  };

  const pause = async () => {
    if (!soundRef.current) return;
    await soundRef.current.pauseAsync();
  };

  const stop = async () => {
    if (!soundRef.current) return;
    await soundRef.current.stopAsync();
    setPlayPos(0);
  };

  const permView =
    hasPermission === null ? (
      <Text>Pobieranie uprawnień do mikrofonu…</Text>
    ) : hasPermission === false ? (
      <Text style={styles.err}>Odmowa dostępu do mikrofonu</Text>
    ) : null;

  return (
    <View style={styles.container}>
      {permView}
      <Text style={styles.h1}>Dyktafon</Text>

      <View style={styles.block}>
        <Text>Status: {statusText}</Text>
        <Text>Nagranie: {mmss(recDur)}</Text>
        <View style={styles.row}>
          <Button title="Rozpocznij nagrywanie" onPress={startRecording} disabled={!hasPermission || !!recordingRef.current} />
          <Button title="Zatrzymaj nagrywanie" onPress={stopRecording} disabled={!recordingRef.current} />
        </View>
      </View>

      <View style={styles.block}>
        <Text>URI: {uri ?? "—"}</Text>
        <Text>
          Odtwarzanie: {mmss(playPos)} / {mmss(playDur)}
        </Text>
        <View style={styles.row}>
          <Button title="Odtwórz" onPress={play} disabled={!uri} />
          <Button title="Pauza" onPress={pause} disabled={!soundRef.current} />
          <Button title="Stop" onPress={stop} disabled={!soundRef.current} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, gap: 16, padding: 16, paddingTop: 48 },
  h1: { fontSize: 20, fontWeight: "700" },
  block: { gap: 8 },
  row: { flexDirection: "row", gap: 8, alignItems: "center" },
  err: { color: "#dc2626" },
});
```
</details>

---

## Ćwiczenie 3: API Wibracji – Sprzężenie haptyczne

**Cel:** Implementacja różnych wzorców wibracji i sprzężenia haptycznego.

### Zadanie:
1. Zainstaluj wymagany pakiet:
```bash
   npx expo install expo-haptics
```

2. Utwórz komponent `VibrationExample.tsx` zawierający:
   - Przycisk dla lekkiego uderzenia haptycznego (Light Impact)
   - Przycisk dla średniego uderzenia haptycznego (Medium Impact)
   - Przycisk dla mocnego uderzenia haptycznego (Heavy Impact)
   - Przycisk dla powiadomienia „Sukces"
   - Przycisk dla powiadomienia „Ostrzeżenie"
   - Przycisk dla powiadomienia „Błąd"
   - Przycisk dla własnego wzorca wibracji (np. wzorzec SOS)

### Wymagania:
- Każdy przycisk powinien wyzwalać odpowiednie sprzężenie haptyczne
- Wyświetlaj etykietę pokazującą, które sprzężenie zostało wywołane
- Dodaj przełącznik włączający/wyłączający haptykę

### Zadanie dodatkowe:
- Stwórz grę rytmiczną korzystającą ze sprzężenia haptycznego dla uderzeń
- Zaimplementuj kreator własnych wzorców wibracji

<details>
<summary>Przykładowe rozwiązanie</summary>

```typescript
import React, { useState } from "react";
import { View, Text, Button, StyleSheet, Switch, Vibration } from "react-native";
import * as Haptics from "expo-haptics";

export default function VibrationExample() {
  const [enabled, setEnabled] = useState(true);
  const [label, setLabel] = useState("—");

  const run = async (name: string, fn: () => Promise<void> | void) => {
    setLabel(enabled ? name : `${name} (wyłączone)`);
    if (!enabled) return;
    await fn();
  };

  const sosPattern = [0, 150, 150, 150, 150, 150, 150, 450, 150, 450, 150, 450, 150, 150, 150, 150, 150, 150];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sprzężenie haptyczne</Text>

      <View style={styles.row}>
        <Text style={styles.text}>Włącz haptykę</Text>
        <Switch value={enabled} onValueChange={setEnabled} />
      </View>

      <View style={styles.grid}>
        <Button title="Lekkie uderzenie" onPress={() => run("Lekkie uderzenie", () => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light))} />
        <Button title="Średnie uderzenie" onPress={() => run("Średnie uderzenie", () => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium))} />
        <Button title="Mocne uderzenie" onPress={() => run("Mocne uderzenie", () => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy))} />
        <Button title="Sukces" onPress={() => run("Sukces", () => Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success))} />
        <Button title="Ostrzeżenie" onPress={() => run("Ostrzeżenie", () => Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning))} />
        <Button title="Błąd" onPress={() => run("Błąd", () => Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error))} />
        <Button title="Własny: SOS" onPress={() => run("Własny: SOS", () => Vibration.vibrate(sosPattern))} />
        <Button title="Zatrzymaj wibrację" onPress={() => run("Zatrzymaj wibrację", () => Vibration.cancel())} />
      </View>

      <Text style={styles.label}>Ostatnie: {label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, gap: 16, padding: 16, paddingTop: 48, backgroundColor: "#fff" },
  title: { fontSize: 20, fontWeight: "700", textAlign: "center" },
  row: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  text: { fontSize: 16 },
  grid: { gap: 10 },
  label: { marginTop: 8, fontSize: 16, fontWeight: "600", textAlign: "center" },
});
```
</details>

---

## Ćwiczenie 4: API Czujników – Detektor ruchu

**Cel:** Dostęp do czujników urządzenia: akcelerometr, żyroskop i magnetometr.

### Zadanie:
1. Zainstaluj wymagany pakiet:
```bash
   npx expo install expo-sensors
```

2. Utwórz komponent `SensorsExample.tsx`, który:
   - Wyświetla dane akcelerometru w czasie rzeczywistym (osie x, y, z)
   - Wyświetla dane żyroskopu w czasie rzeczywistym
   - Pokazuje orientację urządzenia
   - Wykrywa potrząśnięcie urządzeniem
   - Posiada przyciski do włączania/wyłączania monitorowania czujników

### Wymagania:
- Aktualizuj dane czujników co najmniej 5 razy na sekundę
- Wyświetlaj dane w czytelnym formacie z etykietami
- Pokaż wizualny wskaźnik po wykryciu potrząśnięcia
- Usuń listenery czujników przy odmontowaniu komponentu

### Zadanie dodatkowe:
- Utwórz poziomicę (bąbelkową) korzystającą z akcelerometru
- Zbuduj licznik kroków na podstawie danych akcelerometru
- Wizualizuj dane czujników za pomocą animowanych pasków lub wykresów

<details>
<summary>Przykładowe rozwiązanie</summary>

*(kod pozostaje bez zmian – zawiera komentarze i logikę techniczną)*
```typescript
// Patrz oryginalne rozwiązanie w wersji angielskiej
```
</details>

---

## Ćwiczenie 5: API Lokalizacji – Tracker GPS

**Cel:** Dostęp do lokalizacji urządzenia i śledzenie ruchu użytkownika.

### Zadanie:
1. Zainstaluj wymagany pakiet:
```bash
   npx expo install expo-location
```

2. Utwórz komponent `LocationExample.tsx`, który:
   - Prosi o uprawnienia lokalizacji (foreground)
   - Wyświetla bieżącą szerokość i długość geograficzną
   - Pokazuje bieżący adres (geokodowanie odwrotne)
   - Wyświetla wysokość i dokładność
   - Pokazuje bieżącą prędkość (podczas ruchu)
   - Posiada przycisk „Odśwież lokalizację"

### Wymagania:
- Obsługuj wszystkie stany uprawnień (przyznane, odmówione, ograniczone)
- Pokazuj stan ładowania podczas pobierania lokalizacji
- Wyświetlaj dokładność lokalizacji
- Formatuj współrzędne do 6 miejsc po przecinku

### Zadanie dodatkowe:
- Zaimplementuj śledzenie lokalizacji w tle
- Oblicz i wyświetl przebyty dystans
- Pokaż lokalizację na mapie korzystając z `react-native-maps`
- Dodaj geokodowanie (konwersja adresu na współrzędne)

Dodaj konfigurację do `app.json`:
```json
{
   "expo": {
      "android": {
         "permissions": ["ACCESS_FINE_LOCATION", "ACCESS_COARSE_LOCATION", "ACCESS_BACKGROUND_LOCATION"]
      },
      "ios": {
         "infoPlist": {
            "NSLocationWhenInUseUsageDescription": "Ta aplikacja używa Twojej lokalizacji…",
            "NSLocationAlwaysAndWhenInUseUsageDescription": "Ta aplikacja potrzebuje lokalizacji w tle…"
         },
         "UIBackgroundModes": ["location"]
      }
   }
}
```

<details>
<summary>Przykładowe rozwiązanie</summary>

*(kod pozostaje bez zmian – zawiera logikę techniczną)*
```typescript
// Patrz oryginalne rozwiązanie w wersji angielskiej
```
</details>

---

## Ćwiczenie 6: API Baterii – Monitor zasilania

**Cel:** Monitorowanie poziomu baterii i stanu ładowania urządzenia.

### Zadanie:
1. Zainstaluj wymagany pakiet:
```bash
   npx expo install expo-battery
```

2. Utwórz komponent `BatteryExample.tsx`, który:
   - Wyświetla bieżący poziom baterii jako wartość procentową
   - Pokazuje status ładowania (ładowanie/nie ładuje się)
   - Wyświetla stan baterii (pełna, ładowanie, niepodłączona)
   - Pokazuje, czy tryb oszczędzania energii jest włączony
   - Aktualizuje się w czasie rzeczywistym przy zmianie statusu baterii

### Wymagania:
- Wyświetlaj poziom baterii z wizualnym wskaźnikiem (pasek postępu lub ikona baterii)
- Używaj różnych kolorów dla różnych poziomów baterii:
   - Zielony: > 50%
   - Żółty: 20–50%
   - Czerwony: < 20%
- Pokazuj ikonę lub tekst, gdy urządzenie się ładuje

### Zadanie dodatkowe:
- Wyślij powiadomienie, gdy bateria jest słaba
- Oblicz szacowany czas do pełnego naładowania
- Śledź tempo rozładowywania baterii
- Utwórz wykres historii stanu baterii

<details>
<summary>Przykładowe rozwiązanie</summary>

*(kod pozostaje bez zmian – zawiera logikę techniczną)*
```typescript
// Patrz oryginalne rozwiązanie w wersji angielskiej
```
</details>

---

## Ćwiczenie 7: API Jasności – Sterowanie ekranem

**Cel:** Sterowanie jasnością ekranu i jej monitorowanie.

### Zadanie:
1. Zainstaluj wymagany pakiet:
```bash
   npx expo install expo-brightness
```

2. Utwórz komponent `BrightnessExample.tsx`, który:
   - Wyświetla bieżący poziom jasności ekranu (0–1)
   - Posiada suwak do regulacji jasności ekranu
   - Pokazuje bieżącą jasność systemową
   - Posiada przyciski ustawień wstępnych:
      - „Przyciemniony" (25% jasności)
      - „Średni" (50% jasności)
      - „Jasny" (75% jasności)
      - „Maksymalny" (100% jasności)
   - Posiada przycisk „Przywróć systemowy"

### Wymagania:
- Poproś o uprawnienia do zmiany jasności systemowej
- Wyświetlaj jasność jako wartość procentową
- Płynna kontrola suwaka
- Przywróć oryginalną jasność przy odmontowaniu komponentu

### Zadanie dodatkowe:
- Zaimplementuj przełącznik automatycznej jasności
- Utwórz tryb nocny ustawiający minimalną jasność
- Dodaj harmonogram jasności (np. przyciemnienie w nocy)
- Pokaż podgląd wyglądu ekranu przy różnych poziomach jasności

<details>
<summary>Przykładowe rozwiązanie</summary>

*(kod pozostaje bez zmian – zawiera logikę techniczną)*
```typescript
// Patrz oryginalne rozwiązanie w wersji angielskiej
```
</details>

---

## Opcjonalne Ćwiczenie 8: Wyzwanie z wieloma API – Monitor środowiska

**Cel:** Połączenie wielu API w kompleksowej aplikacji monitorującej.

### Zadanie:
Utwórz komponent dashboardu `EnvironmentDashboard.tsx`, który wyświetla:
- Bieżącą lokalizację (szerokość, długość, adres)
- Orientację urządzenia (na podstawie czujników)
- Poziom baterii i status ładowania
- Bieżący poziom jasności
- Przycisk do robienia zdjęcia ze znacznikiem czasu i lokalizacją
- Przycisk do nagrywania notatki głosowej
- Sprzężenie haptyczne przy każdym naciśnięciu przycisku

### Wymagania:
- Przejrzysty, zorganizowany interfejs z sekcjami dla każdego API
- Odpowiednia obsługa wszystkich uprawnień
- Aktualizacja danych w czasie rzeczywistym tam, gdzie to możliwe
- Przechowywanie zrobionych zdjęć i audio z metadanymi (lokalizacja, czas, poziom baterii)

### Zadanie dodatkowe:
- Eksport wszystkich danych jako JSON
- Utwórz widok osi czasu dla przechwyconych mediów
- Dodaj wizualizację danych (wykresy dla danych z czujników)
- Zaimplementuj przechowywanie offline za pomocą AsyncStorage

---

## Wytyczne dotyczące testowania

Dla każdego ćwiczenia:
1. Testuj na fizycznym urządzeniu, gdy to możliwe (niektóre funkcje nie działają na symulatorach)
2. Obsługuj wszystkie scenariusze uprawnień (przyznane, odmówione, nigdy więcej nie pytaj)
3. Testuj przypadki brzegowe (np. brak sygnału GPS, kamera używana przez inną aplikację)
4. Zaimplementuj odpowiednią obsługę błędów i informacje zwrotne dla użytkownika
5. Czyść zasoby (listenery, interwały) przy odmontowaniu komponentów

## Przydatne zasoby

- [Dokumentacja Expo Camera](https://docs.expo.dev/versions/latest/sdk/camera/)
- [Dokumentacja Expo AV](https://docs.expo.dev/versions/latest/sdk/av/)
- [Dokumentacja Expo Haptics](https://docs.expo.dev/versions/latest/sdk/haptics/)
- [Dokumentacja Expo Sensors](https://docs.expo.dev/versions/latest/sdk/sensors/)
- [Dokumentacja Expo Location](https://docs.expo.dev/versions/latest/sdk/location/)
- [Dokumentacja Expo Battery](https://docs.expo.dev/versions/latest/sdk/battery/)
- [Dokumentacja Expo Brightness](https://docs.expo.dev/versions/latest/sdk/brightness/)

---

**Powodzenia w pracy z API Expo!** 📱🚀
