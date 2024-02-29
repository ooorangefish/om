import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const singerList = [
  { name: "周杰伦", link: "/like.png" },
  { name: "周杰伦", link: "/like.png" },
  { name: "周杰伦", link: "/like.png" },
  { name: "周杰伦", link: "/like.png" },
  { name: "周杰伦", link: "/like.png" },
  { name: "周杰伦", link: "/like.png" },
  { name: "周杰伦", link: "/like.png" },
  { name: "周杰伦", link: "/like.png" },
];
const singerFilter = () => {
  return (
    <div className="ml-[200px]">
      <div className="flex flex-row gap-x-3">
        <div>全部</div>
        <div>男</div>
        <div>女</div>
        <div>组合</div>
      </div>
      <div className="flex flex-row gap-x-3">
        <div>全部</div>
        <div>内地</div>
        <div>港台</div>
        <div>日本</div>
        <div>韩国</div>
      </div>
      <div className="flex flex-row gap-x-6 mt-10 w-[900px]">
        {singerList.map((item) => {
          return (
            <div className="bg-gray-100 w-[180px] h-[200px]">
              <Avatar className="w-[180px] h-[180px]">
                <AvatarImage src="/images/心.avif" className="" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>{item.name}</div>
            </div>
          );
        })}
        <div></div>
      </div>
    </div>
  );
};
export default singerFilter;
