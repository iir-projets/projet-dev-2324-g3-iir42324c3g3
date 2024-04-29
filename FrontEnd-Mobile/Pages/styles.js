import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3764B9',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    backgroundColor: '#3764B9',
  },
  departureInput: {
    backgroundColor: '#2E5A9E', // Couleur de fond pour le champ de départ
  },
  arrivalInput: {
    backgroundColor: '#2E5A9E', // Couleur de fond pour le champ d'arrivée
  },
  calendar: {
    marginTop: 10,
    borderRadius: 8,
    elevation: 2,
    backgroundColor: '#3764B9',
    padding: 10,
  },
  comfortLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
  comfortContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  comfortCheckbox: {
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
});

export default styles;