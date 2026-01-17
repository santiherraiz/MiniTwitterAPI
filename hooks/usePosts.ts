import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getPostsAction } from '@/core/actions/posts.action';
import { createPostAction } from '@/core/actions/create-post.action';
import { toggleLikeAction } from '@/core/actions/toggle-like.action';

export const usePosts = () => {
    const queryClient = useQueryClient();

    // 1. Query para obtener el Feed de posts
    const postsQuery = useQuery({
        queryKey: ['posts', 'feed'],
        queryFn: getPostsAction,
        staleTime: 1000 * 60 * 60 * 24,
        refetchOnWindowFocus: true,
    });

    // 2. Mutation para crear un nuevo post
    const createPostMutation = useMutation({
        mutationFn: createPostAction,
        onSuccess: () => {
            // Al crear un post, invalidamos la cache 'posts' para que se recargue el feed automáticamente
            queryClient.invalidateQueries({ queryKey: ['posts', 'feed'] });
        }
    });

    // 3. Mutation para dar Like
    const likePostMutation = useMutation({
        mutationFn: toggleLikeAction,
        onSuccess: () => {
            // Invalidamos para actualizar los contadores de likes
            queryClient.invalidateQueries({ queryKey: ['posts', 'feed'] });
        }
    });

    return {
        postsQuery,
        createPostMutation,
        likePostMutation
    };
};