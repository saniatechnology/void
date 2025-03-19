export interface Post {
  id: string;
  username: string;
  date: string;
  content: string;
}

export interface PostContainerProps {
  post: Post;
}

export interface PostCreatorProps {
  setShowPostCreator: (value: boolean) => void;
  fetchFeed: () => void;
  username: string;
}
