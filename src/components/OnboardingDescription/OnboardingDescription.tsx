import React from 'react';
import Image from 'next/image';

type OnboardingDescriptionProps = {
  description?: string;
  image: string;
  imgLocation?: Image_Location_Position;
  width: number;
  height: number;
  alt: string;
};
export enum Image_Location_Position {
  LEFT = 'left',
  RIGHT = 'right',
}

const OnboardingDescription = ({
  description,
  image,
  imgLocation = Image_Location_Position.LEFT,
  width,
  height,
  alt,
}: OnboardingDescriptionProps) => {
  return (
    <div
      className="w-full m-auto flex items-center space-x-10 px-10 "
      style={{ wordBreak: 'keep-all' }}
    >
      {imgLocation === Image_Location_Position.RIGHT && (
        <span>{description}</span>
      )}
      <span>{}</span>

      <Image
        src={image}
        alt={alt}
        width={width}
        height={height}
        // layout={'responsive'}
      />
      {imgLocation === Image_Location_Position.LEFT && (
        <span>{description}</span>
      )}
    </div>
  );
};

export default OnboardingDescription;
