import { View, FlatList, Text, Pressable, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { useQuery } from '@tanstack/react-query';
import { getMessagesAction } from '@/core/actions/message.action';
import Avatar from '@/components/post/Avatar';

// Placeholder para conversaciones
const useConversations = () => useQuery({
    queryKey: ['messages'],
    queryFn: getMessagesAction
});

export default function MessagesScreen() {
    const router = useRouter();
    const { data: messages, isLoading } = useConversations();

    if (isLoading) return <ActivityIndicator className="mt-10" />;

    // Agrupar messages por el otro usuario
    const conversations = messages?.reduce((acc, msg) => {
        const otherUser = msg.sender.id === 'user-1' ? msg.receiver : msg.sender; // Asumir user-1 es el actual
        const key = otherUser.id;
        if (!acc[key]) {
            acc[key] = {
                id: key,
                withUser: otherUser,
                lastMessage: msg
            };
        } else if (new Date(msg.createdAt) > new Date(acc[key].lastMessage.createdAt)) {
            acc[key].lastMessage = msg;
        }
        return acc;
    }, {} as Record<string, any>) || {};

    const conversationList = Object.values(conversations);

    return (
        <View className="flex-1 bg-white p-4">
            <FlatList
                data={conversationList}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Pressable 
                        className="flex-row items-center py-3 border-b border-gray-100"
                        onPress={() => router.push(`/messages/${item.withUser.id}`)}
                    >
                        <Avatar userAvatar={item.withUser.avatar} userName={item.withUser.name} />
                        <View className="ml-3 flex-1">
                            <View className="flex-row justify-between">
                                <Text className="font-bold">{item.withUser.name}</Text>
                                <Text className="text-gray-400 text-xs">{new Date(item.lastMessage.createdAt).toLocaleDateString()}</Text>
                            </View>
                            <Text numberOfLines={1} className="text-gray-500">{item.lastMessage.content}</Text>
                        </View>
                    </Pressable>
                )}
            />
        </View>
    );
}