import React from 'react';
import {useState} from 'react';
import {Text, TouchableOpacity, View, TextInput, Image} from 'react-native';

import Container from '../container';
import Input from '../input';
import CustomButton from '../CustomButton';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { LOGIN, REGISTER } from '../../../Constants/RouteNames';

const LoginComponent = () => {
    const {navigate} =useNavigation()
  return (
    <Container>
      <Image
        source={require('../../../Assets/Images/logo.png')}
        style={[{}, styles.logoImage]}
      />

      <Text style={styles.title}>Wellcome To RNContacts</Text>
      <Text style={styles.subTitle}>Please Login Here</Text>

      <View style={styles.form}>
        <Input
          label="Username"
          iconPosition="right"
          placeholder={'Enter Username'}
          icon={<Text>HIDE</Text>}
        />

        <Input
          label="Password"
          icon={<Text>Show</Text>}
          secureTextEntry={true}
          iconPosition="right"
          placeholder={'Enter Password'}
        />

        <CustomButton primary title="Submit" />
        <View style={styles.createSection}>
          <Text style={styles.infoText}> Need a new Account</Text>
          <TouchableOpacity onPress={()=>{navigate(REGISTER)}}>
            <Text style={styles.linkBtn}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

export default LoginComponent;
