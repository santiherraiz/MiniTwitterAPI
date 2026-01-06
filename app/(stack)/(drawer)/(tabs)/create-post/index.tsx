import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import api from '../../../../../services/api';

export default function CreatePostScreen() {
    const [text, setText] = useState('');
    const [sending, setSending] = useState(false);
    const router = useRouter();

    const handlePost = async () => {
        if (!text.trim()) return;
        
        setSending(true);
        try {
            // Endpoint POST para crear tweet (revisar Swagger)
            await api.post('/posts', {
                content: text
            });
            router.back(); // Volver al feed
        } catch (error) {
            Alert.alert("Error", "No se pudo publicar el post");
            setSending(false);
        }
    };

    return (
        <SafeAreaView className="flex-1 bg-white p-4">
            <View className="flex-row justify-between items-center mb-4">
                <TouchableOpacity onPress={() => router.back()}>
                    <Text className="text-gray-500 text-lg">Cancelar</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={handlePost}
                    disabled={sending || !text}
                    className={`px-4 py-2 rounded-full ${text ? 'bg-[#1DA1F2]' : 'bg-gray-300'}`}
                >
                    <Text className="text-white font-bold">Publicar</Text>
                </TouchableOpacity>
            </View>

            <TextInput
                className="text-xl text-gray-800"
                placeholder="¿Qué está pasando?"
                multiline
                autoFocus
                value={text}
                onChangeText={setText}
            />
        </SafeAreaView>
    );
}