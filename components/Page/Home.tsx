import React from 'react';
import MaskReveal from '../Section/MaskReveal';
import { TOKENS } from '../../constants';

const Home: React.FC = () => {
  
  // Content for the background layer
  const HiddenContent = (
    <p>
      I'm a <span className="text-[#ec4e39]">selectively skilled</span> product designer with strong focus on producing high quality & impactful digital experience.
    </p>
  );

  // Content for the revealed layer
  const RevealContent = (
    <p>
      A visual designer - with skills that haven't been replaced by A.I (yet) - making good shit only if the paycheck is equally good.
    </p>
  );

  return (
    <main className="w-full h-full">
      <div className="fixed top-8 left-8 z-50 mix-blend-difference text-white opacity-50 font-inter text-xs tracking-widest uppercase">
        Mask Component v1.0
      </div>
      
      <MaskReveal 
        hiddenText={HiddenContent} 
        revealText={RevealContent} 
      />
      
      <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-2 mix-blend-difference text-white">
         <span className={`${TOKENS.Type.Readable.Body.M} opacity-60`}>System Status: Operational</span>
         <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
         </div>
      </div>
    </main>
  );
};

export default Home;