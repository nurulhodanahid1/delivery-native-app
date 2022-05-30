import { View, StyleSheet, SafeAreaView, StatusBar, Pressable, ScrollView } from 'react-native';
import React, { } from 'react';
import Text from '../components/text/text';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import {typography} from '../theme/typography';
import { Feather } from '@expo/vector-icons';


export default function Home({ navigation }) {

    return (
        <SafeAreaView style={[styles.container, { marginTop: StatusBar.currentHeight }]}>
            <ScrollView>
            <View style={styles.homeHeader}>
                <View style={styles.logoArea}>
                    <Text preset="bold" style={styles.logo}>D</Text>
                </View>
            </View>
            <View style={{ backgroundColor: colors.whiteGrey }}>
                <View style={styles.homeBody}>
                    <Feather name="codesandbox" size={26} color={colors.lightBlue} />
                    <View style={{marginTop: spacing[4], marginBottom: spacing[4]}}>
                        <Text preset="h1">Non-Contact</Text>
                        <Text preset="h1">Deliveries</Text>
                    </View>
                    <Text style={{marginBottom: spacing[6]}}>
                        When placing an order, select the option “Contactless delivery” and the courier will leave your order at the door.
                    </Text>
                    <Pressable
                        onPress={() => {
                            navigation.navigate('Orders', {})
                        }}
                        style={styles.pressButton}
                    >
                        <Text style={styles.pressText}>order now</Text>
                    </Pressable>
                    <Text style={{marginBottom: spacing[6]}}>DISMISS</Text>
                </View>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    homeHeader: {
        height: 210,
        backgroundColor: colors.blue,
    },
    logoArea: {
        height: 50,
        width: 50,
        borderRadius: 25,
        alignItems: "center",
        marginTop: spacing[8],
        marginLeft: spacing[3],
        backgroundColor: colors.dimLight,
    },
    logo: {
        color: colors.blue,
    },
    homeBody: {
        marginTop: spacing[6],
        alignItems: "center",
        marginHorizontal: spacing[5],
    },
    pressButton: {
        backgroundColor: colors.green,
        width: 275,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        marginBottom: spacing[4]
    },
    pressText: {
        paddingVertical: spacing[3],
        textTransform: "uppercase",
        color: colors.white,
        fontSize: 14,
    }
});