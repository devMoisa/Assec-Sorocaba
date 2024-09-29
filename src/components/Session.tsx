import Image from "next/image";

interface SessionProps {
  side: "left" | "right";
  imagePath: string;
  alt: string;
  title?: string;
  description?: string;
  titleButton?: string;
  urlButton?: string;
}

export const Session = ({
  side,
  imagePath,
  alt,
  title,
  description,
  titleButton,
  urlButton,
}: SessionProps) => {
  return (
    <div className="w-full">
      <div
        className={`flex xl:container 
          flex-col
          lg:flex-row
          ${side === "left" ? "lg:flex-row" : "lg:flex-row-reverse"}`}
      >
        <div className="w-full lg:w-1/2 lg:h-full bg-cover">
          <Image
            width={0}
            height={0}
            alt={alt}
            sizes="100vw"
            src={imagePath}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:pl-24 lg:pr-24">
          <h2 className="text-3xl mt-32 sm:mt-20 lg:text-4xl font-[var(--font-gotham)]">
            {title}
          </h2>
          {description && (
            <p className="text-center w-[70%] lg:w-full mt-4 lg:mt-7 font-[var(--font-gotham)]">
              {description}
            </p>
          )}
          <a
            href={urlButton}
            className="mb-32 cursor-pointer hover:opacity-50 transition p-2 pl-6 pr-6 lg:pl-10 lg:pr-10 border-[1px] mt-5 border-sky-500 text-sky-500"
          >
            {titleButton}
          </a>
        </div>
      </div>
    </div>
  );
};
