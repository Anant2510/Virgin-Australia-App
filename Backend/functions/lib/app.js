"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({ origin: true }));
app.use(express_1.default.json());
// Add your routes here, e.g.:
// app.use("/api/users", userRoutes);
// Health / root for tracking (matches your frontend POST to /)
app.get("/", (_req, res) => {
    res.send("Indi-Air API");
});
app.post("/", (req, res) => {
    // Optional: handle tracking payload from frontend
    console.log("Tracking data:", req.body);
    res.send("OK");
});
exports.default = app;
