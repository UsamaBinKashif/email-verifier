import Header from "@/components/Header";
import Verifier from "@/components/Verifier";

export default function Home() {
  return (
    <main className=" min-h-screen min-w-screen  bg-gray-100" >
      <section className="flex items-center  justify-center ">
        <Verifier />
      </section>
    </main>
  );
}
