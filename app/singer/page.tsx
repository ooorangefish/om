"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const singerSong = [
  { name: "爱是昂贵的", singer: "声音玩具", album: "劳动之余", time: "08:06" },
  { name: "秋分", singer: "蛙池", album: "郊游", time: "04:05" },
  { name: "爱是昂贵的", singer: "声音玩具", album: "劳动之余", time: "3:05" },
];

const SingerPage = () => {
  const [playIndex, setPlayIndex] = useState(-1);
  const [adding, setAdding] = useState(-1);

  return (
    <div>
      <div className="flex ml-[220px]">
        <div className="bg-gray-100 w-[250px] h-[250px] p-3">
          <Avatar className="w-full h-full">
            <AvatarImage src="/images/心.avif" className="" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex flex-col ml-[15px]">
          <div className="text-xs mt-[20px]">歌手</div>
          <div className="text-4xl font-semibold"> 汪苏泷</div>
          <div className="mt-[10px] text-sm">
            <div className="mt-[17px]">
              国籍：中国 出生地：辽宁沈阳 生日:2000年6月1月
              职业：音乐人，潮牌主理人{" "}
            </div>
            <div className="mt-[17px]">单曲：120 ｜ 专辑：15</div>
            <div>
              <Button className="bg-orange-400 mt-[17px]">
                + 播放热门歌曲
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-[220px] mt-[20px]">
        <div className="text-xl ml-[6px]">热门歌曲</div>
        <Table>
          <TableCaption>共120首</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]"></TableHead>
              <TableHead>歌曲</TableHead>
              <TableHead>专辑</TableHead>
              <TableHead className="text-right">时长</TableHead>
              <TableHead className="w-[130px] "> </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {singerSong.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell>{item.album}</TableCell>
                <TableCell className="text-right">{item.time}</TableCell>
                <TableCell className=" flex flex-row gap-x-4">
                  {/* ？？问题：怎么只控制一个 只有一个state数值就无法只控制一个 */}
                  <div
                    className="w-6"
                    onMouseEnter={() => setPlayIndex(index)}
                    onMouseLeave={() => setPlayIndex(-1)}
                  >
                    {playIndex == index ? (
                      <img className="w-6" src="/images/播放.png" />
                    ) : (
                      <img className="w-56" src="/images/暂停黑.png" />
                    )}
                  </div>

                  <div
                    className="w-6"
                    onMouseEnter={() => setAdding(index)}
                    onMouseLeave={() => setAdding(-1)}
                  >
                    {adding == index ? (
                      <img className="w-6" src="/images/加橙.png" />
                    ) : (
                      <img className="w-56" src="/images/加黑.png" />
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
export default SingerPage;
