"use client";
import { Typography } from "@/components/re-leaf/Typography";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import client from "@/graphql/appoloClient";
import { GET_PRODUCTS_PER_CATEGORY } from "@/graphql/queries/categories";
import { useEffect, useState } from "react";
import { Product } from "@/generated/graphql";
import { useRouter } from "next/navigation";
import { capitalize } from "@/lib/utils";

interface Category {
  documentId: string;
  name: string;
  products: Product[];
}

const SecondMenuComponents = () => {
  const router = useRouter();
  const showDetails = (id: string) => {
    router.push(`/products/${id}`);
  };
  const [categories, setCategories] = useState<Category[]>([]);

  const fetchProductsPerCategories = async () => {
    try {
      const { data } = await client.query({
        query: GET_PRODUCTS_PER_CATEGORY,
      });

      setCategories(data.categories);
    } catch (error) {
      console.error("Erreur lors du chargement des categories:", error);
    }
  };

  useEffect(() => {
    fetchProductsPerCategories();
  }, []);

  return (
    <div className="flex gap-2 justify-center items-center h-[61px] border-b-1 border-b-[var(--border)]">
      {categories.map((category) => (
        <picture key={category.documentId}>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <Typography variant="D1" className="cursor-pointer">
                    {capitalize(category.name)}
                  </Typography>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="max-h-[20em] overflow-y-auto min-w-[12em]">
                  {category.products.map((product) => (
                    <NavigationMenuLink
                      key={product.documentId}
                      className="hover:text-[#B6C335]"
                      onClick={() => showDetails(product.documentId)}
                    >
                      <Typography
                        variant="D1"
                        className="unset text-sm rounded-2 cursor-pointer capitalize text-nowrap"
                      >
                        {capitalize(product.name)}
                      </Typography>
                    </NavigationMenuLink>
                  ))}
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </picture>
      ))}
    </div>
  );
};
export default SecondMenuComponents;
