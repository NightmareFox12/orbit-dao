import { Button } from "./shadcn/ui/button";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function ScaffoldHeader() {
  return (
    <header className="flex p-2">
      <Button>black pink</Button>
      <ConnectButton />
    </header>
  );
}
