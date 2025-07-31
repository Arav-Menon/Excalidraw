import { Button } from "@repo/ui/button";
import Sidebar from "../sidebar/page";

export default function Home() {
  return (
    <main className="flex bg-black " >
      <div>
        <Sidebar />
      </div>

      <div>
        <Button className="border-black rounded-lg border-2 p-4 ">
          Create canvas
        </Button>
      </div>
    </main>
  );
}
