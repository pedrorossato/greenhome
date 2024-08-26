export default async function Photo({
  imageUrl,
}: {
  imageUrl: string;
}): Promise<JSX.Element> {
  return (
    <div className="flex justify-center px-4 pt-4">
      <img
        className="mb-3 h-24 w-24 rounded-full shadow-lg"
        src={imageUrl}
        alt="User photo"
      />
    </div>
  );
}
