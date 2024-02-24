// import '@/app/globals.css'
import styles from '@/app/ui/home.module.css';
import { Toggle } from "@/components/ui/toggle"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const titles = [{name:'发现音乐',link:'/discover'},{name:'我的音乐',link:'/myMusic'},{name:'歌手',link:'/singerFilter'},{name:'成为音乐人',link:'/becomeSinger'}]

export default function Home() {
  return (
    <div>
      {/* <p className="text-blue-500">Home</p> */}
      {/* <div
        className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent"
      /> */}
      <div className="flex flex-row mt-5 justify-between items-center">
        <div className="flex flex-row w-90 leading-[40px] md:font-bold ml-[60px] text-lg "><img src='/images/orange.png' className='h-10 mr-[10px]'/>橘子音乐</div>
        {/* <p className="hover:bg-sky-700 p-3">发现音乐</p> */}
        <div className="w-200 flex flex-row justify-between gap-x-3 items-center ">
        {
          titles.map(item=>{
            return(
              <a className="hover:bg-orange-200 px-6 py-3" href={item.link} >{item.name}</a>
            )
          })
        }
</div>
        <div className="flex w-full max-w-sm items-center space-x-2 ">
      <Input type="email" placeholder="周杰伦" />
      <Button type="submit">搜索</Button>
    </div>
    <div>
    <Avatar className='mr-[70px]'>
  <AvatarImage src="/images/头像.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
</div>

      </div>
      
      {/* <div className={styles.shape}>233</div> */}
    </div>
  );
}
