import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Check, Shield } from "lucide-react";

export interface PricingPlan {
  id: string;
  title: string;
  price: number;
  monthlyPrice: number;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
}

interface PricingCardProps {
  plan: PricingPlan;
  isAnnual: boolean;
  className?: string;
}

export function PricingCard({ plan, isAnnual, className }: PricingCardProps) {
  // Calculate price with 1 decimal place if needed
  const price = isAnnual 
    ? Number((plan.monthlyPrice * 0.8).toFixed(2)) 
    : plan.monthlyPrice;

  const handleStartTrial = () => {
    console.log(`Selected plan: ${plan.id}`);
  };

  return (
    <div
      className={cn(
        "relative flex flex-col rounded-xl border p-6 shadow-sm transition-all duration-200 hover:scale-[1.02] focus-within:scale-[1.02]",
        plan.isPopular 
          ? "bg-purple-700 text-white border-purple-600 shadow-lg transform translate-y-0 hover:translate-y-[-4px] z-10" 
          : "bg-white border-gray-200",
        className
      )}
    >
      {plan.isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="inline-block rounded-full bg-green-500 px-4 py-1 text-xs font-medium text-white whitespace-nowrap">
            Most popular
          </span>
        </div>
      )}
      <div className="mb-4">
        <h3 className={cn("text-xl font-bold", plan.isPopular ? "text-white" : "text-gray-900")}>
          {plan.title}
        </h3>
        <p className={cn("mt-1 text-sm", plan.isPopular ? "text-white/80" : "text-gray-500")}>
          {plan.description}
        </p>
      </div>
      <div className="mb-6">
        <div className="flex items-baseline">
          <span className={cn("text-4xl font-bold", plan.isPopular ? "text-white" : "text-gray-900")}>
            ${price}
          </span>
          <span className={cn("ml-1 text-sm", plan.isPopular ? "text-white/80" : "text-gray-500")}>
            /month
          </span>
        </div>
        {isAnnual && (
          <p className={cn("mt-1 text-sm", plan.isPopular ? "text-white/80" : "text-gray-500")}>
            billed annually
          </p>
        )}
      </div>
      <ul className="mb-8 space-y-3">
        {plan.features.map((feature) => (
          <li 
            key={feature} 
            className={cn("flex items-center text-sm", 
              plan.isPopular ? "text-white" : "text-gray-700"
            )}
          >
            <Check 
              className={cn("mr-2 h-4 w-4 flex-shrink-0", 
                plan.isPopular ? "text-green-300" : "text-green-500"
              )} 
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto">
        <Button 
          onClick={handleStartTrial}
          className={cn(
            "w-full focus:ring-2 focus:ring-offset-2", 
            plan.isPopular 
              ? "bg-white text-purple-700 hover:bg-gray-100 focus:ring-white" 
              : "bg-purple-700 text-white hover:bg-purple-800 focus:ring-purple-500"
          )}
        >
          {plan.buttonText}
        </Button>
      </div>
    </div>
  );
}
