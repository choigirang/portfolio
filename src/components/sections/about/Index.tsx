import { profileInfo } from '../../../constant/info';
import Card from './Card';

/**
 *
 * @returns about 메인
 */

export default function About() {
  return (
    <section id="about" className="flex flex-col gap-5">
      <title className="flex flex-col justify-center items-center w-full text-2xl text-yellow-400">
        <span>🧑🏻‍💻</span>
        <h2>소개</h2>
      </title>
      <div className="flex flex-col justify-center items-center gap-2 w-full text-center text-white text-2xl sm:text-sm">
        <p>
          <span className="text-yellow-400">사용자 경험</span>을 중시하는 프론트엔드 개발자입니다.
        </p>
        <p>
          <span className="text-yellow-400">개발의 역량</span>과 <span className="text-yellow-400">디자인</span>을
          결합하여, 사용자 경험을
        </p>
        높일 수 있는 개발자를 목표로 하고 있습니다.
      </div>
      <ul className="w-full grid gap-7 grid-rows-info grid-cols-info sm:grid-rows-smInfo sm:grid-cols-smInfo md:grid-rows-smInfo md:grid-cols-smInfo">
        {profileInfo.map(info => (
          <Card key={info.title} {...info} />
        ))}
      </ul>
    </section>
  );
}
