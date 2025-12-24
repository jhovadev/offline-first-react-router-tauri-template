import { defineConfig } from "drizzle-kit";

export default defineConfig({
	dialect: "turso",
	schema: "./app/shared/api/db/schema.ts",
	out: "./src-tauri/migrations",
	dbCredentials: {
		url:
			process.env.DATABASE_URL ||
			"/home/jhoan/.config/dev.jhoan.offline-first-react-router-tauri-template/database.db"
	},
	verbose: false,
	strict: true
});
