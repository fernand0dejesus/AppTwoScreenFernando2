// screens/HomeScreen.js
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

const HomeScreen = ({ navigation }) => {
  const navigateToStudent = () => {
    navigation.navigate('Student');
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#3b82f6', '#1e40af']}
        style={styles.gradient}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.header}>
            <Icon name="school" size={60} color="#fff" />
            <Text style={styles.title}>Módulo 3.5</Text>
            <Text style={styles.subtitle}>
              Desarrollo de componentes para dispositivos móviles
            </Text>
          </View>

          <View style={styles.infoCard}>
            <View style={styles.cardHeader}>
              <Icon name="info" size={24} color="#2563eb" />
              <Text style={styles.cardTitle}>Información del Módulo</Text>
            </View>
            
            <View style={styles.cardContent}>
              <Text style={styles.moduleTitle}>Navegación en React Native</Text>
              <Text style={styles.description}>
                Este módulo se enfoca en el desarrollo de aplicaciones móviles 
                utilizando React Native, con énfasis en la navegación entre 
                pantallas y la creación de componentes reutilizables.
              </Text>
              
              <View style={styles.detailsContainer}>
                <View style={styles.detailItem}>
                  <Icon name="group" size={20} color="#6b7280" />
                  <Text style={styles.detailText}>Grupo: 2A</Text>
                </View>
                <View style={styles.detailItem}>
                  <Icon name="person" size={20} color="#6b7280" />
                  <Text style={styles.detailText}>Docente: Wilfredo Granados</Text>
                </View>
              </View>
            </View>
          </View>

          <TouchableOpacity 
            style={styles.button}
            onPress={navigateToStudent}
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={['#10b981', '#059669']}
              style={styles.buttonGradient}
            >
              <Icon name="arrow-forward" size={24} color="#fff" />
              <Text style={styles.buttonText}>Ver Información del Estudiante</Text>
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
    fontSize: 32,
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
    paddingHorizontal: 20,
  },
  infoCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2563eb',
    marginLeft: 10,
  },
  cardContent: {
    marginTop: 10,
  },
  moduleTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
    marginBottom: 20,
  },
  detailsContainer: {
    marginTop: 10,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  detailText: {
    fontSize: 14,
    color: '#6b7280',
    marginLeft: 8,
  },
  button: {
    marginTop: 20,
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

export default HomeScreen;