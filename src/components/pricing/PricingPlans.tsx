import { useState } from "react";
import { PricingCard, type PricingPlan } from "./PricingCard";
import { PricingToggle } from "./PricingToggle";
import { Shield } from "lucide-react";

// Sample pricing plans data
const pricingPlans: PricingPlan[] = [
  {
    id: "basic",
    title: "Basic",
    monthlyPrice: 9.99,
    price: 9.99,
    description: "Perfect for individuals and small projects",
    features: [
      "Up to 3 surveys",
      "100 responses per month",
      "Basic analytics",
      "Email support",
      "Export to PDF"
    ],
    buttonText: "Start free trial",
  },
  {
    id: "professional",
    title: "Professional",
    monthlyPrice: 29.99,
    price: 29.99,
    description: "Ideal for growing businesses and teams",
    features: [
      "Unlimited surveys",
      "1,000 responses per month",
      "Advanced analytics",
      "Priority email support",
      "Custom branding",
      "Export to CSV/Excel",
      "API access"
    ],
    isPopular: true,
    buttonText: "Start free trial",
  },
  {
    id: "enterprise",
    title: "Enterprise",
    monthlyPrice: 79.99,
    price: 79.99,
    description: "For large organizations with advanced needs",
    features: [
      "Unlimited everything",
      "10,000 responses per month",
      "Advanced analytics & reporting",
      "Dedicated account manager",
      "Custom integrations",
      "SSO & advanced security",
      "SLA guarantees",
      "White label solution"
    ],
    buttonText: "Start free trial",
  },
];

export function PricingPlans() {
  const [isAnnual, setIsAnnual] = useState<boolean>(false);

  return (
    <div className="w-full py-8 sm:py-12">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-lg font-bold  text-gray-600 max-w-2xl mx-auto px-4">
          Choose your perfect 
        </h2>
        <p className="text-lg   text-gray-600 max-w-2xl mx-auto px-4">
          Choose the perfect plan for your needs. Whether you're just starting out or running a large organization, we've got you covered.
        </p>
        
        <PricingToggle 
          isAnnual={isAnnual} 
          onToggle={setIsAnnual} 
          className="mt-8" 
        />
      </div>

      {/* Pricing cards grid with responsive layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {pricingPlans.map((plan) => (
          <PricingCard
            key={plan.id}
            plan={plan}
            isAnnual={isAnnual}
            className={plan.isPopular ? "md:transform md:translate-y-[-8px] lg:translate-y-[-8px]" : ""}
          />
        ))}
      </div>

      {/* Guarantee banner */}
      <div className="mt-12 max-w-2xl mx-auto px-4">
        <div className="flex items-center justify-center rounded-full bg-gray-100 px-6 py-3 text-sm text-gray-700">
          <Shield className="h-5 w-5 mr-2 text-green-600 flex-shrink-0" />
          <span className="font-medium">30-day money-back guarantee</span>
        </div>
      </div>
    </div>
  );
}
