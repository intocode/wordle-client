import React from 'react';
import { Cell } from '../../components/Cell/Cell';

export default {
  title: 'Cell',
  component: Cell,
};

export const Default = () => {
  return <Cell value="в" className="text-black border-2" />;
};

export const Absent = () => {
  return <Cell value="с" className="bg-yellow-500 text-white" />;
};

export const Correct = () => {
  return <Cell value="ф" className="bg-green-500 text-white" />;
};

export const OutOfPlace = () => {
  return <Cell value="и" className="bg-gray-500 text-white" />;
};
