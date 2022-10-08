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
    <div className="flex">
      {imgLocation === 'left' ? (
        <>
          <div>
            <Image src={image} alt="Picture of me" width={200} height={200} />
          </div>
          <div>{description}</div>
        </>
      ) : (
        <>
          <div>{description}</div>
          <div>
            <Image src={image} alt="Picture of me" width={200} height={200} />
          </div>
        </>
      )}
    </div>
  );
};

export default OnboardingDescription;
