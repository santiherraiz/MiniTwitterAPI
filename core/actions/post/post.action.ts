import api from '@/services/api';
import { Post } from '@/types/post';

export const postAction = async() => {
    try{
        const {data} = await api.get<Post[]>('/api/post');

        const posts = data.map((post) => {
            return {
                ...post,
                userName: post.userName.replace(/ /g, ''),
                userHandle: post.userHandle.replace(/ /g, ''),
            }
        })

        console.log(JSON.stringify(data, null, 2));

        return posts
    }catch(error){
        console.log(error)
        throw 'Cannot load now playing movies'
    }
}