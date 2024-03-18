import { defineDb, defineTable, column } from "astro:db";

const Auth = defineTable({
  columns: {
    id: column.number(),
    description: column.text(),
    isActive: column.boolean(),
  },
});

export default defineDb({
  tables: { Auth },
});
