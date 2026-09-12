import type StackCardsType from '../Types/StackCards'
import { X } from "lucide-react";

interface SelectedStackCardProps {
  selectedStackCard: StackCardsType;

}

const SelectedStackCard = ({
  selectedStackCard
}: SelectedStackCardProps) => {
  return (
    <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-white px-5 py-4 hover:shadow-sm transition-shadow">
      <div className="flex items-center gap-4">
        <img src={selectedStackCard.icon} alt="Svelte" className="h-10 w-10" />
        <div>
          <h3 className="text-base font-bold text-gray-900">
            {selectedStackCard.name}
          </h3>
          <p className="text-sm text-gray-400">{selectedStackCard.category}</p>
        </div>
      </div>

      <button className="text-gray-400 hover:text-gray-600 transition-colors">
        <X className="h-5 w-5" />
      </button>
    </div>
  );
};

export default SelectedStackCard;
