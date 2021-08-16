import React from 'react';

export type BookType = {
    author: string;
    title: string;
    cover: number;
    ol: string;
    ISBN: string
}

const Book: React.FC<BookType> = ({author,title,cover,ISBN, ol}) => {
    return (
        <div>
            <div>{author}</div>
            <div>{title}</div>
            <div>{cover}</div>
            <div>{ISBN}</div>
            <div>{ol}</div>
        </div>
    )
};

export default Book;