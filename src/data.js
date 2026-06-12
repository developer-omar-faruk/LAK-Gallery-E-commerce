// ─── DATA ────────────────────────────────────────────────────────────────────
export const navLinks = [
  { id: 1, label: "Home", href: "#home" },
  { id: 2, label: "Shop", href: "#shop" },
  { id: 3, label: "Categories", href: "#categories" },
  { id: 4, label: "Featured", href: "#featured" },
  { id: 5, label: "Reviews", href: "#reviews" },
  { id: 6, label: "Contact", href: "#contact" },
];

export const categories = [
  { id: 1, name: "Electronics", count: 124, emoji: "💻", color: "from-blue-500/20 to-indigo-500/20", border: "border-blue-200" },
  { id: 2, name: "Fashion", count: 89, emoji: "👗", color: "from-pink-500/20 to-rose-500/20", border: "border-pink-200" },
  { id: 3, name: "Shoes", count: 56, emoji: "👟", color: "from-amber-500/20 to-orange-500/20", border: "border-amber-200" },
  { id: 4, name: "Watches", count: 43, emoji: "⌚", color: "from-slate-500/20 to-gray-500/20", border: "border-slate-200" },
  { id: 5, name: "Accessories", count: 77, emoji: "👜", color: "from-violet-500/20 to-purple-500/20", border: "border-violet-200" },
  { id: 6, name: "Furniture", count: 38, emoji: "🪑", color: "from-emerald-500/20 to-teal-500/20", border: "border-emerald-200" },
];

export const products = [
  { id: 1, name: "Arc Pro Laptop", category: "Electronics", price: 1299, originalPrice: 1599, discount: 19, rating: 4.8, reviews: 312, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80", description: "Ultra-thin 14-inch laptop with M3 chip, 16GB RAM, and 512GB SSD.", features: ["M3 Chip", "16GB RAM", "512GB SSD", "Retina Display", "18hr Battery"], tag: "Best Seller" },
  { id: 2, name: "Meridian Jacket", category: "Fashion", price: 189, originalPrice: 249, discount: 24, rating: 4.6, reviews: 198, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80", description: "Premium wool-blend jacket with a tailored silhouette. Timeless design meets modern comfort.", features: ["Wool Blend", "Tailored Fit", "Dry Clean", "3 Colors", "S–XXL"], tag: "New" },
  { id: 3, name: "Apex Runner X", category: "Shoes", price: 149, originalPrice: 179, discount: 17, rating: 4.9, reviews: 541, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80", description: "High-performance running shoe with responsive foam cushioning and breathable mesh upper.", features: ["Foam Cushion", "Mesh Upper", "Carbon Plate", "Lightweight", "All-terrain"], tag: "Top Rated" },
  { id: 4, name: "Chronos S1 Watch", category: "Watches", price: 499, originalPrice: 649, discount: 23, rating: 4.7, reviews: 276, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80", description: "Swiss-inspired automatic watch with sapphire crystal glass and stainless steel bracelet.", features: ["Sapphire Crystal", "Auto Movement", "100m Water Resistant", "42mm Case", "Stainless Steel"], tag: "Limited" },
  { id: 5, name: "Nova Wireless Buds", category: "Electronics", price: 129, originalPrice: 179, discount: 28, rating: 4.5, reviews: 423, image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&q=80", description: "True wireless earbuds with active noise cancellation and 30-hour total battery life.", features: ["ANC", "30hr Battery", "IPX5", "Spatial Audio", "Touch Controls"], tag: "Sale" },
  { id: 6, name: "Luma Tote Bag", category: "Accessories", price: 89, originalPrice: 119, discount: 25, rating: 4.4, reviews: 167, image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80", description: "Handcrafted full-grain leather tote with interior organizer pockets and magnetic closure.", features: ["Full-grain Leather", "Magnetic Closure", "Interior Pockets", "Shoulder Strap", "2 Colors"], tag: "New" },
  { id: 7, name: "Drift Lounge Chair", category: "Furniture", price: 649, originalPrice: 849, discount: 24, rating: 4.8, reviews: 89, image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&q=80", description: "Scandinavian-inspired lounge chair with solid oak legs and premium bouclé upholstery.", features: ["Solid Oak Legs", "Bouclé Upholstery", "360° Swivel", "Ergonomic", "Assembly Included"], tag: "Best Seller" },
  { id: 8, name: "Pixel Smart Watch", category: "Watches", price: 299, originalPrice: 349, discount: 14, rating: 4.6, reviews: 334, image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=600&q=80", description: "Advanced smartwatch with health monitoring, GPS, and 7-day battery life in a sleek design.", features: ["Health Monitor", "Built-in GPS", "7-day Battery", "45mm AMOLED", "Always-on Display"], tag: "Hot" },
];