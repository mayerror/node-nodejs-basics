const parseArgs = () => {
  let isValue = false;
  let str = "";
  process.argv
    .filter((arg) => {
      if (isValue) {
        isValue = false;
        return true;
      } else if (arg.match(/^--*/)) {
        isValue = true;
        return true;
      }
      return false;
    })
    .forEach((item, i) => {
      if (i % 2 == 0) {
        str = str.concat(`${item.slice(2)} is `);
      } else {
        str = str.concat(`${item}, `);
      }
    });
  console.log(str.trim().slice(0, -1));
};

parseArgs();
