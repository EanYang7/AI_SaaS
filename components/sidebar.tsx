"use client";
import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music,
  Settings,
  VideoIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const routes = [
  {
    label: "控制面板",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "进行对话",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
  },
  {
    label: "生成图片",
    icon: ImageIcon,
    color: "text-pink-700",
    href: "/image",
  },
  {
    label: "生成视频",
    icon: VideoIcon,
    color: "text-orange-700",
    href: "/video",
  },
  {
    label: "生成音乐",
    icon: Music,
    color: "text-emerald-500",
    href: "/music",
  },
  {
    label: "生成代码",
    icon: Code,
    color: "text-green-700",
    href: "/code",
  },
  {
    label: "设置中心",
    icon: Settings,
    href: "/settings",
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="w-full h-full relative">
      <div className="flex justify-center items-center w-full text-white pt-7">
        <Link href={"/"} className="flex ">
          <Image src="/logo.jpg" alt="logo" width={36} height={36} />
          <h1 className="p-1 pl-3 font-bold">AI SaaS平台</h1>
        </Link>
      </div>
      <div className="flex-col text-white">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={`flex items-center  mx-7 mt-4 p-1 cursor-pointer hover:text-blue-300 hover:bg-white/10 rounded-lg transition hover:scale-110 ${
              pathname === route.href
                ? "text-white bg-white/10"
                : "text-zinc-500"
            }`}
          >
            <div className="flex">
              <route.icon className={`mr-1 ${route.color}`} />
              {route.label}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
