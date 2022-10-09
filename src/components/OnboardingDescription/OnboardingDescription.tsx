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
          <div>{description}</div>
        </>
      ) : (
        <>
          <div>{description}</div>
          <div>
            <Image src={image} alt="description" width={300} height={300} />
          </div>
        </>
      )}
    </div>
  );
};

export default OnboardingDescription;
