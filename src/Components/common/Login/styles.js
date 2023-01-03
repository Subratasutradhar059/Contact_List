import {StyleSheet} from 'react-native';
import Color from '../../../Assets/Themes/Color';


export default StyleSheet.create({
  logoImage: {
    height:250,
    width:250,
    alignSelf:"center",
    marginTop:30 
   
  },
  title:{
    fontSize:21,
    textAlign:"center",
    paddingTop:20,
    fontWeight:"500",
    
  },
  subTitle:{
    fontSize:17,
    textAlign:"center",
    paddingVertical:20,
    fontWeight:"500"

  },
  form:{
    paddingTop:20
  },
  createSection:{
    flexDirection:"row"
  },
  linkBtn:{
    paddingLeft:17,
    color:Color.primary,
    fontSize:16
  },
  infoText:{

    fontSize:17
  },

 
});
