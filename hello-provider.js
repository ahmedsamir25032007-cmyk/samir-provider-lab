const HelloProvider = {
  name: "HelloProvider",

  async search(query) {
    const cleanQuery = query.trim().toLowerCase();

    return [
      {
        title: "Hello " + cleanQuery,
        message: "My first provider is working!"
      }
    ];
  }
};

export default HelloProvider;