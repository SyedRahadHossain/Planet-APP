import { View, StyleSheet } from 'react-native'
import React from 'react'
import Text from '../components/text/text'
import { SafeAreaView } from 'react-native-safe-area-context'
import PlanetHeader from '../components/planet-header'
import { colors } from '../theme/colors'
import { spacing } from '../theme/spacing'

export default function Details({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <PlanetHeader backBtn={true}/>
            <Text>Details</Text>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
    },

});
