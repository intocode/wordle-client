import React from 'react';
import { LineCell } from '../../components/LineCell/LineCell';

export default {
  title: 'LineCell',
  components: LineCell,
};

export const Default = () => {
  return <LineCell word="hello" />;
};
