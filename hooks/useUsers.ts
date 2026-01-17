import { useQuery } from "@tanstack/react-query";
import { getUsersAction } from "@/core/actions/user.action";

export const useUsers = () => {
    const usersQuery = useQuery({
        queryKey: ['users', 'all'],
        queryFn: getUsersAction,
        staleTime: 1000 * 60 * 60 * 24,
    });

    return { usersQuery };
};