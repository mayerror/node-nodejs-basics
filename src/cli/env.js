const parseEnv = () => {
  const envObj = process.env;

  let str = "";
  for (const property in envObj) {
    if (property.match("RSS_")) {
      str = str.concat(`${property} = ${envObj[property]}; `);
    }
  }
  console.log(str.trim().slice(0, -1));
};

parseEnv();
