import React from 'react'; 
import enterprise from ".././assets/svg/enterprise.svg"; 
import { Button } from '../components/ui/button';
import { ArrowRight, CircleCheckBig, Link } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const EnterpriseSolutions = () => {
    const features = [
        "Team collaboration with shared templates and assets",
        "Custom branding and white-labeling options",
        "Advanced integrations with CRM and marketing tools",
        "Dedicated account manager and priority support",
        "Custom development for specialized survey needs",
    ];
    
    return (
        <section className="bg-primary py-16 md:py-20 rounded-md">
            <div className="container px-4 mx-auto">
                <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-12">
                     {/* Right Column */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img 
                            src={enterprise}
                            alt="Enterprise team collaborating on survey platform"
                            className="w-full h-auto"
                        />
                    </div>
                    {/* Left Column */}
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-accent">
                            Enterprise
                            <span className='span-style text-main'> solutions for <br /> teams of all </span>
                            sizes
                        </h2>
                        
                        <p className="text-accent mb-10 max-w-xl">
                            Scale your research capabilities with advanced features designed for teams and organizations.
                        </p>
                        
                        <ul className="space-y-4 mb-10 text-lg">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-center text-accent font-weight-">
                                    <CircleCheckBig className="mr-2 text-success" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <NavLink to="#enterprise">
                            <Button 
                                variant="secondary" 
                                size="lg"
                                // className='bg-sec'
                            >
                                Learn about Enterprise solutions
                                <ArrowRight className="ml-2" />
                            </Button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default EnterpriseSolutions;
