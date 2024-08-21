import { useState } from "react";

function MyTabs() {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div>
      <div>
        <button onClick={() => handleTabClick("tab1")}>Tab 1</button>
        <button onClick={() => handleTabClick("tab2")}>Tab 2</button>
        <button onClick={() => handleTabClick("tab3")}>Tab 3</button>
      </div>
      <div>
        {activeTab === "tab1" && <p>محتوای تب اول</p>}
        {activeTab === "tab2" && <p>محتوای تب دوم</p>}
        {activeTab === "tab3" && <p>محتوای تب سوم</p>}
      </div>
    </div>
  );
}

export default MyTabs;
