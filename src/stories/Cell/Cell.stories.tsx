import React from 'react';
import { Cell } from '../../components/Cell/Cell';

export default {
  title: 'Cell',
  component: Cell,
};

export const Default = () => {
  return <Cell value="d" className="text-black" />;
};

export const Absent = () => {
  return <Cell value="p" className="bg-yellow-500 text-white" />;
};

export const Correct = () => {
  return <Cell value="p" className="bg-green-500 text-white" />;
};

export const OutOfPlace = () => {
  return <Cell value="p" className="bg-gray-500 text-white" />;
};
