"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
const https_1 = require("firebase-functions/v2/https");
const app_1 = __importDefault(require("./app"));
// Exposes your Express app as a single Cloud Function.
// URL will be: https://<region>-<project>.cloudfunctions.net/api
exports.api = (0, https_1.onRequest)({
    region: "us-central1",
    cors: true,
}, app_1.default);
