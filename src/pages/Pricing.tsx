
import { PricingPlans } from "@/components/pricing/PricingPlans";

const Pricing = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-8 text-center">Choose Your Plan</h1>
          <PricingPlans />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
