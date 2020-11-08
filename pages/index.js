// import Image from "components/image";
import Image from "next/image";

// eslint-disable-next-line no-restricted-syntax
export default function Page() {
  return (
    <>
      <h1>Simple cloudinary example</h1>

      <p>Standart image</p>
      <img
        src="https://res.cloudinary.com/dljazkzna/image/upload/v1604677935/img/1053.jpg"
        alt=""
        width="200"
      />
      <p>NextJS Image component</p>
      <Image
        alt="Cloudinary image"
        width={300}
        height={300}
        src="dljazkzna/img/1053"
      />
    </>
  );
}

// "https://res.cloudinary.com/dljazkzna/image/upload/v1604677935/img/1053.jpg"
// <Image cloudName="doqurzmbt" publicId="google-analytics-ux_g6w5ti" width="300" crop="scale" />
