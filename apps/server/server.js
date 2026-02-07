const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const { prisma } = require("./prisma/prisma.js");
const envFile =
  process.env.NODE_ENV === "production"
    ? ".env.production"
    : ".env.development";

dotenv.config({
  path: path.join(__dirname, `../../${envFile}`),
});

const dev = process.env.NODE_ENV !== "production";
const nextAppPath = path.join(__dirname, "../web");
const routes = require("./config/routes.config.js");


let next;

try {
  next = require("next");
} catch (err) {
  console.error(
    "Cannot find Next.js! Make sure it's installed in apps/web and run 'npm install' from monorepo root."
  );
  process.exit(1);
}

if (!dev) {
  const app = next({ dev, dir: nextAppPath });
  const handle = app.getRequestHandler();

  app.prepare().then(() => {
    const server = express();

    server.use("/express", express.json());
    server.use("/express", express.urlencoded({ extended: true }));
    server.use("/express", cookieParser());
    server.use("/uploads", express.static(path.join(__dirname, "uploads")));
    server.use("/express",
      cors({
        origin: [process.env.NEXT_PUBLIC_APP_URL],
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
        allowedHeaders: ['Content-Type', 'Authorization'],
      })
    );

    server.use("/express", (req, res, next) => {
      req.prisma = prisma;
      next();
    });
    server.use("/express", routes);

    server.use((req, res, next) => {
      return handle(req, res);
    });

    const PORT = process.env.PORT || 3000;
    server.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  });

} else {
  const app = express();
  const port = process.env.PORT || 3000;

  app.use(
    cors({
      origin: process.env.NEXT_PUBLIC_APP_URL,
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      credentials: true,
    })
  );

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(cookieParser());
  app.use("/uploads", express.static(path.join(__dirname, "uploads")));

  const routes = require("./config/routes.config.js");
  app.use((req, res, next) => {
    req.prisma = prisma;
    next();
  });
  app.use("/express", routes);

  app.get("/", (req, res) => {
    res.send(`
      <html>
        <head><title>Express Server</title></head>
        <body>
          <p>Server is running on port ${port}</p>
          <p>Access the API at <a href="/api">/api</a></p>
          <p>Access the admin panel at <a href="/admin">/admin</a></p>
          <p>Access the frontend at <a href="${process.env.NEXT_PUBLIC_APP_URL}">${process.env.NEXT_PUBLIC_APP_URL}</a></p>

        </body>
      </html>
    `);
  });

  app.listen(port, () => {
    console.log(
      `🚀 Server running on http://localhost:${port} in ${process.env.NODE_ENV} mode`
    );
  });
}

