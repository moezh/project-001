import { defineDb, defineTable, column } from "astro:db";

const Auth = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    credential: column.text({ optional: true }),
    isActive: column.boolean({ default: true }),
  },
});

export default defineDb({
  tables: { Auth },
});
