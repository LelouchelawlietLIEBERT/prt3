import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ThreeDCardDemo from "../components/ThreeDCardDemo";
import AnimatedPinDemo from "../components/ThreeDPin";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * index,
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <div ref={sectionRef} id="work" className="w-full px-4 py-12">
      <h1 className="wtf-text text-7xl font-extrabold">PROJECTS</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto items-stretch">
        <div ref={rydeRef} className="flex justify-center items-center h-full w-full">
          <AnimatedPinDemo />
        </div>
        <div className="flex flex-col gap-8">
          <div ref={libraryRef}>
            <ThreeDCardDemo
              title="A CRUD APP"
              description="Built in Next.js with clerk authentication, mongodb, where u can create , read, update and delete notes!"
              ctaLink="https://ghost15.vercel.app/"
              imageUrl="/images/nextjs.png"
            />
          </div>
          <div ref={ycDirectoryRef}>
            <ThreeDCardDemo
              title="BIOTWIN DRUG-SIM"
              description="The project creates virtual twins of individuals to offer personalized healthcare solutions that prioritize early detection, precision treatment, and cost-effective management of health conditions."
              ctaLink="https://biotwins.netlify.app/"
              imageUrl="/images/macrophage.png"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default AppShowcase;
