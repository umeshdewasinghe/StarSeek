import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Heroimg from '../assets/images/herosection.jpeg';
import Dyingstar from '../assets/images/dyingstar.jpeg';
import Blackhole from '../assets/images/blackhole.gif';

const Landingpage = () => {
  const [showArticle1, setShowArticle1] = useState(false);
  const [showArticle2, setShowArticle2] = useState(false);

  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight, // Adjust this value as needed
      behavior: 'smooth', // This makes the scrolling smooth
    });
  };

  return (
    <section className="bg-white dark:bg-gray-900 py-16 lg:py-32">
      <div className="grid max-w-screen-xl px-4 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Explore the cosmos with us!</h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Our site welcomes you to a universe of discovery. Dive into captivating visuals and fascinating insights as we unveil the wonders of space. Join us on an epic journey through the stars!</p>
          <Link to="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900" onClick={handleScroll}>
            Get started
            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </Link>
          <Link to="/register" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
            Sign up
            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </Link>
          <br />
            <br />            <br />
            <br />
          <div className="mt-8">
            <h1 className="text-center text-3xl text-ce font-bold mb-4 dark:text-white">Latest Articles</h1>
            <br />
            
            <br />
            <button className="text-2xl font-bold mb-4 dark:text-white hover:text-blue-800" onClick={() => setShowArticle1(!showArticle1)}>The Spectacular End: Exploring the Phenomenon of Dying Stars</button>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex lg:items-start">
              {showArticle1 && <img src={Dyingstar} alt="mockup" />}
            </div>
            <br />
            {showArticle1 && (
              
              <p className="mb-4 text-white">
                As we gaze into the vast expanse of the night sky, we witness not only the beauty of twinkling stars but also the profound drama of their demise. Among the most captivating celestial events are the deaths of stars, a process that unfolds in spectacular displays of cosmic energy and transformation.
                Stars, those luminous spheres of plasma, are born from vast clouds of gas and dust, where gravity works its magic, pulling matter together until the pressure and temperature at the core ignite nuclear fusion. For billions of years, stars shine brightly, radiating light and heat into the universe, nurturing planets and fostering life.
                <br />
                <br />
                But like all things in the universe, stars have a finite lifespan. When a star exhausts its nuclear fuel, it embarks on a journey toward its inevitable end. The fate of a star depends largely on its mass. Low to medium-mass stars, like our own Sun, undergo a relatively peaceful transition into old age, swelling into red giants before shedding their outer layers to form beautiful planetary nebulae, leaving behind a dense core known as a white dwarf.
                <br />
                <br />
                However, for stars significantly more massive than the Sun, the story takes a more dramatic turn. These behemoths burn through their fuel at a rapid pace, leading to violent explosions known as supernovae. In these cataclysmic events, a star briefly outshines entire galaxies, releasing an astonishing amount of energy and seeding the cosmos with heavy elements essential for the formation of planets, moons, and life itself.
                <br />
                <br />
                The remnants of a supernova can take various forms, depending on the mass of the progenitor star. For the most massive stars, the core collapses under its own gravity, forming a black hole—a region of spacetime where gravity is so intense that not even light can escape. Alternatively, the collapsing core may trigger a neutron star, a dense, city-sized object composed almost entirely of neutrons, with a magnetic field trillions of times stronger than Earth's.
                <br />
                <br />
                These cosmic spectacles, from the gentle glow of a planetary nebula to the titanic explosion of a supernova, remind us of the dynamic and ever-changing nature of the universe. They offer profound insights into the life cycles of stars and the fundamental processes that shape the cosmos.
                <br />
                <br />
                As we continue to explore the mysteries of dying stars, we uncover not only the secrets of our universe's past but also clues to its future. Through the lens of astronomy, we gain a deeper understanding of our place in the cosmos and the interconnectedness of all things a perspective that inspires wonder, curiosity, and reverence for the grandeur of the universe.
              </p>
            )}
            <button className="text-2xl font-bold mb-4 dark:text-white hover:text-blue-800" onClick={() => setShowArticle2(!showArticle2)}>Unveiling the Enigma: Exploring the Mysteries of Black Holes</button>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex lg:items-start">
              {showArticle2 && <img src={Blackhole} alt="mockup" />}
            </div>
            <br />
            {showArticle2 && (
              
              <p className="mb-4 text-white">
                In the vast expanse of the cosmos, few objects evoke as much fascination and intrigue as black holes. These enigmatic entities, born from the remnants of massive stars, challenge our understanding of space, time, and the fundamental laws of physics.
                <br />
                <br />
                <h3 className='text-2xl font-bold mb-4 dark:text-white'>Birth of a Cosmic Titan</h3>
                Black holes form when a massive star reaches the end of its life cycle. As the star exhausts its nuclear fuel, gravity takes hold, causing its core to collapse under its own weight. In a titanic implosion, the star collapses into an infinitely dense point known as a singularity, surrounded by an event horizon—the point of no return from which not even light can escape.
                <br />
                <br />
                <h3 className='text-2xl font-bold mb-4 dark:text-white'>The Gravitational Abyss</h3>
                At the heart of a black hole lies the singularity, where the laws of physics as we know them break down. Here, matter is crushed to infinite density, and space-time itself is warped beyond recognition. Surrounding the singularity is the event horizon, a boundary beyond which the gravitational pull is so intense that nothing can escape—not even light. It is this feature that gives black holes their name, as they appear "black" against the backdrop of space.
                <br />
                <br />
                <h3 className='text-2xl font-bold mb-4 dark:text-white'>Unraveling the Mysteries</h3>
                Despite their name, black holes are anything but empty voids. They are dynamic and active cosmic phenomena, influencing the space around them in profound ways. Black holes come in various sizes, from stellar-mass black holes, formed from the remnants of massive stars, to supermassive black holes, which lurk at the centers of galaxies and contain millions or even billions of times the mass of the Sun.
                <br />
                <br />
                <h3 className='text-2xl font-bold mb-4 dark:text-white'>Astrophysical Laboratories</h3>
                Black holes are not just celestial curiosities; they play a crucial role in shaping the cosmos. They act as cosmic engines, powering some of the most energetic phenomena in the universe. When matter falls into a black hole's gravitational grip, it forms an accretion disk—a swirling disk of superheated gas and dust that emits intense radiation across the electromagnetic spectrum. These accretion disks are among the brightest objects in the universe, visible across vast distances.
                <br />
                <br />
                <h3 className='text-2xl font-bold mb-4 dark:text-white'>A Window to the Cosmos</h3>
                Studying black holes provides invaluable insights into the nature of space, time, and the evolution of galaxies. They serve as cosmic laboratories, allowing scientists to test the limits of our current understanding of physics. By unraveling the mysteries of black holes, we gain a deeper appreciation for the complexity and beauty of the universe—a universe where even the darkest entities hold the keys to enlightenment.
              </p>
            )}         



          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex lg:justify-end lg:items-start">
          <img src={Heroimg} alt="mockup" />
        </div>
      </div>
    </section>
  );
}

export default Landingpage;
