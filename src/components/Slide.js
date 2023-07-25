import { View, Text } from "react-native";
import color from "../style/color";

const Slide = [
    {
        id: "1",
        title: "KEEP SPIRIT",
        description: "Tunjukan sportifitas dan semangat sepak bolamu diatas lapangan !!!",
        image: require("../../assets/img/de32e337b4e781c9950d6b2d04f249cb-removebg-preview.png"),
        width: 200,
        height: 400,
        marginTop: 40,
        paddingTop: 15,
        component: (
            <View style={{
                backgroundColor: color.black,
                alignSelf: 'center',
                justifyContent: 'center',
                left: 0,
                // marginBottom: 10,
                // position: 'relai',
                padding: 20,
                top: 30,
                // bottom: 20,
                borderRadius: 40 }}>
                    <Text style={{color: color.blue}}>     NEXT     </Text>
            </View>
        )
    },
    {
        id: "2",
        title: "CHAMPION",
        description: "Kekompakan adalah kekuatan, dan jadilah juara !!!",
        image: require("../../assets/img/R-removebg-preview.png"),
        width: 350,
        height: 400,
        marginTop: 40,
        marginVertical: 60,
        marginBottom: 20,
        paddingTop: 0,
        component: (
            <View style={{
                backgroundColor: color.black,
                alignSelf: 'center',
                justifyContent: 'center',
                left: 0,
                // marginBottom: 10,
                // position: 'relai',
                padding: 20,
                top: 30,
                // bottom: 20,
                borderRadius: 40 }}>
                    <Text style={{color: color.blue}}>     NEXT     </Text>
            </View>
        )
    },
    {
        id: "3",
        title: "Let`s Started",
        description: "Priiitttt... Pertandingan yang sesungguhnya dimulai !!!",
        image: require("../../assets/img/black-and-white-soccer-referee-whistle-silhouette-vector-20890100-removebg-preview.png"),
        width: 350,
        height: 380,
        marginTop: 50,
        component: (
            <View style={{
                backgroundColor: color.black,
                alignSelf: 'center',
                justifyContent: 'center',
                left: 0,
                // marginBottom: 10,
                // position: 'relai',
                padding: 15,
                top: 45,
                // bottom: 20,
                borderRadius: 40 }}>
                    <Text style={{color: color.blue, fontWeight: 900, fontSize: 20}}>     START     </Text>
            </View>
        )
    }
]

export default Slide;