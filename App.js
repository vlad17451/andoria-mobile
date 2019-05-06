import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Dimensions, TouchableOpacity } from 'react-native';

const window = Dimensions.get('window');

export default class App extends React.Component {

  componentDidMount() {
    //static set(dims)
    //var {height, width} = Dimensions.get('window');
    //console.log(height)
  }

  render() {

    const {height, width} = Dimensions.get('window')
    console.log(height, width)

    return (
      <View style={{flex:1, justifyContent:'center'}}>
        <View>
          <Image
            style={{width: width, height: 700, }}
            source={{uri: 'https://pp.userapi.com/c849136/v849136474/18229f/IQW-WWt_Iy4.jpg'}}
          />
        </View>
        <TouchableOpacity style={[s.quelthalas, s.location]} onPress={() => {alert('привет')}}>
          <Text style={s.whiteText}>Quel'Thalas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[s.lordaeron, s.location]} onPress={() => {alert('привет')}}>
          <Text style={s.whiteText}>Lordaeron</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[s.stormwind, s.location]} onPress={() => {alert('привет')}}>
          <Text style={s.whiteText}>Stormwind</Text>
        </TouchableOpacity>


        <View>
          <Text>{height} | {width}</Text>
        </View>
      </View>
    )
  }
}

const s = StyleSheet.create({
  whiteText: {
    color: 'white'
  },
  location: {
    position: 'absolute',
    backgroundColor: 'black',
    paddingVertical: 3,
    paddingHorizontal: 6,
    borderRadius:10,
  },
  quelthalas: {
    top: 125,
    left: 215,
  },
  lordaeron: {
    top: 220,
    left: 105,
  },
  stormwind: {
    top: 520,
    left: 115,
  }
});
