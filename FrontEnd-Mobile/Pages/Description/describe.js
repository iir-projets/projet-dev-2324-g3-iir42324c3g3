import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const Description = ({ navigation }) => {
  const handleReservationButtonPress = () => {
    navigation.navigate('Reservation');
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Description</Text>
        <Text style={styles.description}> Partez de ........ le ........ pour rejoindre .......  le  Le prix du billet est de  €. Réservez dès maintenant pour profiter de cette offre !</Text>
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

export default Description;

