import { Children, createContext, useReducer } from "react";

const DEFAULT_CONTEXT = {
  PostList: [],
  addPost: () => {},
  deletePost: () => {},
};

const PostList = createContext(DEFAULT_CONTEXT);

const postListReducer = (currPostList, action) => {
  return currPostList;
};

const PostListProvider = ({ Children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_CONTEXT
  );

  const addPost = () => {};

  const deletePost = () => {};

  return (
    <PostList.Provider value={[{ postList, addPost, deletePost }]}>
      {Children}
    </PostList.Provider>
  );
};

export default PostListProvider;
