import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>首页</div>
      <Link href="/sign-in">
        <Button>登录</Button>{" "}
      </Link>
      <Link href="/sign-up">
        <Button>注册</Button>{" "}
      </Link>
    </div>
  );
}
