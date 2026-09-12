
import type StackCardType from "../Types/StackCards";
import { toast } from "react-toastify";

interface stackcard {
  stackCard: StackCardType;
  selectedStack: StackCardType[];
  setSelectedStack: React.Dispatch<React.SetStateAction<StackCardType[]>>;
}

const StackCard = ({
  stackCard,
  selectedStack,
  setSelectedStack,
}: stackcard) => {
  // const [active, setActive] = useState(false);
  let isActive = false;

  for (let i = 0; i < selectedStack.length; i++) {
    if (selectedStack[i].id === stackCard.id) {
      isActive = true;
      break;
    }
  }
  // ***Active Handeler***
  const handelStackBtn = () => {
    toast.success("Your Stack is Added");

    setSelectedStack([...selectedStack,stackCard]);
  };


  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between">
        <img src={stackCard.icon} alt={stackCard.name} className="h-10 w-10" />
        <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
          {stackCard.badge}
        </span>
      </div>

      <div>
        <h3 className="text-xl font-bold text-gray-900">{stackCard.name}</h3>
        <p className="mt-2 text-sm text-gray-500">{stackCard.description}</p>
      </div>

      <div className="flex items-center gap-3 border-t border-gray-100 pt-4 text-sm">
        <span className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600">
          {stackCard.category}
        </span>
        <span className="text-gray-500">{stackCard.difficulty}</span>
        <span className="ml-auto flex items-center gap-1 font-semibold text-gray-800">
          <span className="text-yellow-400">★</span>
          {stackCard.rating}
        </span>
      </div>

      <button
        disabled={isActive}
        onClick={() => handelStackBtn()}
        className={`w-full rounded-full py-3 text-sm font-semibold transition-colors ${
          isActive
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-gray-900 text-white hover:bg-gray-800"
        }`}
      >
        {isActive ? "Added ✓" : "Add to Stack"}
      </button>
    </div>
  );
};

export default StackCard;
