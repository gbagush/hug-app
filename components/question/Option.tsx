interface OptionProps {
  id: string;
  option: string;
  score: number;
  onSelect: (optionIndex: number, score: number) => void;
  optionIndex: number;
  selectedOptionIndex: number | null;
}

export default function Option({
  id,
  option,
  score,
  onSelect,
  optionIndex,
  selectedOptionIndex,
}: OptionProps) {
  const handleOptionSelect = () => {
    onSelect(optionIndex, score);
  };

  return (
    <div className="bg-cyan-50 flex items-center p-4 ps-8 rounded-full mt-4">
      <input
        id={id}
        type="radio"
        value={score}
        name="bordered-radio"
        className="w-4 h-4 text-cyan-600 bg-cyan-50 border-cyan-500 focus:ring-blue-500 focus:ring-2"
        onClick={handleOptionSelect}
        checked={selectedOptionIndex === optionIndex}
      />
      <label
        htmlFor={id}
        className="ml-2 text-sm font-medium text-gray-600"
        onClick={handleOptionSelect}
      >
        {option}
      </label>
    </div>
  );
}
