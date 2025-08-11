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
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const showDetails = (id: string) => {
    router.push(`/fr/products/${id}`);
  };

  const fetchProductsPerCategories = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const { data } = await client.query({
        query: GET_PRODUCTS_PER_CATEGORY,
      });

      console.log('Categories data:', data); // Debug log
      
      if (data?.categories) {
        setCategories(data.categories);
      } else {
        setError('Aucune catégorie trouvée');
      }
    } catch (error) {
      console.error("Erreur lors du chargement des categories:", error);
      setError('Erreur lors du chargement des catégories');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductsPerCategories();
  }, []);

  if (loading) {
    return (
      <div className="flex gap-2 justify-center items-center h-[61px] border-b-1 border-b-[var(--border)]">
        <Typography variant="D1">Chargement...</Typography>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex gap-2 justify-center items-center h-[61px] border-b-1 border-b-[var(--border)]">
        <Typography variant="D1" className="text-red-500">{error}</Typography>
      </div>
    );
  }

  if (!categories || categories.length === 0) {
    return (
      <div className="flex gap-2 justify-center items-center h-[61px] border-b-1 border-b-[var(--border)]">
        <Typography variant="D1">Aucune catégorie disponible</Typography>
      </div>
    );
  }

  return (
    <div className="flex gap-2 justify-center items-center h-[61px] border-b-1 border-b-[var(--border)]">
      {categories.map((category) => (
        <div key={category.documentId}>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <Typography variant="D1" className="cursor-pointer">
                    {capitalize(category.name)}
                  </Typography>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="max-h-[20em] overflow-y-auto min-w-[12em]">
                  {category.products && category.products.length > 0 ? (
                    category.products.map((product) => (
                      <NavigationMenuLink
                        key={product.documentId}
                        className="hover:text-[#B6C335] block p-2"
                        onClick={() => showDetails(product.documentId)}
                      >
                        <Typography
                          variant="D1"
                          className="unset text-sm rounded-2 cursor-pointer capitalize text-nowrap"
                        >
                          {capitalize(product.name)}
                        </Typography>
                      </NavigationMenuLink>
                    ))
                  ) : (
                    <div className="p-2">
                      <Typography variant="D1" className="text-sm text-gray-500">
                        Aucun produit dans cette catégorie
                      </Typography>
                    </div>
                  )}
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      ))}
    </div>
  );
};

export default SecondMenuComponents;
