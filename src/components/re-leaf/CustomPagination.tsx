"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { Typography } from "./Typography";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  handlePageChange: (page: number) => void;
};

const CustomPagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  handlePageChange,
}) => {
  return (
    <div className="flex justify-center mt-15 gap-4">
      {/* Bouton Précédent */}
      <Button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        variant="outline"
        className="w-10 h-10 cursor-pointer rounded-full border border-black hover:opacity-100 disabled:opacity-0"
      >
        <svg
          width="8"
          height="18"
          viewBox="0 0 18 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.5 1C16.5 1 1.5 12.0475 1.5 16C1.5 19.9525 16.5 31 16.5 31"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Button>

      {/* Boutons des pages */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
        <Button
          key={pageNum}
          onClick={() => handlePageChange(pageNum)}
          variant={currentPage === pageNum ? "default" : "outline"}
          className={`rounded-full w-10 h-10 ${
            currentPage === pageNum
              ? "cursor-default"
              : "cursor-pointer border-1 border-solid border-black opacity-50 hover:opacity-100"
          }`}
        >
          <Typography
            variant="D1"
            className="text-[1.1em] font-semibold w-full h-full flex items-center justify-center"
          >
            {pageNum}
          </Typography>
        </Button>
      ))}

      {/* Bouton Suivant */}
      <Button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        variant="outline"
        className="w-10 h-10 cursor-pointer rounded-full border border-black hover:opacity-100 disabled:opacity-0"
      >
        <svg
          width="10"
          height="20"
          viewBox="0 0 10 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.875 18.3334C1.875 18.3334 8.125 12.1959 8.125 10.0001C8.125 7.80425 1.875 1.66675 1.875 1.66675"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Button>
    </div>
  );
};

export default CustomPagination;
