// import '@/app/globals.css'
"use client"
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
import { Label } from "@/components/ui/label"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const titles = [{ name: '发现音乐', link: '/discover' }, { name: '我的音乐', link: '/myMusic' }, { name: '歌手', link: '/singerFilter' }, { name: '成为音乐人', link: '/becomeSinger' }]
const pictures = ["https://plus.unsplash.com/premium_photo-1664302427357-40eb7c8fd3c0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bXVzaWN8ZW58MHx8MHx8fDA%3D", "https://images.unsplash.com/photo-1599467556385-48b57868f038?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHNpbmdlcnxlbnwwfHwwfHx8MA%3D%3D", "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bXVzaWN8ZW58MHx8MHx8fDA%3D", "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fG11c2ljfGVufDB8fDB8fHww"]
const musicRec = [{ name: '鲜花', pic: '/images/鲜花.jpeg' },
{ name: '鲜花', pic: '/images/鲜花.jpeg' },
{ name: '鲜花', pic: '/images/鲜花.jpeg' },
{ name: '鲜花', pic: '/images/鲜花.jpeg' }, { name: '鲜花', pic: '/images/鲜花.jpeg' }, { name: '鲜花', pic: '/images/鲜花.jpeg' }, { name: '鲜花', pic: '/images/鲜花.jpeg' }, { name: '鲜花', pic: '/images/鲜花.jpeg' },]
const newRec = [{ name: '鲜花', pic: '/images/鲜花.jpeg' },
{ name: '鲜花', pic: '/images/鲜花.jpeg' },
{ name: '鲜花', pic: '/images/鲜花.jpeg' },
{ name: '鲜花', pic: '/images/鲜花.jpeg' }, { name: '鲜花', pic: '/images/鲜花.jpeg' },
{ name: '鲜花', pic: '/images/鲜花.jpeg' }, { name: '鲜花', pic: '/images/鲜花.jpeg' }]

export default function Home() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
  return (
    <div>
      <div className="flex flex-row mt-5 justify-between items-center">
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
      {/* 轮播图 */}

      <div className=' w-full mt-[8px]'>
        <Carousel
          plugins={[plugin.current]}
          className=""
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {pictures.map((item, index) => (
              <CarouselItem >
                <div className="">
                  <Card className='border-white'>
                    <CardContent className="p-0">
                      <img src={item} className='w-full h-80 object-cover' />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious />
          <CarouselNext /> */}
        </Carousel>
      </div>
      {/* 歌曲推荐 */}
      <div className='flex items-center flex-col ml-60'>
        <div>
          <div className='py-3 px-1 text-lg flex flex-row w-full'> <img src='/images/music.png' className='w-6 h-6 mr-[7px]' />歌曲推荐</div>
          <div className='flex flex-row flex-wrap gap-x-6 w-9/12 ml-1/12'>
            {
              musicRec.map(item => {
                return (
                  <div className="h-50 mb-2 ">
                    <img src={item.pic} className='rounded h-48' />
                    <a className='ml-[3px]'>{item.name}</a>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      {/* 新歌上架 */}
      <div className=''>
        <div className='py-3 px-1 text-lg flex flex-row ml-60'> <img src='/images/music.png' className='w-6 h-6 mr-[7px]' /> 新歌上架</div>
        <div className='w-[770px] border-gray-100 border-[1px] p-2 rounded ml-[280px]'>
          <Carousel
            opts={{
              align: "start",
            }}
            className=""
          >
            <CarouselContent>
              {newRec.map((item, index) => (
                <CarouselItem key={index} className="lg:basis-1/4">
                  <div className="p-1">
                    <Card>
                      <img src={item.pic} className='' />
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>

  );
}