import { useState } from "react";
import { api } from '@/core/api/twitter-api';

export const useRetweet = (initialRetweets: number, initialRetweeted: boolean, postId: string) => {
    const [nRetweets, setNRetweets] = useState(initialRetweets);
    const [retweeted, setRetweeted] = useState(initialRetweeted);

    const toggleRetweet = async () => {
        const previousRetweeted = retweeted;
        const previousRetweets = nRetweets;

        setRetweeted(!retweeted);
        setNRetweets(retweeted ? nRetweets - 1 : nRetweets + 1);

        if (!postId) {
            console.error("❌ Error: Intentando retweetear un post sin ID");
            return;
        }

        try {
            const url = `/posts/${postId}/retweet`;
            console.log("📡 Enviando petición POST a:", url);
            
            await api.post(url, {});
        } catch (error) {
            console.error("❌ Error al retweetear:", error);
            setRetweeted(previousRetweeted);
            setNRetweets(previousRetweets);
        }
    };

    return {
        nRetweets,
        retweeted,
        toggleRetweet
    };
};