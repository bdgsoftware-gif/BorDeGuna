import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Eye, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const MissionVision = () => {
  const sectionRef = useRef(null);
  const missionRef = useRef(null);
  const visionRef = useRef(null);

  useEffect(() => {
    // Animate mission and vision cards
    gsap.fromTo(missionRef.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: missionRef.current,
          start: 'top center+=100',
        }
      }
    );

    gsap.fromTo(visionRef.current,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: visionRef.current,
          start: 'top center+=100',
        }
      }
    );
  }, []);

  return (
    <section id="vision" ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Vision & Mission
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Guided by purpose, driven by values
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Vision Card */}
          <div
            ref={visionRef}
            className="relative"
            data-aos="fade-right"
          >
            <div className="bg-gradient-to-br from-primary to-green-600 rounded-3xl p-8 text-white shadow-2xl">
              <div className="inline-flex p-4 bg-white/20 rounded-full mb-6">
                <Eye className="w-8 h-8" />
              </div>
              
              <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
              
              <p className="text-lg leading-relaxed mb-6">
                To build the world's most trusted house of purpose-driven brands,
                shaping a healthier, wealthier, and more harmonious world where
                humanity thrives in unity with nature.
              </p>
              
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/10 rounded-full"></div>
            </div>
          </div>

          {/* Mission Card */}
          <div
            ref={missionRef}
            className="relative"
            data-aos="fade-left"
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-700 rounded-3xl p-8 text-white shadow-2xl">
              <div className="inline-flex p-4 bg-white/20 rounded-full mb-6">
                <Target className="w-8 h-8" />
              </div>
              
              <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
              
              <p className="text-lg leading-relaxed mb-6">
                Bor de Guna exists to transform lives. We create premium, toxin-free,
                and nature-powered solutions that nurture health, inspire wellness,
                and uplift lifestyles.
              </p>
              
              <div className="flex items-center space-x-2 text-sm text-white/80">
                <Zap className="w-4 h-4" />
                <span>Innovate with limitless ambition</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-white/80 mt-2">
                <Zap className="w-4 h-4" />
                <span>Act with empathy</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-white/80 mt-2">
                <Zap className="w-4 h-4" />
                <span>Move with speed and discipline</span>
              </div>
            </div>
          </div>
        </div>

        {/* Milestones Timeline */}
        <div className="mt-20" data-aos="fade-up">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Journey
          </h3>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>
            
            {[
              { year: '2019', title: 'Foundation', desc: 'Bor de Guna founded with a vision to inspire healthier living' },
              { year: '2020-21', title: 'La La Dia Launch', desc: 'Luxury line of artisanal foods launched' },
              { year: '2022-23', title: 'Bionic Groundwork', desc: 'Premium wellness brand development' },
              { year: '2024-25', title: 'Expansion', desc: 'Nationwide distribution, certifications achieved' },
              { year: '2025+', title: 'Future', desc: 'Bionic Restaurants, Homes, Wellness Centres' }
            ].map((milestone, index) => (
              <div
                key={milestone.year}
                className={`flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <div className="text-primary font-bold text-xl mb-2">{milestone.year}</div>
                    <h4 className="font-bold text-gray-900 text-lg mb-2">{milestone.title}</h4>
                    <p className="text-gray-600">{milestone.desc}</p>
                  </div>
                </div>
                
                <div className="relative w-8 h-8 flex-shrink-0">
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary rounded-full border-4 border-white shadow-lg"></div>
                </div>
                
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;