import React from 'react';
import { url } from './StackList';
import { SelectStackType } from '../../../type/sections';

export default function StackDetail({ data }: { data: SelectStackType | undefined }) {
  return (
    <ul className="w-full h-[200px] grid grid-cols-stackDetail bg-[#1A1B24] p-5 rounded-lg">
      {data ? (
        <React.Fragment>
          <li className="flex justify-center items-center w-full h-full">
            <img src={url + data.name} alt="stack-img" className="w-[100px] h-[100px] p-3 bg-[#30313d] rounded-lg" />
          </li>
          <ul className="flex flex-col gap-2 w-full h-full overflow-scroll text-white">
            {data.description.map(each => (
              <li key={each}>• {each}</li>
            ))}
          </ul>
        </React.Fragment>
      ) : (
        <li>데이터를 불러오고 있습니다.</li>
      )}
    </ul>
  );
}
