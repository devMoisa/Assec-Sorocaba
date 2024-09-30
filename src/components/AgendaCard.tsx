// /* eslint-disable @next/next/no-img-element */
// interface AgendaCardProps {
//   imageUrl: string;
//   title: string;
//   date: string;
//   location: string;
//   description: string;
//   alt: string;
// }

// export const AgendaCard = ({
//   date,
//   description,
//   imageUrl,
//   location,
//   title,
//   alt,
// }: AgendaCardProps) => {
//   return (
//     <div className="flex flex-row mb-10">
//       <div className="left w-1/2">
//         <img src={imageUrl} alt={alt} />
//       </div>
//       <div className="right w-1/2 pl-7 pr-7 pt-9 bg-[#eeeeee]">
//         <h3 className="text-2xl font-[var(--font-gotham) font-normal">
//           {title}
//         </h3>
//         <p className="text-gray-400">{date}</p>
//         <p className="mt-5 text-xs text-gray-400">{location}</p>
//         <p className="mt-6 text-gray-400 text-sm leading-6">{description}</p>
//       </div>
//     </div>
//   );
// };

/* eslint-disable @next/next/no-img-element */
interface AgendaCardProps {
  imageUrl: string;
  title: string;
  date: string;
  location: string;
  description: string;
  alt: string;
}

export const AgendaCard = ({
  date,
  description,
  imageUrl,
  location,
  title,
  alt,
}: AgendaCardProps) => {
  return (
    <div className="flex flex-col lg:flex-row mb-10">
      <div className="left w-full lg:w-1/2">
        <img className="w-full h-auto" src={imageUrl} alt={alt} />
      </div>
      <div className="right w-full lg:w-1/2 p-5 md:pl-7 md:pr-7 md:pt-9 bg-[#eeeeee]">
        <h3 className="text-2xl font-[var(--font-gotham)] font-normal">
          {title}
        </h3>
        <p className="text-gray-400">{date}</p>
        <p className="mt-5 text-xs text-gray-400">{location}</p>
        <p className="mt-6 text-gray-400 text-sm leading-6">{description}</p>
      </div>
    </div>
  );
};
