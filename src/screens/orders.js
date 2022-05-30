import { View, StyleSheet, SafeAreaView, StatusBar, Image, Pressable, ScrollView } from 'react-native';
import React from 'react';
import Text from '../components/text/text';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import { Ionicons } from '@expo/vector-icons';

export default function Orders({ }) {

    return (
        <SafeAreaView style={[styles.container, { marginTop: StatusBar.currentHeight }]}>
            <ScrollView>
                <View>
                    <Image
                        style={{ height: 200, width: 320, backgroundColor: "red" }}
                        source={require("../data/images/green.jpg")}
                    />
                </View>
                <View style={{ backgroundColor: colors.whiteGrey }}>
                    <View style={styles.orderBody}>
                        <Text style={{ marginBottom: spacing[4], marginTop: spacing[5] }} preset="h2">Boston Lettuce</Text>
                        <View style={styles.price}>
                            <Text preset="h2">1.10  </Text>
                            <Text>€ / piece</Text>
                        </View>
                        <Text style={{ color: colors.green, marginBottom: spacing[4] }}>~ 150 gr / piece</Text>
                        <Text preset="h3">Spain</Text>
                        <Text style={{ marginBottom: spacing[4], marginTop: spacing[3] }}>
                            Lettuce is an annual plant of the daisy family, Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds. Lettuce is most often used for salads, although it is also seen in other kinds of food, such as soups, sandwiches and wraps; it can also be grilled.
                        </Text>
                        <View style={styles.cart}>
                            <View style={styles.cartLove}>
                                <Ionicons name="heart-dislike-outline" size={24} color={colors.grey}/>
                            </View>
                            <Pressable
                                style={styles.pressButton}
                            >
                                <Text style={styles.pressText}><Ionicons name="cart-outline" size={19} color={colors.white} />  ADD TO CART</Text>
                            </Pressable>
                        </View>
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
    orderBody: {
        marginHorizontal: spacing[5],
    },
    price: {
        flexDirection: "row",
        alignItems: "center"
    },
    cart: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: spacing[6],
    },
    pressButton: {
        backgroundColor: colors.green,
        width: 205,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5
    },
    pressText: {
        paddingVertical: spacing[3],
        textTransform: "uppercase",
        color: colors.white,
        fontSize: 14,
        alignItems: "center"
    },
    cartLove: {
        height: 48,
        width: 48,
        borderRadius: 4,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.white,
    }
});