import { View, FlatList, ActivityIndicator, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { usePosts } from '@/hooks/usePosts';
import PostCard from '@/components/post/PostCard';

export default function FeedScreen() {
    const { postsQuery } = usePosts();
    const router = useRouter();

    if (postsQuery.isLoading) return <View className="flex-1 justify-center items-center"><ActivityIndicator size="large" color="#1DA1F2" /></View>;

    return (
        <View className="flex-1 bg-white dark:bg-black">
            <FlatList
                data={postsQuery.data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <PostCard post={item} />}
                contentContainerStyle={{ paddingBottom: 80 }}
            />
            
            {/* FAB - Floating Action Button */}
            <Pressable 
                onPress={() => router.push('/create-post')}
                className="absolute bottom-6 right-6 bg-[#1DA1F2] w-14 h-14 rounded-full justify-center items-center shadow-lg active:opacity-80"
            >
                <Ionicons name="add" size={30} color="white" />
            </Pressable>
        </View>
    );
}