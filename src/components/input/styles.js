import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";


export const styles=StyleSheet.create({
        container :{
              marginBottom:20,
        }, 
        lable:{
                marginBottom:8,
                color:colors.blue,
                fontSize:14,
                fontWeight:'500',
        },
        inputContainer :{
                borderWidth:1,
                borderColor:colors.grey, 
                borderRadius:14,
                flexDirection: 'row',
                alignItems: 'center',

        },
        Input:{
                // borderWidth:1,
                paddingHorizontal :16,
                paddingVertical :20,
                flex: 1,
        },
        eye:{
                height:24,
                width:24,
                marginHorizontal:16,
        }
       
        


})