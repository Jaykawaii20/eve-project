import Image from "next/image";
import { SignUpCard } from "./SignUpCard";

export default function Home() {
  return (
    <div className="flex h-screen justify-around bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url(/background.png)" }}>
    {/* <div className="flex h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url(/background.png)" }}> */}
      <div className="w-[55%] max-lg:hidden  flex justify-center items-center ml-8 mt-8 mb-12">
          <Image
            src="/vector.png"
            alt="picture of the author"
            // layout="fill"
            width={1000}
            height={1000}
            objectFit="cover"
          />
      </div>
      <div className="lg:w-[45%] mx-8 flex items-center justify-center">
        <SignUpCard />
      </div>
    </div>
  );
}
