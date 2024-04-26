import Link from "next/link";

import { FaSearch, FaLightbulb, FaHeart } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa6";

import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";

import AccordionItem from "@/components/kit/Acordion";
import Hero from "@/components/kit/Hero";
import Header from "@/components/kit/Header";

export default function Kit() {
  return (
    <>
      <Navbar />
      <Hero />
      <section id="acordion" className="text-center">
        <div className="container mx-auto mt-10 lg:max-w-4xl">
          <Header icon={FaSearch} title="Informasi Dasar" />
          <AccordionItem title="Pengertian">
            Kesehatan mental adalah keadaan sejahtera di mana seseorang
            menyadari potensinya sendiri, dapat mengatasi tekanan hidup normal,
            dapat bekerja secara produktif dan menghasilkan, serta mampu
            memberikan kontribusi kepada komunitasnya.
          </AccordionItem>

          <AccordionItem title="Mengapa Penting?">
            Kesehatan mental sama pentingnya dengan kesehatan fisik. Gangguan
            kesehatan mental dapat menyebabkan berbagai masalah dalam hidup,
            seperti kesulitan belajar dan bekerja, masalah dalam hubungan, dan
            bahkan bunuh diri.
          </AccordionItem>

          <AccordionItem title="Faktor Risiko">
            <div className="container">
              <ul className="list-disc">
                <li>
                  <strong>Faktor Biologi: </strong>
                  genetik, kimia pada otak, gangguan pada otak
                </li>
                <li>
                  <strong>Faktor Kehidupan: </strong>
                  trauma, pelecehan, racun, alkohol, obat-obatan
                </li>
                <li>
                  <strong>FaktorKkeluarga: </strong>
                  riwayat keluarga, masalah keluarga
                </li>
              </ul>
            </div>
          </AccordionItem>

          <Header icon={FaLightbulb} title="Kenali Kesehatan Mental Kamu" />
          <AccordionItem title="Gejala">
            <div className="container">
              <ul className="list-disc">
                <li>Sering merasa sedih</li>
                <li>Kehilangan kemampuan untuk berkonsentrasi</li>
                <li>
                  Ketakutan atau kekhawatiran yang berlebihan atau perasaan
                  bersalah yang menghantui
                </li>
                <li>Perubahan mood atau suasana hati yang drastis</li>
                <li>Tampak menarik diri dari teman dan lingkungan sosial</li>
                <li>
                  Kelelahan yang signifikan, energi menurun, atau mengalami
                  masalah tidur
                </li>
                <li>
                  Ketidakmampuan untuk mengatasi stres atau masalah sehari-hari
                </li>
                <li>Paranoid serta delusi dan halusinasi</li>
                <li>Tidak mampu memahami situasi dan orang-orang</li>
                <li>
                  Kebiasaan merokok dan mengonsumsi alkohol secara berlebihan
                  atau menggunakan narkoba
                </li>
                <li>Perubahan besar dalam kebiasaan makan</li>
                <li>Perubahan pada gairah atau dorongan seksual</li>
                <li>Marah berlebihan dan rentan melakukan kekerasan</li>
                <li>Kerap merasa tak berdaya atau putus asa</li>
                <li>Berpikir untuk bunuh diri</li>
              </ul>
            </div>
          </AccordionItem>
          <AccordionItem title="Tips Menjaga Kesehatan Mental">
            <div className="container">
              <ul className="list-disc">
                <li>Katakan hal positif pada diri sendiri</li>
                <li>Tuliskan hal-hal yang patut disyukuri</li>
                <li>Fokus pada satu hal pada satu waktu</li>
                <li>Olahraga</li>
                <li>Makanlah makanan yang enak</li>
                <li>Terbukalah pada seseorang</li>
                <li>Lakukan sesuatu untuk orang lain</li>
                <li>Istirahat</li>
                <li>Tidur tepat waktu</li>
              </ul>
            </div>
          </AccordionItem>

          <Header
            icon={FaHandHoldingHeart}
            title="Sumber Daya Kesehatan Mental"
          />

          <AccordionItem title="Komunitas Kesehatan Mental">
            <div className="container">
              <ul className="list-disc">
                <li>
                  <Link href="https://www.intothelightid.org/">
                    Into The Light Indonesia
                  </Link>
                </li>
                <li>
                  <Link href="https://skizofrenia.org/">
                    Komunitas Peduli Skizofrenia Indonesia (KPSI)
                  </Link>
                </li>
                <li>
                  <Link href="https://www.instagram.com/bipolarcare.indonesia/">
                    Bipolar Care Indonesia
                  </Link>
                </li>
                <li>Indonesia Mental Health Care Foundation</li>
                <li>
                  <Link href="https://www.instagram.com/gethappy.id/">
                    Get Happy
                  </Link>
                </li>
              </ul>
            </div>
          </AccordionItem>

          <AccordionItem title="Hotline">
            Pusat Panggilan <strong>119</strong> dan Laman Resmi{" "}
            <Link href="https://www.pdskji.org/">
              <strong>PDSKJI</strong>
            </Link>{" "}
            Kini Bisa Layani Konsultasi Kesehatan Jiwa.
          </AccordionItem>
        </div>
      </section>

      <Footer />
    </>
  );
}
