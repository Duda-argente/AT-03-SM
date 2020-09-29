import React, { Component } from 'react';
import {StyleSheet, View , Text , TextInput, Button} from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';
import { StatusBar } from 'expo-status-bar';
import {Picker} from 'react-native';

IconEntypo.loadFont();



export function Home() {
 /* const[linguagem, setlinguagem] = React.useState('0')*/
  const[peso,setPeso]= React.useState(0.00);
  const[altura, setAltura]= React.useState(0.00);
  const[IMC, setIMC]= React.useState(0.00);
  const[linguagem, setLinguagem]= React.useState(0.00);
  var IMCconvert;
  var result;

  if (IMCconvert<=18.5) {
   result = "BAIXO PESO";
  }else if (IMCconvert>18.5 && IMCconvert<=24.9) {
     result = "PESO SAUDÁVEL";
  } else if (IMCconvert>=25 && IMCconvert<=29.9) {
     result = "SOBREPESO";
  } else if (IMCconvert>30) {
    result = "OBESIDADE";
  }




  function calcularIMC(peso, altura){
   IMCconvert = (peso/(altura*altura));

    setIMC(IMCconvert);
  }
  


  return (
    <View style={styles.container}>
      <View style ={styles.duda}><StatusBar style="auto"/>
      <Text style={styles.dudinha}>ACADEMIA 4137 FITNESS</Text>
     
      <Text style={styles.lucifer}> <IconEntypo name="heart" size={20} color="#C71585"></IconEntypo>AQUI VOCÊ VAI PODER CALCULAR O SEU ÍNDICE DE MASSA CALCULAR E VER O SEU PERFIL{"\n"}{"\n"}
      
      ENTÃO, VENHA PARA O APLICATIVO DA MELHOR ACADEMIA DA SUA REGIÃO.  <IconEntypo name="heart" size={20} color="#C71585"></IconEntypo></Text>
      </View>




      <View style={styles.resto}>
        <Text style={styles.restoS}><IconEntypo name="heart" size={25} color="#C71585"></IconEntypo>Digite as informações solicitadas</Text>
        <TextInput placeholder="Peso" keyboardType="numeric" style={styles.flor} onChangeText={coracao => setPeso
        (coracao)} value={peso}></TextInput>

        <TextInput placeholder="Altura" keyboardType="numeric" style={styles.flor} onChangeText={coracao2 => setAltura
        (coracao2)} value={altura}></TextInput>


        <Picker
            selectedValue={linguagem}
            style={{height: 50, width: 302,  borderColor:"#FF69B4", backgroundColor:"#dbdbdb", fontStyle:"italic", borderWidth: 1, marginVertical:15, fontSize:20, color:"#8f8f8f",}}
            onValueChange={selected => setLinguagem(selected)}
            value={linguagem}>
              <Picker.Item label="Escolha um item" value="0" />
             <Picker.Item label="Criança" value="Criança" />
             <Picker.Item label="Adulto" value="Adulto" />
             <Picker.Item label="Idoso" value="Idoso" />
          </Picker>

          <IconEntypo name="heart" size={25} color="#C71585"></IconEntypo>
        <Button style={{marginTop:100 , height: 50, width: 302 }} title ="Aperte para calcular o seu IMC" color="#DB7093" onPress={() => calcularIMC(peso,altura)}/> 
        <View style={styles.fran1}>
          <Text style={styles.fran}> {peso} {"\t"} {"\t"}{altura}</Text>
            <Text style={styles.fran}>{IMC.toFixed(2)} </Text>
            <Text>  {result} </Text>
            
    
      </View>
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
    borderRadius: 20,
    width: '80%',
    height: '70%',
    alignSelf: 'center',
    marginTop:30,
    padding: 20,
  },

  duda: {
    backgroundColor: '#FFC0CB',
    width: '100%',
    height: '25%',
    margin: 0,
    padding:5,
    paddingTop:-10,
    justifyContent: 'center',
    alignItems:'center',
    shadowOffset:{width:3,height:3},
    shadowOpacity:0.4,
    shadowColor:"#DEDEDE",
    shadowRadius:4,
    elevation: 5,
    marginBottom:10
  },

  dudinha: {
    fontSize:18,
    fontStyle:"italic",
    color:"#C71585",
  },
  
  lucifer: {
    fontSize:13,
    fontStyle:"italic",
    alignSelf:'center',
    color:"#C71585"
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
    width: 302,
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
    fontSize:20,
    fontWeight: "100",
  },

  fran:{
        color: "#F5FFFA",
        fontSize: 30,
        alignSelf: 'center',
        borderColor: 'gray', 
        borderWidth: 1,
        marginVertical:15,
        borderColor:"#FF69B4",
        backgroundColor: "#DB7093",
        height: 50,
        width: 145,
      }, 
})
