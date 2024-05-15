import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Card, Title, Paragraph } from 'react-native-paper';

const ListVol = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { tripType, departureDate, arrivalDate, comfortLevel, departureCity, arrivalCity } = route.params;

  // Convertir les dates en chaînes de caractères formatées
  const formatDepartureDate = departureDate.toLocaleString();
  const formatArrivalDate = arrivalDate.toLocaleString();

  const handleCardPress = () => {
    navigation.navigate('Description', {
      tripType,
      departureDate,
      arrivalDate,
      comfortLevel,
      departureCity,
      arrivalCity,
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleCardPress}>
        <Card style={styles.cardContainer}>
          <Card.Content>
            <Title>Détails du vol</Title>
            <Paragraph>Type de vol: {tripType === 'oneWay' ? 'Aller simple' : 'Aller-retour'}</Paragraph>
            <Paragraph>Ville de départ: {departureCity}</Paragraph>
            <Paragraph>Ville d'arrivée: {arrivalCity}</Paragraph>
            <Paragraph>Date de départ: {formatDepartureDate}</Paragraph>
            {tripType === 'roundTrip' && <Paragraph>Date d'arrivée: {formatArrivalDate}</Paragraph>}
            <Paragraph>Niveau de confort: {comfortLevel}</Paragraph>
          </Card.Content>
        </Card>
        
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87CEEB',
    padding: 16,
  },
  cardContainer: {
    backgroundColor: '#B0E0E6',
    borderRadius: 8,
    elevation: 2,
    marginVertical: 56, // Ajoutez une valeur appropriée pour déplacer la carte vers le bas
  },
});

export default ListVol;
