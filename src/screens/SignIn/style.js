import React from "react";
import styled from "styled-components/native";
//363041
export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #2e2938;
`;
export const LoginArea = styled.SafeAreaView`
  width: 94%;
  height: 80px;
  padding: 4%;
  margin-bottom: 4%;
`;
export const LoginText = styled.Text`
  font-family: Asap-Bold;
  font-size: 22px;
  color: #b4acf9;
  text-transform: uppercase;
`;

export const InputArea = styled.SafeAreaView`
  width: 94%;
  height: 300px;
  padding: 4%;
`;
export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background-color: #b4acf9;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-top: 8%;
`;
export const ButtonText = styled.Text`
  font-family: Asap-Regular;
  font-size: 14px;
  color: #2e2938;
`;
export const VerifyText = styled.Text`
  font-family: Asap-Regular;
  font-size: 14px;
  color: ${(props) =>
    props.IsError
      ? "#E41C31"
      : "#ffffff" && props.IsSuccess
      ? "#55BC7E"
      : "#2e2938"};
  /* color: #2e2938; */
`;
export const TextButtom = styled.TouchableOpacity`
  align-self: center;
  margin-top: 2%;
`;
export const Text = styled.Text`
  font-family: Asap-Regular;
  font-size: 14px;
  color: #b4acf9;
`;
