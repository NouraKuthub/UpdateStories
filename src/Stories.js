import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react';

const Stories = ({ route }) => {
    const storiesData = route.params.storiesData;
    return (
        <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
            {storiesData.image===null ?
            <Text>Sorry. No image uploaded</Text>:
            <Image
                style={{ height: '40%', width: '50%' }}
                source={{
                    uri: storiesData.image
                }}
            />
            }
        </View>
    )
}

export default Stories

const styles = StyleSheet.create({})