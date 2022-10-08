import React from 'react';
import Image from 'next/image';

type OnboardingDescriptionProps = {
  description?: string;
  image: string;
  imgLocation?: string;
};

const OnboardingDescription = ({
  description,
  image,
  imgLocation,
}: OnboardingDescriptionProps) => {
  return (
    <div className="w-3/4 m-auto flex justify-center">
      {imgLocation === 'left' ? (
        <>
          <div>
            <Image src={image} alt="description" width={300} height={300} />
          </div>
          <div className="relative text-center w-5">
            <div className="absolute_center">{description}</div>
          </div>
        </>
      ) : (
        <>
          <div className="relative text-center">
            <div className="absolute_center">{description}</div>
          </div>
          <div>
            <Image src={image} alt="description" width={300} height={300} />
          </div>
        </>
      )}
    </div>
  );
};

export default OnboardingDescription;
