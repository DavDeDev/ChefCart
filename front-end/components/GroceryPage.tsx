import { ScrollView, Text, View, Icon, ChevronLeftIcon, Button, ButtonIcon, ChevronRightIcon } from '@gluestack-ui/themed';
import {  Recipe, Grocery, GroceryProps } from './DataModel';
import { StyleSheet, FlatList, Pressable } from 'react-native';
import { CheckBox, Separator } from 'react-native-btr';
import { useState } from 'react';

export default function GroceryPage({ route, navigation }: GroceryProps) {
    const grocery = route.params.grocery;
    
    const [entry, setEntry] = useState(
        grocery.items.map((item, i) => {
            return {content: item, isChecked: false}
        })
    );
    const toggle = (index: number) => {
        const item = entry[index];
        item.isChecked = !item.isChecked;
        setEntry([...entry]);
    };
    const renderItem = ({item, index}: any) => (
            <View style={{flex: 0, flexDirection: 'row', marginVertical: 10, gap: 4}}>
                <CheckBox
                    checked={item.isChecked}
                    onPress={() => toggle(index)}
                />
                <Text>{item.content}</Text>
            </View>
    );
    const makeKey = (item: any, index: number) => item.content + index;

    return (
        <View style={styles.page}>
            <Button style={{backgroundColor: 'rgba(255,255,255,0)', position: 'absolute', left: 0, top: 55}}
                onPress={() => navigation.goBack()}>
                <ButtonIcon as={ChevronLeftIcon} size='xl' color='black'/>
            </Button>
            <Text style={{fontWeight: 'bold', fontSize: 30, lineHeight: 30, marginBottom: 15 }}> Grocery List </Text>
            <FlatList 
                data={entry}
                renderItem={renderItem}
                keyExtractor={makeKey}
                style={styles.scroller}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        width: '100%',
        height: '100%',
        backgroundColor: "#F0EAD6",
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        zIndex: 0,
        paddingTop: 60,
        paddingHorizontal: 30,
        paddingBottom: 40
    },
    scroller: {
        backgroundColor: 'rgba(249, 245, 237, 0.8)',
        paddingHorizontal: 8
    }
})