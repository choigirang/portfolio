import React from 'react';
import { allStack } from '../../../constant/stack';
import { AllStackType } from '../../../type/skillsType';

interface StackListProps {
  stack: keyof AllStackType;
}

export default function StackList({ stack }): React.FC<StackListProps> {
  const selectedStack = allStack[stack];
  return <div></div>;
}
