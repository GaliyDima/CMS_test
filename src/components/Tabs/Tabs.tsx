import React, { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import qs from "query-string";
import styles from "./Tabs.module.scss";
import Tab from "../Tab";
import tabsData from "../../data/tabs.json";

const Tabs = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentParams = qs.parse(searchParams.toString()) as Record<
    string,
    string
  >;

  const [activeTab, setActiveTab] = useState<string>(
    currentParams.tab ?? tabsData[0].id
  );
  const [activePath, setActivePath] = useState<string>("");

  const handleChangeTab = useCallback(
    (tabId: string) => () => {
      setSearchParams(qs.stringify({ tab: tabId }));
    },
    [setSearchParams]
  );

  useEffect(() => {
    if (!!Object.keys(currentParams).length) {
      const path = tabsData.find((tab) => tab.id === currentParams.tab)?.path;

      if (path) {
        setActivePath(path);
      }

      setActiveTab(currentParams.tab);
    } else {
      setActiveTab(tabsData[0].id);
      setActivePath(tabsData[0].path);
    }
  }, [currentParams]);

  return (
    <div className={styles.root}>
      <div className={styles.root_tabs}>
        {tabsData
          .sort((a, b) => a.order - b.order)
          .map((tab) => (
            <div key={tab.id}>
              <button
                onClick={handleChangeTab(tab.id)}
                className={styles.root_tabs_item}
                style={
                  activeTab === tab.id
                    ? {
                        background:
                          "linear-gradient(54deg, #6200ff -11.23%, #05ecff 105.53%)",
                      }
                    : {
                        background:
                          "linear-gradient(50deg, #f2981c 13.97%, #ffe600 137.94%)",
                      }
                }
              >
                {tab.title}
              </button>
            </div>
          ))}
      </div>

      <div>
        <Tab component={activePath} />
      </div>
    </div>
  );
};

export default Tabs;
