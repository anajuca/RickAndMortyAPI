import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Informacoes({ route }) {
  const { character } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: character.image }} style={styles.image} />
      <Text style={styles.name}>{character.name}</Text>
      <Text>Espécie: {character.species}</Text>
    </View>
  );
}