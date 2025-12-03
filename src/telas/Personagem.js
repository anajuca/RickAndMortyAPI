import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, ActivityIndicator, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

export default function Personagem({ navigation }) {
    const [personagemEscolhido, setPersonagemEscolhido] = useState([]);
    const [carregamento, setCarregamento] = useState(true);

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character')

          .then(response => {
            setPersonagemEscolhido(response.data.results);
            setCarregamento(false);
          })

          .catch(error => {
            console.error(error);
            setCarregamento(false);
          });

        }, []);
    
        if (carregamento) {
          return (
            <View style={styles.center}>
              <ActivityIndicator size="large" color="green" />
            </View>
          );
        }
    
        return (
          <FlatList
            data={personagemEscolhido}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity 
                style={styles.card}
                onPress={() => navigation.navigate('Informações', { character: item })}
                >
                <Image source={{ uri: item.image }} style={styles.image} />
                  <View style={styles.info}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.statusspecies}>{item.status} - {item.species}</Text>
                </View>
              </TouchableOpacity>
            )}
          />)
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: 'center', alignItems: 'center'},
  card: { flexDirection: 'row', padding: 10, borderBottomWidth: 1, borderColor: '#3b3a3a', backgroundColor: '#242424'},
  image: { width: 80, height: 80, borderRadius: 40 },
  info: { marginLeft: 10, justifyContent: 'center' },
  name: { fontSize: 16, fontWeight: 'bold', color: '#8bcf21'},
  statusspecies: {color: '#2f9331', opacity: 0.7},
});