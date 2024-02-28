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
import { Button } from "@/components/ui/button"


const likedSong = [{ name: "爱是昂贵的", singer: "声音玩具", album: "劳动之余", time: '08:06' }, { name: "秋分", singer: "蛙池", album: "郊游", time: '04:05' }, { name: "爱是昂贵的", singer: "声音玩具", album: "劳动之余", time: '3:05' }]

const Mymusic = () => {
    return <div>
        <div className="flex ml-[220px]">
            <div className="bg-gradient-to-r from-orange-100 to-orange-500 w-[200px] h-[200px] flex jusify-center align-center"><img src='/images/爱心.png' className='w-[50px] h-[50px] my-auto mx-auto ' /></div>
            <div  className="flex flex-col ml-[15px]">
                <div className="text-xs mt-[27px]">playlist</div>
            <div className="text-4xl font-semibold mt-[7px]"> 喜欢的音乐</div>
            <div className="flex flex-row text-xs mt-[12px]">
                <Avatar className=''>
                    <AvatarImage src="/images/心.avif" className="" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="mt-[17px] mx-[7px]">orange</div>
                <div className="mt-[17px]">共120首</div>
            </div>
            
            </div>
        </div>
        {/* 播放列表 */}
        <div className="mx-[220px] mt-[20px]">
            <div>
                <Button variant="outline">
                    播放全部
                </Button>
                <Button variant="secondary" className="ml-[10px]">
                   下载 +
                </Button>
            </div>
            <Table >
                <TableCaption>你喜欢的音乐</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">#</TableHead>
                        <TableHead>歌曲</TableHead>
                        <TableHead>歌手</TableHead>
                        <TableHead>专辑</TableHead>
                        <TableHead className="text-right">时长</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {likedSong.map((item, index) => (

                        <TableRow key={index}>
                            <TableCell>{index + 1}</TableCell>
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