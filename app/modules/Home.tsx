import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { Header, MovieList } from '../components';
import { flatListData, strings } from '../constants';
import { styles } from './styles/HomeStyles';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header leftIcon={strings.bars} rightIcon={strings.search} />
      <FlatList
        data={flatListData}
        renderItem={({ item }) => (
          <MovieList title={item.title} dropDownData={item.dropDownData} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Home;
