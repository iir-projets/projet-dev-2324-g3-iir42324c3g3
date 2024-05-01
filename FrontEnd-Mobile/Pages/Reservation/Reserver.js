import React from 'react';
import { View, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { styles } from './Style';

const Reserver = () => {
  const [nom, setNom] = React.useState("");
  const [prenom, setPrenom] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [adresse, setAdresse] = React.useState("");
  const [telephone, setTelephone] = React.useState("");

  const handleSubmit = () => {
    if (nom === "" || prenom === "" || email === "" || adresse === "" || telephone === "") {
      Alert.alert(
        "Erreur",
        "Veuillez remplir tous les champs obligatoires.",
        [
          { text: "OK", onPress: () => console.log("Alert closed") }
        ]
      );
    } else {
      console.log("Ajouter les données :", { nom, prenom, email, adresse, telephone });
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Nom"
        value={nom}
        onChangeText={text => setNom(text)}
        style={[styles.input, styles.nomInput]}
      />
      <TextInput
        label="Prénom"
        value={prenom}
        onChangeText={text => setPrenom(text)}
        style={[styles.input, styles.prenomInput]}
      />
      <TextInput
        label="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        style={[styles.input, styles.emailInput]}
      />
      <TextInput
        label="Adresse"
        value={adresse}
        onChangeText={text => setAdresse(text)}
        style={[styles.input, styles.adresseInput]}
      />
      <TextInput
        label="Téléphone"
        value={telephone}
        onChangeText={text => setTelephone(text)}
        style={[styles.input, styles.telephoneInput]}
      />
      <Button mode="contained" onPress={handleSubmit} style={styles.button}>
        Ajouter
      </Button>
    </View>
  );
};

export default Reserver;