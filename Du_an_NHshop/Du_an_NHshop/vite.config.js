import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        shop: resolve(__dirname, './page/shop.html'),
        detail: resolve(__dirname, './page/detail.html'),
        cart: resolve(__dirname, './page/cart.html'),
        checkout: resolve(__dirname, './page/checkout.html'),
        login: resolve(__dirname, './page/login.html'),
      },
    },
  },
})