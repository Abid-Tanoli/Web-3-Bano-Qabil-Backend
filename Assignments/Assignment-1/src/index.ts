import http, { IncomingMessage, ServerResponse } from "http";

const server = http.createServer(
  (request: IncomingMessage, response: ServerResponse) => {
    const { url, method } = request;

    if (url === "/" && method === "GET") {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(`
        <!DOCTYPE html>
        <html>
          <head><title>Home</title></head>
          <body>
            <h1>Welcome to Home Page!</h1>
            <p>Explore our amazing e-commerce platform.</p>
          </body>
        </html>
      `);

    } else if (url === "/auth/login" && method === "GET") {
      response.writeHead(200, { "Content-Type": "text/plain" });
      response.end("Login Page");

    } else if (url === "/auth/register" && method === "GET") {
      response.writeHead(200, { "Content-Type": "text/plain" });
      response.end("Register Page");

    } else if (url === "/products" && method === "GET") {
      response.writeHead(200, { "Content-Type": "application/json" });
      const products = [
        { id: 1, name: "Product A", price: 100 },
        { id: 2, name: "Product B", price: 200 },
      ];
      response.end(JSON.stringify(products));

    } else if (url?.startsWith("/products/") && method === "GET") {
      const id = Number(url.split("/")[2]);
      response.writeHead(200, { "Content-Type": "application/json" });
      const product = { id, name: `Product ${id}`, price: id * 100 };
      response.end(JSON.stringify(product));

    } else if (url === "/cart" && method === "GET") {
      response.writeHead(200, { "Content-Type": "application/json" });
      const cart = [{ productId: 1, quantity: 2 }];
      response.end(JSON.stringify(cart));

    } else if (url === "/orders" && method === "GET") {
      response.writeHead(200, { "Content-Type": "application/json" });
      const orders = [{ orderId: 101, total: 300 }];
      response.end(JSON.stringify(orders));

    } else if (url === "/orders" && method === "POST") {
      response.writeHead(201, { "Content-Type": "text/plain" });
      response.end("Order Created Successfully");

    } else {
      response.writeHead(404, { "Content-Type": "text/plain" });
      response.end("Page Not Found");
    }
  }
);

server.listen(3000, () => {
  console.log("✅ Server running at http://localhost:3000");
});
