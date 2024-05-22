import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity, Image, ToastAndroid, Alert, ActivityIndicator, KeyboardAvoidingView, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';

export default function AddPostScreen() {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    // Simulación de llamada a la base de datos para obtener la lista de categorías
    setCategoryList([
      { name: 'Electronics' },
      { name: 'Furniture' },
      { name: 'Clothing' },
      // Agrega más categorías según sea necesario
    ]);
  }, []);

  /**
   * Used to Pick Image from Gallery
   */
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const onSubmitMethod = (value) => {
    setLoading(true);
    // Aquí iría la lógica para enviar los datos a la base de datos

    // Simulación de éxito
    setTimeout(() => {
      setLoading(false);
      Alert.alert('Success!!!', 'Post Added Successfully.');
    }, 2000);
  };

  return (
    <KeyboardAvoidingView>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Add New Post</Text>
        <Text style={styles.subtitle}>Create New Post and Start Selling</Text>
        <Formik
          initialValues={{ title: '', desc: '', address: '', price: '', image: '', category: '', createdAt: Date.now() }}
          onSubmit={(value) => onSubmitMethod(value)}
          validate={(values) => {
            const errors = {};
            if (!values.title) {
              console.log("Title not Present");
              ToastAndroid.show('Title Must be There', ToastAndroid.SHORT);
              errors.title = "Title Must be there";
            }
            return errors;
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values, setFieldValue, errors }) => (
            <View>
              <TouchableOpacity onPress={pickImage}>
                {image ? (
                  <Image source={{ uri: image }} style={styles.image} />
                ) : (
                  <Image source={require('./../../assets/images/placeholder.jpg')} style={styles.image} />
                )}
              </TouchableOpacity>
              <TextInput
                style={styles.input}
                placeholder='Title'
                value={values.title}
                onChangeText={handleChange('title')}
              />
              <TextInput
                style={styles.input}
                placeholder='Description'
                value={values.desc}
                numberOfLines={5}
                onChangeText={handleChange('desc')}
              />
              <TextInput
                style={styles.input}
                placeholder='Price'
                value={values.price}
                keyboardType='number-pad'
                onChangeText={handleChange('price')}
              />
              <TextInput
                style={styles.input}
                placeholder='Address'
                value={values.address}
                onChangeText={handleChange('address')}
              />
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={values.category}
                  onValueChange={(itemValue) => setFieldValue('category', itemValue)}
                >
                  {categoryList.length > 0 && categoryList.map((item, index) => (
                    <Picker.Item key={index} label={item.name} value={item.name} />
                  ))}
                </Picker>
              </View>
              <TouchableOpacity
                onPress={handleSubmit}
                style={{
                  ...styles.submitButton,
                  backgroundColor: loading ? '#ccc' : '#007BFF',
                }}
                disabled={loading}
              >
                {loading ? (
                  <ActivityIndicator color='#fff' />
                ) : (
                  <Text style={styles.submitButtonText}>Submit</Text>
                )}
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 27,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 7,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    marginBottom: 5,
    paddingHorizontal: 17,
    fontSize: 17,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 15,
    marginBottom: 15,
  },
  pickerContainer: {
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 15,
  },
  submitButton: {
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  submitButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});
