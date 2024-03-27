"use client";

import "@/app/globals.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import Player from "./components/Player";

import { Card, CardContent } from "@/components/ui/card";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ReactPlayer from "react-player/lazy";

const titles = [
  { name: "发现音乐", link: "/" },
  { name: "我的音乐", link: "/myMusic" },
  { name: "歌手", link: "/singerFilter" },
  { name: "成为音乐人", link: "/becomeSinger" },
];
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* className={`${inter.className} antialiased`} */}
      <body>
        <div className="flex flex-row mt-5 justify-between items-center mb-[8px]">
          <div className="flex flex-row w-90 leading-[40px] md:font-bold ml-[60px] text-lg ">
            <img src="/images/orange.png" className="h-10 mr-[10px]" />
            橘子音乐
          </div>
          <div className="w-200 flex flex-row justify-between gap-x-3 items-center ">
            {titles.map((item, key) => {
              return (
                <a
                  key={key}
                  className="hover:bg-orange-200 px-6 py-3"
                  href={item.link}
                >
                  {item.name}
                </a>
              );
            })}
          </div>
          <div className="flex w-full max-w-sm items-center space-x-2 ">
            {/* 根据关键词搜索在歌手和歌曲中filter搜索 */}
            <Input type="email" placeholder="周杰伦" />
            {/* <Button type="submit">搜索</Button> */}
            <Button type="submit" asChild>
              <Link href="/search">搜索</Link>
            </Button>
          </div>
          <div className="flex flex-row gap-x-2">
            {/* 条件判断是否有头像 */}
            <Avatar className="">
              <AvatarImage src="/images/头像.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Dialog>
              <DialogTrigger asChild className="mr-11">
                <Button variant="outline" asChild>
                  <Link href="/login">登录</Link>
                </Button>
                {/* <Button>登录</Button> */}
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>登录</DialogTitle>
                  <DialogDescription>请输入账号和密码登录</DialogDescription>
                </DialogHeader>
                <div className="grid gap-3 py-4">
                  <div className="flex flex-row items-center gap-3">
                    <Input
                      id="name"
                      defaultValue="支持qq/邮箱/手机号码登录"
                      className="col-span-3"
                    />
                  </div>
                  <div className=" items-center gap-3">
                    <Input
                      id="username"
                      defaultValue="请输入密码"
                      className="col-span-3"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">登录</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            {/* <HoverCard>
            <HoverCardTrigger>
              <Avatar className='mr-[70px]'>
                <AvatarImage src="/images/头像.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </HoverCardTrigger>
            <HoverCardContent className="w-55">
              <Command >
                <CommandList >
                  <CommandGroup heading="用户名">
                    <CommandItem ><a href='/myMusic'>我的主页</a></CommandItem>
                    <CommandItem>设置</CommandItem>
                    <CommandItem>退出登录</CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            </HoverCardContent>
          </HoverCard> */}
          </div>
        </div>
        {children}
        {/* 播放栏 无歌曲播放时隐藏 */}
        {/* <div className="fixed bottom-0 border-t-1 border-gray-200 w-full h-[95px] border-t-2 border-solid border-black flex flex-row bg-white">
          <div className="mt-2 flex flex-row ml-20 w-[200px]">
            <img src="/images/鲜花.jpeg" className="w-14 h-14 rounded" />
            <div className="ml-3 text-sm ">
              <div className=" text-base  mt-1">我想念</div>
              <div className=" mt-1 flex flex-row">
                <img src="/images/麦克风.png" className="mx-1 w-3 h-3 mt-1" />
                汪苏泷
              </div>
            </div>
          </div>
          <div>
            <img src="/images/加 (2).png" className="w-4 mt-4 ml-10" />
          </div>
          <div className="mt-2 ml-[140px] flex flex-col">
            <div className="flex flex-row justify-items-center ml-[200px]">
              <img src="/images/上一首.png" className="w-7 h-7 pt-1" />
              <img src="/images/播放 (6).png" className="w-8 h-8 mx-6" />
              <img src="/images/下一首.png" className="w-7 h-7 pt-1" />
            </div>
            <div className="flex flex-row text-sm mt-1">
              <div>00:16</div>
              <Progress value={33} className="w-[480px] h-[7px] mx-5 mt-2" />
              <div>03:12</div>
            </div>
          </div>
        </div> */}
        <div className="w-full py-3 mt-5">
          <div className="w-full justify-center flex">
            copy right @ooorange fish
          </div>
          <div className="w-full justify-center flex">
            Powered by next.js tailwind
          </div>
        </div>
        <Player />
      </body>
    </html>
  );
}
