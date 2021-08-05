import React from 'react';
import {StatusBar, View, SafeAreaView} from 'react-native';
import Style from './style';

const Header = props => {
  return (
    <View style={Style.header}>
      <StatusBar backgroundColor="#F5F5F5" barStyle="dark-content" />
      <SafeAreaView>
        <View>{props.children}</View>
      </SafeAreaView>
    </View>
  );
};

export default Header;
