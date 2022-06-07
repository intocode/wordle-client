import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import { GameStateInterface } from '../../types';

const Popovers = () => {
  // todo: почему не видит тип стейта без явного указания?
  const stack = useAppSelector((state: GameStateInterface) => state.info);

  return (
    <div className="absolute w-full z-10 top-10">
      {stack.map((message) => (
        <div className="text-white bg-black p-4 w-2/3 m-auto mb-3 shadow-md rounded-md">
          {message}
        </div>
      ))}
    </div>
  );
};

export default Popovers;
