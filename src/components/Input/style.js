import React from "react";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  width: 100%;
  height: 50px;
  border-radius: 8px;
  background-color: #363041;
  flex-direction: row;
  margin-top: 8%;
`;
export const IconArea = styled.SafeAreaView`
  width: 15%;
  height: 100%;
  background-color: #b4acf9;
  border-bottom-left-radius:8px ;
  border-top-left-radius:8px ;
  justify-content: center;
  align-items: center;
`;
export const Icon = styled.Image`
    width: 25px;
    height:25px;
    tint-color:#363041;
`;
export const TextArea = styled.TextInput`
    width:80%;
    height: 100%;
    margin-left:1%;
    padding: 4px;
    color:#b4acf9 ;
    font-size: 14px;
    font-family: Asap-Regular;
`;
