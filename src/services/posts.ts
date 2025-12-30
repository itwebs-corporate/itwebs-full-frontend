import { API_ROUTER } from '../config/api-router';
import { Post } from '../types/posts';

export const getPosts = async (): Promise<Post[]> => {
  try {
    const res = await fetch(API_ROUTER.BASE_URL + API_ROUTER.POSTS);
    if (!res.ok) {
      throw new Error('Request failed');
    }
    return res.json();
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
    return [];
  }
};
export const getPost = async (postId: number): Promise<Post | null> => {
  try {
    const res = await fetch(API_ROUTER.BASE_URL + API_ROUTER.POSTS + `/${postId}`);
    if (!res.ok) {
      throw new Error('Request failed');
    }
    return res.json();
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
    return null;
  }
};
