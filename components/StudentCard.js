import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Imagen from '../assets/images/IMG_1415.jpeg';


const StudentCard = ({ student }) => {
  image: Imagen

  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
      <Image
  source={typeof student.image === 'number' ? student.image : { uri: student.image }}
  style={styles.profileImage}
  resizeMode="cover"
/>

      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.name}>{student.fullName}</Text>

        <View style={styles.infoRow}>
          <Icon name="badge" size={18} color="#6b7280" />
          <Text style={styles.infoText}>ID: {student.studentId}</Text>
        </View>

        <View style={styles.infoRow}>
          <Icon name="cake" size={18} color="#6b7280" />
          <Text style={styles.infoText}>Edad: {student.age} años</Text>
        </View>

        <View style={styles.infoRow}>
          <Icon name="email" size={18} color="#6b7280" />
          <Text style={styles.infoText}>{student.email}</Text>
        </View>

        <View style={styles.infoRow}>
          <Icon name="school" size={18} color="#6b7280" />
          <Text style={styles.infoText}>{student.course}</Text>
        </View>

        <View style={styles.infoRow}>
          <Icon name="group" size={18} color="#6b7280" />
          <Text style={styles.infoText}>Grupo: {student.group}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 25,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
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
});

export default StudentCard;
