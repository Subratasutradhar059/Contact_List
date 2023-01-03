import React from 'react';
import {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import RegisterComponent from '../../Components/common/Signup';

const Register = ({navigation}) => {
  const [form, setForm] = useState({});
  const [error, setError] = useState({});

  const onChange = ({name, value}) => {
    setForm({...form,[name]: value});
    if(value !== ""){
      setError(prev=>{
        return {...prev,[name]:null}

      })

    }
  };

  const onSubmit = () => {

    console.log("first",form)

    if(!form.userName){
      setError(prev=>{
        return {...prev,userName:"Please add a userName"}

      })
    }
    if(!form.firstName){
      setError(prev=>{
        return {...prev,firstName:"Please add a firstName"}

      })
    }
    if(!form.lastName){
      setError(prev=>{
        return {...prev,lastName:"Please add a lastName"}

      })
    }
    if(!form.email){
      setError(prev=>{
        return {...prev,email:"Please add a Email"}

      })
    }
    if(!form.password){
      setError(prev=>{
        return {...prev,password:"Please add a Password"}

      })
    }

  };

  return (
    <RegisterComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      error={error}
    />
  );
};
export default Register;
