import { use } from "react";
import type StackCardsType from "../Types/StackCards"
import StackCard from "./StackCard";


interface  dataPromiseProps{
  dataPromise:Promise<StackCardsType[]>,
}

const StackCards = ({ dataPromise }: dataPromiseProps) => {
  const stackCards = use(dataPromise)
  console.log(stackCards)


  return (
    <div className="container mx-auto">
      <div className="px-6 py-8 text-center md:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
          Explore the <span className="text-fuchsia-600">Technologies</span>
        </h1>
        <p className="mt-2 text-sm md:text-base text-gray-500">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {stackCards.map((stackCard) => (
              <StackCard key={stackCard.id} stackCard={stackCard} />
            ))}
          </div>
        </div>

        <div className="lg:col-span-1 sticky top-6 self-start">
          {/* Your Stack sidebar content */}
        </div>
      </div>
    </div>
  );
};

export default StackCards;
