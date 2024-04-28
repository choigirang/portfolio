import { projects } from '../../../constant/info';
import ProjectCard from './ProjectCard';

/**
 *
 * @returns 프로젝트 메인 페이지
 */
export default function Project() {
  return (
    <section id="projects" className="flex flex-col justify-center items-center gap-5 w-full">
      <title className="flex flex-col justify-center items-center w-full text-2xl text-yellow-400">
        <span>🖥️</span>
        <h2>소개</h2>
        <h3 className="text-sm text-white">프로젝트를 클릭하여 상세 설명을 볼 수 있습니다.</h3>
      </title>
      <ul className="w-full grid grid-cols-3 gap-5">
        {Object.keys(projects).map(project => (
          <ProjectCard name={project} key={project} />
        ))}
      </ul>
    </section>
  );
}
