import Image from "next/image";

export default function Recipes({ recipes }) {
  return (
    <>
      {recipes.map((recipe) => {
        const { id, image, title } = recipe;
        return (
          <div key={id}>
            <h2>{title}</h2>
            <Image alt={title} src={image} width="50" height="50" />
          </div>
        );
      })}
    </>
  );
}
