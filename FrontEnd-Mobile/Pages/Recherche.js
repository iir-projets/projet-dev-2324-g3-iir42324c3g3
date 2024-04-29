import React, { useState } from 'react';
import { View, TouchableOpacity, Alert } from 'react-native';
import { Input, Button, Text, CheckBox, Icon } from 'react-native-elements';
import { Calendar } from 'react-native-calendars';
import styles from './styles'; // Import des styles à partir du fichier séparé

const Recherche = () => {
  const [tripType, setTripType] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [arrivalDate, setArrivalDate] = useState('');
  const [showDepartureCalendar, setShowDepartureCalendar] = useState(false);
  const [showArrivalCalendar, setShowArrivalCalendar] = useState(false);
  const [comfortLevel, setComfortLevel] = useState('');
  const [departureCity, setDepartureCity] = useState('');
  const [arrivalCity, setArrivalCity] = useState('');

  const handleSearch = () => {
    // Vérification du type de trajet sélectionné
    if (tripType === '') {
      Alert.alert('Erreur', 'Veuillez sélectionner le type de trajet (Aller ou Aller-Retour).');
      return;
    }

    // Vérification des autres champs requis
    if (!departureCity) {
      Alert.alert('Erreur', 'Veuillez entrer une ville de départ.');
      return;
    }

    if (!arrivalCity) {
      Alert.alert('Erreur', 'Veuillez entrer une ville d\'arrivée.');
      return;
    }

    if (!departureDate) {
      Alert.alert('Erreur', 'Veuillez sélectionner une date de départ.');
      return;
    }

    if (tripType === 'roundTrip' && !arrivalDate) {
      Alert.alert('Erreur', 'Veuillez sélectionner une date d\'arrivée.');
      return;
    }

    if (!comfortLevel) {
      Alert.alert('Erreur', 'Veuillez sélectionner un niveau de confort.');
      return;
    }

    // Effectuer la recherche
    console.log('Recherche effectuée avec les paramètres suivants :');
    console.log('Ville de départ :', departureCity);
    console.log('Ville d\'arrivée :', arrivalCity);
    console.log('Date de départ :', departureDate);
    console.log('Date d\'arrivée :', arrivalDate);
    console.log('Type de voyage :', tripType);
    console.log('Niveau de confort :', comfortLevel);

    // Réinitialiser les champs après la recherche
    setDepartureCity('');
    setArrivalCity('');
    setDepartureDate('');
    setArrivalDate('');
    setComfortLevel('');
  };

  const handleDepartureDateFocus = () => {
    setShowDepartureCalendar(true);
  };

  const handleArrivalDateFocus = () => {
    setShowArrivalCalendar(true);
  };

  const handleTripTypeChange = (type) => {
    setTripType(type);
  };

  const handleComfortLevelChange = (level) => {
    setComfortLevel(level);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tripTypeContainer}>
        <Button
          title="Aller"
          buttonStyle={[
            styles.tripTypeButton,
            tripType === 'oneWay' ? styles.selectedButtonStyle : null,
          ]}
          titleStyle={styles.tripTypeButtonText}
          onPress={() => handleTripTypeChange('oneWay')}
        />
        <Button
          title="Aller-Retour"
          buttonStyle={[
            styles.tripTypeButton,
            tripType === 'roundTrip' ? styles.selectedButtonStyle : null,
          ]}
          titleStyle={styles.tripTypeButtonText}
          onPress={() => handleTripTypeChange('roundTrip')}
        />
      </View>
      <Input
        style={[styles.input, styles.departureInput]}
        placeholder="Ville de départ"
        onChangeText={setDepartureCity}
        value={departureCity}
      />
      <Input
        style={[styles.input, styles.arrivalInput]}
        placeholder="Ville d'arrivée"
        onChangeText={setArrivalCity}
        value={arrivalCity}
      />
      <TouchableOpacity onPress={handleDepartureDateFocus}>
        <View style={[styles.inputContainer, styles.input]}>
          <Input
            placeholder="Date de départ"
            value={departureDate}
            leftIcon={
              <Icon
                name="calendar"
                type="font-awesome"
                style={styles.calendarIcon}
              />
            }
            editable={false}
            inputStyle={styles.inputStyle}
          />
        </View>
      </TouchableOpacity>
      {showDepartureCalendar && (
        <Calendar
          style={styles.calendar}
          theme={styles.calendarTheme}
          onDayPress={(day) => {
            setDepartureDate(day.dateString);
            setShowDepartureCalendar(false);
          }}
        />
      )}
      <TouchableOpacity onPress={handleArrivalDateFocus}>
        <View style={[styles.inputContainer, styles.input]}>
          <Input
            placeholder="Date d'arrivée"
            value={arrivalDate}
            leftIcon={
              <Icon
                name="calendar"
                type="font-awesome"
                color={styles.calendarIcon.color}
              />
            }
            editable={false}
            inputStyle={styles.inputStyle}
          />
        </View>
      </TouchableOpacity>
      {showArrivalCalendar && (
        <Calendar
          style={styles.calendar}
          theme={styles.calendarTheme}
          onDayPress={(day) => {
            setArrivalDate(day.dateString);
            setShowArrivalCalendar(false);
          }}
        />
      )}
      <Text style={styles.comfortLabel}>Confort :</Text>
      <View style={styles.comfortContainer}>
        <CheckBox
          title="1ere classe"
          checked={comfortLevel === '1ere classe'}
          onPress={() => handleComfortLevelChange('1ere classe')}
          textStyle={styles.comfortText}
          containerStyle={styles.comfortCheckbox}
        />
        <CheckBox
          title="2eme classe"
          checked={comfortLevel === '2eme classe'}
          onPress={() => handleComfortLevelChange('2eme classe')}
          textStyle={styles.comfortText}
          containerStyle={styles.comfortCheckbox}
        />
      </View>
      <Button
        buttonStyle={styles.button}
        titleStyle={styles.searchButtonText}
        title="Rechercher"
        onPress={handleSearch}
      />
    </View>
  );
};

export default Recherche;