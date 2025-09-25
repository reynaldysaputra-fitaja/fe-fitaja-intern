import { createSlice } from "@reduxjs/toolkit"

const appSlice = createSlice({
  name: "app",
  initialState: {
    products: [
      {
            id: 1,
            brand: "Apple",
            name: "MacBook Air M2",
            desc: "2021 Apple MacBook Pro (14-inch, Apple M1 Pro chip with 8-core CPU and 14-core GPU, 32GB RAM, 1TB SSD) - Space Gray",
            rating: 4.8,
            review: "A thin and light laptop with the Apple M2 chip, perfect for high productivity and mobility.",
            image: "https://thehikaku.net/pc/apple/image/22macbook-air-m2/x1400.jpg",
        },
        {
            id: 2,
            brand: "Asus",
            name: "Asus ROG Strix G16",
            desc: "2023 Asus ROG Strix G16 (16-inch FHD 165Hz, Intel Core i7-13650HX, NVIDIA GeForce RTX 4060, 16GB RAM, 1TB SSD) - Eclipse Gray",
            rating: 4.6,
            review: "A high-performance gaming laptop with the latest generation Intel i7 processor and RTX 4060 GPU.",
            image: "https://dlcdnwebimgs.asus.com/gain/B7F82858-38C0-4A42-B751-5DE480B0ABB6"
        },
        {
            id: 3,
            brand: "Dell",
            name: "Dell XPS 13 Plus",
            desc: "2022 Dell XPS 13 Plus (13.4-inch OLED 3.5K Touch, Intel Core i7-1260P, Intel Iris Xe Graphics, 16GB RAM, 512GB SSD) - Platinum Silver",
            rating: 4.7,
            review: "A premium ultrabook with a thin bezel display, modern design, and long battery life.",
            image: "https://i5.walmartimages.com/seo/2025-Dell-XPS-13-9345-Laptop-Copilot-AI-PC-13-4-FHD-120Hz-Snapdragon-X-Plus-Intel-i7-1355U-16GB-8448MT-s-RAM-2TB-SSD-Thin-Light-27-Hours-Battery-Life_c996103b-5790-4a80-b35b-46767fd55b5a.c7c043ec937f5e293258ff8dd1279653.jpeg"
        },
        {
            id: 4,
            brand: "HP",
            name: "HP Spectre x360",
            desc: "2022 HP Spectre x360 Convertible (13.5-inch OLED 3K2K Touch, Intel Core i7-1255U, Intel Iris Xe, 16GB RAM, 1TB SSD) - Nightfall Black",
            rating: 4.5,
            review: "A 2-in-1 convertible laptop with an OLED touchscreen, perfect for creative work and flexibility.",
            image: "https://laptopmedia.com/wp-content/uploads/2019/02/hp_spectre_x360_13ap0002nu.png"
        },
        {
            id: 5,
            brand: "Lenovo",
            name: "Lenovo ThinkPad X1 Carbon",
            desc: "2023 Lenovo ThinkPad X1 Carbon Gen 10 (14-inch WUXGA IPS, Intel Core i7-1270P vPro, Intel Iris Xe Graphics, 32GB RAM, 1TB SSD) - Black",
            rating: 4.9,
            review: "A powerful business laptop with strong build quality, a comfortable keyboard, and comprehensive security features.",
            image: "https://static1.xdaimages.com/wordpress/wp-content/uploads/2022/12/05_x1_carbon_g11_hero_front_facing_right.png"
        }
    ],
    search: ""
  },
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter((p) => p.id !== action.payload)
    }
  }
})

export const { setSearch, deleteProduct } = appSlice.actions
export default appSlice.reducer
