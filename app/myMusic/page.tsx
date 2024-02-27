import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


  const likedSong=[{name:"爱是昂贵的",singer:"声音玩具",album:"劳动之余",time:'08:06'},{name:"秋分",singer:"蛙池",album:"郊游",time:'04:05'},{name:"爱是昂贵的",singer:"声音玩具",album:"劳动之余",time:'3:05'}]

const Mymusic=()=> {
    return<div>
        <div >
            喜欢的音乐
        </div>
        <div><img src='/images/oheart.avif' className='w-[200px]'/></div>
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500">
             <Avatar className=''>
              <AvatarImage src="/images/头像.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            </div>
            <div>用户名</div>
        <div>
<Table >
  <TableCaption>你喜欢的音乐</TableCaption>
  <TableHeader>
    <TableRow>
    <TableHead className="w-[100px]"></TableHead>
      <TableHead>歌曲</TableHead>
      <TableHead>歌手</TableHead>
      <TableHead>专辑</TableHead>
      <TableHead className="text-right">时长</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
  {likedSong.map((item,index) => (

          <TableRow key={index}>
            <TableCell>{index+1}</TableCell>
            <TableCell className="font-medium">{item.name}</TableCell>
            <TableCell>{item.singer}</TableCell>
            <TableCell>{item.album}</TableCell>
            <TableCell className="text-right">{item.time}</TableCell>
          </TableRow>
        ))}
  </TableBody>
</Table>
        </div>

    </div>
}

export default Mymusic