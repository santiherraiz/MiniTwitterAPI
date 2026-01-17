import { useLocalSearchParams } from 'expo-router';
import { View, FlatList, ActivityIndicator, Text } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { getPostsByHashtagAction } from '@/core/actions/hashtag.action';
import PostCard from '@/components/post/PostCard';

export default function PostHashtagContentScreen() {
    const { id } = useLocalSearchParams();
    
    const { data: posts, isLoading } = useQuery({
        queryKey: ['hashtag-posts', id],
        queryFn: () => getPostsByHashtagAction(id as string),
        enabled: !!id
    });

    if (isLoading) return <ActivityIndicator size="large" className="mt-10" color="#1DA1F2" />;
    if (!posts) return <Text className="text-center mt-10">No se encontraron posts</Text>;

    return (
        <View className="flex-1 bg-white">
            <Text className="text-xl font-bold p-4">Posts con #{id}</Text>
            <FlatList
                data={posts}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <PostCard post={item} />}
            />
        </View>
    );
}