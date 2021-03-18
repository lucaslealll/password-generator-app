import React, { useState } from 'react'; // importando biblioteca
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'; // View = caixa; Text = texto; StyleSheet = formatação
import Slider from '@react-native-community/slider';
import Clipboard from 'expo-clipboard';


export default function App() // criando um componente função equivalente a main em C
{

  let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%*()<>`´^~,.;:/?]}[{'

  const [password, setPassword] = useState('');
  const [size, setSize] = useState(5);


  function generatePass() {

    let pass = '';

    for (let i = 0, n = charset.length; i < size; i++) {
      pass += charset.charAt(Math.floor(Math.random() * n))
    }
    setPassword(pass);
  };

    function copyPass() {
      Clipboard.setString(password);
      alert('Senha copiada')
    }


  return (
    <View style={styles.container}>

      <Image
        source={require('./src/assets/logo.png')}
        style={styles.logo}
      />
      <Text style={styles.title}> {size} Caracteres</Text>

      <View style={styles.area}>
        <Slider
          style={{ height: 50 }}
          minimumValue={5}
          maximumValue={15}
          thumbTintColor="#FFA200"
          minimumTrackTintColor="#FFA200"
          maximumTrackTintColor="black"
          value={size}
          onValueChange={(valor) => setSize(valor.toFixed(0))}
        />
      </View>

      <TouchableOpacity style={styles.buttom} onPress={generatePass}>
        <Text style={styles.buttomText}>
          Gerar Senha
        </Text>
      </TouchableOpacity>

      {password !== '' && (
        <View style={styles.area}>
          <Text style={styles.password} onLongPress={copyPass}>{password}</Text>
        </View>
      )}

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3F3FF',
  },
  logo: {
    marginBottom: 60, width: '40%', height: '25%'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#282828'
  },
  area: {
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: '#FFF',
    width: '80%',
    borderRadius: 10
  },
  buttom: {
    backgroundColor: '#FFA200',
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 25,
  },
  buttomText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  password: {
    padding: 10,
    textAlign: 'center',
    fontSize: 20
  }

});