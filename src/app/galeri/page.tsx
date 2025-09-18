import React from "react";

const galeriData = [
  {
    judul: "Festival Budaya 2023",
    deskripsi: "Momen indah dari Festival Budaya Desa Panulisan Timur yang menampilkan berbagai pertunjukan seni lokal.",
    gambar: "/images/festival.jpg", // Ganti dengan path gambar
  },
  {
    judul: "Pembersihan Sungai",
    deskripsi: "Kegiatan pembersihan sungai oleh warga desa untuk menjaga kebersihan lingkungan.",
    gambar: "/images/pembersihan.jpg", // Ganti dengan path gambar
  },
  {
    judul: "Pelatihan Kerajinan Tangan",
    deskripsi: "Pelatihan kerajinan tangan bagi warga untuk meningkatkan keterampilan dan kreativitas.",
    gambar: "/images/pelatihan.jpg", // Ganti dengan path gambar
  },
  {
    judul: "Kunjungan Tim Kabupaten",
    deskripsi: "Kunjungan tim pemerintah kabupaten untuk meninjau program-program desa.",
    gambar: "/images/kunjungan.jpg", // Ganti dengan path gambar
  },
];

const Galeri: React.FC = () => {
  return (
    <div className="p-2 lg:p-5 bg-gradient-to-r bg-main rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-black mb-6 text-center animate-fade-in">Galeri Desa Panulisan Timur</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {galeriData.map((item, index) => (
          <div key={index} className="bg-white rounded-lg transition-transform transform hover:scale-105 animate-fade-in">
            <img src="images/group53.png" alt="" className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-2">
              <h2 className="text-xl font-semibold text-green-800">{item.judul}</h2>
              <p className="text-gray-600 mt-2">{item.deskripsi}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Galeri;
