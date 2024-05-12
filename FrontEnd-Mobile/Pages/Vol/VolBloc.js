import { View, Text, TouchableOpacity,Image,StyleSheet } from 'react-native'
import React from 'react'

export default function VolBloc({date_depart,date_arrive,id_aeroport_depart,aller_retour,id_aeroport_escal,escal_date,id_avion,prix}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <View>
            <Text >{date_depart}</Text>
            <Text >{date_arrive}</Text>
            <Text >{id_aeroport_depart}</Text>
            <Text >{aller_retour}</Text>
            <Text >{id_aeroport_escal}</Text>
            <Text >{escal_date}</Text>
            <Text>{id_avion}</Text>
            <Text>{prix}</Text>
            
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: '#fff',
      borderRadius: 10,
      elevation: 3,
      marginVertical: 10,
      padding: 10,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginRight: 20,
      },
    textContainer: {
      flex: 1,
      marginLeft: 20,
      justifyContent: 'space-between',
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    ville:{
        fontSize: 15,
      fontWeight: 'bold',
    },
    localisation: {
        fontSize: 13
      }
  });