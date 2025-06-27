import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import Button from '../../components/Core/Button';

const nutritionists = [
  {
    id: '1',
    name: 'Gamze Soylu',
    title: 'Nutritionist',
    image: require('../../assets/images/nutritionists/17.png'),
  },
  {
    id: '2',
    name: 'Hande Yılmaz',
    title: 'Nutritionist',
    image: require('../../assets/images/nutritionists/18.png'),
  },
  {
    id: '3',
    name: 'Harun Karakutu',
    title: 'Nutritionist',
    image: require('../../assets/images/nutritionists/19.png'),
  },
  {
    id: '4',
    name: 'Mustafa Demir',
    title: 'Nutritionist',
    image: require('../../assets/images/nutritionists/20.png'),
  },
];

const NutritionistSelection = ({navigation}: any) => {
  const [selectedNutritionist, setSelectedNutritionist] = useState<
    string | null
  >(null);

  const handleSelectNutritionist = (id: string) => {
    setSelectedNutritionist(id);
  };

  const handleContinue = () => {
    if (selectedNutritionist) {
      const nutritionist = nutritionists.find(
        n => n.id === selectedNutritionist,
      );
      // Navigate to appointment scheduling with the selected nutritionist
      navigation.navigate('PreCallPlan', {nutritionist});
    }
  };

  const renderNutritionistItem = ({
    item,
  }: {
    item: (typeof nutritionists)[0];
  }) => {
    const isSelected = selectedNutritionist === item.id;

    return (
      <TouchableOpacity
        style={[
          styles.nutritionistItem,
          isSelected && styles.selectedNutritionistItem,
        ]}
        onPress={() => handleSelectNutritionist(item.id)}>
        <Image source={item.image} style={styles.nutritionistImage} />
        <View style={styles.nutritionistInfo}>
          <Text style={styles.nutritionistName}>{item.name}</Text>
          <Text style={styles.nutritionistTitle}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          Suitable nutritionist are listed below for you
        </Text>
      </View>

      <FlatList
        data={nutritionists}
        renderItem={renderNutritionistItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />

      <View style={styles.buttonContainer}>
        <Button
          customStyle={[
            styles.selectButton,
            !selectedNutritionist && styles.disabledButton,
          ]}
          label="Select Nutritionist"
          onPress={handleContinue}
        />
        {/* <TouchableOpacity
          style={[
            styles.selectButton,
            !selectedNutritionist && styles.disabledButton,
          ]}
          onPress={handleContinue}
          disabled={!selectedNutritionist}>
          <Text style={styles.selectButtonText}>Select Nutritionist</Text>
        </TouchableOpacity> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
  },
  listContainer: {
    padding: 16,
  },
  nutritionistItem: {
    flexDirection: 'row',
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  selectedNutritionistItem: {
    borderWidth: 2,
    borderColor: '#4CAF50',
  },
  nutritionistImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  nutritionistInfo: {
    flex: 1,
  },
  nutritionistName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
  nutritionistTitle: {
    fontSize: 14,
    color: '#666666',
    marginTop: 4,
  },
  buttonContainer: {
    padding: 16,
    paddingBottom: 24,
  },
  selectButton: {
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#D3D3D3',
  },
  selectButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default NutritionistSelection;
