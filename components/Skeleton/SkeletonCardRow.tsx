import SkeletonWrapper from "./SkeletonWrapper";

export default function SkeletonCardRow() {
  return (
    <div className="border-2">
      <div className="flex justify-between items-center">
        <SkeletonWrapper type={"header"} />
        <SkeletonWrapper type={"button"} />
      </div>
      <div className="flex gap-4 overflow-x-scroll">
        {[1, 2, 3, 4].map((item: any) => {
          return <SkeletonWrapper type={"card"} key={item} />;
        })}
      </div>
    </div>
  );
}