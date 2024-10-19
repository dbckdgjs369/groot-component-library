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
 * TabList component for rendering a list of tabs in a tabbed interface.
 *
 * @param {string} tabColor - The color of the underbar for the selected tab.
 *                            This can be a hex code, rgba, or any valid CSS color value.
 * @param {React.Node} children - The Tab components to be rendered within the TabList.
 *
 * @example
 * <TabList tabColor="#007bff">
 *   <Tab value="tab1">Tab 1</Tab>
 *   <Tab value="tab2">Tab 2</Tab>
 * </TabList>
 *
 * @returns {JSX.Element} The rendered tab list element.
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
