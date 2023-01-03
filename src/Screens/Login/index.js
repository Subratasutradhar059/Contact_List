import React from 'react';
import {useState} from 'react';
import LoninComponents from "../../Components/common/Login"



const Login = () => {
  const [value, onChangeText] = useState('');

  return (
    <>
    <LoninComponents/>      
    </>
  );
};
export default Login;
