import InfoList from "@/components/Footer/InfoList";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="bg-black w-full text-black ">
        <div className="px-2 py-5 text-white sm:px-2 sm:py-3 sm:text-white md:px-5 lg:px-5 md:py-5 md:text-white md:flex md:justify-between lg:py- lg:text-white lg:grid lg:grid-cols-2 lg:gap-10">
          <div className="w-475">
            {/* <div>
              <Image src={"/images/kulakin.png"} width={88} height={38} alt="kulakin" />
            </div> */}
            {/* <h1 className="text-2xl font-semibold mt-3"># Makin Yakin Bersama Kulakin</h1> */}
            <div className="mt-3 text-sm">
              <span className="text-xs">desapanulisantimur.com</span>
            </div>
            <div className="flex gap-3 mt-5">
              <a href="https://instagram.com/pemdespanulisantimur1" target="_blank">
                <Image src={"/icons/instagram.svg"} width={24} height={24} alt="instagram" />
              </a>
              {/* <a href="https://facebook.com/" target="_blank">
                <Image src={"/icons/facebook.svg"} width={24} height={24} alt="facebook" />
              </a>
              <a href="https://youtube.com/" target="_blank">
                <Image src={"/icons/youtube.svg"} width={24} height={24} alt="youtube" />
              </a> */}
              <a href="mailto:pantim21.go.id@gmail.com" target="_blank">
                <Image src={"/icons/gmail.svg"} width={24} height={24} alt="gmail" />
              </a>
            </div>
            <div className="mt-5 text-xs">
              <span className="block text-xs">087719888370 (Utin Dartini) & 081215768496 (Budi Arief S) </span>
              <span>© {currentYear} - desapanulisantimur.com All rights reserved.</span>
            </div>
          </div>
          <div className="md:grid md:grid-cols-1 lg:grid lg:grid-cols-2 lg:mt-5 lg:gap-5">
            <InfoList items={["TENTANG KAMI", "LAYANAN ONLINE", "BUMDES", "DONWLOAD APK"]} className="mt-5 sm:mt-5 md:mt-5 lg:mt-0" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
