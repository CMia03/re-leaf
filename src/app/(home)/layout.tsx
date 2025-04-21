import Footer from "@/components/features/Footer";
import Header from "@/components/features/Header";

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen overflow-hidden">
      <div className="w-full flex flex-col">
        <main>
          <Header />
          {/* <div className="lg:h-[165px] h-[169px]"></div> */}
          {children}
          <Footer />
        </main>
      </div>
    </div>
  );
}
