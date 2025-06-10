import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Typography } from "@/components/re-leaf/Typography";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";

const SearchBlog = ({
  onSearchChange,
}: {
  onSearchChange: (value: string) => void;
}) => {
  const t = useTranslations("label");
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.trim() === "") {
      onSearchChange("");
    }
  };

  const handleSearch = () => {
    onSearchChange(inputValue.trim());
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearchClick = () => {
    onSearchChange(inputValue); // Ne déclenche la recherche que si on clique
  };

  return (
    <div>
      <div className="flex flex-col gap-6">
        <Typography variant="h4" className="font-semibold">
          {t("search")}
        </Typography>
        <Label
          htmlFor="email"
          className="ps-3 border-1 border-solid border-black overflow-hidden rounded-full flex flex-row items-center justify-between pe-5"
        >
          <Input
            type="text"
            placeholder="Tapez votre recherche ici"
            className="w-full outline-0 border-0 rounded-none focus:outline-0 focus:border-0 p-7 ps-2 pe-2"
            onChange={handleInputChange}
            value={inputValue}
            onKeyDown={handleKeyDown}
          />
          <button
            type="button"
            onClick={handleSearchClick}
            className="bg-transparent border-0 p-0 m-0 cursor-pointer"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.875 19.875L25.5 25.5M23 11.75C23 8.76631 21.8147 5.90483 19.705 3.79505C17.5952 1.68526 14.7337 0.5 11.75 0.5C8.76631 0.5 5.90483 1.68526 3.79505 3.79505C1.68526 5.90483 0.5 8.76631 0.5 11.75C0.5 14.7337 1.68526 17.5952 3.79505 19.705C5.90483 21.8147 8.76631 23 11.75 23C14.7337 23 17.5952 21.8147 19.705 19.705C21.8147 17.5952 23 14.7337 23 11.75Z"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </Label>
      </div>
    </div>
  );
};

export default SearchBlog;
