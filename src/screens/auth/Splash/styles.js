import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

export const styles=StyleSheet.create({
        container :{
                padding: 24,
                flexDirection: 'column',
                justifyContent :'center',
                alignItems :'center',
                height : "100%", 
        },
        image : {
                height: 200 ,
                width: '100%',
                marginBottom : 54,
        },
        title : {
                fontSize :40,
                fontWeight : 'bold',
                textAlign: 'center',
        },
        Innertitle : {
                color: colors.orange,
                textDecorationLine: 'underline',
        },
        footerText :{
                color: colors.blue,
                textAlign: 'center',
                fontSize :16,
                fontWeight:'bold',
                marginTop: 30,
        }


})