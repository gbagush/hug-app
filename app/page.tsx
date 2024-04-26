import Image from "next/image";

import { FaSearch, FaPencilAlt } from "react-icons/fa";
import { IoMusicalNotes } from "react-icons/io5";

import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

import Hero from "@/components/homepage/Hero";
import Devider from "@/components/homepage/Devider";
import Products from "@/components/homepage/Products";
import Line from "@/components/homepage/Line";
import FindPsychologist from "@/components/homepage/FindPsychologist";

import KitBanner from "@/public/kit-banner.png";
import CheckUpBanner from "@/public/checkup-banner.png";
import MeditationBanner from "@/public/meditation-banner.png";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Devider />
      <Products
        title="Panduan Kesehatan Mental"
        description="Kesehatan mentalmu sangat penting! Dapatkan berbagai macam panduan kesehatan mentalmu disini."
        buttonText="Dapatkan Panduannya"
        href="/panduan"
        banner={KitBanner}
        icon={FaPencilAlt}
        reverse={false}
      />
      <Products
        title="Cek Kondisi Mentalmu Disini!"
        description="Dapatkan gambaran kesehatan mentalmu dengan mengikuti tes kondisi kesehatan mental oleh HugAPP"
        buttonText="Coba Tes"
        href="/checkup"
        banner={CheckUpBanner}
        icon={FaSearch}
        reverse={true}
      />
      <Line />
      <Products
        title="Dengarkan Musik Meditasi!"
        description="Tenangkan pikiran dan jiwamu dengan bermeditasi. Temukan berbagai macam musik latar belakang untuk meditasi anda dimanapun dan kapanpun."
        buttonText="Coba Meditasi"
        href="/meditasi"
        banner={MeditationBanner}
        icon={IoMusicalNotes}
        reverse={false}
      />
      <Line />

      <FindPsychologist />
      <Footer />
    </>
  );
}
