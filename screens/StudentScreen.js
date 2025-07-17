// screens/StudentScreen.js (Simple version without StudentCard)
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

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

          {/* Student Info Card */}
          <View style={styles.card}>
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: studentData.image }}
                style={styles.profileImage}
                resizeMode="cover"
              />
            </View>
            
            <View style={styles.infoContainer}>
              <Text style={styles.name}>{studentData.fullName}</Text>
              
              <View style={styles.infoRow}>
                <Icon name="badge" size={18} color="#6b7280" />
                <Text style={styles.infoText}>ID: {studentData.studentId}</Text>
              </View>
              
              <View style={styles.infoRow}>
                <Icon name="cake" size={18} color="#6b7280" />
                <Text style={styles.infoText}>Edad: {studentData.age} años</Text>
              </View>
              
              <View style={styles.infoRow}>
                <Icon name="email" size={18} color="#6b7280" />
                <Text style={styles.infoText}>{studentData.email}</Text>
              </View>
              
              <View style={styles.infoRow}>
                <Icon name="school" size={18} color="#6b7280" />
                <Text style={styles.infoText}>{studentData.course}</Text>
              </View>
              
              <View style={styles.infoRow}>
                <Icon name="group" size={18} color="#6b7280" />
                <Text style={styles.infoText}>Grupo: {studentData.group}</Text>
              </View>
            </View>
          </View>

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
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 25,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#e5e7eb',
  },
  infoContainer: {
    alignItems: 'flex-start',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 20,
    textAlign: 'center',
    width: '100%',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    width: '100%',
  },
  infoText: {
    fontSize: 14,
    color: '#6b7280',
    marginLeft: 10,
    flex: 1,
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