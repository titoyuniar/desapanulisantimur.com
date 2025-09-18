import React from "react";

const anggotaOrganisasi = [
  {
    nama: "Hariyanto",
    jabatan: "Kepala Desa",
    foto: "/images/hariyantoo.jpg", // Ganti dengan path foto
  },
  {
    nama: "Arief Budi Setiawan, S.pd.SD",
    jabatan: "Sekretaris Desa",
    foto: "/images/budi.jpg", // Ganti dengan path foto
  },
  {
    nama: "Wardiana",
    jabatan: "Kaur Keuangan",
    foto: "/images/wardiana.jpg", // Ganti dengan path foto
  },
  {
    nama: "Nendiyanto",
    jabatan: "Kaur Umum dan Perencanaan",
    foto: "/images/nendiyanto.jpg", // Ganti dengan path foto
  },
  {
    nama: "Utin Dartini",
    jabatan: "Kepala Seksi Pelayanan",
    foto: "/images/utin.jpg", // Ganti dengan path foto
  },
  {
    nama: "Rusnanto",
    jabatan: "Kepala Seksi Kesejahteraan",
    foto: "/images/rusnanto.jpg", // Ganti dengan path foto
  },
  {
    nama: "Asep Yulianto",
    jabatan: "Kepala Seksi Pemerintahan",
    foto: "/images/asep.jpg", // Ganti dengan path foto
  },
  {
    nama: "Rizfal Danis Aprilio",
    jabatan: "Kadus Cilubang",
    foto: "/images/rizfal.jpg", // Ganti dengan path foto
  },
  {
    nama: "Wawan Suherman",
    jabatan: "Kadus Cirungkun",
    foto: "/ellipse1.jpg", // Ganti dengan path foto
  },
  {
    nama: "Abdul Rohimin",
    jabatan: "Kadus Neglasari",
    foto: "/images/abdul.jpg", // Ganti dengan path foto
  },
  {
    nama: "Hendra Dodi Sunanto",
    jabatan: "Kadus Ciawitali",
    foto: "/images/hendra.jpg", // Ganti dengan path foto
  },
  {
    nama: "Darkim Darwanto",
    jabatan: "Unsur Staff",
    foto: "/images/darwanto.jpg", // Ganti dengan path foto
  },
  {
    nama: "Herher Hartati",
    jabatan: "Unsur Staff",
    foto: "/images/herher.jpg", // Ganti dengan path foto
  },
  {
    nama: "Charista Warga P.",
    jabatan: "Unsur Staff",
    foto: "/images/charista.jpg", // Ganti dengan path foto
  },
  {
    nama: "Denar Sriarso",
    jabatan: "Unsur Staff",
    foto: "/images/denar.jpg", // Ganti dengan path foto
  },
  {
    nama: "Maman Rusmana",
    jabatan: "Unsur Staff",
    foto: "/images/ss.jpg", // Ganti dengan path foto
  },
];

const StrukturOrganisasi: React.FC = () => {
  return (
    <div className="bg-gradient-to-r animate-slide-up p-5 lg:p-8 rounded-lg  mt-5">
      <h1 className="text-2xl lg:text-3xl font-bold text-center text-black mb-6 animate-fade-in">
        Struktur Organisasi Desa Panulisan Timur
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 lg:gap-6">
        {anggotaOrganisasi.map((anggota, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 animate-fade-in"
          >
            <div className="flex flex-col items-center">
              <img
                src={anggota.foto}
                alt=""
                className="w-32 h-32 rounded-full bg-gray-300 mb-4 border-4 border-green-400 shadow-md transition-transform duration-300 transform hover:scale-105"
              />
              <h2 className="text-sm font-semibold text-green-800 mb-1">{anggota.nama}</h2>
              <p className="text-xs text-gray-600 italic">{anggota.jabatan}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StrukturOrganisasi;
