const fs = require("fs");
const port = 4000;

//SWAGGER-AUTOGEN
runDoc();

async function runDoc() {
  if (process.env.NODE_ENV) {
    const swaggerAutogen = require("swagger-autogen")();
    const doc = {
      info: {
        title: "Template API",
        description: "Template API documentation.",
      },
      host: "localhost:" + port,
      schemes: ["http"],
    };
    const outputFile = "./swagger-output.json";

    //CREATE FILE IF IT DOES NOT EXIST
    try {
      if (!fs.existsSync(outputFile)) {
        await fs.promises.writeFile(outputFile, "{}", (err) => {
          if (err && process.env.NODE_ENV) throw err;
        });
      }
    } catch (err) {
      if (process.env.NODE_ENV) console.log(err);
    }

    //const endpointsFiles = ["./routes/app.js"];
    const endpointsFiles = ["./app.js"];

    swaggerAutogen(outputFile, endpointsFiles, doc);
  }
}
