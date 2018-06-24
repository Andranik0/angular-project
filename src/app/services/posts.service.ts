export class PostsService {
  posts = [{
    id: 1,
    title: 'La Blockchain',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    loveIts: 0,
    created_at: new Date(2015, 11, 30)
  },
  {
    id: 2,
    title: 'Les potirons',
    content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    loveIts: 0,
    created_at: new Date(2017, 1, 14)
  },
  {
    id: 3,
    title: 'Les couleurs',
    content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    loveIts: 0,
    created_at: new Date(2018, 5, 22)
  }];

  loveIt(id:number) {
    const post = this.getPostById(id);
    post.loveIts += 1;
  }

  dontLoveIt(id:number) {
    const post = this.getPostById(id);
    post.loveIts -= 1;
  }

  getPostById(id: number) {
    const post = this.posts.find(
      (s) => {
        return s.id === id;
      }
    );
    return post;
  }
}
