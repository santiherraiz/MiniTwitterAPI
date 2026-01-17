import { useQuery } from "@tanstack/react-query";
import { getHashtagsAction } from "@/core/actions/hashtag.action";

export const useHashtags = () => {
    const hashtagsQuery = useQuery({
        queryKey: ['hashtags', 'all'],
        queryFn: getHashtagsAction,
        staleTime: 1000 * 60 * 60 * 24,
    });

    return { hashtagsQuery };
};