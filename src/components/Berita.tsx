import React from "react";

const berita = [
  {
    judul: "Festival Budaya Tahunan Desa Panulisan Timur",
    tanggal: "20 September 2024",
    isi: "Desa Panulisan Timur akan menggelar festival budaya tahunan yang menampilkan berbagai pertunjukan seni dan kerajinan lokal. Ayo datang dan saksikan keindahan budaya kita!",
  },
  {
    judul: "Program Pemberdayaan Masyarakat",
    tanggal: "15 September 2024",
    isi: "Dalam upaya meningkatkan kesejahteraan, pemerintah desa meluncurkan program pemberdayaan masyarakat. Program ini bertujuan untuk meningkatkan keterampilan dan pendapatan warga.",
  },
  {
    judul: "Pembangunan Infrastruktur Baru",
    tanggal: "10 September 2024",
    isi: "Pemerintah desa sedang melaksanakan pembangunan infrastruktur baru, termasuk jalan dan jembatan, untuk meningkatkan aksesibilitas desa.",
  },
  {
    judul: "Pembersihan Sungai Desa",
    tanggal: "5 September 2024",
    isi: "Dalam rangka menjaga kebersihan lingkungan, warga Desa Panulisan Timur melakukan kegiatan pembersihan sungai. Mari jaga kebersihan bersama!",
  },
  {
    judul: "Pelatihan Kerajinan Tangan",
    tanggal: "1 September 2024",
    isi: "Desa Panulisan Timur mengadakan pelatihan kerajinan tangan untuk meningkatkan keterampilan warga dalam memproduksi barang berkualitas.",
  },
  {
    judul: "Kunjungan Tim Pemerintah Kabupaten",
    tanggal: "25 Agustus 2024",
    isi: "Tim pemerintah kabupaten melakukan kunjungan ke Desa Panulisan Timur untuk meninjau perkembangan program pembangunan desa.",
  },
  {
    judul: "Lomba Kebersihan Desa",
    tanggal: "20 Agustus 2024",
    isi: "Desa Panulisan Timur mengadakan lomba kebersihan antarRT untuk mendorong warga menjaga lingkungan yang bersih dan sehat.",
  },
  {
    judul: "Donasi Buku untuk Perpustakaan Desa",
    tanggal: "15 Agustus 2024",
    isi: "Warga desa berdonasi buku untuk meningkatkan koleksi perpustakaan desa agar lebih bermanfaat bagi anak-anak.",
  },
  {
    judul: "Penyuluhan Kesehatan Gratis",
    tanggal: "10 Agustus 2024",
    isi: "Puskesmas mengadakan penyuluhan kesehatan gratis untuk masyarakat tentang pentingnya pola hidup sehat.",
  },
  {
    judul: "Rapat Evaluasi Program Desa",
    tanggal: "5 Agustus 2024",
    isi: "Pemerintah desa mengadakan rapat evaluasi untuk menilai pelaksanaan program yang telah berjalan dan merencanakan langkah selanjutnya.",
  },
];

const Berita: React.FC = () => {
  return (
    <div className="lg:p-5 p-1 bg-gray-100 rounded-lg animate-slide-up mt-3">
      <h1 className="text-2xl mt-3 font-semibold text-center text-black mb-3 animate-fade-in">Berita Desa Panulisan Timur</h1>
      <div className="space-y-3 lg:space-y-3">
        {berita.map((item, index) => (
          <div
            key={index}
            className="bg-white lg:p-5 p-3 rounded-lg hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 animate-fade-in"
          >
            <h2 className="text-xl font-semibold text-green-800">{item.judul}</h2>
            <p className="text-xs mt-1 text-gray-500 mb-1">{item.tanggal}</p>
            <p className="text-gray-700 text-sm">{item.isi}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Berita;
