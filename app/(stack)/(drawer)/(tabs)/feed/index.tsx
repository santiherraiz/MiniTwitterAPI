import React, { useEffect, useState, useCallback } from 'react';
import { FlatList, ActivityIndicator, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, useFocusEffect } from 'expo-router';

import PostCard from '@/components/post/PostCard';
import api from '../../../../../services/api';
import { Post } from '@/types/post';

const FeedScreen = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    const fetchPosts = async () => {
        try {
            const response = await api.get('/posts'); 
            setPosts(response.data);
        } catch (error) {
            console.error("Error cargando el feed:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    useFocusEffect(
        useCallback(() => {
            fetchPosts();
        }, [])
    );

    if (loading) {
        return (
            <SafeAreaView className="flex-1 bg-quaternary justify-center items-center">
                <ActivityIndicator size="large" color="#1DA1F2" />
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView edges={['left', 'right']} className="flex-1 bg-quaternary relative">
            <FlatList
                data={posts}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <PostCard post={item} />}
                onRefresh={fetchPosts}
                refreshing={loading}
            />

            <TouchableOpacity 
                onPress={() => router.push('/(stack)/create-post')}
                className="absolute bottom-6 right-6 bg-[#1DA1F2] w-14 h-14 rounded-full justify-center items-center shadow-lg"
            >
                <Ionicons name="add" size={30} color="white" />
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default FeedScreen;