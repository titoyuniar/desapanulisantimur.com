import React from "react";

const biodata = {
  namaDesa: "Panulisan Timur",
  kecamatan: "Dayeuhluhur",
  kabupaten: "Cilacap",
  provinsi: "Jawa Tengah",
  kodePos: "63211",
  luasWilayah: "1826 ha",
  jumlahPenduduk: "5436 jiwa",
  mayoritasSuku: "Sunda",
  bahasaSehariHari: "Bahasa Sunda",
  visiDesa: "Mewujudkan masyarakat yang mandiri, sejahtera, dan berbudaya.",
  misiDesa: [
    "Meningkatkan kualitas pendidikan dan kesehatan.",
    "Mendorong pengembangan ekonomi lokal.",
    "Melestarikan budaya dan lingkungan.",
  ],
  fasilitasUmum: ["Sekolah Dasar (SD) dan Sekolah Menengah Pertama (SMP)", "Puskesmas", "Balai Desa"],
  potensiUnggulan: ["Pertanian (padi, sayuran)", "Kerajinan tangan (anyaman bambu)"],
  kegiatanRutin: ["Arisan warga setiap bulan", "Festival budaya tahunan"],
};

const BiodataDesa: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-green-200 to-blue-200 p-3 lg:p-8 mt-5 rounded-lg shadow-lg transition-transform transform">
      <h1 className="text-3xl text-center font-bold text-white mb-4 animate-fade-in">{`Biodata Desa: ${biodata.namaDesa}`}</h1>
      <div className="flex justify-center gap-3 lg:gap-10">
        <div className="text-white">
          <p className="transition-all hover:underline">
            <strong className="font-bold">Kecamatan:</strong> {biodata.kecamatan}
          </p>
          <p className="transition-all hover:underline">
            <strong className="font-bold">Kabupaten:</strong> {biodata.kabupaten}
          </p>
          <p className="transition-all hover:underline">
            <strong className="font-bold">Provinsi:</strong> {biodata.provinsi}
          </p>
          <p className="transition-all hover:underline">
            <strong className="font-bold">Kode Pos:</strong> {biodata.kodePos}
          </p>
          <p className="transition-all hover:underline">
            <strong className="font-bold">Luas Wilayah:</strong> {biodata.luasWilayah}
          </p>
          <p className="transition-all hover:underline">
            <strong className="font-bold">Jumlah Penduduk:</strong> {biodata.jumlahPenduduk}
          </p>
          <p className="transition-all hover:underline">
            <strong className="font-bold">Mayoritas Suku:</strong> {biodata.mayoritasSuku}
          </p>
          <p className="transition-all hover:underline">
            <strong className="font-bold">Bahasa Sehari-hari:</strong> {biodata.bahasaSehariHari}
          </p>
        </div>
        <div className="text-white">
          <h2 className="text-xl font-semibold">Fasilitas Umum</h2>
          <ul className="list-disc list-inside">
            {biodata.fasilitasUmum.map((fasilitas, index) => (
              <li key={index} className="animate-fade-in">
                {fasilitas}
              </li>
            ))}
          </ul>

          <h2 className="text-xl font-semibold mt-4">Kegiatan Rutin</h2>
          <ul className="list-disc list-inside">
            {biodata.kegiatanRutin.map((kegiatan, index) => (
              <li key={index} className="animate-fade-in">
                {kegiatan}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BiodataDesa;
