// import '@/app/globals.css'
"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
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