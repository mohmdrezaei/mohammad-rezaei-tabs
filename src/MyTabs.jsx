import { useState } from "react";
import "./MyTabs.css";

function MyTabs() {
  const [activeTab, setActiveTab] = useState(
    () => localStorage.getItem("activeTab") || "Tab1"
  );
  const [tabs, setTabs] = useState(
    JSON.parse(localStorage.getItem("tabs")) || ["Tab1", "Tab2", "Tab3", "Tab4"]
  );

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    localStorage.setItem("activeTab", tabId);
  };

  const handleAddTab = () => {
    const maxId = tabs.reduce((max, tab) => Math.max(max, JSON.parse(tab.replace("Tab", ""), 10)),0);
    const newTabId = `Tab${maxId + 1}`;
    const updatedTabs = [...tabs, newTabId];
    setTabs(updatedTabs);
    setActiveTab(newTabId);
    localStorage.setItem("tabs", JSON.stringify(updatedTabs));
    localStorage.setItem("activeTab", newTabId);
  };
  const handleDeleteTab = (e, tabId) => {
    e.stopPropagation();
    if (tabs.length === 1) {
      return alert("حداقل یک برگه باید باز باشد");
    }
    const updatedTabs = tabs.filter((tab) => tab !== tabId);
    console.log(updatedTabs);
    setTabs(updatedTabs);
    setActiveTab(updatedTabs[updatedTabs.length - 1]);
    localStorage.setItem("tabs", JSON.stringify(updatedTabs));
    localStorage.setItem("activeTab", updatedTabs[updatedTabs.length - 1]);
  };

  return (
    <div className="tab-container">
      <h1>Tabs Component with react</h1>
      <div className="tab-list">
        {tabs.map((tabId) => (
          <button
            key={tabId}
            className={`tab-link ${activeTab === tabId ? "active" : ""}`}
            onClick={() => handleTabClick(tabId)}
          >
            {tabId}
            <button
              className="delete-button"
              onClick={(e) => handleDeleteTab(e, tabId)}
            >
              &#10006;
            </button>
          </button>
        ))}
        <button className="add-button" onClick={handleAddTab}>
          +
        </button>
      </div>
      <div className="tab-content">
        {activeTab && (
          <div>
            <h2>Content {activeTab}</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
              similique natus sed blanditiis. Nam quibusdam soluta, fugiat a
              reiciendis molestiae inventore. Doloremque totam praesentium sequi
              nam veniam aut provident atque.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MyTabs;
