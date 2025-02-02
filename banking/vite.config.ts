import { loadEnv, defineConfig } from 'vite'
import { ngrok } from 'vite-plugin-ngrok'

export default defineConfig({
  // Note you should not store your ngrok token in your code/repo. Make sure to move this to 
  // a more secure place before sharing your project.
  plugins: [
    ngrok('NGROK_AUTH_TOKEN_IN_HERE'),
  ],
})