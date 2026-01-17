import { useState } from "react";
import { api } from '@/core/api/twitter-api';

export const useBookmark = (initialBookmarks: number, initialBookmarked: boolean, postId: string) => {
    const [nBookmarks, setNBookmarks] = useState(initialBookmarks);
    const [bookmarked, setBookmarked] = useState(initialBookmarked);

    const toggleBookmark = async () => {
        const previousBookmarked = bookmarked;
        const previousBookmarks = nBookmarks;

        setBookmarked(!bookmarked);
        setNBookmarks(bookmarked ? nBookmarks - 1 : nBookmarks + 1);

        if (!postId) {
            console.error("❌ Error: Intentando guardar un post sin ID");
            return;
        }

        try {
            const url = `/posts/${postId}/bookmark`;
            console.log("📡 Enviando petición POST a:", url);
            
            await api.post(url, {});
        } catch (error) {
            console.error("❌ Error al guardar:", error);
            setBookmarked(previousBookmarked);
            setNBookmarks(previousBookmarks);
        }
    };

    return {
        nBookmarks,
        bookmarked,
        toggleBookmark
    };
};