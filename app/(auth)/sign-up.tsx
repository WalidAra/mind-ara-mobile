import React, { useState } from "react";
import { Alert, ScrollView, Text, TextInput, View } from "react-native";
import { Button, ButtonText } from "@/components/ui/button";
import GoogleButton from "@/components/atoms/google-button";
import { Link } from "expo-router";

const SignUp = () => {
  // State variables for form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle sign-up logic
  const handleSignUp = async () => {
    // Basic validation
    if (!name || !email || !password) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }

    // Implement your registration logic here
    // For example, using Parse:
    /*
        try {
          const createdUser = await Parse.User.signUp(email, password, { name });
          Alert.alert("Success", `User ${createdUser.getUsername()} was successfully created!`);
        } catch (error) {
          Alert.alert("Error", error.message);
        }
        */
  };

  return (
    <ScrollView
      className="flex-1 bg-white"
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View className="flex-1 justify-center items-center">
        <View className="w-full p-6 rounded-lg">
          <View className="flex flex-col items-center">
            <Text className="text-3xl font-bold">Create an Account</Text>
            <Text className="text-center text-light-muted-foreground">
              Sign up to join Acme Inc
            </Text>
          </View>

          <View className="flex flex-col gap-4 mt-4">
            {/* Name Input */}
            <View className="flex flex-col gap-2">
              <Text className="text-sm font-medium leading-none">Name</Text>
              <TextInput
                className="flex h-14 w-full rounded-md border border-light-input bg-transparent px-3 py-1 text-base"
                placeholder="Name"
                value={name}
                onChangeText={setName}
              />
            </View>

            {/* Email Input */}
            <View className="flex flex-col gap-2">
              <Text className="text-sm font-medium leading-none">Email</Text>
              <TextInput
                className="flex h-14 w-full rounded-md border border-light-input bg-transparent px-3 py-1 text-base"
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            {/* Password Input */}
            <View className="flex flex-col gap-2">
              <Text className="text-sm font-medium leading-none">Password</Text>
              <TextInput
                className="flex h-14 w-full rounded-md border border-light-input bg-transparent px-3 py-1 text-base"
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
            </View>

            {/* Sign Up Button */}
            <Button
              size="lg"
              className="bg-light-foreground"
              onPress={handleSignUp}
            >
              <ButtonText className="text-light-background">Sign Up</ButtonText>
            </Button>

            {/* Divider */}
            <View className="relative items-center my-4">
              <View className="absolute inset-0 top-1/2 border-t border-light-border" />
              <Text className="relative z-10 px-2 text-light-muted-foreground bg-white">
                Or continue with
              </Text>
            </View>

            {/* Google Sign-Up Button */}
            <GoogleButton />

            {/* Navigation to Sign In */}
            <Link
              href="/sign-in"
              className="w-full flex items-center justify-center flex-row"
            >
              <Text className="text-center text-sm">
                Already have an account?{" "}
                <Text className="underline underline-offset-4">Sign in</Text>
              </Text>
            </Link>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
