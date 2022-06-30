import React from 'react'
import { View, TouchableOpacity, Text, Image, FlatList, Modal, TextInput } from 'react-native'
import { styles } from './style'

export default function DropDown({ value }) {
    const [pressed, setPressed] = React.useState(false)
    const [name, setName] = React.useState('Select Designation')

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.menuItem} onPress={() => { setName(item); setPressed(!pressed); }}>
                <Text>
                    {item}
                </Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.parent}>

            <TouchableOpacity style={styles.container} onPress={() => setPressed(!pressed)} >
                <Text>
                    {name}
                </Text>
                <Image style={styles.bottomArrow} source={require('../../assets/images/down.png')} />
            </TouchableOpacity>

            <Modal visible={pressed} transparent={true} onRequestClose={() => setPressed(false)}>
                <TouchableOpacity activeOpacity={1} onPress={() => setPressed(false)} style={styles.modalView}>
                    <TouchableOpacity activeOpacity={1} style={styles.menu}>
                        <View style={styles.search}>
                            <Image style={styles.searchImg} source={require('../../assets/images/search.png')} />
                            <TextInput style={styles.searchText} placeholder='Search Designation' />
                        </View>

                        <FlatList
                            data={value}
                            keyExtractor={(index) => index}
                            renderItem={renderItem}
                            bounces={false}
                        />
                    </TouchableOpacity>
                </TouchableOpacity>
            </Modal>

        </View>
    )
}