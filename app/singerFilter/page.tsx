"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import Link from "next/link";

const singerList = [
  { name: "周杰伦", link: "/like.png", area: "内地", type: "男" },
  { name: "周杰伦", link: "/like.png", area: "港台", type: "女" },
  { name: "周杰伦", link: "/like.png", area: "日本", type: "女" },
  { name: "周杰伦", link: "/like.png", area: "内地", type: "男" },
  { name: "周杰伦", link: "/like.png", area: "内地", type: "组合" },
  { name: "周杰伦", link: "/like.png", area: "韩国", type: "男" },
  { name: "周杰伦", link: "/like.png", area: "韩国", type: "组合" },
  { name: "周杰伦", link: "/like.png", area: "内地", type: "男" },
];
const typeList = ["全部", "男", "女", "组合"];
const areaList = ["全部", "内地", "港台", "日本", "韩国"];

const SingerFilter = () => {
  const [singerLook, setSingerLook] = useState(singerList);
  const [fCondition, setfCondition] = useState(["全部", "全部"]);
  //type 传入
  //选择类型 过滤 选择地区 过滤 同时选择共同过滤
  //@ts-ignore
  const filterDo = (condition, num) => {
    console.log(num);
    console.log("传入condition", condition);
    setfCondition((arr) => {
      arr[num] = condition;
      console.log("usestate内arr", arr);
      const arrCopy = arr.slice();
      return arrCopy;
    });
    console.log("copy后", fCondition[num]);
    if (fCondition[0] == "全部" && fCondition[1] == "全部") {
      setSingerLook(singerList);
    } else {
      const newList = singerList.filter((singer) => {
        if (fCondition[0] == "全部" && fCondition[1] != "全部") {
          return singer.area === fCondition[1];
        } else if (fCondition[1] == "全部" && fCondition[0] != "全部") {
          return singer.type === fCondition[0];
        } else {
          return singer.type === fCondition[0] && singer.area === fCondition[1];
        }
      });
      setSingerLook(newList);
    }
  };
  //@ts-ignore
  const TypeLook = (props) => {
    return (
      <button
        className="hover:text-orange-400"
        onClick={() => filterDo(props.children, 0)}
      >
        {props.children}
      </button>
    );
  };

  //@ts-ignore
  const AreaLook = (props) => {
    return (
      <button
        className="hover:text-orange-400"
        onClick={() => filterDo(props.children, 1)}
      >
        {props.children}
      </button>
    );
  };
  return (
    <div className="mx-[200px] ">
      <div className="flex flex-row gap-x-9 text-lg">
        {typeList.map((item, index) => {
          return <TypeLook key={index}>{item}</TypeLook>;
        })}
      </div>
      <div className="flex flex-row gap-x-9 text-lg">
        {areaList.map((item) => {
          return <AreaLook key={item}>{item}</AreaLook>;
        })}
      </div>
      <div className="flex flex-row gap-x-6 mt-5 flex-wrap ">
        {singerLook.map((item) => {
          return (
            <div
              key={item.name}
              className="bg-gray-100 w-[180px] h-[210px] mb-5 flex justify-center flex-wrap "
            >
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
export default SingerFilter;
