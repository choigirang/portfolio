import useMoveScroll from '../../../hooks/useMoveScroll';
import { SkillCardProps } from '../../../type/sections';

/**
 *
 * @param props 메인 페이지에서 넘겨받을 항목에 따른 데이터
 * @returns 이미지 및 링크 연결
 */
export default function Card(props: SkillCardProps) {
  const { src, txt, bedge, color } = props;
  const { scrollToPage } = useMoveScroll();

  return (
    <div
      className="relative w-full h-auto rounded-lg bg-[#1A1B24] cursor-pointer overflow-hidden transition-custom"
      onClick={() => scrollToPage(bedge)}>
      <img
        className="w-full h-full object-cover opacity-50 hover:opacity-100 hover:scale-110 transition-custom"
        src={`${src}.webp`}
        alt={`${src}-img`}
      />
      <div className="absolute flex flex-col gap-2 items-start left-[30px] bottom-[20px] text-white">
        <span className="font-bold px-[10px] py-[5px] rounded-lg" style={{ backgroundColor: color }}>
          {bedge}
        </span>
        <span className="text-2xl shadow-2xl">{txt}</span>
      </div>
    </div>
  );
}
