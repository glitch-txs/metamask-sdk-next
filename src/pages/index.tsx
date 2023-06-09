import ConnectButton from "@/components/ConnectButton";
import SwitchProvider from "@/components/SwitchProvider";
import UserState from "@/components/UserState";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-5 text-center p-24">
      <ConnectButton/>
      <UserState/>
      <SwitchProvider/>
    </main>
  )
}
