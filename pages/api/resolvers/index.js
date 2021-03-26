export const resolvers = {
  Query: {
    getUsers: async () => {
      return [
        {
          id: 1,
          login: "demo",
          avatar_url: "http://demo.url.com"
        },
        {
          id: 2,
          login: "tester",
          avatar_url: "http://tester.url.com"
        }
      ]
    },
    getUser: async (_, args) => {

        return {
          id: 1,
          login: "demo",
          avatar_url: "http://demo.url.com"
        };

    }
  }
};
