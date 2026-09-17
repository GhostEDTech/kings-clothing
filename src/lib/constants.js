export const WHATSAPP_NUMBER = "2349068115614";
export const WHATSAPP_DISPLAY = "0906 811 5614";
export const ADMIN_CODE = "KING1989";
export const STORAGE_KEY = "ctk-catalog-v1";
export const AUTH_KEY = "ctk-admin-unlocked";

export const navItems = [
  { label: "Shop the drop", href: "/shop" },
  { label: "Our story", href: "/#story" },
  { label: "Contact", href: "/contact" },
];

export const seedProducts = [
  {
    id: "ctk-001",
    name: "Onyx Leather Racer",
    category: "Outerwear",
    price: 85000,
    size: "L",
    condition: "Excellent",
    badge: "Just in",
    description:
      "A clean-lined black leather racer with a soft, broken-in finish. Made for late nights and colder cities.",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "ctk-002",
    name: "Varsity Archive Jacket",
    category: "Outerwear",
    price: 65000,
    size: "XL",
    condition: "Very good",
    badge: "Archive pick",
    description:
      "A heavyweight varsity jacket with the right amount of patina. Oversized fit, easy statement piece.",
    image:
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "ctk-003",
    name: "Washed Graphic Tee",
    category: "Tops",
    price: 18000,
    size: "M",
    condition: "Excellent",
    badge: "Best seller",
    description:
      "Sun-faded cotton, an easy drape and a graphic that looks better with every wear.",
    image:
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "ctk-004",
    name: "90s Indigo Denim",
    category: "Denim",
    price: 32000,
    size: "34",
    condition: "Very good",
    badge: "One only",
    description:
      "A straight-leg vintage denim with authentic whiskering and a perfectly lived-in wash.",
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "ctk-005",
    name: "Midnight Knit Polo",
    category: "Tops",
    price: 24000,
    size: "L",
    condition: "Excellent",
    badge: "Quiet luxury",
    description:
      "A textured knit polo in deep midnight navy. The low-key flex your rotation has been waiting for.",
    image:
      "https://images.unsplash.com/photo-1610652492500-ded49ceeb378?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "ctk-006",
    name: "Cognac Suede Overshirt",
    category: "Outerwear",
    price: 72000,
    size: "M",
    condition: "Excellent",
    badge: "Rare find",
    description:
      "Soft cognac suede with a relaxed cut. A vintage layer with a modern silhouette.",
    image:
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=1200&q=85",
  },
];

export function formatPrice(price) {
  return `\u20A6${price.toLocaleString("en-NG")}`;
}

export function whatsappLink(product) {
  const message = product
    ? `Hello Celebrity Thrift King! I want to buy the ${product.name} (${formatPrice(product.price)}). Is it still available?`
    : "Hello Celebrity Thrift King! I would like to enquire about a piece from the current drop.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
