import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";

export default function ThreeDCardDemo({
  title,
  description,
  ctaLink,
  imageUrl,
}) {
  return (
    <CardContainer className="inter-var h-full w-full">
      <CardBody
        className="bg-gray-50 relative group/card
          dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]
          dark:bg-black dark:border-white/[0.2]
          border-black/[0.1] border rounded-xl p-6
          flex flex-col justify-between h-full w-full"
      >
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={imageUrl}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as="a"
            href={ctaLink}
            target="__blank"
            className="px-4 py-2 rounded-xl text-[1.1rem] font-normal dark:text-white"
          >
            Visit →
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
