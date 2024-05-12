import React, { useState } from 'react';
import { View, TouchableOpacity, Alert, Image } from 'react-native';
import { Input, Text, CheckBox, Icon } from 'react-native-elements';
import { Button } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker'; // Importez le composant DateTimePicker
import styles from './styles';
import axios from 'axios';
import Logo from './logo.jpg';

const Rechercher = ({ navigation }) => {
  const [tripType, setTripType] = useState('');
  const [departureDate, setDepartureDate] = useState(new Date()); // Initialisez la date de départ à la date actuelle
  const [arrivalDate, setArrivalDate] = useState(new Date()); // Initialisez la date d'arrivée à la date actuelle
  const [showDepartureCalendar, setShowDepartureCalendar] = useState(false);
  const [showArrivalCalendar, setShowArrivalCalendar] = useState(false);
  const [comfortLevel, setComfortLevel] = useState('');
  const [departureCity, setDepartureCity] = useState('');
  const [arrivalCity, setArrivalCity] = useState('');

  const handleSearch = () => {
    // Vérifiez si les champs obligatoires sont remplis
    if (tripType === '') {
      Alert.alert('Erreur', 'Veuillez sélectionner le type de trajet (Aller ou Aller-Retour).');
      return;
    }

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

    // Affichez les détails saisis dans la console pour vérification
    console.log('Recherche effectuée avec les paramètres suivants :');
    console.log('Ville de départ :', departureCity);
    console.log('Ville d\'arrivée :', arrivalCity);
    console.log('Date de départ :', departureDate);
    console.log('Date d\'arrivée :', arrivalDate);
    console.log('Type de voyage :', tripType);
    console.log('Niveau de confort :', comfortLevel);

    // Naviguez vers la page 'ListVol' avec les données de vol
    navigation.navigate('ListVol', {
      tripType,
      departureDate,
      arrivalDate,
      comfortLevel,
      departureCity,
      arrivalCity,
    });
  };

  const handleTripTypeChange = (type) => {
    setTripType(type);
  };

  const handleComfortLevelChange = (level) => {
    setComfortLevel(level);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>Moroccan Airlines</Text>
      <Image source={Logo} style={styles.logo} />

      <View style={styles.tripTypeContainer}>
        <TouchableOpacity
          onPress={() => handleTripTypeChange('oneWay')}
          style={[
            styles.tripTypeButton,
            tripType === 'oneWay' ? styles.selectedButtonStyle : null,
          ]}
        >
          <Text style={[
            styles.tripTypeButtonText,
            tripType === 'oneWay' ? styles.selectedButtonText : null,
          ]}>Aller</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleTripTypeChange('roundTrip')}
          style={[
            styles.tripTypeButton,
            tripType === 'roundTrip' ? styles.selectedButtonStyle : null,
          ]}
        >
          <Text style={[
            styles.tripTypeButtonText,
            tripType === 'roundTrip' ? styles.selectedButtonText : null,
          ]}>Aller-Retour</Text>
        </TouchableOpacity>
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
      <TouchableOpacity onPress={() => setShowDepartureCalendar(true)}>
        <View style={[styles.inputContainer, styles.input]}>
          <Input
            placeholder="Date de départ"
            value={departureDate.toLocaleString()} // Affichez la date de départ sous forme de chaîne
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
        <DateTimePicker // Utilisez le composant DateTimePicker pour afficher le calendrier avec l'heure
          value={departureDate}
          mode="datetime" // Sélectionnez le mode datetime pour afficher la date et l'heure
          display="calendar" // Sélectionnez le mode calendar pour afficher un calendrier
          onChange={(event, selectedDate) => {
            setShowDepartureCalendar(false);
            if (event.type === 'set') {
              setDepartureDate(selectedDate);
            }
          }}
        />
      )}
      <TouchableOpacity onPress={() => setShowArrivalCalendar(true)}>
        <View style={[styles.inputContainer, styles.input]}>
          <Input
            placeholder="Date d'arrivée"
            value={arrivalDate.toLocaleString()} // Affichez la date d'arrivée sous forme de chaîne
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
        <DateTimePicker // Utilisez le composant DateTimePicker pour afficher le calendrier avec l'heure
          value={arrivalDate}
          mode="datetime" // Sélectionnez le mode datetime pour afficher la date et l'heure
          display="calendar" // Sélectionnez le mode calendar pour afficher un calendrier
          onChange={(event, selectedDate) => {
            setShowArrivalCalendar(false);
            if (event.type === 'set') {
              setArrivalDate(selectedDate);
            }
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
          containerStyle={[styles.comfortCheckbox, { backgroundColor: 'transparent' }]}
          uncheckedColor='black'
        />
        <CheckBox
          title="2eme classe"
          checked={comfortLevel === '2eme classe'}
          onPress={() => handleComfortLevelChange('2eme classe')}
          textStyle={styles.comfortText}
          containerStyle={[styles.comfortCheckbox, { backgroundColor: 'transparent' }]}
          uncheckedColor='black'
        />
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button
          title="Rechercher"
          onPress={handleSearch}
          buttonStyle={{ backgroundColor: 'blue', borderRadius: 5, height: 50, width: 200 }}
        />
      </View>
    </View>
  );
};

export default Rechercher;
