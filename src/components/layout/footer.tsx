import footerlinks1, {
  footerlinks2,
  footerlinks3,
} from "@/data/footer/footer-links";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SiTripadvisor } from "react-icons/si";
export default function Footer() {
  return (
    <footer
      className="w-full bg- mt-auto relative
            max-w-[1500px]
            mx-auto
            xl:px-20
            md:px-10
            sm:px-10
            px-6"
    >
      <div className="flex flex-col gap-5 md:gap-0 ">
        <div className="flex lg:flex-row lg:justify-between items-center flex-col">
          <div className="flex flex-col items-center">
            <div className="relative mb-">
              <Image
                src="/assets/logo.png"
                alt="SerandibGo logo"
                width={180}
                height={180}
              />
            </div>
            <div className="flex flex-row absolute mt-32 gap-3 hover:cursor-pointer">
              <a
                href="https://www.instagram.com/jade_green_hambantota?igsh=NjRseW54bmxmNmI="
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} strokeWidth={2} />
              </a>
              <a
                href="https://www.facebook.com/share/1Ab9VQQPyT/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={20} strokeWidth={2} />
              </a>

              <a
                href="https://youtube.com/@jadegreenhotelhambantota?si=JCdJonq40bfCPfIL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube size={20} strokeWidth={2} />
              </a>

              <a
                href="https://www.linkedin.com/company/jade-green-hotel-hambantota/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} strokeWidth={2} />
              </a>

              <a
                href="https://www.tripadvisor.co.uk/Hotel_Review-g1027209-d10807765-Reviews-Jade_Green_Hotel_Hambantota-Hambantota_Tangalle_Southern_Province.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiTripadvisor size={20} />
              </a>
            </div>
          </div>
          <div className="flex md:flex-row flex-col md:gap-60 gap-5 lg:mt-16 hover:cursor-pointer font-medium mt-10">
            <div className="flex flex-col md:text-end text-center ">
              {footerlinks1.map((item) => (
                <div
                  className="hover:text-primary hover:underline"
                  key={item.id}
                >
                  <Link href={item.link}>{item.name}</Link>
                </div>
              ))}
            </div>
            <div className="flex flex-col md:text-end text-center">
              {footerlinks2.map((item) => (
                <div
                  className="hover:text-primary hover:underline"
                  key={item.id}
                >
                  <Link href={item.link}>{item.name}</Link>
                </div>
              ))}
            </div>
            <div className="flex flex-col md:text-end text-center ">
              {footerlinks3.map((item) => (
                <div
                  key={item.id}
                  className="hover:text-primary hover:underline"
                >
                  <Link href={item.link}>{item.name}</Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center gap-10">
          © {new Date().getFullYear()} serandibgo.com
        </div>
      </div>
    </footer>
  );
}
