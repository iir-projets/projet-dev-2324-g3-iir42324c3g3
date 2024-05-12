import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: '#fff',
    resizeMode: 'cover',
  },
  departureInput: {
    borderRadius: 8,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 16,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center', // Alignement vertical des éléments dans la même ligne
    marginBottom: 20, // Ajout d'une marge inférieure pour créer de l'espace entre le logo et le titre
  },
  logo: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
    marginRight: 10, // Réduction de l'espace entre le logo et le titre
  },
  appTitle: {
    fontSize: 28, // Augmentation de la taille de la police
    fontWeight: 'bold',
    color: 'black',
    marginBottom: -50, // Marge inférieure négative pour remonter un peu le titre
    textAlign: 'center',
  },
  arrivalInput: {
    borderRadius: 8,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 16,
  },
  inputContainer: {
    borderWidth: 0,
    color: '#000',
    fontWeight: 'bold',
  },
  inputStyle: {
    color: '#000',
  },
  calendar: {
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  calendarTheme: {
    backgroundColor: '#fff',
    calendarBackground: '#fff',
    textSectionTitleColor: '#b6c1cd',
    selectedDayBackgroundColor: '#00adf5',
    selectedDayTextColor: '#ffffff',
    todayTextColor: '#00adf5',
    dayTextColor: '#000',
    textDisabledColor: '#d9e1e8',
    dotColor: '#00adf5',
    selectedDotColor: '#ffffff',
    arrowColor: '#000',
    monthTextColor: '#000',
  },
  comfortLabel: {
    color: '#000',
    fontSize: 16,
    marginBottom: 8,
  },
  comfortContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  comfortCheckbox: {
    backgroundColor: '#fff',
    borderWidth: 0,
  },
  comfortText: {
    color: '#000',
  },
  tripTypeButton: {
    paddingHorizontal: 30,
    paddingVertical: 16,
  },
  tripTypeButtonText: {
    fontSize: 20,
    textTransform: 'uppercase',
    color: '#000',
    textAlign: 'center',
  },
  selectedButtonStyle: {
    backgroundColor: '#c0392b',
  },
  calendarIcon: {
    tintColor: '#000',
  },
  tripTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  selectedButtonText: {
    color: 'black',
  },
  button: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default styles;

