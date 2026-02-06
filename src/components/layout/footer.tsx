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
              <Image src="/assets/logo.png" alt="SerandibGo logo" width={180} height={180} />
            </div>
            <div className="flex flex-row absolute mt-32 gap-3 hover:cursor-pointer">
              <a
                href="https://www.instagram.com/serendibgo?igsh=c3h2bTE2cjJvaWth"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} strokeWidth={2} />
              </a>
              <a
                href="https://www.facebook.com/share/17hceDzHQc/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={20} strokeWidth={2} />
              </a>

              <a
                href="https://youtube.com/@serendibgo?si=WVVxtIApAHYEw16T"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube size={20} strokeWidth={2} />
              </a>

              <a
                href="https://www.linkedin.com/company/serendibgo-vacations/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} strokeWidth={2} />
              </a>

              <a
                href="https://www.tripadvisor.co.uk/Attraction_Review-g293962-d33966733-Reviews-SerendibGo_Vacations-Colombo_Western_Province.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiTripadvisor size={20} />
              </a>
            </div>
          </div>
          <div className="flex md:flex-row flex-col md:gap-60 gap-5 lg:mt-16 hover:cursor-pointer font-medium ">
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
