import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import React from 'react'

const TabsLayout = () => {
    return (
        <Tabs screenOptions={{
            headerShown: true,
        }}>
            <Tabs.Screen
                name="feed/index"
                options={{
                    title: 'Feed',
                    headerTitle: 'Feed',
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color }) => <Ionicons size={28} name="home-outline" color={color} />,
                }}
            />
            <Tabs.Screen
                name="feed/[id]"
                options={{
                    href: null, // oculta de la tab bar
                }}
            />

            <Tabs.Screen
                name="hashtags/index"
                options={{
                    title: 'Hashtags',
                    headerTitle: 'Hashtags',
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color }) => <Ionicons size={28} name="pricetags-outline" color={color} />,
                }}
            />
            <Tabs.Screen
                name="hashtags/[id]"
                options={{
                    href: null, // oculta de la tab bar
                }}
            />

            <Tabs.Screen
                name="messages/index"
                options={{
                    title: 'Messages',
                    headerTitle: 'Mensajes',
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color }) => <Ionicons size={28} name="chatbubbles-outline" color={color} />,
                }}
            />
            <Tabs.Screen
                name="messages/[id]"
                options={{
                    href: null, // oculta de la tab bar
                }}
            />

            <Tabs.Screen
                name="users/index"
                options={{
                    title: 'Users',
                    headerTitle: 'Usuarios',
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color }) => <Ionicons size={28} name="people-outline" color={color} />,
                }}
            />

            <Tabs.Screen
                name="profile/index"
                options={{
                    href: null, // oculta de la tab bar
                }}
            />

            <Tabs.Screen
                name="bookmarks/index"
                options={{
                    href: null,  // oculta de la tab bar
                }}
            />
        </Tabs>
    )
}

export default TabsLayout