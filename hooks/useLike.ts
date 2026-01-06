import { useState } from "react"

export const useLike = () => {
    const [nLikes, setNLikes] = useState(0)
    const [liked, setLiked] = useState(false)

    const setLikesCount = (count: number) => {
        setNLikes(count)
    }

    const toggleLike = () => {
        setLiked(!liked)
        setNLikes(liked ? nLikes - 1 : nLikes + 1)
    }

    return {
        // Props
        nLikes,
        liked,

        // Methods
        setLikesCount,
        toggleLike
    }
}