// swagger.js
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "My API Docs",
      version: "1.0.0",
      description: "Interactive API documentation with Swagger in Express",
    },
  },
  // 👇 adjust path to your routes folder
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

export { swaggerUi, swaggerSpec };
// import swaggerJsdoc from "swagger-jsdoc";
// import swaggerUi from "swagger-ui-express";

// const options = {
//   definition: {
//     openapi: "3.0.0",
//     info: {
//       title: "QuickAI API Docs",
//       version: "1.0.0",
//       description: "API documentation for QuickAI backend (protected with JWT)",
//     },
//     servers: [
//       {
//         url: "http://localhost:3000", // 👈 match your backend port
//       },
//     ],
//     components: {
//       securitySchemes: {
//         bearerAuth: {
//           type: "http",
//           scheme: "bearer",
//           bearerFormat: "JWT",
//         },
//       },
//     },
//     security: [
//       {
//         bearerAuth: [],
//       },
//     ],
//   },
//  apis: ["./server/routes/*.js"]

// , // 👈 path to your route files with swagger comments
// };

// const swaggerSpec = swaggerJsdoc(options);

// export function swaggerDocs(app) {
//   app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
//   console.log("📄 Swagger docs available at http://localhost:3000/api-docs");
// }
