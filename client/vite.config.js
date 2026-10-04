import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
plugins: [react()],
base: '/COMP229_Assignment1_Yiming_Ding/',
build: {
manifest: true,
rollupOptions: {
input: "./src/main.jsx",
},
},
});
