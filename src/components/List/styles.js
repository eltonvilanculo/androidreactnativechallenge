import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    
    flexDirection: "row",
    width: "100%",
    height: 90,
    backgroundColor: "#FFFFFF",
    borderRadius: 6,
    marginBottom:6

   
  },

  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  thumb: {
    height:'100%',
    width:'20%',
    padding: 8,


  },
  image:{
    width:'100%', 
    height:'100%',
    borderRadius:4

  },



  content: {

    justifyContent: 'center',
    padding: 8

  },

  title:{

    fontSize: 16,
    fontWeight:'500',

  },
  subtitle:{
    fontSize: 12,
    fontWeight:'400',
    color: "rgba(50,50,50,1)"
  },
  date:{

    marginTop: 10,
    fontSize:9
  }
});

export default styles;
