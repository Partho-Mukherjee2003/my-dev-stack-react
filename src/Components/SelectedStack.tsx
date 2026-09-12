import type StackCardsType from "../Types/StackCards";
import SelectedStackCard from "./SelectedStackCard";

interface SelectedProps {
  selectedStack: StackCardsType[];
  setSelectedStack: React.Dispatch<React.SetStateAction<StackCardsType[]>>;
}

const SelectedStack = ({ setSelectedStack, selectedStack }: SelectedProps) => {
  return (
    <div className="px-5">
      {selectedStack.length === 0 ? (
        <h1>No technologies selected yet.</h1>
      ) : (
        <h1>({selectedStack.length}) Stack selected.</h1>
      )}
      {selectedStack.map((selectedStackCard) => (
        <SelectedStackCard selectedStackCard={selectedStackCard} />
      ))}

      {selectedStack.length === 0 ? (
        <div className="flex items-center justify-center rounded-xl border-2 border-dashed border-gray-200 py-10 px-6">
          <h1 className="text-sm text-gray-400">Your stack is empty.</h1>
        </div>
      ) : (
        <button className="w-full rounded-full border-2 border-red-300 bg-white py-3 text-sm font-bold text-red-600 hover:bg-red-50 transition-colors">
          Remove All
        </button>
      )}
    </div>
  );
};

export default SelectedStack;
