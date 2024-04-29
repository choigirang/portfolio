/**
 *
 * @param flipCard 카드 클릭 상태
 * @param description 매핑으로 뿌려질 각 프로젝트 설명 데이터
 * @returns 클릭 시 카드 뒤집기로 설명문
 */
export default function DescriptionContent(props: { flipCard: boolean; description: Array<string> }) {
  const { flipCard, description } = props;

  const parseDescription = (text: string) => {
    const parts = text.split('*');

    return parts
      .map((part, index) => {
        if (part === '') return null;
        return index % 2 === 0 ? (
          <span key={index}>{part}</span>
        ) : (
          <strong className="text-yellow-400 font-bold" key={index}>
            {part}
          </strong>
        );
      })
      .filter(Boolean);
  };

  return (
    <div
      className="absolute top-0 h-full p-[5%] backf backface-invisible transition-custom text-white overflow-scroll"
      style={{ visibility: flipCard ? 'visible' : 'hidden' }}>
      <ul
        className="flex flex-col gap-5 sm:text-sm"
        style={{ visibility: flipCard ? 'visible' : 'hidden', transform: flipCard ? 'rotateY(180deg)' : 'rotateY(0)' }}>
        {description.map(item => (
          <li className="flex gap-5" key={item}>
            <span>✅ {parseDescription(item)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
