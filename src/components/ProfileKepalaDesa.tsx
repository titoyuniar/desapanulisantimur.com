"use client";
import React from "react";

const ProfileKepalaDesa: React.FC = () => {
  return (
    <div className="bg-white p-3 lg:p-6 rounded-lg max-w-2xl mx-auto my-5">
      <h2 className="text-2xl font-semibold text-center text-black mb-6">Profil Kepala Desa</h2>
      <div className="flex flex-col items-center">
        <div className="relative w-32 h-32 mb-4">
          <img
            src="/images/hariyantoo.jpg"
            width={128}
            height={128}
            alt="Kepala Desa Panulisan Timur"
            className="rounded-full shadow-lg"
          />
        </div>
        <h3 className="text-2xl font-semibold text-gray-700">Bapak HARIYANTO</h3>
        <p className="text-gray-600 italic">Kepala Desa Panulisan Timur</p>
      </div>

      <div className="mt-6">
        <h4 className="text-base font-semibold text-gray-700">Biografi Singkat</h4>
        <p className="text-gray-800 leading-relaxed text-xs">Bapak HARIYANTO lahir di Panulisan Timur pada tanggal 07 April 1957</p>
      </div>

      <div className="mt-4">
        <h4 className="text-base font-semibold text-gray-700">Visi dan Misi</h4>
        <p className="text-gray-800 leading-relaxed text-xs">
          <strong>Visi:</strong>
          <div>Mewujudkan desa yang sejahtera, mandiri, dan berdaya saing.</div>
        </p>
        <p className="text-gray-700 leading-relaxed mt-1">
          <strong>Misi:</strong>
          <ul className="list-disc list-inside">
            <li className="text-xs">Meningkatkan partisipasi masyarakat dalam pembangunan desa.</li>
            <li className="text-xs">Memajukan ekonomi lokal dengan mengoptimalkan potensi sumber daya.</li>
            <li className="text-xs">Melestarikan budaya dan tradisi lokal dalam setiap kegiatan.</li>
          </ul>
        </p>
      </div>

      <div className="mt-4">
        <h4 className="text-base font-semibold text-gray-800">Kegiatan dan Pencapaian</h4>
        <p className="text-gray-700 leading-relaxed text-xs">
          Di bawah kepemimpinan beliau, Desa Panulisan Timur berhasil mendapatkan penghargaan sebagai desa terbaik dalam program
          Pembangunan Berkelanjutan dan meningkatkan infrastruktur desa secara signifikan.
        </p>
      </div>
    </div>
  );
};

export default ProfileKepalaDesa;
