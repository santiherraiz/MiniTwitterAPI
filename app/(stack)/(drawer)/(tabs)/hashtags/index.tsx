import { View, FlatList, Text, ActivityIndicator, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { useHashtags } from '@/hooks/useHashtags';

export default function HashtagsScreen() {
    const { hashtagsQuery } = useHashtags();
    const router = useRouter();

    if (hashtagsQuery.isLoading) return <ActivityIndicator className="mt-10" />;

    return (
        <View className="flex-1 bg-white p-4">
            <Text className="text-xl font-bold mb-4">Hashtags</Text>
            <FlatList
                data={hashtagsQuery.data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Pressable 
                        className="flex-row items-center justify-between py-3 border-b border-gray-100"
                        onPress={() => router.push(`/hashtags/${item.name}`)}
                    >
                        <View>
                            <Text className="font-bold">#{item.name}</Text>
                            <Text className="text-gray-500">{item.postsCount} posts</Text>
                        </View>
                    </Pressable>
                )}
            />
        </View>
    );
}