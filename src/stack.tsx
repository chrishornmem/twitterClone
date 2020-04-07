import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { Appbar, Avatar, Button, Text, useTheme } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ChatWindow } from './chatWindow';

import { BottomTabs } from './bottomTabs';
import { Details } from './details';
import { StackNavigatorParamlist } from './types';

const Stack = createStackNavigator<StackNavigatorParamlist>();

const ContentTitle = ({ title, style }) => (
  <Appbar.Content
    title={<Text style={style}> {title} </Text>}
    style={{ alignItems: 'center' }}
  />
);

export const StackNavigator = () => {
  const theme = useTheme();

  return (
    <Stack.Navigator
      initialRouteName="ChatWindow"
      headerMode="screen"
      screenOptions={{
        header: ({ scene, previous, navigation }) => {
          const { options } = scene.descriptor;
          const title =
            options.headerTitle !== undefined
              ? options.headerTitle
              : options.title !== undefined
              ? options.title
              : scene.route.name;

          return (
            <>
              <Appbar.Header
                style={{ marginLeft: 0, paddingLeft: 0 }}
                theme={{ colors: { primary: theme.colors.surface } }}
              >
                <Appbar.Action
                  accessibilityLabel="Back"
                  color="black"
                  size={36}
                  style={{ marginLeft: 0, paddingLeft: 0 }}
                  icon="chevron-left"
                  onPress={() => {}}
                />
                <ContentTitle title={'Title'} style={{ color: 'black' }} />
                <Button mode="text" onPress={() => this.submit()}>
                  DONE1
                </Button>
              </Appbar.Header>
            </>
          );
        },
      }}
    >
      <Stack.Screen
        name="ChatWindow"
        component={ChatWindow}
        options={({ route }) => {
          console.log('!@# options', { route });
          const routeName = route.state
            ? route.state.routes[route.state.index].name
            : 'ChatWindow';
          return { headerTitle: routeName };
        }}
      />
      {/* <Stack.Screen
        name="Details"
        component={Details}
        options={{ headerTitle: 'Tweet' }}
      /> */}
    </Stack.Navigator>
  );
};
