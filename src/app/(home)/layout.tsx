import Footer from "@/components/features/Footer";
import Header from "@/components/features/Header";

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen overflow-hidden">
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="z-0 overflow-x-hidden h-full">
          <Header />
          {/* <div className="lg:h-[165px] h-[169px]"></div> */}
          {children}
          <Footer />
        </main>
      </div>
    </div>
  );
}
