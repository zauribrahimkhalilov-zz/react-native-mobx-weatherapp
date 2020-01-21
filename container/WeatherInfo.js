import React from "react";
import { View, StyleSheet, Image } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import { Container, Content, H3, Text, Card, CardItem, Item, Input, Button } from 'native-base';
import { inject, observer } from "mobx-react";

function WeatherInfo(props) {

    const { text, updateText, data, searchCountry } = props.store;

    _renderItem = ({ item }) => {
        return (
            <Card style={styles.container} key={item.dt}>
                <CardItem>
                    {item.weather.map(w =>
                        <Image key={w.icon} source={{ uri: 'http://openweathermap.org/img/w/' + w.icon + '.png' }} style={styles.icon} />
                    )}
                </CardItem>
                <CardItem cardBody>
                    <Text>{item.dt_txt.slice(0, 16)}</Text>
                </CardItem>
                <CardItem>
                    <H3 style={styles.temp}>{item.main.temp}˚</H3>
                </CardItem>
            </Card>
        );
    }

    return (
        <Container>
            <Content style={styles.container}>
                <Item regular>
                    <Input placeholder='City' value={text} onChangeText={updateText} />
                </Item>
                <Button onPress={searchCountry} style={styles.btn} rounded info>
                    <Text>Search</Text>
                </Button>
                {data ?
                    <FlatGrid
                        itemDimension={130}
                        items={data.list}
                        renderItem={_renderItem}
                    />
                    : <View></View>}
            </Content>
        </Container>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    btn: {
        marginTop: 10,
        justifyContent: 'center'
    },
    icon: {
        width: 100, height: 100
    },
    temp: {
        fontWeight: 'bold'
    }
});
export default inject("store")(observer(WeatherInfo));