import React from 'react';
import { View, StyleSheet } from 'react-native';

const Spacer = ({ children }) => <View style={ styles.spacer }>{ children }</View>

const styles = StyleSheet.create({
    spacer : {
        marginVertical: 5,
        marginHorizontal: 10
    }
});

export default Spacer;