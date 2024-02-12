const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api", // Replace with your API endpoint
    createProxyMiddleware({
      target: "http://api-server-url", // Replace with your API server URL
      changeOrigin: true,
      pathRewrite: {
        "^/api": "", // Remove the '/api' prefix when forwarding requests
      },
    })
  );
};
