import { SafeAreaView, StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../Context/Constant';

const Home = ({ navigation }) => {

    const { data, setData } = useContext(AppContext)
    const [sortedData, setSortedData] = useState([]);

    useEffect(() => {
        const dataSorted = data.sort(function (x, y) {
            return Number(x.read_status) - Number(y.read_status);
        });
        setSortedData(dataSorted);
    }, [data])
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <FlatList
                    data={sortedData}
                    keyExtractor={(item, index) => item.title}
                    renderItem={(({ item }) => (
                        <TouchableOpacity style={{ flexDirection: 'row', margin: 15 }} onPress={() => {
                            const readPostIndex = data.findIndex((arrayItem) => arrayItem.title == item.title);
                            const newData = [...data];
                            newData[readPostIndex] = { ...newData[readPostIndex], read_status: true };
                            setData(newData);
                            navigation.navigate('Stories', { storiesData: item })

                        }}>
                            <Image
                                style={{ height: 60, width: 100, borderRadius: 5, backgroundColor: '#D6D3D3' }}
                                source={{
                                    uri: item.image
                                }}
                            />
                            <View style={{ width: '50%', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={item.read_status ? { fontWeight: 'bold' } : { fontWeight: 'normal' }}>{item.title}</Text>
                            </View>

                        </TouchableOpacity>
                    ))}
                />
            </View>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {

    }
})