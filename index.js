const handleNames = {
  name: "nick",
  default: () => {
    console.log(`${handleNames.name}, is default`);
  },
  nameChange: (n) => {
    handleNames.name = n;
  }
};

handleNames.default();
handleNames.nameChange("Sara");
handleNames.default();
delete handleNames["name"];
handleNames.default();
