import { useQuery } from "@tanstack/react-query";
import { getMessagesAction } from "@/core/actions/message.action";

export const useMessages = () => {
    const messagesQuery = useQuery({
        queryKey: ['messages', 'all'],
        queryFn: getMessagesAction,
        staleTime: 1000 * 60 * 60 * 24,
    });

    return { messagesQuery };
};