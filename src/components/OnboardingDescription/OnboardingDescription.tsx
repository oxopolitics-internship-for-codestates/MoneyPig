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
    <div className="w-3/4 m-auto flex justify-center md:w-screen">
      {imgLocation === 'left' ? (
        <>
          <Image src={image} alt="description" width={300} height={300} />
          <span>{description}</span>
        </>
      ) : (
        <>
          <span>{description}</span>
          <Image src={image} alt="description" width={300} height={300} />
        </>
      )}
    </div>
  );
};

export default OnboardingDescription;
