import Link from "next/link";
import { MouseEventHandler } from "react";
import { UrlObject } from "url";

export default function Button(props: {
  link: string | UrlObject;
  children: string | number;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  className: string;
}) {
  {
    if (props.link) {
      return (
        <Link href={props.link} className={props.className}>
          {props.children}
        </Link>
      );
    }
  }
  return (
    <button onClick={props.onClick} className={props.className}>
      {props.children}
    </button>
  );
}
