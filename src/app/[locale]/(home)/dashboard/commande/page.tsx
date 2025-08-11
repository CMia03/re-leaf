import CommandeComponent from "@/components/features/dashboard/commande";

// Force dynamic rendering
export const dynamic = 'force-dynamic';

const commandePage = () => {
  return (
    <div>
      <CommandeComponent />
    </div>
  );
};

export default commandePage;
