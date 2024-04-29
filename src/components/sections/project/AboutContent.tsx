import { useMemo } from 'react';
import { ProjectDetailType } from '../../../type/sections';

/**
 *
 * @param props 메인 페이지에서 넘겨받을, 개별 프로젝트에 대한 데이터
 * @returns 데이터에 따른 설명
 */
export default function AboutContent(props: ProjectDetailType) {
  const { projectName, github, stack, link } = props;

  const floorItems = useMemo(
    () => [
      { title: '프로젝트명', value: projectName },
      { title: '스택', value: [...stack.frontend, ...stack.backend] },
      { title: '링크', value: link },
      { title: '깃허브', value: github },
    ],
    [projectName, stack, link, github],
  );

  return (
    <li className="flex flex-col w-full gap-5">
      {floorItems.map((items, index) => (
        <ul className="grid grid-cols-projectDetail items-center relative w-full" key={index}>
          <li className="flex text-yellow-400 text-sm">{items.title} :</li>
          <li id="txt Ref" className="relative flex flex-wrap gap-1 w-full text-xs justify-start text-white">
            {typeof items.value === 'object' ? (
              items.value.map(each => (
                <span
                  className="text-xs py-[2px] px-1 rounded-md"
                  style={{ backgroundColor: each.color, color: each.color === 'white' ? 'black' : 'white' }}
                  key={each.name}>
                  {each.displayName}
                </span>
              ))
            ) : items.title === '프로젝트명' ? (
              <span>{items.value}</span>
            ) : (
              <a
                href={items.value}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-wrap break-all hover:underline">
                {items.value}
              </a>
            )}
          </li>
        </ul>
      ))}
    </li>
  );
}
