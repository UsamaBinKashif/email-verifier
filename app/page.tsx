import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen min-w-screen bg-gray-50 flex items-center justify-center">
      {/* <Header /> */}
      <div >
        <Image src="/assets/hero_image.svg" width={200} height={182} alt="hero-image" />
      </div>
    </main>
  );
}
