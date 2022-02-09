import React from 'react';
import Key from '../../components/ui/Key/Key';

export default {
  title: 'Key',
  component: Key,
};

export const Default = () => {
  return <Key value="в" />;
};

export const Absent = () => {
  return <Key value="ф" className="bg-yellow-500" />;
};

export const Correct = () => {
  return <Key value="р" className="bg-green-500" />;
};

export const OutOfPlace = () => {
  return <Key value="л" className="bg-gray-500" />;
};
