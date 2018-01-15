import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Specials',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
      <Text style={styles.entirePageText}>
        This is a tab bar. You can edit it in:
      </Text>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  entirePageText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
