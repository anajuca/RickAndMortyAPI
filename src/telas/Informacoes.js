import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Informacoes({ route }) {
  const { character } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: character.image }} style={styles.image} />
      <Text style={styles.name}>{character.name}</Text>
      <Text style={[styles.info, { color: character.status === 'Dead' 
        ? 'red' 
        : character.status === 'Alive' 
        ? 'green' 
        : 'gray' }]}>{character.status}</Text>
      <Text style={styles.info}>Species: {character.species}</Text>
      <Text style={styles.info}>Gender: {character.gender}</Text>
      <Text style={styles.info}>Origin: {character.origin.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 20, backgroundColor: '#242424' },
  image: { width: 200, height: 200, borderRadius: 100 },
  name: { fontSize: 24, fontWeight: 'bold',
          marginVertical: 10,
         color: '#8bcf21' },
  info: {color: '#e7e0db', opacity: 0.9, fontSize: 20, fontWeight: 'semibold'},
});