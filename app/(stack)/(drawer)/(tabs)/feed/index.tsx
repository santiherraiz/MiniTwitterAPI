import PostCard from '@/components/post/PostCard'
import { posts } from '@/post/post.feed'
import React from 'react'
import { FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const FeedScreen = () => {
    return (
        <SafeAreaView edges={['left', 'right']} className="flex-1 bg-quaternary">
            {/* FlatList de posts */}
            <FlatList
                data={posts}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <PostCard post={item} />}
            />
        </SafeAreaView>
    )
}

export default FeedScreen