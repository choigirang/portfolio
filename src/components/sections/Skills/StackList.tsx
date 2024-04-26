import { useEffect, useState } from 'react';
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

export default function StackList({ select }: { select: string }) {
  const [stack, setStack] = useState('');
  const [detail, setDetail] = useState<SelectStackType | undefined>();

  const data = allStack[select];

  useEffect(() => {
    setStack(Object.keys(allStack[select])[0]);
    setDetail(allStack[select][stack]);
    console.log(detail);
  }, [select, stack]);

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
      <ul className="flex flex-col gap-3 w-full h-[200px] overflow-hidden text-white bg-[#1A1B24] pt-[5%] px-[5%]">
        {/* {detail.description.map(each => (
          <li>{each}</li>
        ))} */}
      </ul>
    </div>
  );
}
