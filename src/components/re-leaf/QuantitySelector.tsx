import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Typography } from "./Typography";
interface QuantitySelectorProps {
  value: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
}

export function QuantitySelector({
  value,
  min = 1,
  max = 99,
  onChange,
}: QuantitySelectorProps) {
  const handleDecrease = () => {
    if (value > min) onChange(value - 1);
  };

  const handleIncrease = () => {
    if (value < max) onChange(value + 1);
  };

  return (
    <div className="bg-[#F8F8F8] px-5 py-2 rounded-full flex items-center gap-2">
      <MdChevronLeft
        className="text-primary cursor-pointer"
        size={21}
        onClick={handleDecrease}
      />
      <Typography variant="p" className="mb-0 px-2">
        {value}
      </Typography>
      <MdChevronRight
        className="text-primary cursor-pointer"
        size={21}
        onClick={handleIncrease}
      />
    </div>
  );
}
