
import React from 'react';
import FeatureCard from './FeatureCard';
import Img1 from '../../../src/assets/svg/1.svg?react';
import Img2 from '../../../src/assets/svg/2.svg?react';
import Img3 from '../../../src/assets/svg/3.svg?react';
import Img4 from '../../../src/assets/svg/4.svg?react';
import Img5 from '../../../src/assets/svg/5.svg?react';
import Img6 from '../../../src/assets/svg/6.svg?react';

export default function PowerfulFeatures() {
  return (
    <div className="flex flex-col container px-4 py-8 my-11  md:px-8 md:py-10 lg:px-12 lg:py-12">
      <div className=" py-11">
        <h2 className=" text-2xl md:text-3xl lg:text-4xl font-extrabold  my-4 px-8 md:px-4 lg:px-44 ">
          <span className="text-primary">Powerful</span> features to transform your data 
          <span className="text-secondary"> collection</span>
        </h2>
        <div className="subtitle font-normal text-base sm:text-sm md:text-lg lg:text-xl my-5 text-center px-4 sm:px-6 text-[]">
          Everything you need to create, distribute, and analyze surveys that deliver actionable insights.
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-9 mt-5">
        <FeatureCard
          icon={<Img1 width={30}  height={38} color="#7616EC" />}
          title="Intuitive Survey Creation"
          subtitle="Drag-and-drop editor with customizable templates to create professional surveys in minutes without any technical skills."
        />

        <FeatureCard
          icon={<Img2 width={30}  height={38}  color="#7616EC" />}
          title="Intuitive Survey Creation"
          subtitle="Drag-and-drop editor with customizable templates to create professional surveys in minutes without any technical skills."
        />
        <FeatureCard
          icon={<Img3 width={30}  height={38}  color="#7616EC" />}
          title="Intuitive Survey Creation"
          subtitle="Drag-and-drop editor with customizable templates to create professional surveys in minutes without any technical skills."
        />
        <FeatureCard
          icon={<Img4 width={30}  height={38} color="#7616EC" />}
          title="Intuitive Survey Creation"
          subtitle="Drag-and-drop editor with customizable templates to create professional surveys in minutes without any technical skills."
        />
        <FeatureCard
          icon={<Img5 width={30}  height={38}  color="#7616EC" />}
          title="Intuitive Survey Creation"
          subtitle="Drag-and-drop editor with customizable templates to create professional surveys in minutes without any technical skills."
        />
        <FeatureCard
          icon={<Img6 width={30}  height={38}  stroke="white" fill="#7616EC" />}
          title="Intuitive Survey Creation"
          subtitle="Drag-and-drop editor with customizable templates to create professional surveys in minutes without any technical skills."
        />
      </div>
    </div>
  );
}