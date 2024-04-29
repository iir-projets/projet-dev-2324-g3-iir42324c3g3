import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Couleur de fond blanche
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  input: {
    backgroundColor: '#fff', // Couleur de fond blanche pour les champs de saisie
    borderRadius: 8,
    color: '#000', // Couleur du texte en noir
  },
  departureInput: {
    marginBottom: 16,
  },
  arrivalInput: {
    marginBottom: 16,
  },
  inputContainer: {
    borderWidth: 0,
  },
  inputStyle: {
    color: '#000', // Couleur du texte en noir
  },
  calendar: {
    backgroundColor: '#fff', // Couleur de fond blanche pour le calendrier
    borderRadius: 8,
  },
  calendarTheme: {
    backgroundColor: '#fff',
    calendarBackground: '#fff',
    textSectionTitleColor: '#b6c1cd',
    selectedDayBackgroundColor: '#00adf5',
    selectedDayTextColor: '#ffffff',
    todayTextColor: '#00adf5',
    dayTextColor: '#000', // Couleur du texte en noir
    textDisabledColor: '#d9e1e8',
    dotColor: '#00adf5',
    selectedDotColor: '#ffffff',
    arrowColor: '#000', // Couleur des flèches en noir
    monthTextColor: '#000', // Couleur du texte du mois en noir
  },
  comfortLabel: {
    color: '#000', // Couleur du texte en noir
    fontSize: 16,
    marginBottom: 8,
  },
  comfortContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  comfortCheckbox: {
    backgroundColor: '#fff', // Couleur de fond blanche pour les cases à cocher
    borderWidth: 0,
  },
  comfortText: {
    color: '#000', // Couleur du texte en noir
  },
  button: {
    backgroundColor: '#3498db', // Couleur bleue pour le bouton de recherche
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 16,
    alignSelf: 'center',
    marginBottom: 20,
  },
  searchButtonText: {
    fontSize: 18,
    textTransform: 'uppercase',
    color: '#fff',
  },
  tripTypeButton: {
    backgroundColor: 'white', // Couleur orange pour les boutons "Aller" et "Aller-Retour"
  },
  tripTypeButtonText: {
    fontSize: 20,
    textTransform: 'uppercase',
    color: '#000', // Couleur du texte en noir
    textAlign: 'center',
  },
  selectedButtonStyle: {
    backgroundColor: 'red', // Nouvelle couleur de fond pour le bouton sélectionné
  },
  calendarIcon: {
    tintColor: '#000', // Couleur noire pour l'icône de calendrier
  },
  tripTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  selectedButtonStyle: {
    backgroundColor: '#c0392b', // Nouvelle couleur rouge pour le bouton sélectionné
  },
});

export default styles;