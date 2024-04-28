import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Input, Button, Text, CheckBox, Icon } from 'react-native-elements';
import styles from './Accueil.css'; 

const AccueilComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [comfortLabel, setComfortLabel] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confort:', comfortLabel);
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="Ville de départ"
        onChangeText={setEmail}
        value={email}
      />
      <Input
        placeholder="Ville d'arrivée"
        onChangeText={setPassword}
        value={password}
      />
      <Text>Confort :</Text>
      <CheckBox
        title='1ere classe'
        checked={comfortLabel === '1ere classe'}
        onPress={() => setComfortLabel('1ere classe')}
      />
      <CheckBox
        title='2eme classe'
        checked={comfortLabel === '2eme classe'}
        onPress={() => setComfortLabel('2eme classe')}
      />
      <Button
        title="Rechercher"
        onPress={handleLogin}
      />
    </View>
  );
};

export default AccueilComponent;
