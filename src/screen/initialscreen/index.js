import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Picker } from 'react-native';

export default function Login() {
  const [selectedValue, setSelectedValue] = useState('');
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={{
          height: 50,
          width: 120,
          color: '#FFF',
          backgroundColor: '#babbc2',
        }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Patos - MG" value="City" />
      </Picker>

      <Text style={styles.texto}>Crie sua conta hoje mesmo! </Text>
      <Text style={styles.texto}>é facil :) </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textbutton}>Começar</Text>
      </TouchableOpacity>
      <Text style={styles.footer}>Weise`s Team</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6b44cf',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: 'white',
    marginBottom: 10,
    fontSize: 15,
  },
  //Button
  button: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    width: 160,
    height: 50,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: 'white',
    marginTop: 10,
  },
  textbutton: {
    fontSize: 18,
    color: 'white',
  },

  //Fotter
  footer: {
    color: 'white',
    position: 'absolute',
    bottom: 0,
    padding: 10,
  },
});
