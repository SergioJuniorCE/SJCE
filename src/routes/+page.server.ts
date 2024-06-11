import { pb } from '$lib/db/pb';
import { Collections, type PostsResponse } from '$lib/types/pocketbase-types';
import type { PageServerLoad } from './$types';

export const load = (async () => {
  const resultList = await pb.collection(Collections.Posts).getFullList<PostsResponse>();
  return {
    resultList
  };
}) satisfies PageServerLoad;