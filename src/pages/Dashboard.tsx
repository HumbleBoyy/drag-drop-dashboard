import React from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css"; // Import default styles for grid layout
import "react-resizable/css/styles.css"; // Import default styles for resizable

// Make the grid responsive
const ResponsiveGridLayout = WidthProvider(Responsive);

const Dashboard = () => {
  // Layout for grid items (x, y, w, h, i, etc.)
  const layout = [
    { i: "1", x: 0, y: 0, w: 2, h: 2 },
    { i: "2", x: 2, y: 0, w: 2, h: 2 },
    { i: "3", x: 4, y: 0, w: 2, h: 2 },
    { i: "4", x: 0, y: 2, w: 2, h: 2 },
  ];

  return (
    <div>
      <h1>Dashboard</h1>
      <ResponsiveGridLayout
        className="layout"
        layouts={{ lg: layout }} // Define layout for large screens
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={30}
        isDraggable={true}
        isResizable={true}
      >
        <div key="1" style={{ background: "#f0f0f0" }}>
          <h3>Item 1</h3>
        </div>
        <div key="2" style={{ background: "#e0e0e0" }}>
          <h3>Item 2</h3>
        </div>
        <div key="3" style={{ background: "#d0d0d0" }}>
          <h3>Item 3</h3>
        </div>
        <div key="4" style={{ background: "#c0c0c0" }}>
          <h3>Item 4</h3>
        </div>
      </ResponsiveGridLayout>
    </div>
  );
};

export default Dashboard;
