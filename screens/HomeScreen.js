import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import { Button, Input, Item, Icon, Form, Content } from 'native-base';

export default class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Expense Tracker',

  };


  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={{ padding: 10 }}>
            <Form>
              <Item>
                <Text style={{ fontSize: 30 }}>{'\u00A3'} </Text>
                <Input style={{ height: 40 }} keyboardType="numeric" placeholder="Amount" />
              </Item>
              <Button style={{ marginTop: 20 }} rounded success block>
                <Text>Add Expense</Text>
              </Button>
            </Form>


          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  getStartedContainer: {
    alignItems: 'center',
  }
});
