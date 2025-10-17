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
import juhaynaMilk from "@/assets/brands/juhayna-milk.jpeg";
import juhaynaCocktail from "@/assets/brands/juhayna-cocktail.jpeg";
import obourLandCheese from "@/assets/brands/obour-land-cheese.webp";
import obourLandFeta from "@/assets/brands/obour-land-feta.jpeg";
import domtyCheese from "@/assets/brands/domty-cheese.webp";
import domtyCheeseNew from "@/assets/brands/domty-cheese-new.jpeg";
import rhodesCheese from "@/assets/brands/rhodes-cheese.webp";
import rhodesCheeseNew from "@/assets/brands/rhodes-cheese-new.jpeg";
import rhodesCream from "@/assets/brands/rhodes-cream.jpeg";
import alBawadiHalawa from "@/assets/brands/al-bawadi-halawa.jpeg";
import alBawadiTahini from "@/assets/brands/al-bawadi-tahini.jpeg";
import alBawadiMolasses from "@/assets/brands/al-bawadi-molasses.jpeg";
import vitracJam from "@/assets/brands/vitrac-jam.jpeg";
import vitracStrawberry from "@/assets/brands/vitrac-strawberry.jpeg";
import imtinanHoney from "@/assets/brands/imtinan-honey.jpeg";
import organicEggs from "@/assets/brands/organic-eggs.jpeg";
import crystal from "@/assets/brands/crystal.webp";
import crystalGhee from "@/assets/brands/crystal-ghee.jpeg";
import crystalOil from "@/assets/brands/crystal-oil.jpeg";
import coxSalt from "@/assets/brands/cox-salt.jpeg";
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
  { id: "5", name: "لبن جهينة 1 لتر", price: 47, category: "منتجات الألبان", image: juhaynaMilk },
  { id: "6", name: "لبن جهينة 1.5 لتر", price: 65, category: "منتجات الألبان", image: juhaynaMilk },
  { id: "7", name: "لبن ليمار 1 لتر", price: 45, category: "منتجات الألبان", image: lamarMilk },

  // العصائر
  { id: "8", name: "عصير جهينة مانجو 1 لتر", price: 35, category: "العصائر", image: juhayna },
  { id: "9", name: "عصير جهينة تفاح 1 لتر", price: 35, category: "العصائر", image: juhaynaApple },
  { id: "10", name: "عصير جهينة كوكتيل 1 لتر", price: 38, category: "العصائر", image: juhaynaCocktail },

  // الجبن ومنتجات الألبان
  { id: "11", name: "جبنة عبور لاند ربع كيلو", price: 25, category: "الجبن", image: obourLandCheese },
  { id: "12", name: "جبنة عبور لاند نصف كيلو", price: 45, category: "الجبن", image: obourLandCheese },
  { id: "13", name: "جبن فيتا عبور لاند", price: 30, category: "الجبن", image: obourLandFeta },
  { id: "14", name: "جبنة دومتي ربع كيلو", price: 28, category: "الجبن", image: domtyCheeseNew },
  { id: "15", name: "جبنة دومتي نصف كيلو", price: 52, category: "الجبن", image: domtyCheeseNew },
  { id: "16", name: "جبنة رودس ربع كيلو", price: 22.5, category: "الجبن", image: rhodesCheeseNew },
  { id: "17", name: "جبنة رودس نصف كيلو", price: 45, category: "الجبن", image: rhodesCheeseNew },
  { id: "18", name: "قشطة رودس", price: 35, category: "الجبن", image: rhodesCream },

  // الحلويات والعسل
  { id: "19", name: "حلاوة البوادي نصف كيلو", price: 55, category: "الحلويات والعسل", image: alBawadiHalawa },
  { id: "20", name: "حلاوة البوادي 1 كيلو", price: 95, category: "الحلويات والعسل", image: alBawadiHalawa },
  { id: "21", name: "عسل أسود البوادي نصف كيلو", price: 25, category: "الحلويات والعسل", image: alBawadiMolasses },
  { id: "22", name: "عسل أسود البوادي 1 كيلو", price: 45, category: "الحلويات والعسل", image: alBawadiMolasses },
  { id: "23", name: "طحينة البوادي نصف كيلو", price: 55, category: "الحلويات والعسل", image: alBawadiTahini },
  { id: "24", name: "طحينة البوادي 1 كيلو", price: 105, category: "الحلويات والعسل", image: alBawadiTahini },
  { id: "25", name: "مربى فيتراك برتقال نصف كيلو", price: 45, category: "الحلويات والعسل", image: vitracJam },
  { id: "26", name: "مربى فيتراك فراولة نصف كيلو", price: 45, category: "الحلويات والعسل", image: vitracStrawberry },
  { id: "27", name: "مربى فيتراك ربع كيلو", price: 30, category: "الحلويات والعسل", image: vitracJam },
  { id: "28", name: "عسل أبيض امتنان نصف كيلو", price: 115, category: "الحلويات والعسل", image: imtinanHoney },
  { id: "29", name: "عسل أبيض امتنان 1 كيلو", price: 195, category: "الحلويات والعسل", image: imtinanHoney },

  // البقالة الأساسية
  { id: "30", name: "سكر 1 كيلو", price: 33, category: "البقالة الأساسية", image: basicGroceriesImage },
  { id: "31", name: "دقيق الضحى 1 كيلو", price: 30, category: "البقالة الأساسية", image: alDohaRice },
  { id: "32", name: "رز الضحى 1 كيلو", price: 40, category: "البقالة الأساسية", image: alDohaRice },
  { id: "33", name: "خميرة دريم", price: 5, category: "البقالة الأساسية", image: basicGroceriesImage },
  { id: "34", name: "بيكنج بودر كوكس", price: 4, category: "البقالة الأساسية", image: basicGroceriesImage },
  { id: "35", name: "فانيليا كوكس", price: 2, category: "البقالة الأساسية", image: basicGroceriesImage },
  { id: "36", name: "ملح كوكس 1 كيلو", price: 13, category: "البقالة الأساسية", image: coxSalt },

  // الزيوت والسمن
  { id: "38", name: "سمنة كريستال 1 كيلو", price: 85, category: "الزيوت والسمن", image: crystalGhee },
  { id: "39", name: "سمنة كريستال 2 كيلو", price: 160, category: "الزيوت والسمن", image: crystalGhee },
  { id: "40", name: "زيت ذرة كريستال 1 لتر", price: 90, category: "الزيوت والسمن", image: crystalOil },
  { id: "41", name: "خل أبيض", price: 15, category: "الزيوت والسمن", image: oilsGheeImage },
  { id: "42", name: "خل هاينز 1 لتر", price: 23, category: "الزيوت والسمن", image: oilsGheeImage },
];

export const categories = [
  "منتجات الألبان",
  "العصائر", 
  "الجبن",
  "الحلويات والعسل",
  "البقالة الأساسية",
  "الزيوت والسمن"
];