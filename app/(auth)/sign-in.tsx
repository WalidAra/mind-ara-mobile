import { Alert, ScrollView, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { Button, ButtonText } from "@/components/ui/button";
import GoogleButton from "@/components/atoms/google-button";
import { Link } from "expo-router";

const SignIn = () => {
  // State for form fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Basic login logic: Replace with your actual auth call
  const handleSignIn = () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in both email and password.");
      return;
    }

    // Simulate successful login
    Alert.alert("Success", `Logged in as ${email}`);

    // TODO: Replace the above Alert with your authentication logic
    // Example: await auth.signInWithEmailAndPassword(email, password);
    // Then navigate to your app's main screen on success
  };

  return (
    <ScrollView
      className="flex-1 bg-white"
      contentContainerStyle={{
        flexGrow: 1,
      }}
    >
      <View className="flex-1 justify-center items-center">
        <View className="w-full p-6 rounded-lg">
          <View className="flex flex-col items-center">
            <Text className="text-3xl font-bold">Welcome back</Text>
            <Text className="text-center text-light-muted-foreground">
              Login to your Acme Inc account
            </Text>
          </View>

          <View className="flex flex-col gap-4 mt-4">
            <View className="flex flex-col gap-2">
              <Text className="text-sm font-medium leading-none">Email</Text>
              <TextInput
                className="flex h-14 w-full rounded-xl border border-light-input bg-transparent px-3 py-1 text-base"
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />
            </View>
            <View className="flex flex-col gap-2">
              <Text className="text-sm font-medium leading-none">Password</Text>
              <TextInput
                className="flex h-14 w-full rounded-xl border border-light-input bg-transparent px-3 py-1 text-base"
                placeholder="Password"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
              />
            </View>
            <Button
              size="lg"
              className="bg-light-foreground rounded-xl"
              onPress={handleSignIn}
            >
              <ButtonText className="text-light-background font-normal">
                Sign in
              </ButtonText>
            </Button>

            <View className="relative items-center my-4">
              <View className="absolute inset-0 top-1/2 border-t border-light-border" />
              <Text className="relative z-10 px-2 text-light-muted-foreground bg-white">
                Or continue with
              </Text>
            </View>
            <GoogleButton />
            <Link
              href={"/sign-up"}
              className="w-full flex items-center justify-center flex-row"
            >
              <Text className="text-center text-sm">
                Don't have an account?{" "}
                <Text className="underline underline-offset-4">Sign up</Text>
              </Text>
            </Link>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignIn;
