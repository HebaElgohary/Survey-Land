import { ArrowRightCircle } from 'lucide-react';
import React from 'react';
import { Button } from '@/components/ui/button';
import EnterpriseSolutions from '@/components/EnterpriseSolutions';
import PowerfulFeatures from '../ui/PowerfulFeatures';
import {HowItWork} from '../ui/HowItWork'
import ProfessionalTemplates from '../ui/ProfessionalTemplates';
import {WhyOurTemplate} from '../ui/WhyOurTemplate';

function HeroSection() {
  return (
    <div className="container mx-auto py-6">
      <div className="grid lg:grid-cols-2 items-center">
        {/* Right Content */}
        <div className="flex justify-center items-center order-1 lg:order-2">
          <div className="w-full max-w-lg">
            <img
              src="/hero-section.png"
              alt="laptop"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Left Content */}
        <div className="order-2 lg:order-1 text-center lg:text-left mt-4 lg:mt-0">
          <h1 className="text-2xl md:text-4xl text-primary font-bold">
            Create powerful surveys
          </h1>
          <h1 className="text-2xl md:text-4xl text-main font-bold ">
            in <span className="span-style">minutes</span>, not hours
          </h1>
          <p className=" mt-6 sm:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
            Survey Infinity helps you gather actionable insights through
            beautifully designed, interactive surveys with advanced analytics
            and seamless integration.
          </p>

          {/* Buttons */}
          <div className="flex flex-col lg:flex-row mt-6 gap-4">
            <Button variant="default" size={'lg'}>
              Get started
            </Button>

            <Button variant="link" className="self-center">
              Templates
              <ArrowRightCircle className="!w-6 !h-6" />
            </Button>
          </div>
        </div>
      </div>
      <PowerfulFeatures/>
    <EnterpriseSolutions/>
    <HowItWork />
    <ProfessionalTemplates/>
    <WhyOurTemplate></WhyOurTemplate>

    </div>
  );
}

export default HeroSection;
