"use client";

import { useRouter } from "next/navigation";

import { Card } from "@/components/ui/card";

import {
  Code,
  ImageIcon,
  MessageSquare,
  Music,
  VideoIcon,
  ArrowRight,
} from "lucide-react";

const tools = [
  {
    label: "进行对话",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: "生成图片",
    icon: ImageIcon,
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
    href: "/image",
  },
  {
    label: "生成视频",
    icon: VideoIcon,
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
    href: "/video",
  },
  {
    label: "生成音乐",
    icon: Music,
    href: "/music",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    label: "生成代码",
    icon: Code,
    color: "text-green-700",
    bgColor: "bg-green-700/10",
    href: "/code",
  },
];
export default function HomePage() {
  const router = useRouter();

  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          探索AI的力量
        </h2>
        <p className="font-light text-sm md:text-lg text-center text-slate-400">
          与最聪明的AI聊天-体验AI的力量
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-center gap-x-4">
              <div className={`p-2 w-fit rounded-md ${tool.bgColor}`}>
                <tool.icon className={`w-8 h-8 ${tool.color}`} />
              </div>
              <div className="font-semibold">{tool.label}</div>
            </div>
            <ArrowRight className="w-5 h-5" />
          </Card>
        ))}
      </div>
    </div>
  );
}
