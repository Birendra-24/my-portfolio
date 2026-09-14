import Image from "next/image";
import Skills from "@/components/ui/Skills/Skills";
import MyIntroduction from "@/components/ui/MyIntroduction";
import Services from "@/components/ui/Services"
export default function Home() {
  return (
   <>
   <MyIntroduction />
 <Services />
 <Skills />
   </>
  );
}
