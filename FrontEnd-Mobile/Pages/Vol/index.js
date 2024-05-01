import React from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { styles } from './style';

const Vol = ({ navigation, route }) => {
  const { departureCity, arrivalCity, departureDate, arrivalDate, tripType, comfortLevel } = route.params;

  const handleDescriptionClick = () => {
    navigation.navigate('Description', {
      departureCity,
      arrivalCity,
      departureDate,
      arrivalDate,
      tripType,
      comfortLevel,
      price: comfortLevel === '1ere classe' ? 500 : 300,
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <TouchableOpacity onPress={handleDescriptionClick} style={styles.card}>
          <Card style={styles.cardContainer}>
            <Card.Content>
              <Title style={styles.title}>Voyage 1:</Title>
              <TouchableOpacity onPress={() => console.log("Ville de départ cliquée")} style={styles.paragraph}>
                <Paragraph style={styles.paragraphText}>Ville de départ : {departureCity}</Paragraph>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => console.log("Ville d'arrivée cliquée")} style={styles.paragraph}>
                <Paragraph style={styles.paragraphText}>Ville d'arrivée : {arrivalCity}</Paragraph>
              </TouchableOpacity>
              <Paragraph style={styles.paragraph}>Date de départ : {departureDate}</Paragraph>
              <Paragraph style={styles.paragraph}>Date d'arrivée : {arrivalDate}</Paragraph>
              <Paragraph style={styles.paragraph}>Type de voyage : {tripType === 'oneWay' ? 'Aller' : 'Aller-Retour'}</Paragraph>
              <Paragraph style={styles.paragraph}>Niveau de confort : {comfortLevel}</Paragraph>
            </Card.Content>
          </Card>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Vol;