import useMoveScroll from '../../../hooks/useMoveScroll';
import { headerLabel, headerListsIcon } from '../../../constant/info';

export default function Category({ list, isMobile }: { list: string; isMobile: boolean }) {
  const { scrollToPage } = useMoveScroll();

  return (
    <li
      className="flex items-center gap-5 transition-custom text-white hover:text-yellow-400 cursor-pointer"
      onClick={() => scrollToPage(list)}>
      <span className="bg-stone-800 p-1 rounded-lg">{headerListsIcon[headerLabel[list]]}</span>
      {!isMobile && <span>{headerLabel[list]}</span>}
    </li>
  );
}
