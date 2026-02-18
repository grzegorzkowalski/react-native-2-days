# Aplikacja Indyjskiej Drużyny Krykieta – Samouczek krok po kroku

## Przegląd

Zbudujemy aplikację React Native z Expo Router i trzema głównymi komponentami:

- **PlayerList** – wyświetla wszystkich zawodników
- **PlayerCard** – pokazuje pojedynczego zawodnika (tylko imię i nazwisko)
- **PlayerDetail** – pokazuje pełne informacje o zawodniku (imię, zdjęcie, wiek, rola)

---

## Krok 1: Konfiguracja projektu

Najpierw utwórz nowy projekt Expo z Expo Router:

```bash
# Utwórz nową aplikację Expo z Expo Router
npx create-expo-app@latest cricket-app --template tabs

# Lub jeśli preferujesz pusty szablon
npx create-expo-app@latest cricket-app --template blank

# Przejdź do projektu
cd cricket-app

# Zainstaluj Expo Router (jeśli nie jest jeszcze zainstalowany)
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
```

Teraz utwórz plik z danymi:

### Plik: `/data/players.ts`

```typescript
const players = [
  {
    name: "Rohit Sharma",
    image: "https://documents.bcci.tv/resizedimageskirti/107_compress.png",
    age: "38",
    style: "Batter",
  },
  {
    name: "Virat Kohli",
    image: "https://documents.bcci.tv/resizedimageskirti/164_compress.png",
    age: "36",
    style: "Batter",
  },
  {
    name: "Jasprit Bumrah",
    image: "https://documents.bcci.tv/resizedimageskirti/1124_compress.png",
    age: "31",
    style: "Bowler",
  },
  {
    name: "Ravindra Jadeja",
    image: "https://documents.bcci.tv/resizedimageskirti/9_compress.png",
    age: "36",
    style: "All Rounder",
  },
  {
    name: "Mohammed Siraj",
    image: "https://documents.bcci.tv/resizedimageskirti/3840_compress.png",
    age: "Bowler",
    style: "Bowler",
  },
  {
    name: "Kl Rahul",
    image: "https://documents.bcci.tv/resizedimageskirti/1125_compress.png",
    age: "Wicket Keeper",
    style: "Wicket Keeper",
  },
  {
    name: "Shubman Gill",
    image: "https://documents.bcci.tv/resizedimageskirti/3761_compress.png",
    age: "Batter",
    style: "Batter",
  },
  {
    name: "Hardik Pandya",
    image: "https://documents.bcci.tv/resizedimageskirti/2740_compress.png",
    age: "All Rounder",
    style: "All Rounder",
  },
  {
    name: "Mohammad Shami",
    image: "https://documents.bcci.tv/resizedimageskirti/94_compress.png",
    age: "Bowler",
    style: "Bowler",
  },
  {
    name: "Rishabh Pant",
    image: "https://documents.bcci.tv/resizedimageskirti/2972_compress.png",
    age: "Wicket Keeper",
    style: "Wicket Keeper",
  },
  {
    name: "Suryakumar Yadav",
    image: "https://documents.bcci.tv/resizedimageskirti/1212_compress.png",
    age: "34",
    style: "Batter",
  },
  {
    name: "Kuldeep Yadav",
    image: "https://documents.bcci.tv/resizedimageskirti/261_compress.png",
    age: "30",
    style: "Bowler",
  },
  {
    name: "Axar Patel",
    image: "https://documents.bcci.tv/resizedimageskirti/1113_compress.png",
    age: "31",
    style: "Bowler",
  },
  {
    name: "Yashasvi Jaiswal",
    image: "https://documents.bcci.tv/resizedimageskirti/11086_compress.png",
    age: "23",
    style: "Batter",
  },
  {
    name: "Shreyas Iyer",
    image: "https://documents.bcci.tv/resizedimageskirti/1563_compress.png",
    age: "30",
    style: "Batter",
  },
  {
    name: "Rinku Singh",
    image: "https://documents.bcci.tv/resizedimageskirti/11087_compress.png",
    age: "27",
    style: "Batter",
  },
  {
    name: "Tilak Varma",
    image: "https://documents.bcci.tv/resizedimageskirti/11088_compress.png",
    age: "22",
    style: "Batter",
  },
  {
    name: "Ruturaj Gaikwad",
    image: "https://documents.bcci.tv/resizedimageskirti/11095_compress.png",
    age: "28",
    style: "Batter",
  },
  {
    name: "Shivam Dube",
    image: "https://documents.bcci.tv/resizedimageskirti/11089_compress.png",
    age: "32",
    style: "All Rounder",
  },
  {
    name: "Ravi Bishnoi",
    image: "https://documents.bcci.tv/resizedimageskirti/11084_compress.png",
    age: "24",
    style: "Bowler",
  },
  {
    name: "Washington Sundar",
    image: "https://documents.bcci.tv/resizedimageskirti/2973_compress.png",
    age: "25",
    style: "All Rounder",
  },
  {
    name: "Mukesh Kumar",
    image: "https://documents.bcci.tv/resizedimageskirti/11091_compress.png",
    age: "31",
    style: "Bowler",
  },
  {
    name: "Sanju Samson",
    image: "https://documents.bcci.tv/resizedimageskirti/37_compress.png",
    age: "30",
    style: "Wicket Keeper",
  },
  {
    name: "Arshdeep Singh",
    image: "https://documents.bcci.tv/resizedimageskirti/65_compress.png",
    age: "26",
    style: "Bowler",
  },
  {
    name: "Prasidh Krishna",
    image: "https://documents.bcci.tv/resizedimageskirti/11092_compress.png",
    age: "29",
    style: "Bowler",
  },
  {
    name: "Rajat Patidar",
    image: "https://documents.bcci.tv/resizedimageskirti/11093_compress.png",
    age: "32",
    style: "Batter",
  },
  {
    name: "Dhruv Jurel",
    image: "https://documents.bcci.tv/resizedimageskirti/11097_compress.png",
    age: "24",
    style: "Wicket Keeper",
  },
  {
    name: "Sarfaraz Khan",
    image: "https://documents.bcci.tv/resizedimageskirti/11096_compress.png",
    age: "27",
    style: "Batter",
  },
  {
    name: "Nitish Kumar",
    image: "https://documents.bcci.tv/resizedimageskirti/11106_compress.png",
    age: "22",
    style: "All Rounder",
  },
  {
    name: "Ishan Kishan",
    image: "https://documents.bcci.tv/resizedimageskirti/31_compress.png",
    age: "27",
    style: "Wicket Keeper",
  },
  {
    name: "Abhishek Sharma",
    image: "https://documents.bcci.tv/resizedimageskirti/11099_compress.png",
    age: "24",
    style: "Batter",
  },
  {
    name: "Akash Deep",
    image: "https://documents.bcci.tv/resizedimageskirti/11107_compress.png",
    age: "28",
    style: "Bowler",
  },
  {
    name: "Varun Chakaravarthy",
    image: "https://documents.bcci.tv/resizedimageskirti/11100_compress.png",
    age: "33",
    style: "Bowler",
  },
  {
    name: "Harshit Rana",
    image: "https://documents.bcci.tv/resizedimageskirti/11108_compress.png",
    age: "23",
    style: "Bowler",
  },
];

export default players;
```

**Najważniejsze informacje:**
- Utwórz folder `data` w głównym katalogu projektu
- Zapisz ten plik jako `players.ts`
- Zawiera dane wszystkich 34 indyjskich zawodników krykieta

---

## Krok 2: Tworzenie komponentu PlayerCard

Ten komponent wyświetla tylko imię i nazwisko zawodnika (używany na liście).

### Plik: `/components/PlayerCard.tsx`

```typescript
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

interface PlayerCardProps {
  name: string;
  onPress: () => void;
}

export default function PlayerCard({ name, onPress }: PlayerCardProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    backgroundColor: '#fff',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
});
```

**Najważniejsze informacje:**
- Przyjmuje `name` i `onPress` jako propsy
- `TouchableOpacity` sprawia, że element jest klikalny
- Proste stylowanie z cieniem dla głębi
- Będzie używany jako element listy w PlayerList

---

## Krok 3: Tworzenie komponentu PlayerList

Ten komponent wyświetla wszystkich zawodników przy użyciu FlatList.

### Plik: `/components/PlayerList.tsx`

```typescript
import { FlatList, StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';
import PlayerCard from './PlayerCard';
import players from '../data/players';

export default function PlayerList() {
  const router = useRouter();

  const handlePlayerPress = (index: number) => {
    router.push(`/player/${index}`);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={players}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <PlayerCard
            name={item.name}
            onPress={() => handlePlayerPress(index)}
          />
        )}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  listContent: {
    paddingVertical: 8,
  },
});
```

**Najważniejsze informacje:**
- Używa hooka `useRouter()` z Expo Router do nawigacji
- Używa `FlatList` do wydajnego renderowania dużych list
- Nawiguje do dynamicznej trasy `/player/[index]` po naciśnięciu zawodnika
- Renderuje komponent PlayerCard dla każdego zawodnika
- Jasnoszare tło dla lepszego kontrastu wizualnego

---

## Krok 4: Konfiguracja layoutu aplikacji

### Plik: `/app/_layout.tsx`

```typescript
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#138808',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    />
  );
}
```

**Najważniejsze informacje:**
- Konfiguruje główny layout ze Stack navigatorem
- Stosuje zielony motyw (#138808) do wszystkich ekranów
- Biały tekst w nagłówku dla kontrastu
- Przycisk cofania jest dodawany automatycznie

---

## Krok 5: Tworzenie ekranu głównego (lista zawodników)

### Plik: `/app/index.tsx`

```typescript
import { Stack } from 'expo-router';
import PlayerList from '../components/PlayerList';

export default function HomeScreen() {
  return (
    <>
      <Stack.Screen 
        options={{ 
          title: 'Indian Cricket Team',
        }} 
      />
      <PlayerList />
    </>
  );
}
```

**Najważniejsze informacje:**
- To jest trasa główna (`/`)
- Ustawia tytuł ekranu na „Indian Cricket Team"
- Renderuje komponent PlayerList
- Expo Router automatycznie traktuje ten plik jako ekran początkowy

---

## Krok 6: Tworzenie ekranu szczegółów zawodnika (trasa dynamiczna)

### Plik: `/app/player/[id].tsx`

```typescript
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';
import players from '../../data/players';

export default function PlayerDetailScreen() {
  const { id } = useLocalSearchParams();
  const playerIndex = parseInt(id as string);
  const player = players[playerIndex];

  if (!player) {
    return (
      <View style={styles.container}>
        <Text>Nie znaleziono zawodnika</Text>
      </View>
    );
  }

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Szczegóły zawodnika',
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Image
            source={{ uri: player.image }}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.name}>{player.name}</Text>
          <Text style={styles.age}>Wiek: {player.age}</Text>
          <Text style={styles.style}>Rola: {player.style}</Text>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
    backgroundColor: '#f0f0f0',
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
    textAlign: 'center',
  },
  age: {
    fontSize: 20,
    color: '#666',
    marginBottom: 8,
  },
  style: {
    fontSize: 18,
    color: '#138808',
    fontWeight: '600',
  },
});
```

**Najważniejsze informacje:**
- Używa `[id]` w nazwie pliku do tworzenia trasy dynamicznej
- Hook `useLocalSearchParams()` pobiera parametr trasy
- Wyświetla okrągłe zdjęcie zawodnika (200x200px)
- Pokazuje imię, wiek i styl gry zawodnika
- Używa ScrollView dla przewijalnej zawartości
- Zielony kolor (#138808) dla roli nawiązuje do motywu indyjskiego krykieta
- Zawiera obsługę błędu, gdy zawodnik nie zostanie znaleziony

---

## Struktura projektu

Końcowa struktura projektu z Expo Router powinna wyglądać następująco:

```
cricket-app/
├── app/
│   ├── _layout.tsx         # Główny layout ze Stack navigatorem
│   ├── index.tsx           # Ekran główny (lista zawodników)
│   └── player/
│       └── [id].tsx        # Trasa dynamiczna dla szczegółów zawodnika
├── components/
│   ├── PlayerCard.tsx      # Karta pojedynczego zawodnika (tylko imię)
│   └── PlayerList.tsx      # Lista wszystkich zawodników
├── data/
│   └── players.ts          # Dane zawodników
└── package.json
```

---

## Zrozumienie Expo Router

**Jak działa Expo Router:**

- **Routing oparty na plikach**: Struktura plików w `/app` definiuje trasy
- **`index.tsx`**: Reprezentuje trasę główną (`/`)
- **`[id].tsx`**: Nawiasy kwadratowe tworzą trasy dynamiczne
- **`_layout.tsx`**: Definiuje opakowanie layoutu dla tras
- **Nawigacja**: Użyj hooka `useRouter()` do nawigacji programowej

**Przykład nawigacji:**

```typescript
import { useRouter } from 'expo-router';

const router = useRouter();
router.push('/player/0');  // Przejdź do pierwszego zawodnika
router.back();             // Cofnij się
```

---
