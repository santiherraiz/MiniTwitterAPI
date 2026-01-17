import { View, FlatList, TextInput, KeyboardAvoidingView, Platform, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useQuery } from '@tanstack/react-query';
import { getMessagesAction } from '@/core/actions/message.action'; // Crea esta acción

export default function ChatScreen() {
    const { id } = useLocalSearchParams(); // ID del otro usuario

    const { data: messages } = useQuery({
        queryKey: ['chat', id],
        queryFn: () => getMessagesAction(), // Llama a /messages
        refetchInterval: 5000 // Polling simple para "tiempo real"
    });

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} className="flex-1 bg-white">
            <FlatList
                data={messages}
                inverted // Los chats suelen empezar desde abajo
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ padding: 10 }}
                renderItem={({ item }) => {
                    const isMe = item.sender.id === 'mi-id-fijo'; // Necesitas saber tu propio ID
                    return (
                        <View className={`my-1 p-3 rounded-2xl max-w-[80%] ${isMe ? 'bg-[#1DA1F2] self-end' : 'bg-gray-100 self-start'}`}>
                            <Text className={isMe ? 'text-white' : 'text-black'}>{item.content}</Text>
                        </View>
                    );
                }}
            />
            <View className="p-2 border-t border-gray-100">
                <TextInput 
                    placeholder="Enviar mensaje..." 
                    className="bg-gray-100 rounded-full px-4 py-2"
                />
            </View>
        </KeyboardAvoidingView>
    );
}