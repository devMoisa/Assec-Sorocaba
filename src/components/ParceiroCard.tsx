interface ParceiroCardProps {
  imagePath: string;
  altImage: string;
  name: string;
  description: string;
}

/* eslint-disable @next/next/no-img-element */
export const ParceiroCard = ({
  imagePath,
  altImage,
  name,
  description,
}: ParceiroCardProps) => {
  return (
    <div className="flex flex-col cursor-pointer hover:opacity-50 transition">
      <div
        className="h-52 w-72 bg-white flex justify-center items-center p-5"
        style={{
          border: "solid 1px #7299b0",
        }}
      >
        <img src={imagePath} className="h-auto" alt={altImage} />
      </div>
      <span className="ml-7">
        <h3 className="mt-5 mb-1 font-normal text-sm">{name}</h3>
        <p className="font-normal text-sm">{description}</p>
      </span>
    </div>
  );
};
