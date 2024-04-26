import React from "react";
import Option from "@/components/question/Option";

interface QuestionProps {
  question: string;
  onAnswerSelect: (optionIndex: number, score: number) => void;
  selectedOptionIndex: number | null;
}

export default function Question({
  question,
  onAnswerSelect,
  selectedOptionIndex,
}: QuestionProps) {
  const handleOptionSelect = (optionIndex: number, score: number) => {
    onAnswerSelect(optionIndex, score);
  };

  return (
    <>
      <p className="text-cyan-900 font-bold text-xl">{question}</p>

      <Option
        id="first-option"
        option="Lebih dari Seminggu"
        score={0}
        onSelect={handleOptionSelect}
        optionIndex={0}
        selectedOptionIndex={selectedOptionIndex}
      />
      <Option
        id="second-option"
        option="Lebih dari Setengah Hari"
        score={1}
        onSelect={handleOptionSelect}
        optionIndex={1}
        selectedOptionIndex={selectedOptionIndex}
      />
      <Option
        id="third-option"
        option="Beberapa hari"
        score={2}
        onSelect={handleOptionSelect}
        optionIndex={2}
        selectedOptionIndex={selectedOptionIndex}
      />
      <Option
        id="fourth-option"
        option="Sama sekali tidak"
        score={3}
        onSelect={handleOptionSelect}
        optionIndex={3}
        selectedOptionIndex={selectedOptionIndex}
      />
    </>
  );
}
