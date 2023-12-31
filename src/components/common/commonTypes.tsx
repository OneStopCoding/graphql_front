export interface Post{
    id: string;
    title: string;
    body: string;
    author: Author;
    comments: Comment[]
}

export interface Author{
    name: string;
}

export interface  Comment{
    id: string;
    text: string;
    author: Author;
}