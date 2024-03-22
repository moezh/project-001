import { defineDb, defineTable, column } from "astro:db";

const Auth = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    creation_date: column.date(),
    challenge: column.text(),
    credential: column.text({ default: "" }),
  },
});

export default defineDb({
  tables: { Auth },
});
