import Image from "next/image";
import Container from "./ui/container";
export default function About() {
  return (
    <Container>
      <div
        className="justify-center flex flex-col items-center lg:flex-row py-24  gap-16 min-h-[1000px]"
        id="about"
      >
        <div className="flex rounded-xl flex-1 justify-center items-center max-w-[500px] h-[500px] p-8 bg-gray-200">
          <Image
            src="/images/ahmet-can-dogan.jpg"
            alt="Product screenshot"
            className="rounded-xl shadow-xl  "
            width="400"
            height="400"
          />
        </div>

        <div className="max-w-[500px] flex flex-col justify-center flex-1">
          <h2 className="text-3xl mb-4 font-bold tracking-tight text-gray-900 sm:text-4xl">
            About Me
          </h2>
          <p className=" leading-7 text-gray-600">
            I have a good knowledge of HTML, CSS, and JavaScript. Additionally,
            I have the skills to create UI/UX designs using Figma or Adobe XD,
            and I can faithfully convert designs into HTML and CSS with
            pixel-perfect precision. I have a solid understanding of React and
            Next.js. I am continuously learning and improving my knowledge of
            React and Next.js.
          </p>
          <h3 className="text-xl font-medium mt-6   mb-4 tracking-tight text-gray-900 ">
            My Skills
          </h3>

          <div className="max-w-md  flex  flex-wrap">
            <Image
              src="/images/html-logo.svg"
              width={60}
              height={60}
              className="mx-1.5 mb-3"
              alt="HTML"
              title="HTML"
            />
            <Image
              src="/images/css-logo.svg"
              width={60}
              height={60}
              className="mx-1.5 mb-3"
              alt="CSS"
              title="CSS"
            />
            <Image
              src="/images/bootstrap-logo.svg"
              width={60}
              height={60}
              className="mx-1.5 mb-3"
              alt="Bootstrap"
              title="Bootstrap"
            />
            <Image
              src="/images/tailwind-logo.svg"
              width={60}
              height={60}
              className="mx-1.5 mb-3"
              alt="Tailwind"
              title="Tailwind"
            />
            <Image
              src="/images/javascript-logo.svg"
              width={60}
              height={60}
              className="mx-1.5 mb-3"
              alt="Javascript"
              title="Javascript"
            />
            <Image
              src="/images/react-logo.svg"
              width={60}
              height={60}
              className="mx-1.5 mb-3"
              alt="React.js"
              title="React.js"
            />
            <Image
              src="/images/next-logo.svg"
              width={60}
              height={60}
              className="mx-1.5 mb-3"
              alt="Next.js"
              title="Next.js"
            />
            <Image
              src="/images/git-logo.svg"
              width={60}
              height={60}
              className="mx-1.5 mb-3"
              alt="Git"
              title="Git"
            />
            <Image
              src="/images/figma-logo.svg"
              width={60}
              height={60}
              className="mx-1.5 mb-3"
              alt="Figma"
              title="Figma "
            />
            <Image
              src="/images/xd-logo.svg"
              width={60}
              height={60}
              className="mx-1.5 mb-3"
              alt="Adobe XD"
              title="Adobe XD"
            />
            <Image
              src="/images/ps-logo.svg"
              width={60}
              height={60}
              className="mx-1.5 mb-3"
              alt="Adobe Photoshop"
              title="Adobe Photoshop"
            />
            <Image
              src="/images/ai-logo.svg"
              width={60}
              height={60}
              className="mx-1.5 mb-3"
              alt="Adobe Illustrator"
              title="Adobe Illustrator"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
