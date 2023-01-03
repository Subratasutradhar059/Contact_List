import React from 'react';
import { Text, TouchableOpacity, View } from "react-native";

const ContactDetails = ({navigation}) => {
  return (
    <>
      <View>
        <Text>Hi from ContactDetails</Text>

        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}>
          <Text>jgdjgjk</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
export default ContactDetails