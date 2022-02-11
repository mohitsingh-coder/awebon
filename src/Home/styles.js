import {StyleSheet,Dimensions} from "react-native"

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    maps: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
    },
    bottomSheet: {
        width: "100%",
        backgroundColor: "#05120F",
        position: "absolute",
        bottom: 0,
        borderTopEndRadius: 20,
        borderTopLeftRadius: 20,
        padding: 20,
        paddingBottom: 10
    },

    linearGradient: {
        paddingLeft: 5,
        paddingRight: 5,
        borderRadius: 10,
        height: 4,
        marginBottom: 10,
        marginTop: 5
    },

    locations: {
        backgroundColor: "#040505",
        borderRadius: 10

    },

    greenText: {
        color: "#2DAF95",
        fontSize: 9,
        alignSelf: "flex-end"
    },

    profileCard: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 15,
        paddingBottom: 0
    },

    locationCard: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        marginTop: 8
    },

    userImage: {
        width: 38,
        height: 38,
        borderRadius: 19,
        marginRight: 10
    },

    icons: {
        width: 42,
        height: 42,
        borderRadius: 21,
        marginLeft: 10
    },

    lineicon: {
        marginLeft: 9
    },

    yellowcon: {
        width: 2,
        height: 20,
        marginTop: 0,
        marginLeft: 14
    },

    userName: {
        color: "#fff"
    },

    rowAlignCenter: {
        flexDirection: "row",
        alignItems: "center"
    },


    destinationIcon: {
        width: 30,
        height: 30
    },

    titleGreen: {
        color: "#2DAF95",
        fontSize: 10
    },

    desc: {
        color: "#fff",
        fontSize: 16
    },

    greyText: {
        color: "#556969",
        fontSize: 10
    },

    greyDesc: {
        color: "#556969",
        fontSize: 16
    },

    iconContainer: {
        width: 30,
        marginLeft: 5
    }

})

export default styles;