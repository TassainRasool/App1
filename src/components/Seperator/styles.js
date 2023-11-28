import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles =StyleSheet.create({
        container:{
                flexDirection:'row',
                alignItems:'center',
                marginVertical:20,
        },
        line:{
                flex:1,
                backgroundColor: colors.lightGrey,
                height:1,
                width:1,
        },
        text:{
                color: colors.blue,
                fontWeight:'500',
                marginHorizontal: 8,
        }
       
})