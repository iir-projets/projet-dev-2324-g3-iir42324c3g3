import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Input, Button, Text, CheckBox, Icon } from 'react-native-elements';
import { Calendar } from 'react-native-calendars';
import styles from './styles';
const Recherche = () => {
  const [departureDate, setDepartureDate] = useState('');
  const [arrivalDate, setArrivalDate] = useState('');
  const [showDepartureCalendar, setShowDepartureCalendar] = useState(false);
  const [showArrivalCalendar, setShowArrivalCalendar] = useState(false);
  const [comfortLabel, setComfortLabel] = useState('');
  const [departureCity, setDepartureCity] = useState('');
  const [arrivalCity, setArrivalCity] = useState('');

  const handleDepartureDateFocus = () => {
    setShowDepartureCalendar(true);
    setShowArrivalCalendar(false);
  };

  const handleArrivalDateFocus = () => {
    setShowDepartureCalendar(false);
    setShowArrivalCalendar(true);
  };

  const handleLogin = () => {
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

    if (!arrivalDate) {
      Alert.alert('Erreur', 'Veuillez sélectionner une date d\'arrivée.');
      return;
    }

    if (!comfortLabel) {
      Alert.alert('Erreur', 'Veuillez sélectionner un niveau de confort.');
      return;
    }

    console.log('Ville de départ sélectionnée:', departureCity);
    console.log('Ville d\'arrivée sélectionnée:', arrivalCity);
    console.log('Date de départ sélectionnée:', departureDate);
    console.log('Date d\'arrivée sélectionnée:', arrivalDate);
    console.log('Confort:', comfortLabel);

    // Effacer tous les champs
    setDepartureCity('');
    setArrivalCity('');
    setDepartureDate('');
    setArrivalDate('');
    setComfortLabel('');
  };

  return (
    <View style={styles.container}>
      <Input
        style={[styles.input, styles.departureInput]}
        placeholder="Ville de départ"
        placeholderTextColor="#fff"
        inputStyle={{ fontSize: 18, color: '#fff' }}
        onChangeText={setDepartureCity}
        value={departureCity}
      />
      <Input
        style={[styles.input, styles.arrivalInput]}
        placeholder="Ville d'arrivée"
        placeholderTextColor="#fff"
        inputStyle={{ fontSize: 18, color: '#fff' }}
        onChangeText={setArrivalCity}
        value={arrivalCity}
      />
      <TouchableOpacity onPress={handleDepartureDateFocus}>
        <View style={[styles.inputContainer, styles.input]}>
          <Input
            placeholder="Date de départ"
            value={departureDate}
            leftIcon={<Icon name="calendar" type="font-awesome" color="#fff" />}
            editable={false}
            inputStyle={{ fontSize: 16, color: '#fff' }}
          />
        </View>
      </TouchableOpacity>
      {showDepartureCalendar && (
        <Calendar
          style={styles.calendar}
          theme={{
            backgroundColor: '#3764B9',
            calendarBackground: '#3764B9',
            textSectionTitleColor: '#fff',
            dayTextColor: '#fff',
            todayTextColor: '#3764B9',
            selectedDayBackgroundColor: '#FF6B6B',
            selectedDayTextColor: '#fff',
            arrowColor: '#fff',
            monthTextColor: '#fff',
            textDisabledColor: '#BDBDBD',
          }}
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
            leftIcon={<Icon name="calendar" type="font-awesome" color="#fff" />}
            editable={false}
            inputStyle={{ fontSize: 16, color: '#fff' }}
          />
        </View>
      </TouchableOpacity>
      {showArrivalCalendar && (
        <Calendar
          style={styles.calendar}
          theme={{
            backgroundColor: '#3764B9',
            calendarBackground: '#3764B9',
            textSectionTitleColor: '#fff',
            dayTextColor: '#fff',
            todayTextColor: '#3764B9',
            selectedDayBackgroundColor: '#FF6B6B',
            selectedDayTextColor: '#fff',
            arrowColor: '#fff',
            monthTextColor: '#fff',
            textDisabledColor: '#BDBDBD',
          }}
          onDayPress={(day) => {
            setArrivalDate(day.dateString);
            setShowArrivalCalendar(false);
          }}
        />
      )}
      <Text style={styles.comfortLabel}>Confort :</Text>
      <View style={styles.comfortContainer}>
        <CheckBox
          title='1ere classe'
          checked={comfortLabel === '1ere classe'}
          onPress={() => setComfortLabel('1ere classe')}
          textStyle={styles.comfortText}
          containerStyle={styles.comfortCheckbox}
        />
        <CheckBox
          title='2eme classe'
          checked={comfortLabel === '2eme classe'}
          onPress={() => setComfortLabel('2eme classe')}
          textStyle={styles.comfortText}
          containerStyle={styles.comfortCheckbox}
        />
      </View>
      <Button
        buttonStyle={styles.button}
        titleStyle={styles.buttonText}
        title="Rechercher"
        onPress={handleLogin}
      />
    </View>
  );
};



export default Recherche;