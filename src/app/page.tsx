"use client";
import Berita from "@/components/Berita";
import ProfileKepalaDesa from "@/components/ProfileKepalaDesa";
import RingkasanPanulisanTimur from "@/components/RingkasanPanulisanTimur";
import StrukturOrganisasi from "@/components/StrukturOrganisasi";
import TugasWewenangAparatDesa from "@/components/TugasDanWewenangAparatDesa";
import Image from "next/image";
export default function Home() {
  return (
    <div className="lg:pt-5 bg-main">
      <div className="lg:flex lg:justify-between px-2 md:px-5 lg:px-[54px]">
        <div className="pt-5 md:pt-5 lg:mt-10 lg:w-1/2 animate-fade-in">
          <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800 transition-transform duration-300 transform hover:scale-105">
            Selamat Datang di Desa Panulisan Timur
          </h1>
          <h6 className="text-gray-600 text-xl lg:text-xl mt-5">Kecamatan Dayeuhluhur Kabupaten Cilacap</h6>
        </div>
        <div className="mt-10 md:mt-10 lg:mt-10 flex justify-center">
          <div className="relative w-100 lg:h-100 h-100 transition-transform duration-300 transform hover:scale-105">
            <Image
              src="/images/banggabangundesa.jpg"
              width={550}
              height={550}
              alt="Desa Panulisan Timur"
              className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <RingkasanPanulisanTimur />
      </div>
      <div className="">
        <ProfileKepalaDesa />
      </div>
      <div>
        <TugasWewenangAparatDesa />
      </div>
      <div>
        <div className="mt-5 lg:mt-10 px-2 bg-white py-2 lg:mx-5">
          <h2 className="text-2xl font-semibold text-black animate-fade-in">Peta Wilayah Desa</h2>
          <div className="relative mt-3" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1988.9323898817697!2d109.19483270000001!3d-7.3941242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68ccfa0d3d2873%3A0x38c066544d9fc70!2sDesa%20Panulisan%20Timur%2C%20Kecamatan%20Dayeuhluhur%2C%20Kabupaten%20Cilacap%2C%20Jawa%20Tengah!5e0!3m2!1sen!2sid!4v1645631720245!5m2!1sen!2sid"
              title="Peta Desa Panulisan Timur"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      <div>
        <Berita />
      </div>

      <div className="mt-5 px-2 lg:px-5 animate-slide-up">
        <h1 className="text-3xl font-bold text-center text-green-600 mb-6 animate-fade-in">Desa Panulisan Timur</h1>
        <div className="relative mt-5" style={{ paddingBottom: "56.25%" }}>
          <div className="relative w-full h-screen">
            <iframe
              src="https://drive.google.com/file/d/1aSquZJRyYVQsti9sg1QWnGlo28VfLjyb/preview"
              width="100%"
              height="100%"
              allow="autoplay"
              className="absolute top-0 left-0"
              style={{ border: "none" }}
            />
          </div>
          {/* <video className="absolute top-0 left-0 w-full h-full" controls style={{ objectFit: "cover" }}>
            <source src="https://drive.google.com/uc?export=preview&id=1aSquZJRyYVQsti9sg1QWnGlo28VfLjyb" type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
        </div>
      </div>
      <div className="px-2 lg:px-5 pb-5">
        <StrukturOrganisasi />
      </div>
      <div className="px-2 lg:px-5 pb-5">
        <Image
          src="/images/strukturorganisasi.jpg"
          width={550}
          height={550}
          alt="Desa Panulisan Timur"
          className="rounded-lg w-full shadow-lg hover:shadow-xl transition-shadow duration-300"
        />
      </div>
    </div>
  );
}
