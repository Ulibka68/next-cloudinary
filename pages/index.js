import Image from "next/image";

// eslint-disable-next-line no-restricted-syntax
export default function Page() {
  return (
    <>
      <h1>Simple cloudinary example</h1>

      <p>Standart image</p>
      <img
        src="https://res.cloudinary.com/dljazkzna/image/upload/v1604679134/img/63.jpg"
        alt=""
        width="200"
      />
      <p>NextJS Image component</p>
      <Image
        src="https://res.cloudinary.com/dljazkzna/image/upload/v1604679134/img/63.jpg"
        alt="Picture of the author"
        width={300}
        height={300}
      />
    </>
  );
}
