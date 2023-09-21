import { ReactNode } from "react"
import './TagWrapper.scss';
import cn from "classnames";

export enum TagType {
  H1,
  P,
  Body,
  Html,
  Section,
};

type Props = {
  children: ReactNode;
  tagType: TagType;
};

export const TagWrapper: React.FC<Props> = ({
  children,
  tagType
}) => {
  return (
    <div className={cn(
      "tag-wrapper",
      {
        "tag-wrapper--h1": tagType === TagType.H1,
        "tag-wrapper--p": tagType === TagType.P,
        "tag-wrapper--body": tagType === TagType.Body,
        "tag-wrapper--html": tagType === TagType.Html,
        "tag-wrapper--section": tagType == TagType.Section
      }
    )}>
      {children}
    </div>
  )
};
