"use client";
import React from "react";
import Image from "next/image";

const TugasWewenangAparatDesa: React.FC = () => {
  return (
    <div className="bg-white rounded-lg p-3 lg:p-6 md:m-4 lg:m-5">
      <h1 className="text-2xl font-bold text-center text-green-600 mb-4">Tugas dan Wewenang Aparat Desa</h1>

      <div className="flex justify-center mb-6">
        <div className="relative w-100 h-100">
          <Image src="/images/aparatdesa.jpg" width={1200} height={1200} alt="Aparat Desa" className="rounded-lg shadow-lg" />
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4 text-xs">
        Aparat desa memiliki peran penting dalam penyelenggaraan pemerintahan di tingkat desa. Tugas dan wewenang aparat desa meliputi:
      </p>

      <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 text-xs">
        <li>Menyusun dan melaksanakan kebijakan pemerintahan desa.</li>
        <li>Mengelola administrasi dan pelayanan publik di desa.</li>
        <li>Melakukan pengawasan terhadap penggunaan anggaran desa.</li>
        <li>Memberdayakan masyarakat melalui program pembangunan.</li>
        <li>Menjalin kerjasama dengan lembaga lain untuk pembangunan desa.</li>
        <li>Menangani masalah sosial dan mengedukasi masyarakat.</li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4 text-xs">
        Aparat desa bertanggung jawab untuk menciptakan lingkungan yang kondusif bagi pertumbuhan dan perkembangan masyarakat desa.
        Dengan demikian, mereka harus mampu bekerja sama dengan masyarakat dan pemangku kepentingan lainnya.
      </p>
    </div>
  );
};

export default TugasWewenangAparatDesa;
