// DEFINE LOCAL vs SERVER
// DISCLAIMER: WHITESPACE AT THE END
let file_path;

if (process.env.NODE_ENV == "dev") {
    file_path = process.env.NODE_LOCAL || "http://127.0.0.1:8887";
} else {
    file_path = process.env.NODE_SERVER || "storage";
}

module.exports = file_path;