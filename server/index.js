import express from "express";
import cors from "cors";
import aiRoutes from "./routes/ai.routes.js"
import mailRoutes from "./routes/mail.routes.js";

const app = express();
const PORT = process.env.PORT || 4500;
app.use(cors());
app.use(express.json());

app.use("/api/ai", aiRoutes);
app.use("/api/mail", mailRoutes);

app.listen(5000, () => console.log(`Server running on port ${PORT}`));
