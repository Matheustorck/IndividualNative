import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import InputBox from "../../components/InputBox/InputBox";
import CustomButton from "../../components/CustomButton/CustomButton";
import {styles} from './style'

const Login = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputContainer}>
        <Image
          source={require("../../../assets/Instagram.png")}
          style={styles.logoImage}
        />
        <InputBox placeholder={"Usuário"} secureTextEntry={false} />
        <InputBox placeholder={"Senha"} secureTextEntry />
        <CustomButton buttonTitle={"Entrar"} />

        <TouchableOpacity style={styles.forgotPasswordButton}>
          <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.createAccountContainer}>
        <TouchableOpacity style={styles.createAccountButton}>
          <Text style={styles.createAccountText}>Criar nova conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;


