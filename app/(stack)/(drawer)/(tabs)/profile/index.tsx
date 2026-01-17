import { View, Text, Image, FlatList } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { getUserByIdAction } from '@/core/actions/user.action';
import { getUserPostsAction } from '@/core/actions/posts.action';
import PostCard from '@/components/post/PostCard';

const MY_USER_ID = 'user-1'; // ID Hardcodeado temporalmente si no tienes auth real

export default function ProfileScreen() {
    const { data: user } = useQuery({ 
        queryKey: ['user', MY_USER_ID], 
        queryFn: () => getUserByIdAction(MY_USER_ID) 
    });

    const { data: posts } = useQuery({ 
        queryKey: ['user-posts', MY_USER_ID], 
        queryFn: () => getUserPostsAction(MY_USER_ID) 
    });

    const ListHeader = () => (
        <View className="pb-4 border-b border-gray-100">
            {user?.banner ? (
                <Image source={{ uri: user.banner }} className="w-full h-32" resizeMode="cover" />
            ) : (
                <View className="w-full h-32 bg-[#1DA1F2]" />
            )}
            <View className="px-4">
                <View className="-mt-10 mb-3 p-1 bg-white rounded-full self-start">
                     <Image source={{ uri: user?.avatar || 'https://i.pravatar.cc/150' }} className="w-20 h-20 rounded-full" />
                </View>
                <Text className="text-2xl font-bold">{user?.name}</Text>
                <Text className="text-gray-500 mb-4">@{user?.username}</Text>
                <Text className="mb-4">{user?.bio || "Sin biografía"}</Text>
                <View className="flex-row gap-4">
                    <Text><Text className="font-bold">{user?.followingCount || 0}</Text> Siguiendo</Text>
                    <Text><Text className="font-bold">{user?.followersCount || 0}</Text> Seguidores</Text>
                </View>
            </View>
        </View>
    );

    return (
        <FlatList
            data={posts}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <PostCard post={item} />}
            ListHeaderComponent={ListHeader}
            className="bg-white flex-1"
        />
    );
}