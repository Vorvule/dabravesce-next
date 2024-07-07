const Icon = {
  getName: (screenName: string, focused: boolean) => {
    switch (screenName) {
      case "index":
        return focused ? "notifications" : "notifications-outline";
      case "menu":
        return focused ? "library" : "library-outline";
      default: // "page/[slugchain]"
        return focused ? "book" : "book-outline";
    }
  },
};

export default Icon;
