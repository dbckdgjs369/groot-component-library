import React, {
  HTMLAttributes,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

import { useTabContext } from "./TabContext";
import * as S from "./styled";

interface TabListProps extends HTMLAttributes<HTMLDivElement> {
  tabColor?: string;
  children: ReactNode;
}

/**
 * Parent of Tab component
 *
 * @param tabColor - Color of selected tab underbar color
 *
 * @returns TabList that wraps Tab component.
 */

export function TabList({ tabColor, children, style, ...rest }: TabListProps) {
  const { activeTab } = useTabContext();
  const tabListRef = useRef<HTMLDivElement | null>(null);
  const [underlineStyle, setUnderlineStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    if (tabListRef.current) {
      const activeTabElement = Array.from(tabListRef.current.children).find(
        (child) => (child as HTMLButtonElement).value === activeTab
      ) as HTMLButtonElement;

      if (activeTabElement) {
        setUnderlineStyle({
          width: `${activeTabElement.offsetWidth}px`,
          left: `${activeTabElement.offsetLeft}px`,
        });
      }
    }
  }, [activeTab]);

  return (
    <S.StyledTabList ref={tabListRef} style={{ ...style }} {...rest}>
      {children}
      <S.StyledTabList
        css={S.TabUnderLineCss(tabColor)}
        style={{
          ...underlineStyle,
        }}
      />
    </S.StyledTabList>
  );
}
