import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { GithubIcon } from './Icons';
import { profileData } from '../data/profile';
import { useLanguage } from '../context/LanguageContext';
import DepthText from './common/DepthText';

export default function Hero() {
  const { t, getLocalized } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        {/* Intro Greeting */}
        <div className="text-base sm:text-lg font-semibold text-secondary-readable mb-4 tracking-wide uppercase">
          {t('hero.greeting')}
        </div>

        {/* 3D DepthText Name */}
        <div className="mb-6 flex justify-center py-2">
          <DepthText
            text={getLocalized(profileData.name)}
            layers={16}
            depth={2.2}
            faceColor="#FFFFFF"
            depthColor="#7C3AED"
            tilt={8}
            pointerTracking
            smoothing={0.14}
            perspective={950}
            autoOrbit
            orbitSpeed={0.3}
            fontSize="clamp(2.2rem, 6.5vw, 5.2rem)"
            fontWeight={900}
            shadow
          />
        </div>

        {/* Profile Image (pic1.png) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative mb-6 group flex justify-center"
        >
          {/* Ambient Glow */}
          <div className="absolute -inset-2 bg-gradient-to-r from-[#8B5CF6]/40 via-[#6366F1]/30 to-[#38BDF8]/40 rounded-full blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none" />

          {/* Avatar Container with Gradient Ring & Border */}
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-full p-1 bg-gradient-to-b from-[#8B5CF6] via-[#272A33] to-[#8B5CF6]/50 shadow-2xl shadow-[#8B5CF6]/20 transition-transform duration-500 group-hover:scale-105">
            <img
              src={profileData.avatar || "/images/pic1.png"}
              alt={getLocalized(profileData.name)}
              className="w-full h-full object-cover object-top rounded-full ring-2 ring-[#0F1117]"
              width="192"
              height="192"
              loading="eager"
            />
          </div>
        </motion.div>

        {/* Subtitle / Role & Affiliation */}
        <div className="max-w-5xl mx-auto mb-4 flex flex-col items-center">
          <h2 className="text-lg sm:text-2xl font-bold text-title-readable leading-relaxed text-center">
            {getLocalized(profileData.title)}
          </h2>
          <p className="mt-2 text-xs sm:text-sm md:text-base text-secondary-readable font-medium text-center whitespace-normal sm:whitespace-nowrap">
            {t('hero.affiliation')}
          </p>
        </div>

        {/* Short Bio / Motto */}
        <div className="max-w-2xl mx-auto mb-8 flex justify-center">
          <p className="text-sm sm:text-base text-secondary-readable font-medium text-center">
            {getLocalized(profileData.shortBio)}
          </p>
        </div>

        {/* Social & Contact Direct Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-center gap-3 text-[#E2E8F0]"
        >
          <a
            href={profileData.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-[#171A21]/70 border border-[#272A33] hover:border-[#8B5CF6]/50 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] shadow-md"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href={profileData.socialLinks.email}
            className="p-3 rounded-xl bg-[#171A21]/70 border border-[#272A33] hover:border-[#8B5CF6]/50 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] shadow-md"
            aria-label="Send Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href={profileData.socialLinks.phone}
            className="p-3 rounded-xl bg-[#171A21]/70 border border-[#272A33] hover:border-[#8B5CF6]/50 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] shadow-md"
            aria-label="Call Phone"
          >
            <Phone className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
