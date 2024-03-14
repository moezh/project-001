import db from "@astrojs/db";
import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [db()],
  output: "hybrid",
  adapter: cloudflare(),
});
