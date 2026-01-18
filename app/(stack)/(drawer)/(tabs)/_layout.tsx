import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { DrawerToggleButton } from 'expo-router/drawer';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TabsLayout = () => {
    const navigation = useNavigation();

    return (
        <Tabs screenOptions={{
            headerShown: true,
            tabBarActiveTintColor: '#1da1f2', // Color azul estilo Twitter
            headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.openDrawer()} style={{ marginLeft: 10 }}>
                    <Ionicons name="menu" size={24} color="black" />
                </TouchableOpacity>
            ),
        }}>
            {/* 1. Inicio */}
            <Tabs.Screen
                name="feed/index"
                options={{
                    title: 'Inicio',
                    tabBarIcon: ({ color }) => <Ionicons size={28} name="home-outline" color={color} />,
                }}
            />
            {/* Ocultar detalle del feed */}
            <Tabs.Screen
                name="feed/[id]"
                options={{ href: null }}
            />

            {/* 2. Hashtags */}
            <Tabs.Screen
                name="hashtags/index"
                options={{
                    title: 'Hashtags',
                    tabBarIcon: ({ color }) => <Ionicons size={28} name="pricetags-outline" color={color} />,
                }}
            />
            {/* Ocultar detalle de hashtags */}
            <Tabs.Screen
                name="hashtags/[id]"
                options={{ href: null }}
            />

            {/* 3. Mensajes */}
            <Tabs.Screen
                name="messages/index"
                options={{
                    title: 'Mensajes',
                    tabBarIcon: ({ color }) => <Ionicons size={28} name="chatbubbles-outline" color={color} />,
                }}
            />
            {/* Ocultar detalle de mensajes */}
            <Tabs.Screen
                name="messages/[id]"
                options={{ href: null }}
            />

            {/* 4. Usuarios */}
            <Tabs.Screen
                name="users/index"
                options={{
                    title: 'Usuarios',
                    tabBarIcon: ({ color }) => <Ionicons size={28} name="people-outline" color={color} />,
                }}
            />
        </Tabs>
    );
}

export default TabsLayout;