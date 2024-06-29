import Image from "next/image";
import "./style/style.css";
import Service from "../../components/Service";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center md:justify-between md:px-20 py-10 div-home">
        <div className="flex flex-col items-center justify-center text-center md:text-left md:w-1/2 text-home">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            There are many variations of passages of Lorem
          </h2>
          <p className="text-lg">
            Shady has extensive experience in building a wide range of websites,
            showcasing his proficiency in web development. His projects
            demonstrate a deep understanding of both front-end and back-end
            technologies, resulting in user-friendly and highly functional
            websites that meet diverse client needs.
          </p>
          <Link id="link-Link" href="/service">
            Our Service
          </Link>
        </div>
        <div className="md:w-1/2 photo-home">
          <img
            className="rounded-lg shadow-lg"
            src="https://cdn.theatlantic.com/thumbor/-KsyaiY_Ty5j9npxNT1sts4WogE=/249x0:1749x1125/1200x900/media/img/mt/2020/05/Webart_RacialContract/original.jpg"
            alt="image on here"
          />
        </div>
      </div>
      <Service />
    </>
  );
}
