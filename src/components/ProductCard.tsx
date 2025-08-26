import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { categoryImages } from "@/data/products";

interface ProductCardProps {
  name: string;
  price: number;
  category?: string;
}

export const ProductCard = ({ name, price, category }: ProductCardProps) => {
  const categoryImage = category ? categoryImages[category] : null;

  return (
    <Card className="group hover:shadow-[var(--shadow-card)] transition-all duration-300 border-border/50 hover:border-fresh-green/30 overflow-hidden">
      <CardContent className="p-0">
        {categoryImage && (
          <div className="relative h-48 overflow-hidden">
            <img 
              src={categoryImage} 
              alt={category}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        )}
        <div className="p-4">
          <div className="flex flex-col gap-3">
            {category && (
              <Badge variant="secondary" className="self-start bg-fresh-green-light text-fresh-green-dark text-xs">
                {category}
              </Badge>
            )}
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-foreground leading-relaxed" dir="rtl">
                {name}
              </h3>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-border/30">
              <span className="text-2xl font-bold text-price-gold">
                {price}
              </span>
              <span className="text-sm text-muted-foreground">جنيه</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};