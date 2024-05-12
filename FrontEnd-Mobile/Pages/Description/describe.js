import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Description = ({ navigation, route }) => {
  const { departureCity, departureDate, arrivalCity, arrivalDate } = route.params;

  // Convert Date objects to strings
  const formattedDepartureDate = departureDate.toLocaleDateString();
  const formattedArrivalDate = arrivalDate.toLocaleDateString();

  const generateRandomPrice = () => {
    const minPrice = 100;
    const maxPrice = 1000;
    const basePrice = Math.floor(Math.random() * (maxPrice - minPrice + 1)) + minPrice;
    const priceIncrement = 10;

    const randomPrice = basePrice + Math.floor(Math.random() * ((maxPrice - basePrice) / priceIncrement)) * priceIncrement;

    return randomPrice;
  };

  const handleReservationButtonPress = () => {
    navigation.navigate('Reservation');
  };

  const price = generateRandomPrice();

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Description</Text>
        <Text style={styles.description}> Partez de {departureCity} le {formattedDepartureDate} à {arrivalCity} le {formattedArrivalDate}. Le prix du billet est de {price} $. Réservez dès maintenant pour profiter de cette offre !</Text>
      </View>
      <TouchableOpacity
        onPress={handleReservationButtonPress}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Réserver</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF', // Light yellow color for the container background
    padding: 16,
  },
  card: {
    backgroundColor: '#87CEEB', // Sky blue color for the card background
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    marginTop: 100, // Adjust an appropriate value to move the card down
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
  },
  button: {
    backgroundColor: '#1E90FF', // Dodger blue color for the button background
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF', // White color for the button text
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Description;
