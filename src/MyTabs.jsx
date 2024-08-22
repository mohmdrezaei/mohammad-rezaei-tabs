import { useState } from "react";
import './MyTabs.css';

function MyTabs() {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="tab-container">
      <h1>tabs Component with react</h1>
      <div className="tab-list">
        <button className={`tab-link ${activeTab === 'tab1' ? 'active' : ''}`} onClick={() => handleTabClick('tab1')}>Tab 1</button>
        <button className={`tab-link ${activeTab === 'tab2' ? 'active' : ''}`} onClick={() => handleTabClick('tab2')}>Tab 2</button>
        <button className={`tab-link ${activeTab === 'tab3' ? 'active' : ''}`} onClick={() => handleTabClick('tab3')}>Tab 3</button>
        <button className={`tab-link ${activeTab === 'tab4' ? 'active' : ''}`} onClick={() => handleTabClick('tab4')}>Tab 4</button>
      </div>
      <div className="tab-content">
        {activeTab === 'tab1' && <h2>Content 1</h2>}
        {activeTab === 'tab2' && <h2>Content 2</h2>}
        {activeTab === 'tab3' && <h2>Content 3</h2>}
        {activeTab === 'tab4' && <h2>Content 4</h2>}
      </div>
    </div>
  );
}

export default MyTabs;
