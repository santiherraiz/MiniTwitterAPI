import { postAction } from "@/core/actions/post/post.action";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query"

export const usePosts = () => {
     const nowPlayingQuery = useQuery({
        queryKey: ['movies', 'nowPlaying'],
        queryFn: postAction,
        staleTime: 1000 * 60 * 60 * 24
    })

    return { nowPlayingQuery };
};
    