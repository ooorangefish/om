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
import Link from "next/link";

const singer = [
  { name: "周杰伦", pic: "/images/心.avif", type: "男歌手" },
  { name: "周杰伦", pic: "/images/心.avif", type: "男歌手" },
  { name: "周杰伦", pic: "/images/心.avif", type: "男歌手" },
];
const singerSong = [
  { name: "爱是昂贵的", singer: "声音玩具", album: "劳动之余", time: "08:06" },
  { name: "秋分", singer: "蛙池", album: "郊游", time: "04:05" },
  { name: "爱是昂贵的", singer: "声音玩具", album: "劳动之余", time: "3:05" },
];

const searchNew = () => {
  const [playIndex, setPlayIndex] = useState(-1);
  const [adding, setAdding] = useState(-1);
  return (
    <div className="flex justify-center">
      <div className=" w-[1200px] ml-[200px]">
        <div className="text-lg flex flex-row ml-2 my-3">
          您可能感兴趣的歌手
          <img src="/images/可爱的.png" className="w-7 h-7 ml-4" />
        </div>
        <div>
          {singer.map((item, index) => (
            <div className="flex items-center space-x-4">
              <div className="w-[130px] h-[130px] p-3">
                <Avatar className="w-full h-full">
                  <AvatarImage src={item.pic} className="" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex flex-row ml-[15px]">
                <div className="text-2xl font-semibold hover:text-orange-400">
                  <Link href="/singer">{item.name}</Link>
                </div>
                <div className="text-xs mt-2 ml-5">{item.type}</div>
                <div className="ml-[500px] text-sm">
                  <div>
                    <Button className="bg-orange-400 ">+ 播放热门歌曲</Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <div className="text-lg flex flex-row ml-2 my-3">
            单曲精选 <img src="/images/可爱的.png" className="w-7 h-7 ml-4" />
          </div>
          <div className="w-[1000px]">
            <Table>
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

                    <TableCell className="font-medium hover:text-orange-400">
                      <Link href="/song">{item.name}</Link>
                    </TableCell>
                    <TableCell>{item.album}</TableCell>
                    <TableCell className="text-right">{item.time}</TableCell>
                    <TableCell className=" flex flex-row gap-x-4">
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
      </div>
    </div>
  );
};

export default searchNew;
