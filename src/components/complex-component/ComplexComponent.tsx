import {useAppDispatch, useAppSelector} from "../../redux/store.ts";
import {useEffect} from "react";
import {userActions} from "../../redux/slices/UserSlice.ts";
import {postActions} from "../../redux/slices/PostSlice.ts";
import {commentActions} from "../../redux/slices/CommentSlice.ts";
import {IUser} from "../../models/IUser.ts";
import {UserComponent} from "../users-component/UserComponent.tsx";
import {IPost} from "../../models/IPost.ts";
import {PostComponent} from "../posts-component/PostComponent.tsx";
import {IComment} from "../../models/IComment.ts";
import {CommentComponent} from "../comments-component/CommentComponent.tsx";

export const ComplexComponent = () => {

    const dispatch = useAppDispatch();
    const {
        userStoreSlice: {users},
        postStoreSlice: {posts},
        commentStoreSlice: {comments}
    } = useAppSelector(state => state);

    useEffect(() => {
        if(!users.length){
            dispatch(userActions.loadUsers());
        }
        if(!posts.length){
            dispatch(postActions.loadPosts());
        }
        if(!comments.length){
            dispatch(commentActions.loadComments());
        }
    }, []);

    return (
        <div>
            {users.map((user: IUser) => <UserComponent key={user.id} user={user}/>)}
            <hr/>
            {posts.map((post: IPost) => <PostComponent key={post.id} post={post}/>)}
            <hr/>
            {comments.map((comment: IComment) => <CommentComponent key={comment.id} comment={comment}/>)}
        </div>
    );
};