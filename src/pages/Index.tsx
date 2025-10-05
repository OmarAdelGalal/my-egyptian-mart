import { useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { CategoryFilter } from "@/components/CategoryFilter";
import { products, categories } from "@/data/products";
import { ShoppingBasket, Leaf } from "lucide-react";
const Index = () => {
  const [activeCategory, setActiveCategory] = useState("الكل");
  const filteredProducts = activeCategory === "الكل" ? products : products.filter(product => product.category === activeCategory);
  return <div className="min-h-screen bg-gradient-to-b from-background to-organic-beige">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm shadow-[var(--shadow-soft)] sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-center gap-3">
            <Leaf className="h-8 w-8 text-fresh-green" />
            <h1 className="text-3xl font-bold bg-[var(--gradient-fresh)] bg-clip-text text-zinc-950">شركه المتحده نصابه 

          </h1>
            <ShoppingBasket className="h-8 w-8 text-fresh-green" />
          </div>
          
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12 p-8 bg-gradient-to-r from-fresh-green-light/30 to-organic-beige/50 rounded-2xl border border-fresh-green/20">
          <h2 className="text-2xl font-bold text-fresh-green-dark mb-4" dir="rtl">شركه نصابه احذر التعامل </h2>
          
        </div>

        {/* Category Filter */}
        <CategoryFilter categories={categories} activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

        {/* Products Grid */}
        

        {/* Footer */}
        <footer className="mt-16 text-center text-muted-foreground">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Leaf className="h-5 w-5 text-fresh-green" />
            <span>متجر البقالة الطازجة - جودة وثقة | Created by Waquak The New Code | Omar Adel </span>
          </div>
          <p className="text-sm">جميع الأسعار بالجنيه المصري</p>
        </footer>
      </main>
    </div>;
};
export default Index;