import React, { useCallback, useEffect, useState } from 'react';
import useGetImg from '../../../hooks/useGetImg';
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from '@heroicons/react/16/solid';
import useSize from '../../../hooks/useSize';

/**
 *
 * @param name 메인 페이지에서 매핑으로 넘겨받을 프로젝트 개별 이름
 * @returns 프로젝트 이미지
 */
export default function AboutImg({ name }: { name: string }) {
  const [showImg, setShowImg] = useState(0);
  const [saveImgUrl, setSaveImgUrl] = useState<string[]>([]);
  const { data: imgUrl } = useGetImg(name);
  const [hoverBtn, setHoverBtn] = useState(false);
  const { isMobile } = useSize();

  useEffect(() => {
    if (!imgUrl) return;
    setSaveImgUrl(imgUrl);
  }, [imgUrl]);

  const imgNumController = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>, dir: string) => {
      e.stopPropagation();
      if (dir === 'next') {
        setShowImg(prev => (prev === saveImgUrl.length - 1 ? 0 : prev + 1));
      } else if (dir === 'prev') {
        setShowImg(prev => (prev === 0 ? saveImgUrl.length - 1 : prev - 1));
      }
    },
    [saveImgUrl.length],
  );

  return (
    <li
      className="relative flex justify-center items-center w-full h-[150px]"
      onMouseEnter={() => setHoverBtn(true)}
      onMouseLeave={() => setHoverBtn(false)}>
      <img
        src={saveImgUrl[showImg]}
        alt={`${name + showImg} img`}
        className="w-auto h-full"
        style={{ opacity: hoverBtn ? 0.7 : 1 }}
      />
      {/* 이미지 갯수 */}
      {/* 좌측 버튼 */}
      {!isMobile && (
        <div id="button-box" className="absolute flex justify-between w-full left-0 bottom-0 text-white ">
          <button type="button" onClick={e => imgNumController(e, 'prev')} aria-label="img prev btn">
            <ArrowLeftCircleIcon width={16} height={16} className="shadow-2xl hover:text-yellow-400" />
          </button>
          <span className="absolute top-0 left-1/2 -translate-x-1/2 text-xs text-white py-1 px-2 bg-[#30313d] rounded-lg">
            {showImg + 1}/{saveImgUrl.length}
          </span>
          <button type="button" onClick={e => imgNumController(e, 'next')} aria-label="img next btn">
            <ArrowRightCircleIcon width={16} height={16} className="shadow-2xl hover:text-yellow-400" />
          </button>
        </div>
      )}
    </li>
  );
}
