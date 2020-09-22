import React from 'react';
import {StyleSheet, View , Text , TextInput, Button} from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';
import { StatusBar } from 'expo-status-bar';
import {Picker} from '@react-native-community/picker';

IconEntypo.loadFont();



export function Home() {
  const[linguagem, setlinguagem] = React.useState('0')
  return (
    <View style={styles.container}>
      <View style ={styles.duda}><StatusBar style="auto"/>
      <Text style={styles.dudinha}>ACADEMIA 4137 FITNESS</Text>
     
      <Text style={styles.lucifer}> <IconEntypo name="heart" size={40} color="#C71585"></IconEntypo>AQUI VOCÊ VAI PODER CALCULAR O SEU ÍNDICE DE MASSA CALCULAR E VER O SEU PERFIL{"\n"}
      
      ENTÃO, VENHA PARA O APLICATIVO DA MELHOR ACADEMIA DA SUA REGIÃO.  <IconEntypo name="heart" size={40} color="#C71585"></IconEntypo></Text>
      </View>




      <View style={styles.resto}>
        <Text style={styles.restoS}><IconEntypo name="heart" size={40} color="#C71585"></IconEntypo>Digite as informações solicitadas</Text>
        <TextInput style={styles.input} onChangeText={text => onChangeText("NADA")} value={"\tPeso"}></TextInput>
        <TextInput style={styles.flor} onChangeText={text => onChangeText("NADA")} value={"\tAltura"}></TextInput>

        <Picker
            selectedValue={linguagem}
            style={{height: 50, width: 402, borderColor:"#FF69B4", backgroundColor:"#dbdbdb", fontStyle:"italic", borderWidth: 1, marginVertical:15, fontSize:20, color:"#8f8f8f",}}
            onValueChange={(itemValue, itemIndex) =>
          setlinguagem({linguagem: itemValue})
           }>
              <Picker.Item label="Escolha um item" value="0" />
             <Picker.Item label="Criança" value="java" />
             <Picker.Item label="Adulto" value="js" />
             <Picker.Item label="Idoso" value="js" />
          </Picker>

          <IconEntypo name="heart" size={25} color="#C71585"></IconEntypo>
        <Button style={{marginTop:100 , height: 50, width: 402 }} title ="Aperte para calcular o seu IMC" color="#F08080" >/</Button>

      </View>
      </View>

  );
}

const styles = StyleSheet.create({

  resto: {
    //flex: 1,
    backgroundColor: '#FFC0CB',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 10,
    width: '50%',
    height: '70%',
    alignSelf: 'center',
    marginTop: 100,
    padding: 50,
  },

  duda: {
    backgroundColor: '#FFC0CB',
    width: '100%',
    height: '25%',
    margin: 0,
    padding:28,
    paddingTop:-10,
    justifyContent: 'center',
    alignItems:'center',
    shadowOffset:{width:4,height:4},
    shadowOpacity:0.4,
    shadowColor:"#DEDEDE",
    shadowRadius:4,
    elevation: 5,
    marginBottom:10
  },

  dudinha: {
    fontSize:38,
    fontStyle:"italic",
    color:"	#C71585",
  },
  
  lucifer: {
    fontSize:15,
    fontStyle:"italic",
    alignSelf:'center',
    color:"	#DB7093"
  },

  input: {
    height: 50,
    width: 402,
    borderColor: 'gray', 
    borderWidth: 1,
    marginVertical:15,
    fontSize:20,
    color:"#8f8f8f",
    fontStyle:"italic",
    backgroundColor:"#dbdbdb",
    borderColor:"#FF69B4"
  },

  flor: {
    height: 50,
    width: 402,
    borderColor: 'gray', 
    borderWidth: 1,
    marginVertical:15,
    fontSize:20,
    color:"#8f8f8f",
    fontStyle:"italic",
    backgroundColor:"#dbdbdb",
    borderColor:"#FF69B4"
  },

  restoS: {
    backgroundColor: '#FFC0CB',
    alignItems: 'center',
    justifyContent: 'flex-start',
    alignSelf: 'center',
    color: "#C71585",
    fontSize:30,
    fontWeight: 50,
  },

})
