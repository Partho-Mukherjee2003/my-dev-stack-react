import type StackCardsType from "../Types/StackCards";

interface SelectedProps {
  selectedStack: StackCardsType[];
  setSelectedStack: React.Dispatch<React.SetStateAction<StackCardsType[]>>;
}

const SelectedStack = ({ setSelectedStack, selectedStack }: SelectedProps) => {
  return (
    <div>
      {selectedStack.length === 0 ? (
        <h1>No technologies selected yet.</h1>
      ) : (
        <h1>({selectedStack.length}) Stack selected.</h1>
      )}
      {
        selectedStack.map(selectedStackCard => )
      }
    </div>
  );
};

export default SelectedStack;
