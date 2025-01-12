import {FC, useEffect, useState} from "react";
import {IPost} from "../../models/IPost.ts";
import {postServices} from "../../services/api.service.ts";

type PostsTypeProps ={
    userId: string;
}

export const PostsComponent: FC<PostsTypeProps> = ({userId}) => {

    const [posts, setPosts] = useState<IPost[]>([])
    useEffect(() => {
        if (userId) {
            console.log(userId, 'exists');
            postServices.getAllPostsOfUserById(+userId)
                .then(value => {
                    console.log(value);
                    setPosts(value);
                })
        }

    }, [userId]);

    return (
        <div>
            {
                posts.map(value => <div key={value.id}>{value.title}</div>)
            }
        </div>
    );
};