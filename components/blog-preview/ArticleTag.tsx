import React from "react";

interface ArticleTagProps {
  title: string;
}

const tagBaseStyle = "text-xs mr-2 py-1.5 px-4 text-black-600 rounded-2xl";

const textsStyles: any = {

  Kitchen: `${tagBaseStyle} bg-sky-100  text-sky-600`,
  Accessories: `${tagBaseStyle} bg-green-100  text-green-600`,
  Cooking: `${tagBaseStyle} bg-yellow-100  text-yellow-600`,
  Tools: `${tagBaseStyle}  bg-cyan-100  text-cyan-600`,
  Culinary: `${tagBaseStyle}  bg-sky-100  text-sky-600`,
  Utensils: `${tagBaseStyle}  bg-indigo-100  text-indigo-600`,
  Food: `${tagBaseStyle}  bg-violet-100  text-violet-600`,
  Baking: `${tagBaseStyle}  bg-rose-100  text-rose-600`,
  Essentials: `${tagBaseStyle}  bg-lime-100  text-lime-600`,
};
export default function ArticleTag({ title }: ArticleTagProps) {
  return <div className={textsStyles[`${title}`]}>{title}</div>;
}
