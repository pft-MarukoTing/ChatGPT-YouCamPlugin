const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const root = __dirname;
const types = { ".html":"text/html; charset=utf-8", ".css":"text/css; charset=utf-8", ".js":"text/javascript; charset=utf-8", ".png":"image/png", ".jpg":"image/jpeg", ".jpeg":"image/jpeg" };
const suppliedAssets = {
  "/user-assets/eyeliner-bold-wing.jpg": "C:\\Users\\steven_weng\\Downloads\\9a0da1f1-0b6b-4bf7-9b0a-646d24472b8c.jpg",
  "/user-assets/eyeliner-soft-flick.jpg": "C:\\Users\\steven_weng\\Downloads\\845728f8-a325-459a-a974-1a6f90751b63.jpg",
  "/user-assets/eyeliner-classic-wing.jpg": "C:\\Users\\steven_weng\\Downloads\\8010f126-b30e-4822-b918-3bd502cf5288.jpg"
};

http.createServer((request,response) => {
  const pathname = request.url === "/" ? "/index.html" : request.url.split("?")[0];
  const target = suppliedAssets[pathname] || path.resolve(root, `.${pathname}`);
  if (!suppliedAssets[pathname] && !target.startsWith(root)) return response.writeHead(403).end("Forbidden");
  fs.readFile(target,(error,data) => {
    if (error) return response.writeHead(404).end("Not found");
    response.writeHead(200,{"Content-Type":types[path.extname(target)] || "application/octet-stream"});
    response.end(data);
  });
}).listen(4174,"127.0.0.1",() => console.log("YouCam VTO prototype: http://127.0.0.1:4174"));
