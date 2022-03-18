import { useEffect, useState } from "react";
import Profile from "./components/Profile";
import SubSection from "./components/SubSection";
import Data from "./data.json";
import "./styles.css";

export default function App() {
  const [view, setView] = useState(0);
  const [viewType, setViewType] = useState("Day");

  function viewTo(value) {
    setView(value);
  }

  useEffect(() => {
    if (view === "0") {
      setViewType("Day");
    } else if (view === "1") {
      setViewType("Week");
    } else if (view === "2") {
      setViewType("Month");
    }
  }, [view, viewType]);

  return (
    <div className="App">
      <main>
        <div className="container">
          <Profile viewTo={viewTo} view={view} />
          {Data.map((section) => (
            <SubSection
              key={section.key}
              title={section.title}
              imgSrc={section.imgSrc}
              timeVal={section.timeframes[view]}
              viewType={viewType}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
