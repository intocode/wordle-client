import React from 'react';
import { Cell } from '../../components/Cell/Cell';

export default {
  title: 'Cell',
  component: Cell,
};

export const Default = () => {
  return <Cell value="d" color="text-black" />;
};

export const Absent = () => {
  return <Cell value="p" color="bg-yellow-500 text-white" />;
};

export const Correct = () => {
  return <Cell value="p" color="bg-green-500 text-white" />;
};

export const OutOfPlace = () => {
  return <Cell value="p" color="bg-gray-500 text-white" />;
};
