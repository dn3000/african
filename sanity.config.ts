import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schema } from "./src/sanity/schemaTypes";

export default defineConfig({
  name: "african-exwick",
  title: "AfriCan | Exwick Farm",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "no-project-id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  basePath: "/studio",
  plugins: [structureTool()],
  schema,
});
