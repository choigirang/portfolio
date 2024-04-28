import { ProfileObjectInfo } from '../../../type/sections';

/**
 *
 * @param value 프로필 데이터, 이름,학력 등
 * @returns 링크가 필요한 조건부
 */
export default function Card(value: ProfileObjectInfo) {
  const { title, info, icon, link } = value;

  return (
    <li className="relative flex flex-col justify-between w-full h-full text-white p-[5%] bg-[#1A1B24] hover:scale-105 hover:bg-[#30313d] hover:text-yellow-400 transition-custom rounded-lg truncate">
      {link && (
        <a href={link} target="_blank" className="flex flex-col justify-between w-full h-full">
          <span className="text-lg">
            {title} {icon}
          </span>
          <span>{info}</span>
        </a>
      )}
      {!link && (
        <p className="flex flex-col justify-between w-full h-full">
          <span className="text-lg">
            {title} {icon}
          </span>
          <span>{info}</span>
        </p>
      )}
    </li>
  );
}
