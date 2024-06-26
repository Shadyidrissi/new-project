import Image from "next/image";
import "./style/style.css";
import Service from "../../components/Service";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="div-home">
        <div className="text-home">
          <h2>There are many variations of passages of Lorem</h2>
          <p>
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.
          </p>
          <Link id="link-Link" href="/service">
            Our Service
          </Link>
        </div>
        <div className="photo-home">
          <img src="" alt="image on here" />
        </div>
      </div>
      <Service />
    </>
  );
}
