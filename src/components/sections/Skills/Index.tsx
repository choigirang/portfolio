import { useCallback, useEffect, useState } from 'react';
import StackList from './StackList';
import { allStack } from '../../../constant/info';
import StackDetail from './StackDetail';
import { SelectStackType } from '../../../type/sections';

/**
 *
 * @returns 스킬 메인 페이지
 */
const categoryList = ['언어', '프론트엔드', '백엔드', '툴'];

export default function Skills() {
  const [category, setCategory] = useState('언어');
  const [stack, setStack] = useState('');
  const [data, setData] = useState<SelectStackType | undefined>();

  const handleCategoryClick = useCallback(
    (key: string) => {
      setCategory(key);
    },
    [category],
  );

  const handleStackClick = useCallback(
    (stackName: string) => {
      setStack(stackName);
    },
    [stack],
  );

  useEffect(() => {
    setStack(Object.keys(allStack[category])[0]);
  }, [category]);

  useEffect(() => {
    setData(allStack[category][stack]);
  }, [stack]);

  return (
    <section id="skills" className="flex flex-col justify-center items-center gap-5 w-full">
      <title className="flex flex-col justify-center items-center w-full text-2xl text-yellow-400">
        <span>🗂️</span>
        <h2>기술 목록</h2>
      </title>
      <ul className="grid grid-cols-4 sm:grid-cols-2 w-full text-2xl gap-5">
        {/* 스택 카테고리 선택 */}
        {categoryList.map(key => (
          <li
            key={key}
            onClick={() => handleCategoryClick(key)}
            className={`cursor-pointer text-center text-${category === key ? 'yellow-400' : 'white'}`}>
            {key}
          </li>
        ))}
      </ul>
      <StackList select={category} stack={stack} setStack={handleStackClick} />
      <StackDetail data={data} />
    </section>
  );
}
