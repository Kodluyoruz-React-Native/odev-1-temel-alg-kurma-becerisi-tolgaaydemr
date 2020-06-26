import React, { Component } from 'react';
import {View, Text } from 'react-native';

export default class Yildiz extends Component {
  render() {
    const boyut=5;
    // for(let i=0; i<+boyut; i++){
    //   let satir = ' ';
    //     for(let j=0; j<=i; j++){
    //       satir += '*';
    //     }
    //   console.log(satir);
    // }
    console.log('ORNEK 1 \n-----------------');
    for(let i=0; i<=boyut; i++){
      let satir = ' ';
      for(let j=0; j<=i; j++){
        satir += '*';
      }
      console.log(satir);
    }
    console.log('ORNEK 2 \n-----------------');
    let donus = 5;
    for(let i=0; i<=boyut; i++){
      let satir = ' ';
      for(let j=donus; j>0; j--){
        satir += '*';
      }
      console.log(satir);
      donus--;
    }
    console.log('ORNEK 3 \n-----------------');
    let donus = 5;
    for(let i=0; i<=boyut; i++){
      let satir = ' ';
      for(let j=donus; j>0; j--){satir += '*';}
      console.log(satir);
      donus--;
    }
    for(let i=0; i<=boyut; i++){
      let satir = ' ';
      for(let k=0; k<i; k++){satir += '*';}
      console.log(satir);
    }
    console.log('ORNEK 4 \n-----------------');
    let donus = 5;
    for(let i=0; i<=boyut; i++){
      let satir = ' ';
      let bosluk = ' ';
      for(let j=donus; j>=0; j--){bosluk += '-';}
      for(let k=0; k<=i; k++){satir += '*';}
      console.log(bosluk+satir);
      donus--;
    }
    console.log('ORNEK 5 \n-----------------');
    let donus = 5;
    for(let i=0; i<=boyut; i++){
      let satir = ' '; 
      let satir2 = ' ';
      let bosluk = ' ';
      for(let j=donus; j>=0; j--){bosluk += ' ';}
      for(let k=0; k<=i; k++){satir += '*';}
      for(let y=0; y<i; y++){satir2 += '*';}
      console.log(bosluk+satir+satir2);
      donus--;
    }
    return (
      <Text>hellow</Text>
    );
  }
}