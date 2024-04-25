import Card from './Card';

import { CardInfo } from '../../../constant/info';

/**
 *
 * @returns 메인 페이지
 */
export default function Summary() {
  return (
    <section id="home" className="w-full grid grid-cols-2 gap-5">
      {Object.keys(CardInfo).map(key => (
        <Card key={key} {...CardInfo[key]} />
      ))}
    </section>
  );
}
