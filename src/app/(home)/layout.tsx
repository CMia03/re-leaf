import Footer from "@/components/features/Footer";
import Header from "@/components/features/Header";
import { CartProvider } from "@/components/contexts/CartContext";
import { Toaster } from "@/components/ui/sonner";
export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen overflow-hidden">
      <div className="w-full flex flex-col">
        <CartProvider>
          <main>
            <Header />
            {/* <div className="lg:h-[165px] h-[169px]"></div> */}
            {children}
            <Footer />
            <Toaster />
          </main>
        </CartProvider>
      </div>
    </div>
  );
}
