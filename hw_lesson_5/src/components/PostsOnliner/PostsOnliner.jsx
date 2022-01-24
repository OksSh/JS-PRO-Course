import { Post } from './Post';
import { arrayPosts } from './constants';

export function PostsOnliner() {
  return arrayPosts.map((post, index) => {
    return (
      <Post
        title={post.title}
        backgroundImageUrl={post.backgroundImageUrl}
        category={post.category}
        commentCount={post.commentCount}
        key={index}
      />
    );
  });
}
