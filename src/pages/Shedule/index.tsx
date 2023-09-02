import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { listShedule } from '../../service/http';
import Banner from './components/Banner';
import List from './components/List';

const monthNames = ["jan", "fev", "mar", "abr", "mai", "jun",
  "jul", "ago", "set", "out", "nov", "dez"
];
const Shedule = () => {

  const [list, setList] = useState([])
  useEffect(() =>{
    getShedules()
  }, [])

  const getShedules = async () =>{
    await listShedule()
    .then((res: any) => {
      res.forEach((el: any) => {
        el.day = el.date.split('/')?.[0] 
        const month = el.date.split('/')?.[1] 
        el.month = monthNames[+(month - 1)]
        el.time = el.date.split('-')?.[1]?.replace(/\s/g, '')
      })
      setList(res)
    })
    .catch(err => {
        console.error(err)
    })
  }

  return (
    <>
      <ScrollView style={styles.page}>
      <View style={styles.container}>
        <Banner update={() => getShedules()}/>
        <List list={list}/>
      </View>

    </ScrollView>

    </>
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

export default Shedule
