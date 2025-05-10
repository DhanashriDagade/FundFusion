const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(bodyParser.json());
const authRoutes = require("./routes/auth");
const contactRoutes = require("./routes/contact");

app.use("/api", authRoutes);
app.use("/api", contactRoutes);





const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
