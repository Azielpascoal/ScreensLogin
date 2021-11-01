import React from 'react'
import {Container,IconArea,Icon,TextArea} from './style'
import {TextInput} from 'react-native'

export default ({value,source,placeholder,password,onBlur,onChangeText})=>{
    return(
        <Container>
            <IconArea>
                <Icon source={source}/>
            </IconArea>
            <TextArea value={value} placeholder={placeholder} color="#b4acf9" onBlur={onBlur} onChangeText={onChangeText} placeholderTextColor="#b4acf9" secureTextEntry={password}/>
        </Container>
    );
}