import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, } from 'react-native';

export function Form () {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dob, setDob] = useState('');

  const handleFnameChange = (text) => {
    setFname(text);
  };

  const handleLnameChange = (text) => {
    setLname(text);
  };

  const handleDOBChange = (text) => {
    setDob(text);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };
  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleSubmit = () => {
    console.log('Fist Name:', fname);
    console.log('Last Name:', lname)
    console.log('Date of Birth:', dob);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>First Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your First name"
        value={fname}
        onChangeText={handleFnameChange}
      />

      <Text style={styles.label}>Last Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your Last name"
        value={lname}
        onChangeText={handleLnameChange}
      />

      <Text style={styles.label}>Date of Birth:</Text>
      <TextInput
        style={styles.input}
        placeholder="MM/DD/YYYY"
        value={dob}
        onChangeText={handleDOBChange}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={handleEmailChange}
        keyboardType="email-address"
      />

      <Text style={styles.label}>Password:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        value={password}
        onChangeText={handlePasswordChange}
        secureTextEntry
      />

      <Button title="Submit" onPress={handleSubmit} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
  },
});