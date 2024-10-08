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

export const SessionAssec = ({
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
        <div
          className="
            flex 
    w-full 
    flex-col 
    justify-center 
    items-center  /* Centraliza o texto no mobile */
    pb-24
    pt-10
    lg:pb-32
    lg:w-1/2  
    lg:items-start  /* Alinha o texto à esquerda a partir de lg */
    lg:pl-24 
    lg:pr-24 
    lg:p-0
        "
        >
          {title && (
            <h2 className="text-3xl mt-10 lg:mt-5 lg:text-3xl font-[var(--font-gotham)]">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-start text-sm w-[70%] lg:w-full mt-4 lg:mt-7 font-[var(--font-gotham)] whitespace-pre-wrap">
              {description}
            </p>
          )}
          {titleButton && (
            <a
              href={urlButton}
              className="mb-32 cursor-pointer hover:opacity-50 transition p-2 pl-6 pr-6 lg:pl-10 lg:pr-10 border-[1px] mt-5 border-sky-500 text-sky-500"
            >
              {titleButton}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
