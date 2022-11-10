import React from 'react';
import PropTypes from 'prop-types';
import { usePost } from '../../hooks/usePost';

export const postsContext = React.createContext({});

export const PostsContextProvider = ({ children }) => {
  const [post, setPost] = usePost();
  return (
    <postsContext.Provider value={{ post, setPost }}>
      {children}
    </postsContext.Provider>
  );
};

PostsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
