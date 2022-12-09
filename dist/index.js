"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const db_1 = require("./config/db");
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Starting up........');
    if (!process.env.MONGO_URI) {
        throw new Error('MONGO_URI must be defined');
    }
    if (!process.env.SECRET_KEY) {
        throw new Error('SECRET_KEY must be defined');
    }
    if (!process.env.SMTP) {
        throw new Error('SMTP must be defined');
    }
    if (!process.env.SMTP_PASSWORD) {
        throw new Error('SMTP_PASSWORD must be defined');
    }
    if (!process.env.SMTP_USER) {
        throw new Error('SMTP_USER must be defined');
    }
    yield db_1.connectDB();
    const port = process.env.PORT || 8000;
    app_1.app.listen(port, () => console.log(`app started on port ${port} in ${process.env.NODE_ENV !== 'production' ? 'Development' : process.env.NODE_ENV} mode`));
});
start();
