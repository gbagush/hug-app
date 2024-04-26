"use client";
import { useState, ReactNode } from "react";

interface AccordionItemProps {
  title: string;
  children: ReactNode;
}

const AccordionItem = ({ title, children }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-300 text-gray-500 rounded-md mb-2 overflow-hidden">
      <div
        className="flex items-center justify-between p-4 cursor-pointer"
        onClick={toggleAccordion}
      >
        <div
          className={`transition-all ease-in-out ${
            isOpen ? "font-bold" : ""
          } duration-300`}
        >
          {title}
        </div>
        <div className={isOpen ? "font-bold" : ""}>{isOpen ? "-" : "+"}</div>
      </div>
      <div
        className={`transition-all ease-in-out ${
          isOpen ? "h-auto py-4" : "h-0 py-0"
        } duration-300`}
      >
        <div className={`px-4 text-left`}>{children}</div>
      </div>
    </div>
  );
};

export default AccordionItem;
