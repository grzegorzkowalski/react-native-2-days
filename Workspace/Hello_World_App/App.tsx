import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DateText from "./components/DateText";
import MapImage from "./components/MapImage";
import PizzaText from "./components/PizzaText";
import InvitationCard, {InvitationCardProps} from "./components/InvitationCard";
import DataTimer from "./components/DataTimer";

export default function App() {
    const initialDateTime: string = new Date().toLocaleTimeString();
    const inviteData: InvitationCardProps = {
        date: '15 marca 2025',
        time: '18:00',
        location: 'Restauracja "Pod Różą", ul. Kwiatowa 5, Kraków',
        dressCode: 'Smart casual',
    };

  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <StatusBar style="auto" />
      <DateText />
      <MapImage />
      <PizzaText />
      <InvitationCard inviteData={inviteData} />
      <DataTimer currentTime={initialDateTime} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
