import React from 'react';
import Image from 'next/image';

type OnboardingDescriptionProps = {
  description?: string;
  image: string;
  imgLocation?: Image_Location_Position;
};
export enum Image_Location_Position {
  LEFT = 'left',
  RIGHT = 'right',
}

const OnboardingDescription = ({
  description,
  image,
  imgLocation = Image_Location_Position.LEFT,
}: OnboardingDescriptionProps) => {
  return (
    <>
      <div className="w-full m-auto flex justify-center">
        {imgLocation === Image_Location_Position.LEFT && (
          <>
            <Image src={image} alt="description" width={400} height={300} />
            <span>{description}</span>
          </>
        )}
        {imgLocation === Image_Location_Position.RIGHT && (
          <>
            <span>{description}</span>
            <Image src={image} alt="description" width={400} height={300} />
          </>
        )}
      </div>
    </>
  );
};

export default OnboardingDescription;
