// index.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface InvitationCardProps {
  date: string;
  time: string;
  location: string;
  dressCode: string;
}

interface InvitationCardPropsObject {
    inviteData: InvitationCardProps;
}


const InvitationCard =
    ({ inviteData: {date, time, location, dressCode} }: InvitationCardPropsObject) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>🎉 Zaproszenie na urodziny 🎉</Text>
      <Text style={styles.intro}>Masz zaszczyt zostać zaproszony/a na wyjątkowe przyjęcie!</Text>

      <View style={styles.row}>
        <Text style={styles.label}>📅 Data:</Text>
        <Text style={styles.value}>{date}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>⏰ Godzina:</Text>
        <Text style={styles.value}>{time}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>📍 Miejsce:</Text>
        <Text style={styles.value}>{location}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>👔 Dress code:</Text>
        <Text style={styles.value}>{dressCode}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 24,
    width: '100%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    gap: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  intro: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  value: {
    fontSize: 15,
    color: '#444',
  },
});

export {InvitationCardProps};
export default InvitationCard;