const HelloProvider = {
  name: "HelloProvider",

  async search(query) {
    return [
      {
        title: "Hello " + query,
        message: "My first provider is working!"
      }
    ];
  }
};

export default HelloProvider;