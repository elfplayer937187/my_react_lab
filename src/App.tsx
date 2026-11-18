import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LightRays } from "@/components/velora/light-rays";

export default function App() {
  return (
    <div className="relative min-h-dvh w-full overflow-hidden bg-neutral-950">
      {/* 背景层：铺满整个界面 */}
      <LightRays count={17} />

      {/* 内容层：左右两栏 Grid */}
      <div className="relative z-10 mx-auto flex gap-100  min-h-dvh w-full max-w-7xl items-center px-6 py-12 ">
        {/* 左侧：标题 */}
        <div className="flex flex-col items-start gap-10">
          <h1 className="flex flex-col gap-6 max-w-xl text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl lg:text-6xl">
            <span className="bg-linear-to-r from-brand-from via-brand-via to-brand-to bg-clip-text text-transparent">
              AI 实验室
            </span>
            <div className="">科学与你同在</div>
          </h1>

          <p className="max-w-md text-base leading-relaxed text-white/60 sm:text-lg">
            在一个安静、专注的工作空间里，把想法变成现实。
          </p>
        </div>

        {/* 右侧：登录卡片 */}

        <Card className="w-full max-w-sm [--card-spacing:--spacing(6)] bg-gray-900">
          <CardHeader>
            <CardTitle>登录您的账号</CardTitle>

            <CardAction>
              <Button variant="link">注册</Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <form id="login-form">
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">账号</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">密码</Label>
                    <a
                      href="#"
                      className="text-blue-300 ml-auto inline-block text-sm underline-offset-4 hover:underline"
                    >
                      忘记密码?
                    </a>
                  </div>
                  <Input id="password" type="password" required />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button  form="login-form" className="w-full bg-white" >
              登录
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
