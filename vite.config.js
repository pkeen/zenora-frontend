import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
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
});
