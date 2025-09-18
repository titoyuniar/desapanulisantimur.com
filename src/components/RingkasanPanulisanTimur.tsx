"use client";
import React from "react";

const RingkasanPanulisanTimur: React.FC = () => {
  return (
    <div className="bg-white rounded-lg p-2 lg:p-6 lg:m-5">
      <h1 className="text-2xl font-semibold text-center text-black mb-4">Sekilas Tentang Desa Panulisan Timur</h1>
      <p className="text-gray-700 leading-relaxed mb-4">
        Desa Panulisan Timur adalah sebuah desa yang terletak di Kecamatan Dayeuhluhur, Kabupaten Cilacap, Provinsi Jawa Tengah. Dengan
        luas 17.640 km², desa ini berbatasan dengan beberapa desa lain serta Kota Banjar Patroman.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Secara administratif, Desa Panulisan Timur terdiri dari 4 dusun, 13 Rukun Warga, dan 48 Rukun Tetangga. Desa ini memiliki
        sejarah yang kaya, dimulai dari kedatangan Raden Sungging Purbangkara dari Kerajaan Mataram, yang dikenal sebagai Raden Juru
        Tulis.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Pada tahun 1993, desa ini mengalami pemekaran, membentuk tiga desa baru. Dalam pengelolaannya, Desa Panulisan Timur
        mengedepankan pembangunan berkelanjutan dengan memanfaatkan sumber daya alam, seperti persawahan, perkebunan, dan peternakan.
      </p>
      <h2 className="text-xl font-semibold text-black mt-4">Sumber Daya Alam</h2>
      <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-2">
        <li>Persawahan</li>
        <li>Perladangan</li>
        <li>Perkebunan</li>
        <li>Peternakan</li>
        <li>Kerajinan dan industri kecil</li>
        <li>Jasa dan perdagangan</li>
      </ul>
    </div>
  );
};

export default RingkasanPanulisanTimur;
