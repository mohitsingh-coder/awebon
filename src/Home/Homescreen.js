import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ActivityIndicator, List } from 'react-native-paper';

const HomeScreen = (props) => {

    const [isLoading, setIsLoading] = React.useState(true);
   
    const [products, setProducts] = useState([]);
    const [filterProducts, setFilterProducts] = useState([]);


    useEffect(() => {
        getProducts()
    }, [])

    const handlePress = (indx) => {
        let list = filterProducts;
        list[indx].expanded = !list[indx].expanded
        setProducts([...list])
    };

    const onSearch = (value) => {
        let list = products.filter((itm) => itm.name.toLowerCase().includes(value.toLowerCase()));
        let sortList = list.sort((a, b) => b.num_of_purchases - a.num_of_purchases );
        setFilterProducts([...sortList])
    }

    const getProducts = () => {
        setProducts([]);
        setFilterProducts([])
        setIsLoading(true)
        fetch('https://60cc791971b73400171f7d68.mockapi.io/api/v1/products').then((response) => response.json())
            .then((json) => {
                console.log(json);
                if (json) {
                    let data = json.sort((a, b) => b.num_of_purchases - a.num_of_purchases);
                    data[1].expanded = true
                    setProducts([...data]);
                    setFilterProducts([...data])
                }
                setIsLoading(false)

            })
            .catch((error) => {
                console.error(error);
            });
    }


    const renderItem = ({ item, index }) => {
        return (
            <List.Section >



                <List.Accordion
                    title={"#" + (index + 1) + "    " + item.name}
                    titleStyle={{ color: "#000", fontSize: 14, fontWeight: "bold" }}
                    style={{ backgroundColor: item.expanded ? "#eee" : "#fff", borderRadius: 5, padding: 2, elevation: 5 }}
                    expanded={item.expanded}
                    onPress={() => handlePress(index)}>
                    <View style={styles.rowItem}>

                        <View>
                            <View style={{ padding: 10 }}>
                                <Text style={styles.listTitle}>Product Id</Text>
                                <Text style={styles.listValue}>{item.pid}</Text>
                            </View>
                            <View style={{ padding: 10 }}>
                                <Text style={styles.listTitle}>Product name</Text>
                                <Text style={styles.listValue}>{item.name}</Text>
                            </View>
                        </View>
                        <TouchableOpacity onPress={() => props.navigation.navigate("Details", { item })}>
                            <Image style={styles.imageView} source={{ uri: item.image }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ padding: 10 }}>
                        <Text style={styles.listTitle}>Product description</Text>
                        <Text style={styles.listValue}>{item.description}</Text>
                    </View>
                    <View style={styles.rowItem}>

                        <View>
                            <View style={{ padding: 10 }}>
                                <Text style={styles.listTitle}>Product price</Text>
                                <Text style={styles.listValue}>${item.price}</Text>
                            </View>
                            <View style={{ padding: 10 }}>
                                <Text style={styles.listTitle}>Sale price</Text>
                                <Text style={styles.listValue}>${item.sale_price}</Text>
                            </View>
                        </View>
                        <View style={[styles.purchaseItem]}>
                            <Text style={styles.listTitle}>Purchased</Text>
                            <Text style={styles.purchaseCount}>{item.num_of_purchases}</Text>
                        </View>
                    </View>
                    <View style={{ padding: 10 }}>
                        <Text style={styles.listTitle}>Status</Text>
                        <View style={{ width: 90, marginTop: 5, paddingHorizontal: 8, paddingVertical: 4, justifyContent: "center", alignItems: "center", borderRadius: 20, backgroundColor: item.status ? "green" : "red" }}>
                            <Text style={styles.statusValue}>{item.status ? "Published" : "Not published"}</Text>
                        </View>
                    </View>
                </List.Accordion>


            </List.Section>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.menu}>
                    <Icon
                        name="options"
                        color="#F9573F"
                        size={25}
                    />
                </TouchableOpacity>
                <Image style={{ width: 40, height: 40, borderRadius: 20 }} source={{ uri: "https://content.fortune.com/wp-content/uploads/2018/07/gettyimages-961697338.jpg" }} />
            </View>
            <View>
                <Text style={styles.titleText}>All Products</Text>
                <Text style={styles.descext}>Lorem ipsum dolor sit amet</Text>
            </View>

            <View style={styles.inputContainer}>
                <Icon
                    name="search"
                    color="#000"
                    size={18}
                />

                <TextInput
                    placeholder="Search products"
                    underlineColorAndroid="transparent"
                    style={{ color: "grey", width: "100%" }}
                    placeholderTextColor="grey"
                    onChangeText={value => onSearch(value)}
                />
            </View>


            {filterProducts.length > 0 &&
                <FlatList
                    data={filterProducts}
                    extraData={filterProducts}
                    renderItem={renderItem}
                />
            }
            {!isLoading && filterProducts.length === 0 && (
                <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
                    <Text style={{ color: "grey" }}>No products available</Text>
                </View>
            )}

            {isLoading && (
                <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
                    <ActivityIndicator />
                </View>
            )}



        </View>
    );
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: "#fff"
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 15
    },
    menu: {
        backgroundColor: "#FDD0C7",
        width: 40,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        height: 40,
        borderRadius: 10
    },
    titleText: {
        color: "#000",
        fontWeight: "bold",
        fontSize: 20
    },
    descext: {
        color: "grey",
        fontSize: 10
    },
    searchInput: {
        padding: 10,
        width: "100%",
        backgroundColor: "#f5f5f5",
        height: 30,
        marginTop: 15,
        borderRadius: 5
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        marginTop: 15,
        borderRadius: 5,
        height: 40,
        paddingHorizontal: 10,
    },
    listTitle: {
        color: "grey",
        fontSize: 11
    },
    listValue: {
        color: "#000",
        fontSize: 12,
        fontWeight: "bold",
        marginTop: 4,
        lineHeight: 18
    },
    purchaseCount: { color: "#F95A3F", fontSize: 28, fontWeight: "bold" },
    imageView: { width: 80, height: 90, borderRadius: 10 },
    purchaseItem: { backgroundColor: "#FEEBE6", justifyContent: "center", alignItems: "center", width: 80, height: 80, borderRadius: 10 },
    statusValue: { color: "#fff", fontSize: 12, marginBottom: 2 },
    rowItem: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" }
})

export default HomeScreen;
