import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react({
			jsxImportSource: "@emotion/react",
			babel: {
				plugins: ["@emotion/babel-plugin"],
			},
		}),
	],
	server: {
		proxy: {
			"/api": {
				target: "http://localhost:3000", // replace with your Express app's port
				changeOrigin: false,
				// rewrite: (path) => path.replace(/^\/api/, ""),
			},
		},
		// cors: false
	},
	// optimizeDeps: {
	// 	exclude: ["fsevents"],
	// },
	// resolve: {
	// 	alias: {
	// 		"@mui/styled-engine": "@emotion/styled",
	// 	},
	// },
});
