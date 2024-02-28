"use client"

import '@/app/globals.css'
import { inter } from '@/app/ui/fonts'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
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
} from "@/components/ui/command"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
const titles = [{ name: '发现音乐', link: '/' }, { name: '我的音乐', link: '/myMusic' }, { name: '歌手', link: '/singerFilter' }, { name: '成为音乐人', link: '/becomeSinger' }]
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* className={`${inter.className} antialiased`} */}
      <body >
      <div className="flex flex-row mt-5 justify-between items-center mb=[8px]">
        <div className="flex flex-row w-90 leading-[40px] md:font-bold ml-[60px] text-lg "><img src='/images/orange.png' className='h-10 mr-[10px]' />橘子音乐</div>
        <div className="w-200 flex flex-row justify-between gap-x-3 items-center ">
          {
            titles.map(item => {
              return (
                <a className="hover:bg-orange-200 px-6 py-3" href={item.link} >{item.name}</a>
              )
            })
          }
        </div>
        <div className="flex w-full max-w-sm items-center space-x-2 ">
          <Input type="email" placeholder="周杰伦" />
          <Button type="submit">搜索</Button>
        </div>
        <div className="flex flex-row gap-x-2">
          {/* 条件判断是否有头像 */}
          <Avatar className=''>
            <AvatarImage src="/images/头像.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Dialog>
            <DialogTrigger asChild className="mr-11">
              <Button variant="outline">登录</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>登录</DialogTitle>
                <DialogDescription>
                  请输入账号和密码登录
                </DialogDescription>
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
        {children}</body>
    </html>
  );
}
