const path = require("path");

const envPath = path.resolve(__dirname, "../../.env");
require("dotenv").config({ path: envPath });

const app = require("./app");

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});