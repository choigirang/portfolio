import React from 'react';
import { SelectStackType } from '../../../type/sections';
import { url } from './StackList';

export default function StackDetail(data: SelectStackType) {
  return (
    <li>
      <img src={url + data.name} alt="stack-img" className="w-[50px] h-[50px]" />
      <ul className="flex flex-col"></ul>
    </li>
  );
}
