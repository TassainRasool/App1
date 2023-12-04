import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

export const styles=StyleSheet.create({
        container :{
                padding: 24,

        },
        agreeText:{
                color: colors.blue,
                marginHorizontal:13,
                
        },
        agreeRow:{
                flexDirection:'row',
                alignItems:'center'

        },
        bold:{
                fontWeight:'bold',
        },
        button:{
                marginVertical:20,
        },
        footer:{
                color: colors.blue,
                textAlign :'center',
                marginBottom:'56'
        },
        link:{
                fontWeight:'bold'
        }
        


})