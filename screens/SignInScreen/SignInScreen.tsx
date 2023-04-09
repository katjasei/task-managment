import { app } from "../../utils/firebase";
import { useState } from "react";
import { Button } from "react-native";
import {
  TextInput,
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from "react-native";
import { SignInScreenNavigationProp } from "../../types";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import image from "../../images/task-managment.jpg";

type Props = {
  navigation: SignInScreenNavigationProp;
};

const { width, height } = Dimensions.get("window");

function SignInScreen({ navigation }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth(app);

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        //navigate to main page
        console.log("User signed in!");
        navigation.navigate("TaskScreen");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button color={"#ffffff"} title="Sign In" onPress={handleSignIn} />
          </View>
          <View style={styles.button}>
            <Button
              color={"#ffffff"}
              title="Don't have an account? Sign Up"
              onPress={() => navigation.navigate("SignUp")}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    opacity: 0.5,
    width: width,
    height: height,
    resizeMode: "cover",
    alignItems: "center",
    justifyContent: "center",
  },

  container: {
    flex: 1,
  },

  inputContainer: {
    marginBottom: 20,
    width: "100%",
  },
  input: {
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 5,
    width: "80%",
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 5,
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default SignInScreen;
