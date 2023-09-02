import { StyleSheet, Text, View } from 'react-native';
import Actions from './components/Actions';
import Articles from './components/Articles';
import Banner from './components/Banner';
import { ScrollView } from 'react-native'
const Home = ({navigation}: any) => {
  return (
    <ScrollView style={styles.page}>
      <View style={styles.container}>
        <Banner />
        <Actions navigation={navigation}/>
        <Articles navigation={navigation}/>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#fafafa',
    minHeight: '100%'
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 28,
    paddingHorizontal: 25,
  },
});

export default Home
