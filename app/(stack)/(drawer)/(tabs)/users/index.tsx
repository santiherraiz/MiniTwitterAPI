import { View, FlatList, Text, Pressable, ActivityIndicator } from 'react-native';
import { useUsers } from '@/hooks/useUsers'; // Ya lo creamos antes
import Avatar from '@/components/post/Avatar';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toggleFollowAction } from '@/core/actions/user.action';

export default function UsersScreen() {
    const { usersQuery } = useUsers();
    const queryClient = useQueryClient();
    
    const followMutation = useMutation({
        mutationFn: toggleFollowAction,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['users'] })
    });

    if (usersQuery.isLoading) return <ActivityIndicator className="mt-10" />;

    return (
        <View className="flex-1 bg-white">
            <FlatList
                data={usersQuery.data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View className="flex-row items-center justify-between p-4 border-b border-gray-100">
                        <View className="flex-row items-center flex-1">
                            <Avatar userAvatar={item.avatar} userName={item.name} />
                            <View className="ml-3">
                                <Text className="font-bold">{item.name}</Text>
                                <Text className="text-gray-500">@{item.username}</Text>
                            </View>
                        </View>
                        <Pressable 
                            onPress={() => followMutation.mutate(item.id)}
                            className={`px-4 py-1.5 rounded-full ${item.isFollowing ? 'border border-gray-300 bg-white' : 'bg-black'}`}
                        >
                            <Text className={`font-bold ${item.isFollowing ? 'text-black' : 'text-white'}`}>
                                {item.isFollowing ? 'Siguiendo' : 'Seguir'}
                            </Text>
                        </Pressable>
                    </View>
                )}
            />
        </View>
    );
}