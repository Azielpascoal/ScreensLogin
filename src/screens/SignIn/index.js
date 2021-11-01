import React, { useState } from "react";
import {
  Container,
  LoginArea,
  LoginText,
  InputArea,
  Button,
  ButtonText,
  VerifyText,
  TextButtom,
  Text
} from "./style";
import {useNavigation} from '@react-navigation/native'
import Input from "../../components/Input/input";
import EmailIcon from "../../assets/email.png";
import PasswordIcon from "../../assets/password.png";

export default ({ IsError, IsSuccess }) => {
  const navigation= useNavigation();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [verifyInput, setVerifyInput] = useState();
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const onSubmit = () => {
    if (isError == true || password =="") {
      alert("Preencha bem os campos !");
    } else {
      alert("Dados Corretos!");
      setPassword("");
      setEmail("");
    }
  };
  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  return (
    <Container>
      <LoginArea>
        <LoginText>Faça seu Sign In</LoginText>
      </LoginArea>
      <InputArea>
        <VerifyText IsSuccess={isSuccess} IsError={isError}>
          {verifyInput}
        </VerifyText>
        <Input
          placeholder="DIGITE SEU EMAIL"
          source={EmailIcon}
          value={email}
          onChangeText={(t) => setEmail(t)}
          onBlur={(t) => {
            if (email != validateEmail) {
              setVerifyInput("Campos não preenchido corretamente !");
              setIsError(true);
            } else {
              setIsError(false);
              setVerifyInput("Dados correctos !");
              setIsSuccess(true);
            }
          }}
        />
        <Input
          placeholder="DIGITE SUA PALAVRA PASSE"
          password={true}
          source={PasswordIcon}
          value={password}
          onChangeText={(t) => setPassword(t)}
          onBlur={(t) => {
            if (password.length > 8) {
              setVerifyInput("Campos não preenchido corretamente !");
              setIsError(true);
            } else {
              setIsError(false);
              setVerifyInput("Dados correctos !");
              setIsSuccess(true);
            }
          }}
        />
        <Button onPress={onSubmit}>
          <ButtonText>Sign In</ButtonText>
        </Button>
        <TextButtom onPress={()=>navigation.navigate("SignUp")}>
              <Text>Caso não tenha uma conta Clique aqui!</Text>
          </TextButtom>
      </InputArea>
    </Container>
  );
};
