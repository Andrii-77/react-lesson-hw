import {useAppDispatch, useAppSelector} from "../../redux/store.ts";
import {useEffect} from "react";
import {commentActions} from "../../redux/slices/CommentSlice.ts";
import {IComment} from "../../models/IComment.ts";
import {CommentComponent} from "./CommentComponent.tsx";

export const CommentsComponent = () => {

    const dispatch = useAppDispatch();
    const comments = useAppSelector((state) => state.commentStoreSlice.comments);

    useEffect(() => {
        dispatch(commentActions.loadComments());
    }, []);

    return (
        <>
            <p>Comments:</p>
            {comments.map((comment: IComment) => <CommentComponent key={comment.id} comment={comment}/>)}
        </>
    );
};