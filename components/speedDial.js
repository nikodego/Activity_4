import React from 'react';
import { SpeedDial } from '@rneui/themed';
import { View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';



export function Speeddial() {
    const [open, setOpen] = React.useState(false);

    return (
    <View style={{flex:1,}}>
        <SpeedDial
            isOpen={open}
            icon={
                <FontAwesome
                    name="pencil"
                    type="font-awesome"
                    color="#fff"
                    size={25}
            />}
            openIcon={
                <FontAwesome
                    name="close"
                    type="font-awesome"
                    color="#fff"
                    size={25}
                />}
            onOpen={() => setOpen(!open)}
            onClose={() => setOpen(!open)}
            >
            <SpeedDial.Action
                icon={
                    <FontAwesome
                        name="plus"
                        type="font-awesome"
                        color="#fff"
                        size={15}
                />}
                title="Add"
            />
            <SpeedDial.Action
                icon={
                    <FontAwesome
                        name="trash-o"
                        type="font-awesome"
                        color="#fff"
                        size={15}
                />}
                title="Delete"
            />
        </SpeedDial>
    </View>
    );
};