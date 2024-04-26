"use client";
import { useState } from "react";

import Navbar from "@/components/common/Navbar";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

import { playList } from "./playlist";
import MusicCard from "@/components/meditation/MusicCard";

export default function App() {
  const [selectedSrc, setSelectedSrc] = useState<string>("");

  const handleCardClick = (src: string) => {
    setSelectedSrc(src);
  };

  return (
    <>
      <Navbar />
      <section id="hero" className="py-20 text-center">
        <div className="container mx-auto mt-10 md:px-12">
          <h1 className="text-2xl leading-none text-cyan-500 font-extrabold lg:text-5xl lg:leading-tight mb-2">
            Kelola Mood dengan Meditasi
            <br />
            Jadi Mindful Tiap Hari
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-gray-500 lg:max-w-4xl">
            Lepas semua kecemasan dan pikiran yang menganggu dengan bermeditasi
            bersama kami
          </p>

          <div className="flex flex-wrap items-center justify-center mt-12 mb-16 gap-8">
            {playList.map((music) => (
              <MusicCard
                key={music.id}
                image={music.img}
                title={music.name}
                writer={music.writer}
                onClick={() => handleCardClick(music.src)}
              />
            ))}
          </div>
        </div>
        <div className="fixed bottom-0 w-full bg-white p-4 shadow-md">
          <AudioPlayer
            src={selectedSrc}
            onPlay={(e) => console.log("onPlay")}
            className=""
          />
        </div>
      </section>

      {/* <AudioPlayer
        playList={playList}
        activeUI={{
          all: true,
          progress: "waveform",
        }}
        placement={{
          player: "bottom",
        }}
        rootContainerProps={{
          colorScheme: "light",
          width: "100%",
        }}
      /> */}
    </>
  );
}
