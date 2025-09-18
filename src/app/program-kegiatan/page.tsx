import React from "react";

const programKegiatan = [
  {
    judul: "Pelatihan Keterampilan Kerajinan Tangan",
    tanggal: "15 Oktober 2024",
    isi: "Desa Panulisan Timur mengadakan pelatihan keterampilan kerajinan tangan untuk meningkatkan kreativitas dan ekonomi masyarakat. Pelatihan ini terbuka untuk semua warga.",
    gambar: "/images/kerajinan.jpg",
  },
  {
    judul: "Festival Budaya Panulisan",
    tanggal: "1 November 2024",
    isi: "Festival Budaya Panulisan akan diselenggarakan untuk merayakan kekayaan budaya dan tradisi lokal. Ayo bergabung untuk merasakan keindahan budaya kita!",
    gambar: "/images/festival.jpg",
  },
  {
    judul: "Pembersihan Lingkungan",
    tanggal: "20 November 2024",
    isi: "Kegiatan pembersihan lingkungan diadakan untuk menjaga kebersihan desa. Mari kita bersama-sama menjaga keindahan lingkungan kita!",
    gambar: "/images/pembersihan.jpg",
  },
  {
    judul: "Penyuluhan Kesehatan",
    tanggal: "5 Desember 2024",
    isi: "Puskesmas setempat akan mengadakan penyuluhan kesehatan mengenai pentingnya pola hidup sehat. Jangan lewatkan kesempatan ini!",
    gambar: "/images/kesehatan.jpg",
  },
  {
    judul: "Rapat Evaluasi Program Desa",
    tanggal: "10 Desember 2024",
    isi: "Rapat evaluasi akan membahas pelaksanaan program yang telah berjalan dan merencanakan langkah selanjutnya untuk pembangunan desa.",
    gambar: "/images/rapat.jpg",
  },
];

const ProgramKegiatan: React.FC = () => {
  return (
    <div className="lg:p-5 bg-gradient-to-r rounded-lg shadow-lg bg-main">
      <h1 className="text-2xl font-bold mt-5 lg:mt-0 text-black mb-3 text-center animate-fade-in">
        Program dan Kegiatan Desa Panulisan Timur
      </h1>
      <div className="space-y-4 px-3">
        {programKegiatan.map((item, index) => (
          <div
            key={index}
            className="bg-white p-3 lg:p-5 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg animate-fade-in"
          >
            <img src="/images/group53.png" alt="" className="w-full h-40 object-cover rounded-md mb-4" />
            <h2 className="text-2xl font-semibold text-green-800">{item.judul}</h2>
            <p className="text-sm text-gray-500 mb-2">{item.tanggal}</p>
            <p className="text-gray-700">{item.isi}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramKegiatan;
