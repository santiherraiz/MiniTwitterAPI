import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { getUserByIdAction } from '@/core/actions/user.action';
import { getUserPostsAction } from '@/core/actions/posts.action';
import PostCard from '@/components/post/PostCard';
import Avatar from '@/components/post/Avatar';

const MY_USER_ID = 'user-1'; // Cambiar por ID real

export default function ProfileScreen() {
    const { data: user, isLoading: userLoading } = useQuery({
        queryKey: ['user', MY_USER_ID],
        queryFn: () => getUserByIdAction(MY_USER_ID),
    });

    const { data: posts, isLoading: postsLoading } = useQuery({
        queryKey: ['user-posts', MY_USER_ID],
        queryFn: () => getUserPostsAction(MY_USER_ID),
    });

    if (userLoading) return <ActivityIndicator size="large" className="mt-10" />;

    return (
        <View className="flex-1 bg-white">
            {user && (
                <View className="p-4 border-b border-gray-200">
                    <Avatar userAvatar={user.avatar} userName={user.name} />
                    <Text className="text-xl font-bold mt-2">{user.name}</Text>
                    <Text className="text-gray-500">@{user.username}</Text>
                    <Text className="text-gray-700 mt-2">{user.bio}</Text>
                    <View className="flex-row mt-2">
                        <Text className="mr-4"><Text className="font-bold">{user.followingCount}</Text> Siguiendo</Text>
                        <Text><Text className="font-bold">{user.followersCount}</Text> Seguidores</Text>
                    </View>
                </View>
            )}
            <FlatList
                data={posts}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <PostCard post={item} />}
                ListHeaderComponent={<Text className="p-4 font-bold text-lg">Posts</Text>}
            />
        </View>
    );
}