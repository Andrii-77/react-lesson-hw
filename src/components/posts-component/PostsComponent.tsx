import {useAppDispatch, useAppSelector} from "../../redux/store.ts";
import {useEffect} from "react";
import {postActions} from "../../redux/slices/PostSlice.ts";
import {PostComponent} from "./PostComponent.tsx";
import {IPost} from "../../models/IPost.ts";

export const PostsComponent = () => {

    const dispatch = useAppDispatch();
    const posts = useAppSelector((state) => state.postStoreSlice.posts);

    useEffect(() => {
        dispatch(postActions.loadPosts());
    }, []);

    return (
        <>
            <p>Posts:</p>
            {posts.map((post: IPost) => <PostComponent key={post.id} post={post}/>)}
        </>
    );
};