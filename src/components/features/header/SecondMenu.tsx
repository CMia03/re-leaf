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

interface ApolloError extends Error {
  networkError?: Error;
  graphQLErrors?: Array<{ message: string; locations?: Array<{ line: number; column: number }>; path?: string[] }>;
}

const SecondMenuComponents = () => {
  const router = useRouter();
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  const showDetails = (id: string) => {
    router.push(`/fr/products/${id}`);
  };

  const fetchProductsPerCategories = async () => {
    try {
      setLoading(true);
      setError(null);
      
      console.log('Fetching categories from:', `${process.env.NEXT_PUBLIC_API_URL}/graphql`);
      
      // Test avec fetch d'abord
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            query: `
              query GetCategories {
                categories {
                  documentId
                  name
                  products {
                    documentId
                    name
                  }
                }
              }
            `
          }),
        });
        
        console.log('Fetch response status:', response.status);
        const fetchData = await response.json();
        console.log('Fetch data:', fetchData);
        
        if (fetchData.data?.categories) {
          console.log('Setting categories from fetch:', fetchData.data.categories);
          setCategories(fetchData.data.categories);
          setLoading(false);
          return;
        }
      } catch (fetchError) {
        console.error('Fetch error:', fetchError);
      }
      
      // Si fetch échoue, essayer Apollo
      const { data } = await client.query({
        query: GET_PRODUCTS_PER_CATEGORY,
        errorPolicy: 'all',
      });

      console.log('Categories data:', data); // Debug log
      
      if (data?.categories) {
        console.log('Setting categories:', data.categories);
        setCategories(data.categories);
      } else {
        console.log('No categories found in data:', data);
        setError('Aucune catégorie trouvée');
      }
    } catch (error: unknown) {
      console.error("Erreur lors du chargement des categories:", error);
      console.error("Error details:", {
        message: error instanceof Error ? error.message : 'Unknown error',
        networkError: (error as ApolloError)?.networkError,
        graphQLErrors: (error as ApolloError)?.graphQLErrors,
      });
      setError('Erreur lors du chargement des catégories');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      fetchProductsPerCategories();
    }
  }, [isClient]);

  if (!isClient) {
    return (
      <div className="flex gap-2 justify-center items-center h-[61px] border-b-1 border-b-[var(--border)]">
        <Typography variant="D1">Chargement...</Typography>
      </div>
    );
  }

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
    <div className="flex gap-1 sm:gap-2 justify-center items-center h-[61px] border-b-1 border-b-[var(--border)] overflow-x-auto px-2">
      {categories.map((category) => (
        <div key={category.documentId} className="flex-shrink-0">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-xs sm:text-sm lg:text-base">
                  <Typography variant="D1" className="cursor-pointer text-xs sm:text-sm lg:text-base">
                    {capitalize(category.name)}
                  </Typography>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="max-h-[20em] overflow-y-auto min-w-[12em] max-w-[90vw] sm:max-w-none">
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
