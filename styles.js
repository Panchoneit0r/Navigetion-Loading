import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    nav:{
        backgroundColor: 'lightgray',
    },

    title:{
        flex:1,
        fontSize:16,
        fontWeight: 'bold',
        marginLeft: 40,
    },

    content:{
        fontSize: 23,
        fontWeight: 'bold',
    },

    progress:{
        width: 150,
        alignItems: 'center',
        padding: 1,
        marginLeft: 25,
    }
})