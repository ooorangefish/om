import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import Link from "next/link";

const singerList = [
  { name: "周杰伦", link: "/like.png", nation: "中国" },
  { name: "周杰伦", link: "/like.png" },
  { name: "周杰伦", link: "/like.png" },
  { name: "周杰伦", link: "/like.png" },
  { name: "周杰伦", link: "/like.png" },
  { name: "周杰伦", link: "/like.png" },
  { name: "周杰伦", link: "/like.png" },
  { name: "周杰伦", link: "/like.png" },
];

const singerFilter = () => {
  //    filter 思路：usestate nation  (不知道全部应该怎么表示 想的是如果是全部就三元运算符判断直接map 或者filter之后map)
  //singerList.filter(nation=>nation.includes('中国')).map
  return (
    <div className="mx-[200px] ">
      <div className="flex flex-row gap-x-9 text-lg">
        <div className="hover:text-orange-400 mr-4">全部</div>
        <div>男</div>
        <div>女</div>
        <div>组合</div>
      </div>
      <div className="flex flex-row gap-x-9 text-lg">
        <div>全部</div>
        <div>内地</div>
        <div>港台</div>
        <div>日本</div>
        <div>韩国</div>
      </div>
      <div className="flex flex-row gap-x-6 mt-5 flex-wrap ">
        {singerList.map((item) => {
          return (
            <div className="bg-gray-100 w-[180px] h-[210px] mb-5 flex justify-center flex-wrap ">
              <Avatar className="w-[180px] h-[180px]">
                <AvatarImage src="/images/心.avif" className="" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="">
                <Link href="/singer">{item.name}</Link>
              </div>
            </div>
          );
        })}
        <div></div>
      </div>
    </div>
  );
};
export default singerFilter;
