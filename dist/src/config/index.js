"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const defaultConfig = {
    port: 9000,
    expire_timeout: 10000,
    alive_timeout: 120000,
    key: "peerjs",
    path: "/",
    concurrent_limit: 5000,
    allow_discovery: false,
    proxied: false,
    cleanup_out_msgs: 1000,
    ssl: {
        key: "",
        cert: ""
    }
};
exports.default = defaultConfig;
