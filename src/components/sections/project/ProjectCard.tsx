import { useEffect, useState } from 'react';

import { projects } from '../../../constant/info';
import { ProjectDetailType } from '../../../type/sections';
import AboutImg from './AboutImg';
import AboutContent from './AboutContent';
import DescriptionContent from './DescriptionContent';

/**
 *
 * @param name 메인 페이지에서 매핑으로 뿌려질 프로젝트명
 * @returns 컴포넌트 앞면과 뒷면 카드
 */
export default function ProjectCard({ name }: { name: string }) {
  const [flipCard, setFlipCard] = useState(false);
  const [projectData, setProjectData] = useState<ProjectDetailType>();

  useEffect(() => {
    if (!name) return;
    setProjectData(projects[name]);
  }, [name]);

  const handleFlipCard = () => {
    setFlipCard(prev => !prev);
  };

  return (
    <li
      style={{ transform: flipCard ? 'rotateY(180deg)' : undefined }}
      className="rounded-lg p-5 bg-[#1A1B24] transition-custom"
      onClick={handleFlipCard}>
      {projectData && (
        <div className="w-full">
          {/* 앞면 */}
          <ul
            className="flex flex-col gap-3 w-full h-full backface-invisible"
            style={{
              transform: flipCard ? 'rotateY(180deg)' : 'rotateY(0)',
              visibility: flipCard ? 'hidden' : undefined,
            }}>
            <AboutImg name={projectData.name} />
            <AboutContent {...projectData} />
          </ul>
          {/* 뒷면 */}
          <DescriptionContent flipCard={flipCard} description={projectData?.description} />
        </div>
      )}
    </li>
  );
}
