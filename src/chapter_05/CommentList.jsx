import React from "react";
import Comment from "./Comment";

const comments=[
    {
        name:"남우경",
        comment:"안녕하세요, 나무입니다.",
    },
    {
        name:"박은빈",
        comment:"토깽이라는 어감이 좋아요.",
    },
    {
        name:"아무개",
        comment:"저는 아무개입니다.",
    },
];

function CommentList(props){
    return (
        <div>
            {comments.map((comment)=>{
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;