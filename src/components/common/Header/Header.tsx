import { headerLists } from '../../../constant/info';
import Category from './Category';

export default function Header() {
  return (
    <header className="fixed z-100 top-0 left-0 flex flex-col justify-start gap-12 w-[240px] h-screen p-10 text-white transition-custom">
      <h1 className="text-2xl font-bold">Girang's</h1>
      <nav>
        <ul className="flex flex-col gap-10">
          {headerLists.map(list => (
            <Category key={list} list={list} />
          ))}
        </ul>
      </nav>
    </header>
  );
}
