import { useState } from "react";
import './MyTabs.css';

function MyTabs() {
  const [activeTab, setActiveTab] = useState(() => localStorage.getItem('activeTab') || "tab1");
  const [tabs, setTabs] = useState( JSON.parse(localStorage.getItem('tabs')) ||["tab1", "tab2", "tab3","tab4"]
  );

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    localStorage.setItem('activeTab', tabId);
  };

  const handleAddTab = () => {
    const newTabId = `tab${tabs.length + 1}`;
    if(tabs.length === 8) {
      return alert("نمی توانید بیشتر از 8 برگه اینجاد کنید")
    }
    setTabs([...tabs, newTabId]);
    setActiveTab(newTabId);
    localStorage.setItem('activeTab', newTabId);
    localStorage.setItem('tabs', JSON.stringify([...tabs, newTabId]));
  };

  return (
    <div className="tab-container">
      <h1>Tabs Component with react</h1>
      <div className="tab-list">
        {tabs.map((tabId) => (
          <button
            key={tabId}
            className={`tab-link ${activeTab === tabId ? 'active' : ''}`}
            onClick={() => handleTabClick(tabId)}>
             {tabId}
          </button>
        ))}
        <button className="add-button" onClick={handleAddTab}>+</button>
      </div>
      <div className="tab-content">
        {activeTab && (
          <div>
            <h2>Content {activeTab}</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti similique natus sed blanditiis. Nam quibusdam soluta, fugiat a reiciendis molestiae inventore. Doloremque totam praesentium sequi nam veniam aut provident atque.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MyTabs;