import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductCard } from "@/components/ProductCard";
import { CategoryFilter } from "@/components/CategoryFilter";
import { categories } from "@/data/products";
import { useProducts } from "@/contexts/ProductsContext";
import { ShoppingBasket, Leaf, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
const Index = () => {
  const navigate = useNavigate();
  const { products } = useProducts();
  const [activeCategory, setActiveCategory] = useState("الكل");
  const filteredProducts = activeCategory === "الكل" ? products : products.filter(product => product.category === activeCategory);
  return <div className="min-h-screen bg-gradient-to-b from-background to-organic-beige">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm shadow-[var(--shadow-soft)] sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="w-24">
              
            </div>
            <div className="flex items-center gap-3">
              <Leaf className="h-8 w-8 text-fresh-green" />
              <h1 className="text-3xl font-bold bg-[var(--gradient-fresh)] bg-clip-text text-zinc-950">شركه المتحده</h1>
              <ShoppingBasket className="h-8 w-8 text-fresh-green" />
            </div>
            <div className="w-24"></div>
          </div>
          <p className="text-center text-muted-foreground mt-2" dir="rtl">
            أفضل المنتجات الطازجة بأسعار مميزة
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12 p-8 bg-gradient-to-r from-fresh-green-light/30 to-organic-beige/50 rounded-2xl border border-fresh-green/20">
          <h2 className="text-2xl font-bold text-fresh-green-dark mb-4" dir="rtl">
            منتجات طازجة عالية الجودة
          </h2>
          <p className="text-lg text-muted-foreground" dir="rtl">
            اكتشف مجموعة واسعة من المنتجات الغذائية الطازجة والعضوية
          </p>
        </div>

        {/* Category Filter */}
        <CategoryFilter categories={categories} activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => <ProductCard key={product.id} name={product.name} price={product.price} category={product.category} image={product.image} />)}
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-muted-foreground">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Leaf className="h-5 w-5 text-fresh-green" />
            <span>متجر البقالة الطازجة - جودة وثقة | Created by Waquak The New Code | Omar Aded </span>
          </div>
          <p className="text-sm">جميع الأسعار بالجنيه المصري</p>
        </footer>
      </main>
    </div>;
};
export default Index;