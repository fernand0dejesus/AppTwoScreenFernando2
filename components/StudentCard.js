// screens/StudentScreen.js
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import StudentCard from '../components/StudentCard';

const StudentScreen = ({ navigation }) => {
  const studentData = {
    fullName: 'Fernando de Jesus Hernandez Morales',
    age: 18,
    studentId: '20200335',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    email: 'fernando.hernandez@estudiante.edu.sv',
    course: 'Desarrollo de componentes para dispositivos móviles',
    group: '2A'
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#6366f1', '#4f46e5']}
        style={styles.gradient}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.header}>
            <Icon name="account-circle" size={60} color="#fff" />
            <Text style={styles.title}>Perfil del Estudiante</Text>
            <Text style={styles.subtitle}>
              Información académica personal
            </Text>
          </View>

          <StudentCard student={studentData} />

          <TouchableOpacity 
            style={styles.backButton}
            onPress={goBack}
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={['#ef4444', '#dc2626']}
              style={styles.buttonGradient}
            >
              <Icon name="arrow-back" size={24} color="#fff" />
              <Text style={styles.buttonText}>Volver al Inicio</Text>
            </LinearGradient>
          </TouchableOpacity>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
    paddingVertical: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#e0e7ff',
    textAlign: 'center',
    marginTop: 5,
  },
  backButton: {
    marginTop: 30,
    borderRadius: 12,
    overflow: 'hidden',
  },
  buttonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default StudentScreen;