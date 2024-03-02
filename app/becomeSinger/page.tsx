import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const becomeSinger = () => {
  return (
    <div className="mt-[110px]">
      <div className="flex flex-row flex-wrap my-12 justify-center w-full text-5xl ">
        <img src="/images/orange.png" className="h-12 mr-[10px]" />
        <div className=" md:font-bold">橘子音乐开放平台</div>
        <div className="w-full flex justify-center text-3xl my-5 text-orange-400">
          欢迎您的加入！
        </div>
      </div>
      <div className="flex justify-center my-5 mt-[150px] flex-wrap ">
        <div className="text-2xl w-full flex my-3 justify-center">
          申请成为音乐人
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">立即申请</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>立即申请</DialogTitle>
              <DialogDescription>
                闪耀从这里开始，申请成为音乐人，开始你的音乐之旅吧
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  姓名
                </Label>
                <Input
                  id="name"
                  defaultValue="请输入您的姓名"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  头像
                </Label>
                <Input id="picture" type="file" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  类型
                </Label>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="类型" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">男</SelectItem>
                    <SelectItem value="dark">女</SelectItem>
                    <SelectItem value="system">组合</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="area" className="text-right">
                  地区
                </Label>
                <Input
                  id="username"
                  defaultValue="请输入您的地区（国家省市）"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  出生年月
                </Label>
                <Input
                  id="name"
                  defaultValue="如：xxxx年xx月xx日"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  出道时间
                </Label>
                <Input
                  id="name"
                  defaultValue="如：xxxx年xx月xx日"
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">确认上传</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      {/* 上传歌曲 */}
      <div className="flex justify-center  w-full flex-wrap mb-12">
        <div className="text-2xl w-full flex justify-center my-2">
          上传您的音乐作品
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">上传您的音乐作品</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>上传您的音乐作品</DialogTitle>
              <DialogDescription>请上传您的优秀作品</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  歌曲名
                </Label>
                <Input
                  id="name"
                  defaultValue="请输入歌曲名"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  所属专辑
                </Label>
                <Input
                  id="username"
                  defaultValue="请输入歌曲所属专辑"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  专辑封面
                </Label>
                <Input id="picture" type="file" className="col-span-3" />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  语种
                </Label>
                <Input
                  id="username"
                  defaultValue="国语，粤语，英语等"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  歌词
                </Label>
                <Input
                  id="username"
                  defaultValue="请输入歌词"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  音频上传
                </Label>
                <Input id="audio" type="file" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">确认上传</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        {/*        
          <div>
            歌曲名 <Input />
          </div>
          <div>
            所属专辑 <Input />
          </div>
          <div>
            专辑封面
           <Label htmlFor="picture">Picture</Label>
            <Input id="picture" type="file" />
          </div>
          <div>
            语种 <Input />
          </div>
          <div>
            歌词 <Input />
          </div>
          <Input id="audio" type="file" />
          <div>音频上传 </div>
          <Button variant="outline">确认上传</Button> 
          */}
      </div>
    </div>
  );
};

export default becomeSinger;
