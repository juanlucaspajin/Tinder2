import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const HomeScreen = () => {
    const navigation = useNavigation();
    return (
        <View>
            <Text>I'm the Home screen</Text>
            <Button title="Go to chat screen" onPress={() => navigation.navigate('Chat')}/>
        </View>
    )
}

export default HomeScreen

