import React from 'react';
import { View, Alert, Image, Dimensions } from 'react-native';
import { TextInput, Button,Text } from 'react-native-paper';
import { styles } from './Style';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import Mailer from 'react-native-mail';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Reserver = () => {
  const [nom, setNom] = React.useState("");
  const [prenom, setPrenom] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [adresse, setAdresse] = React.useState("");
  const [telephone, setTelephone] = React.useState("");
  const [showAlert, setShowAlert] = React.useState(false); // Ajout de l'état pour afficher l'alerte

  const handleSubmit = async () => {
    if (nom === "" || prenom === "" || email === "" || adresse === "" || telephone === "") {
      Alert.alert(
        "Erreur",
        "Veuillez remplir tous les champs obligatoires.",
        [
          { text: "OK", onPress: () => console.log("Alert closed") }
        ]
      );
    } else {
      setShowAlert(true); // Affiche l'alerte si tous les champs sont remplis

      // Générer le contenu du billet sous forme HTML
      const ticketHTML = `
        <html>
          <body>
            <h1>Billet électronique</h1>
            <p>Nom: ${nom}</p>
            <p>Prénom: ${prenom}</p>
            <p>Email: ${email}</p>
            <p>Adresse: ${adresse}</p>
            <p>Téléphone: ${telephone}</p>
            <!-- Ajoutez d'autres informations de billet ici -->
          </body>
        </html>
      `;

      // Générer le PDF à partir du contenu HTML
      const { filePath } = await RNHTMLtoPDF.convert({
        html: ticketHTML,
        fileName: 'billet',
        directory: 'Documents',
      });

      // Envoyer l'email avec le PDF en pièce jointe
      Mailer.mail({
        subject: 'Billet électronique',
        recipients: [email],
        body: 'Veuillez trouver votre billet électronique en pièce jointe.',
        attachment: {
          path: filePath, // Chemin vers le fichier PDF
          type: 'pdf', // Type de fichier
          name: 'billet.pdf' // Nom du fichier
        }
      }, (error, event) => {
        if (error) {
          Alert.alert(
            "Erreur",
            "Impossible d'envoyer l'email.",
            [
              { text: "OK", onPress: () => console.log("Alert closed") }
            ]
          );
        } else {
          Alert.alert(
            "Succès",
            "Email envoyé avec succès.",
            [
              { text: "OK", onPress: () => console.log("Alert closed") }
            ]
          );
        }
      });
    }
  };

  // Affiche l'alerte lorsque tous les champs sont remplis
  React.useEffect(() => {
    if (showAlert) {
      Alert.alert(
        "Succès",
        "Les informations ont été ajoutées avec succès.",
        [
          { text: "OK", onPress: () => setShowAlert(false) }
        ]
      );
    }
  }, [showAlert]);

  return (
    <View style={styles.container}>
       <Text style={styles.title}>Réservation</Text>
      <Image
        // source={require('./img.jpg')}
        style={[styles.backgroundImage, {width: windowWidth, height: windowHeight}]}    />
      <TextInput
        label="Nom"
        value={nom}
        onChangeText={text => setNom(text)}
        style={styles.input}
        theme={{ colors: { primary: 'black', placeholder: 'black' }, fonts: { regular: { fontWeight: 'bold' } }}}
      />
      <TextInput
        label="Prénom"
        value={prenom}
        onChangeText={text => setPrenom(text)}
        style={styles.input}
        theme={{ colors: { primary: 'black', placeholder: 'black' }, fonts: { regular: { fontWeight: 'bold' } }}}
      />
      <TextInput
        label="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        style={styles.input}
        theme={{ colors: { primary: 'black', placeholder: 'black' }, fonts: { regular: { fontWeight: 'bold' } }}}
      />
      <TextInput
        label="Adresse"
        value={adresse}
        onChangeText={text => setAdresse(text)}
        style={styles.input}
        theme={{ colors: { primary: 'black', placeholder: 'black' }, fonts: { regular: { fontWeight: 'bold' } }}}
      />
      <TextInput
        label="Téléphone"
        value={telephone}
        onChangeText={text => setTelephone(text)}
        style={styles.input}
        theme={{ colors: { primary: 'black', placeholder: 'black' }, fonts: { regular: { fontWeight: 'bold' } }}}
      />
      <Button mode="contained" onPress={handleSubmit} style={styles.button} labelStyle={{ color: 'white', fontWeight: 'bold' }}>
        Ajouter
      </Button>
    </View>
  );
};

export default Reserver;
