import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, ScrollView } from 'react-native';
import HistoriqueCard from './utils/HistoriqueCard';

const HistoriqueScreen = () => {
  const Historiques = [
    {
      id: 1,
      quantity: '12 m/3kg',
      date: 'Le 02-03-2022',
      color: 'black',
      image: 'https://s3-alpha-sig.figma.com/img/d703/21c5/d5f8265973765d36e397c91cb40f8754?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VNWLQ8ES3iQZTB5u9Z0pKaKVaw-AEErRmTFa6VuuGmAd7pSD6EysglE46rKjG5wwehoXuWBJvM~ib935oLKpMAJqUhUz1iAUIYVsyDMwEarL~3DhoMz15qrCFCa~0kZeM2-sgfX-d0VrPJupcJxXoZjc6hX-YhJ8nLk8JhmIX9vgIAZ4Qlxy6gjnJ-W~oyRic8v~CwPGJNMQG0pOchJIXNARGgUZB3iUlvxfavoAs1mwMdB2apHu53Y~dDdFe~fG9G9jMkFEpevipndfoo0-OwtWqyXsAMd9FIPOi-9Szd3HEaJS7gGrdq7j-7d8k99DrwaPC9wk7g3IrkNKlWRrEw__',
    },
    {
      id: 2,
      quantity: '34 m/10kg',
      date: 'Le 02-03-2022',
      color: 'red',
      image: 'https://s3-alpha-sig.figma.com/img/d703/21c5/d5f8265973765d36e397c91cb40f8754?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VNWLQ8ES3iQZTB5u9Z0pKaKVaw-AEErRmTFa6VuuGmAd7pSD6EysglE46rKjG5wwehoXuWBJvM~ib935oLKpMAJqUhUz1iAUIYVsyDMwEarL~3DhoMz15qrCFCa~0kZeM2-sgfX-d0VrPJupcJxXoZjc6hX-YhJ8nLk8JhmIX9vgIAZ4Qlxy6gjnJ-W~oyRic8v~CwPGJNMQG0pOchJIXNARGgUZB3iUlvxfavoAs1mwMdB2apHu53Y~dDdFe~fG9G9jMkFEpevipndfoo0-OwtWqyXsAMd9FIPOi-9Szd3HEaJS7gGrdq7j-7d8k99DrwaPC9wk7g3IrkNKlWRrEw__',
    },
    {
      id: 3,
      quantity: '12 m/3kg',
      date: 'Le 02-03-2022',
      color: 'black',
      image: 'https://s3-alpha-sig.figma.com/img/d703/21c5/d5f8265973765d36e397c91cb40f8754?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VNWLQ8ES3iQZTB5u9Z0pKaKVaw-AEErRmTFa6VuuGmAd7pSD6EysglE46rKjG5wwehoXuWBJvM~ib935oLKpMAJqUhUz1iAUIYVsyDMwEarL~3DhoMz15qrCFCa~0kZeM2-sgfX-d0VrPJupcJxXoZjc6hX-YhJ8nLk8JhmIX9vgIAZ4Qlxy6gjnJ-W~oyRic8v~CwPGJNMQG0pOchJIXNARGgUZB3iUlvxfavoAs1mwMdB2apHu53Y~dDdFe~fG9G9jMkFEpevipndfoo0-OwtWqyXsAMd9FIPOi-9Szd3HEaJS7gGrdq7j-7d8k99DrwaPC9wk7g3IrkNKlWRrEw__',
    },
    {
      id: 4,
      quantity: '12 m/3kg',
      date: 'Le 02-03-2022',
      color: 'black',
      image: 'https://s3-alpha-sig.figma.com/img/d703/21c5/d5f8265973765d36e397c91cb40f8754?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VNWLQ8ES3iQZTB5u9Z0pKaKVaw-AEErRmTFa6VuuGmAd7pSD6EysglE46rKjG5wwehoXuWBJvM~ib935oLKpMAJqUhUz1iAUIYVsyDMwEarL~3DhoMz15qrCFCa~0kZeM2-sgfX-d0VrPJupcJxXoZjc6hX-YhJ8nLk8JhmIX9vgIAZ4Qlxy6gjnJ-W~oyRic8v~CwPGJNMQG0pOchJIXNARGgUZB3iUlvxfavoAs1mwMdB2apHu53Y~dDdFe~fG9G9jMkFEpevipndfoo0-OwtWqyXsAMd9FIPOi-9Szd3HEaJS7gGrdq7j-7d8k99DrwaPC9wk7g3IrkNKlWRrEw__',
    },
    {
      id: 5,
      quantity: '12 m/3kg',
      date: 'Le 02-03-2022',
      color: 'black',
      image: 'https://s3-alpha-sig.figma.com/img/d703/21c5/d5f8265973765d36e397c91cb40f8754?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VNWLQ8ES3iQZTB5u9Z0pKaKVaw-AEErRmTFa6VuuGmAd7pSD6EysglE46rKjG5wwehoXuWBJvM~ib935oLKpMAJqUhUz1iAUIYVsyDMwEarL~3DhoMz15qrCFCa~0kZeM2-sgfX-d0VrPJupcJxXoZjc6hX-YhJ8nLk8JhmIX9vgIAZ4Qlxy6gjnJ-W~oyRic8v~CwPGJNMQG0pOchJIXNARGgUZB3iUlvxfavoAs1mwMdB2apHu53Y~dDdFe~fG9G9jMkFEpevipndfoo0-OwtWqyXsAMd9FIPOi-9Szd3HEaJS7gGrdq7j-7d8k99DrwaPC9wk7g3IrkNKlWRrEw__',
    },
    {
      id: 6,
      quantity: '12 m/3kg',
      date: 'Le 02-03-2022',
      color: 'black',
      image: 'https://s3-alpha-sig.figma.com/img/d703/21c5/d5f8265973765d36e397c91cb40f8754?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VNWLQ8ES3iQZTB5u9Z0pKaKVaw-AEErRmTFa6VuuGmAd7pSD6EysglE46rKjG5wwehoXuWBJvM~ib935oLKpMAJqUhUz1iAUIYVsyDMwEarL~3DhoMz15qrCFCa~0kZeM2-sgfX-d0VrPJupcJxXoZjc6hX-YhJ8nLk8JhmIX9vgIAZ4Qlxy6gjnJ-W~oyRic8v~CwPGJNMQG0pOchJIXNARGgUZB3iUlvxfavoAs1mwMdB2apHu53Y~dDdFe~fG9G9jMkFEpevipndfoo0-OwtWqyXsAMd9FIPOi-9Szd3HEaJS7gGrdq7j-7d8k99DrwaPC9wk7g3IrkNKlWRrEw__',
    },
    {
      id: 7,
      quantity: '12 m/3kg',
      date: 'Le 02-03-2022',
      color: 'black',
      image: 'https://s3-alpha-sig.figma.com/img/d703/21c5/d5f8265973765d36e397c91cb40f8754?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VNWLQ8ES3iQZTB5u9Z0pKaKVaw-AEErRmTFa6VuuGmAd7pSD6EysglE46rKjG5wwehoXuWBJvM~ib935oLKpMAJqUhUz1iAUIYVsyDMwEarL~3DhoMz15qrCFCa~0kZeM2-sgfX-d0VrPJupcJxXoZjc6hX-YhJ8nLk8JhmIX9vgIAZ4Qlxy6gjnJ-W~oyRic8v~CwPGJNMQG0pOchJIXNARGgUZB3iUlvxfavoAs1mwMdB2apHu53Y~dDdFe~fG9G9jMkFEpevipndfoo0-OwtWqyXsAMd9FIPOi-9Szd3HEaJS7gGrdq7j-7d8k99DrwaPC9wk7g3IrkNKlWRrEw__',
    },
  ];

//   const handleCardPress = (blogId, blogTitle ) => {
//     navigation.navigate('ArticleDetail', { blogId, blogTitle });
//   };

  return (
    <View style={styles.container}>
      <FlatList
        data={Historiques}
        showsVerticalScrollIndicator= {false}
        renderItem={({item}) => <HistoriqueCard
          key={item.id}
          quantity={item.quantity}
          date={item.date}
          image={item.image}
          color={item.color}
        />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#eff0f0',
  },
});

export default HistoriqueScreen;