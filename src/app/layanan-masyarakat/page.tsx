import React from "react";

const layananMasyarakat = [
  {
    judul: "Pendaftaran KTP",
    deskripsi: "Layanan pendaftaran KTP untuk warga baru dan pembaruan data. Pastikan Anda membawa dokumen yang diperlukan.",
    gambar: "/images/ktp.jpg",
  },
  {
    judul: "Pelayanan Kesehatan",
    deskripsi:
      "Puskesmas Desa Panulisan Timur menyediakan layanan kesehatan gratis untuk warga. Kunjungi kami untuk pemeriksaan kesehatan rutin.",
    gambar: "/images/kesehatan.jpg",
  },
  {
    judul: "Pengaduan Masyarakat",
    deskripsi: "Warga dapat menyampaikan pengaduan terkait masalah di desa. Kami siap mendengarkan dan menyelesaikan masalah Anda.",
    gambar: "/images/pengaduan.jpg",
  },
  {
    judul: "Pemberian Bantuan Sosial",
    deskripsi: "Layanan pemberian bantuan sosial untuk warga yang membutuhkan",
    gambar: "/images/bantuan.jpg",
  },
  {
    judul: "Pelayanan Perizinan",
    deskripsi:
      "Layanan pengurusan izin usaha dan izin lainnya. Pastikan semua dokumen disiapkan dengan baik untuk mempercepat proses.",
    gambar: "/images/perizinan.jpg",
  },
];

const LayananMasyarakat: React.FC = () => {
  return (
    <div className="p-2 lg:p-5 bg-gradient-to-r bg-main rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-black mb-3 mt-3 lg:mt-0 text-center animate-fade-in">
        Layanan Masyarakat Desa Panulisan Timur
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {layananMasyarakat.map((layanan, index) => (
          <div
            key={index}
            className="bg-white p-2 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg animate-fade-in"
          >
            <img src="/images/group53.png" alt="" className="w-full h-40 object-cover rounded-md mb-4" />
            <h2 className="text-2xl font-semibold text-green-800">{layanan.judul}</h2>
            <p className="text-gray-700">{layanan.deskripsi}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LayananMasyarakat;
