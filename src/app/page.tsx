import Logo from "@/assets/logo.svg";
import Image from "next/image";
import Beams from './Beams';


export default function Home() {
  return (
    <>
      {/* Full page Beams background */}
      <div style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0
      }}>
        <Beams
          beamWidth={0.9}
          beamHeight={25}
          beamNumber={26}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.85}
          scale={0.2}
          rotation={30}
        />
      </div>
      
      {/* Content overlay */}
      <main className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero">
         <Image src={Logo} alt="BlackGrid Logo" width={200} />
          <h1 className="title">BLACKGRID</h1>
          <p className="sub">COMING SOON</p>
          <p className="contact">Reach us out: <a href="mailto:contact@blackgrid.in?subject=consultation">contact@blackgrid.in</a></p>
        </div>
      </main>
    </>
  );
}

