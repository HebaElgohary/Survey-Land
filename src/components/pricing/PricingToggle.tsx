import { cn } from "@/lib/utils";

interface PricingToggleProps {
  isAnnual: boolean;
  onToggle: (isAnnual: boolean) => void;
  className?: string;
}

export function PricingToggle({ isAnnual, onToggle, className }: PricingToggleProps) {
  return (
    <div className={cn("flex items-center justify-center space-x-4", className)}>
      <div 
        role="radiogroup" 
        aria-label="Billing cycle" 
        className="inline-flex items-center rounded-full border border-muted p-1"
      >
        <button
          type="button"
          role="radio"
          aria-checked={!isAnnual}
          onClick={() => onToggle(false)}          className={cn(
            "rounded-full px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500",
            !isAnnual 
              ? "bg-purple-700 text-white shadow-sm" 
              : "text-gray-600 hover:text-gray-900"
          )}
        >
          Monthly
        </button>
        <button
          type="button"
          role="radio"
          aria-checked={isAnnual}
          onClick={() => onToggle(true)}          className={cn(
            "rounded-full px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500",
            isAnnual 
              ? "bg-purple-700 text-white shadow-sm" 
              : "text-gray-600 hover:text-gray-900"
          )}
        >
          Annual <span className="text-green-600 font-semibold">(save 20%)</span>
        </button>
      </div>
    </div>
  );
}
