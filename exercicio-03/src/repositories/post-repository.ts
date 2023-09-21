import { Post } from "@prisma/client";
import prisma from "../database/database";

const TABLE_NAME = "posts";

export type CreatePost = Omit<Post, "id">

async function getPosts() {
    return prisma.post.findMany();
}

async function getPost(id: number) {
    return prisma.post.findUnique({
        where: {
            id,
        },
    });
}

async function createPost(post: CreatePost) {
    return prisma.post.create({
        data: post,
    })
}

async function deletePost(id: number) {
    return prisma.post.delete({
        where: {
            id,
        }
    })
}

const postRepository = {
    getPost,
    getPosts,
    createPost,
    deletePost
}

export default postRepository;