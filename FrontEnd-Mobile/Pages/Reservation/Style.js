import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#f0f0f0',
    padding: 16,
    justifyContent: 'center',
    marginTop: 0,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 100,
  },
  
  input: {
    marginVertical: 8,
    backgroundColor: 'rgba(255, 255, 255, 0)', // Couleur de fond transparente
    borderRadius: 8,
    color: 'black', // Couleur du texte
    fontWeight: 'bold', // Texte en gras
    placeholderTextColor: 'black', // Couleur du placeholder en noir
    fontStyle: 'italic', // Style du texte du placeholder
  },
  
  button: {
    backgroundColor: '#007bff',
    borderRadius: 8,
    paddingVertical: 8, // Réduire la hauteur du bouton
    paddingHorizontal: 16,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    resizeMode: 'cover', // Ajuste l'image pour couvrir toute la vue
  },
});
