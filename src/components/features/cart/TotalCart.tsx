import { Typography } from "@/components/re-leaf/Typography";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { useTranslations } from "next-intl";

const TotalCart = () => {
  const t = useTranslations("cart");
  return (
    <div>
      <Typography variant="h3" className="text-primary font-normal mb-6">
        {t("totalCart")}
      </Typography>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>{t("subTotal")}</TableCell>
            <TableCell className="text-right">40 €</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{t("delivery")}</TableCell>
            <TableCell className="text-right">2 €</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{t("total")}</TableCell>
            <TableCell className="text-right">42 €</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <div className="text-center mb-8.5">
        <Button
          variant={"default"}
          size={"lg"}
          className="rounded-full text-secondary cursor-pointer bg-[var(--tertiary)]"
        >
          <span className="px-8.5">{t("validateOrder")}</span>
        </Button>
      </div>
    </div>
  );
};

export default TotalCart;
