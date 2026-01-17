import { useState } from "react";
import { api } from '@/core/api/twitter-api';

export const useLike = (initialLikes: number, initialLiked: boolean, postId: string) => {
    const [nLikes, setNLikes] = useState(initialLikes);
    const [liked, setLiked] = useState(initialLiked);

    const toggleLike = async () => {
        const previousLiked = liked;
        const previousLikes = nLikes;

        // Actualización optimista (cambia la UI al instante)
        setLiked(!liked);
        setNLikes(liked ? nLikes - 1 : nLikes + 1);

        // Validación de seguridad
        if (!postId) {
            console.error("❌ Error: Intentando dar like a un post sin ID");
            return;
        }

        try {
            const url = `/posts/${postId}/like`;
            console.log("📡 Enviando petición POST a:", url);
            
            // ⚠️ CAMBIO AQUÍ: Añadimos {} como segundo parámetro
            // Esto envía un body vacío pero válido para que el servidor no falle
            await api.post(url, {}); 

        } catch (error) {
            console.error("❌ Error al dar like:", error);
            // Si falla, revertimos los cambios visuales
            setLiked(previousLiked);
            setNLikes(previousLikes);
        }
    };

    return {
        nLikes,
        liked,
        toggleLike
    };
};