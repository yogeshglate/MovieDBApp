import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {
  Certification,
  Header,
  DetailsImage,
  DetailsTitle,
  Overview,
} from '../components';
import { navigationStrings, strings } from '../constants';
import { RootStackParams } from '../navigation/AppNavigation';
import { styles } from './styles/DetailsStyles';

type DetailsScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParams>;
  route: RouteProp<RootStackParams, navigationStrings.DETAILS>;
};

const Details = ({ navigation: { navigate }, route }: DetailsScreenProps) => {
  const { HOME } = navigationStrings;
  const { params } = route;

  return (
    <SafeAreaView style={styles.container}>
      <Header leftIcon={strings.backButton} onPress={() => navigate(HOME)} />
      <ScrollView contentContainerStyle={styles.detailsView}>
        <DetailsImage />
        <DetailsTitle />
        <Certification />
        <Overview />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Details;
