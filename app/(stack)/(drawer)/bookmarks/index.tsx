import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { getPostsAction } from '@/core/actions/posts.action'; // Placeholder, cambiar por getBookmarksAction
import PostCard from '@/components/post/PostCard';

export default function BookmarksScreen() {
    const { data: posts, isLoading } = useQuery({
        queryKey: ['bookmarks'],
        queryFn: getPostsAction, // Placeholder
    });

    if (isLoading) return <ActivityIndicator size="large" className="mt-10" />;

    return (
        <View className="flex-1 bg-white">
            <Text className="p-4 font-bold text-lg">Posts Guardados</Text>
            <FlatList
                data={posts}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <PostCard post={item} />}
            />
        </View>
    );
}