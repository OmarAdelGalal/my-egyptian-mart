import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { categoryImages } from "@/data/products";
interface ProductCardProps {
  name: string;
  price: number;
  category?: string;
  image?: string;
}
export const ProductCard = ({
  name,
  price,
  category,
  image
}: ProductCardProps) => {
  const productImage = image || (category ? categoryImages[category] : null);
  return <Card className="group hover:shadow-[var(--shadow-card)] transition-all duration-300 border-border/50 hover:border-fresh-green/30 overflow-hidden">
      <CardContent className="p-0">
        {productImage}
        
        
      </CardContent>
    </Card>;
};