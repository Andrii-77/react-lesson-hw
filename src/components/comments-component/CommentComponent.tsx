import {IComment} from "../../models/IComment.ts";

interface CommentComponentProps {
    comment: IComment
}

export const CommentComponent = ({comment}: CommentComponentProps) => {
    return (
        <div>{comment.name}</div>
    );
};