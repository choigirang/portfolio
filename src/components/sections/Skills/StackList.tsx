import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { allStack } from '../../../constant/info';
import StackDetail from './StackDetail';
import { SelectStackType } from '../../../type/sections';

/**
 *
 * @param category 선택한 카테고리 정보
 * @param stack 선택한 스택
 * @param stackInfo 선택한 스택에 대한 정보
 * @param setStack 스택 설정
 * @returns 아이콘 목록과 스택 정보
 */
export const url = 'https://cdn.simpleicons.org/';

export default function StackList({
  select,
  stack,
  setStack,
}: {
  select: string;
  stack: string;
  setStack: Dispatch<SetStateAction<string>>;
}) {
  const data = allStack[select];

  return (
    <div className="flex flex-col gap-5 justify-center items-center w-full">
      <ul className="flex gap-5">
        {Object.keys(data).map(list => (
          <li
            key={list}
            className={`text-white w-[50px] h-[50px] cursor-pointer p-2 bg-${
              list === stack ? 'stone-800' : '[#1A1B24]'
            } rounded-lg transition-custom hover:bg-stone-800 hover:scale-105`}
            onClick={() => setStack(list)}>
            <img src={url + list} alt="stack-img" />
          </li>
        ))}
      </ul>
    </div>
  );
}
