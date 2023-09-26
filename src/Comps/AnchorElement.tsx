import { PropsWithChildren } from "react";

interface AnchorElementProps extends PropsWithChildren {
  sectionId: string;
}
export const AnchorElement = (props: AnchorElementProps) => {
  return <div id={props.sectionId}>{props.children}</div>;
};
