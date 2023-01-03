import React from 'react';
import { Text, TouchableOpacity, View } from "react-native";

const CreateContacts = ({navigation}) => {
  return (
    <>
      <View>
        <Text>Hi from CreateContacts</Text>

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
export default CreateContacts