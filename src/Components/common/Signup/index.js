import React from 'react';
import {useState} from 'react';
import {Text, TouchableOpacity, View, TextInput, Image} from 'react-native';

import Container from '../container';
import Input from '../input';
import CustomButton from '../CustomButton';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {LOGIN, REGISTER} from '../../../Constants/RouteNames';

const RegisterComponent = ({onSubmit, onChange, form, error}) => {
  const {navigate} = useNavigation();
  return (
    <Container>
      <Image
        source={require('../../../Assets/Images/logo.png')}
        style={[{}, styles.logoImage]}
      />

      <Text style={styles.title}>Wellcome To RNContacts</Text>
      <Text style={styles.subTitle}>Create A Free Account</Text>

      <View style={styles.form}>
        <Input
          label="Username"
          iconPosition="right"
          placeholder={'Enter Username'}
          icon={<Text>HIDE</Text>}
          onChangeText={(value)=>{
            onChange({name:"userName",value})
          }}
          error={error.userName}
         
        />
        <Input
          label="First name"
          iconPosition="right"
          placeholder={'Enter First name'}
          icon={<Text>HIDE</Text>}
          onChangeText={(value)=>{
            onChange({name:"firstName",value})
          }}
          error={error.firstName}
        />
        <Input
          label="Last Name"
          iconPosition="right"
          placeholder={'Enter Last Name'}
          icon={<Text>HIDE</Text>}
          error={error.lastName}
          onChangeText={(value)=>{
            onChange({name:"lastName",value})
          }}
          
        />
        <Input
          label="Email"
          iconPosition="right"
          placeholder={'Enter Email'}
          icon={<Text>HIDE</Text>}
          error={error.email}
          onChangeText={(value)=>{
            onChange({name:"email",value})
          }}
        />

        <Input
          label="Password"
          icon={<Text>Show</Text>}
          secureTextEntry={true}
          iconPosition="right"
          placeholder={'Enter Password'}
          error={error.password}
          onChangeText={(value)=>{
            onChange({name:"password",value})
          }}
        />

        <CustomButton primary title="Submit" onPress={onSubmit} />
        <View style={styles.createSection}>
          <Text style={styles.infoText}>Already Have Account</Text>
          <TouchableOpacity
            onPress={() => {
              navigate(LOGIN);
            }}>
            <Text style={styles.linkBtn}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

export default RegisterComponent;
