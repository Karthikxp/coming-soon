import Logo from "@/assets/logo.svg";
import Image from "next/image";


export default function Home() {
  return (
    <main className="wrap">
      <div className="hero">
       <Image src={Logo} alt="BlackGrid Logo" width={300} />
        <h1 className="title">BLACKGRID</h1>
        <p className="sub">COMING SOON</p>
      </div>
    </main>
  );
}
