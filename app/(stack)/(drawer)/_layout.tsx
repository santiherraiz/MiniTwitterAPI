import CustomDrawer from '@/components/shared/CustomDrawer';
import { Ionicons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';
import React from 'react';

const DrawerLayout = () => {
    return (
        <Drawer
            drawerContent={(props) => <CustomDrawer {...props} />}
            screenOptions={{
                headerShown: false, // Ocultamos la cabecera del drawer porque ya la tienen las tabs
                drawerActiveTintColor: '#1da1f2',
            }}
        >
            {/* Esta pantalla carga el grupo de pestañas (Inicio) */}
            <Drawer.Screen
                name="(tabs)"
                options={{
                    title: 'Inicio',
                    drawerLabel: 'Inicio',
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="home-outline" size={size} color={color} />
                    ),
                }}
            />
            
            {/* Pantalla de Perfil (ubicada en app/(stack)/(drawer)/profile) */}
            <Drawer.Screen
                name="profile/index"
                options={{
                    title: 'Perfil',
                    drawerLabel: 'Perfil',
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="person-outline" size={size} color={color} />
                    ),
                }}
            />

            {/* Pantalla de Guardados (ubicada en app/(stack)/(drawer)/bookmarks) */}
            <Drawer.Screen
                name="bookmarks/index"
                options={{
                    title: 'Guardados',
                    drawerLabel: 'Guardados',
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="bookmark-outline" size={size} color={color} />
                    ),
                }}
            />
        </Drawer>
    )
}

export default DrawerLayout;