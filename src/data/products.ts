import dairyImage from "@/assets/dairy-products.webp";
import juicesImage from "@/assets/juices.webp";
import cheeseImage from "@/assets/cheese.webp";
import sweetsHoneyImage from "@/assets/sweets-honey.webp";
import basicGroceriesImage from "@/assets/basic-groceries.webp";
import oilsGheeImage from "@/assets/oils-ghee.webp";

// Brand Images
import bakhiraMilk from "@/assets/brands/bakhira-milk.webp";
import maragyMilk from "@/assets/brands/almarai-milk.jpeg";
import lamarMilk from "@/assets/brands/lamar-milk.jpeg";
import juhayna from "@/assets/brands/juhayna.webp";
import juhaynaApple from "@/assets/brands/juhayna-apple.jpeg";
import obourLandCheese from "@/assets/brands/obour-land-cheese.webp";
import domtyCheese from "@/assets/brands/domty-cheese.webp";
import rhodesCheese from "@/assets/brands/rhodes-cheese.webp";
import alBawadiHalawa from "@/assets/brands/al-bawadi-halawa.jpeg";
import alBawadiTahini from "@/assets/brands/al-bawadi-tahini.jpeg";
import alBawadiMolasses from "@/assets/brands/al-bawadi-molasses.jpeg";
import vitracJam from "@/assets/brands/vitrac-jam.jpeg";
import imtinanHoney from "@/assets/brands/imtinan-honey.jpeg";
import organicEggs from "@/assets/brands/organic-eggs.jpeg";
import crystal from "@/assets/brands/crystal.webp";
import alDohaRice from "@/assets/brands/al-doha-rice.jpeg";

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image?: string;
}

export interface CategoryInfo {
  name: string;
  image: string;
}

export const categoryImages: Record<string, string> = {
  "منتجات الألبان": dairyImage,
  "العصائر": juicesImage,
  "الجبن": cheeseImage,
  "الحلويات والعسل": sweetsHoneyImage,
  "البقالة الأساسية": basicGroceriesImage,
  "الزيوت والسمن": oilsGheeImage,
};

export const products: Product[] = [
  // منتجات الألبان
  { id: "1", name: "لبن بخيرة 1 كيلو", price: 39, category: "منتجات الألبان", image: bakhiraMilk },
  { id: "2", name: "لبن بخيرة نصف كيلو", price: 23, category: "منتجات الألبان", image: bakhiraMilk },
  { id: "3", name: "لبن مراعي 1 لتر", price: 48, category: "منتجات الألبان", image: maragyMilk },
  { id: "4", name: "لبن مراعي 1.5 لتر", price: 68, category: "منتجات الألبان", image: maragyMilk },
  { id: "5", name: "لبن جهينة 1 لتر", price: 47, category: "منتجات الألبان", image: juhayna },
  { id: "6", name: "لبن جهينة 1.5 لتر", price: 65, category: "منتجات الألبان", image: juhayna },
  // العصائر
  { id: "7", name: "عصير جهينة مانجو 1 لتر", price: 35, category: "العصائر", image: juhayna },
  { id: "8", name: "عصير جهينة أنواع 1 لتر", price: 33, category: "العصائر", image: juhayna },

  // الجبن
  { id: "10", name: "جبنة عبور لاند ربع كيلو", price: 25, category: "الجبن", image: obourLandCheese },
  { id: "11", name: "جبنة عبور لاند نصف كيلو", price: 45, category: "الجبن", image: obourLandCheese },
  { id: "12", name: "جبنة دومتي ربع كيلو", price: 28, category: "الجبن", image: domtyCheese },
  { id: "13", name: "جبنة دومتي نصف كيلو", price: 52, category: "الجبن", image: domtyCheese },
  { id: "14", name: "جبنة رودس ربع كيلو", price: 22.5, category: "الجبن", image: rhodesCheese },
  { id: "15", name: "جبنة رودس نصف كيلو", price: 45, category: "الجبن", image: rhodesCheese },

  // الحلويات والعسل
  { id: "16", name: "حلاوة البوادي نصف كيلو", price: 55, category: "الحلويات والعسل", image: alBawadiHalawa },
  { id: "17", name: "حلاوة البوادي 1 كيلو", price: 95, category: "الحلويات والعسل", image: alBawadiHalawa },
  { id: "18", name: "عسل أسود البوادي نصف كيلو", price: 25, category: "الحلويات والعسل", image: alBawadiMolasses },
  { id: "19", name: "عسل أسود البوادي 1 كيلو", price: 45, category: "الحلويات والعسل", image: alBawadiMolasses },
  { id: "20", name: "طحينة البوادي نصف كيلو", price: 55, category: "الحلويات والعسل", image: alBawadiTahini },
  { id: "21", name: "طحينة البوادي 1 كيلو", price: 105, category: "الحلويات والعسل", image: alBawadiTahini },
  { id: "22", name: "مربى فيتراك نصف كيلو", price: 45, category: "الحلويات والعسل", image: vitracJam },
  { id: "23", name: "مربى فيتراك ربع كيلو", price: 30, category: "الحلويات والعسل", image: vitracJam },
  { id: "24", name: "عسل أبيض امتنان نصف كيلو", price: 115, category: "الحلويات والعسل", image: imtinanHoney },
  { id: "25", name: "عسل أبيض امتنان 1 كيلو", price: 195, category: "الحلويات والعسل", image: imtinanHoney },

  // البقالة الأساسية
  { id: "26", name: "سكر 1 كيلو", price: 33, category: "البقالة الأساسية", image: basicGroceriesImage },
  { id: "27", name: "دقيق الضحى 1 كيلو", price: 30, category: "البقالة الأساسية", image: alDohaRice },
  { id: "28", name: "رز الضحى 1 كيلو", price: 40, category: "البقالة الأساسية", image: alDohaRice },
  { id: "29", name: "خميرة دريم", price: 5, category: "البقالة الأساسية", image: basicGroceriesImage },
  { id: "30", name: "بيكنج بودر كوكس", price: 4, category: "البقالة الأساسية", image: basicGroceriesImage },
  { id: "31", name: "فانيليا كوكس", price: 2, category: "البقالة الأساسية", image: basicGroceriesImage },
  { id: "32", name: "ملح كوكس 1 كيلو", price: 13, category: "البقالة الأساسية", image: basicGroceriesImage },
  { id: "33", name: "بيض عضوي", price: 55, category: "البقالة الأساسية", image: organicEggs },

  // العصائر  
  { id: "34", name: "عصير جهينة تفاح 1 لتر", price: 35, category: "العصائر", image: juhaynaApple },

  // منتجات الألبان
  { id: "35", name: "لبن ليمار 1 لتر", price: 45, category: "منتجات الألبان", image: lamarMilk },

  // الزيوت والسمن
  { id: "36", name: "سمنة كريستال 1 كيلو", price: 85, category: "الزيوت والسمن", image: crystal },
  { id: "37", name: "سمنة كريستال 2 كيلو", price: 160, category: "الزيوت والسمن", image: crystal },
  { id: "38", name: "زيت ذرة كريستال 1 لتر", price: 90, category: "الزيوت والسمن", image: crystal },
  { id: "39", name: "خل أبيض", price: 15, category: "الزيوت والسمن", image: oilsGheeImage },
  { id: "40", name: "خل هاينز 1 لتر", price: 23, category: "الزيوت والسمن", image: oilsGheeImage },
];

export const categories = [
  "منتجات الألبان",
  "العصائر", 
  "الجبن",
  "الحلويات والعسل",
  "البقالة الأساسية",
  "الزيوت والسمن"
];