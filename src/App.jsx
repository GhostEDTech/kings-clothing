import { MessageCircle } from "lucide-react";
import { useLocation, useRoute } from "wouter";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { useCatalog } from "@/hooks/useCatalog";
import { whatsappLink } from "@/lib/constants";
import { AdminPage } from "@/pages/AdminPage";
import { ContactPage } from "@/pages/ContactPage";
import { HomePage } from "@/pages/HomePage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { ProductPage } from "@/pages/ProductPage";
import { ShopPage } from "@/pages/ShopPage";

export default function App() {
  const { products, setProducts } = useCatalog();
  const [location] = useLocation();
  const [, productParams] = useRoute("/product/:id");
  const currentProduct = productParams
    ? products.find((product) => product.id === productParams.id)
    : undefined;

  let page = <HomePage products={products} />;
  if (location === "/shop") page = <ShopPage products={products} />;
  else if (location === "/contact") page = <ContactPage />;
  else if (location === "/admin") page = <AdminPage products={products} setProducts={setProducts} />;
  else if (productParams) page = <ProductPage product={currentProduct} />;
  else if (location !== "/" && !location.startsWith("/#")) page = <NotFoundPage />;

  return (
    <div className="min-h-screen bg-cream">
      <SiteHeader />
      <main>{page}</main>
      <Footer />
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-30 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/20 transition hover:scale-105"
        aria-label="Chat on WhatsApp">
        <MessageCircle size={24} fill="currentColor" />
      </a>
    </div>
  );
}
