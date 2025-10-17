import React, { useState, useEffect } from "react";

// Custom Hook for window size detection
const useWindowSize = () => {
  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
};

// Main responsive component
const ResponsiveStudentInfo = () => {
  const width = useWindowSize();
  const isMobile = width < 768;

  const student = {
    name: "John Doe",
    course: "B.Tech Computer Science",
    email: "john.doe@example.com",
    id: "STU12345",
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #f3f4f6, #e2e8f0)",
    fontFamily: "Poppins, sans-serif",
    padding: "20px",
  };

  const cardStyle = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    alignItems: isMobile ? "flex-start" : "center",
    justifyContent: "space-between",
    gap: isMobile ? "15px" : "40px",
    padding: "25px 40px",
    background: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
    transition: "all 0.3s ease",
    width: isMobile ? "90%" : "70%",
    maxWidth: "900px",
  };

  const infoBlock = {
    flex: 1,
  };

  const labelStyle = {
    color: "#4a5568",
    fontWeight: "600",
  };

  const valueStyle = {
    color: "#1a202c",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <div style={infoBlock}>
          <span style={labelStyle}>Name: </span>
          <span style={valueStyle}>{student.name}</span>
        </div>
        <div style={infoBlock}>
          <span style={labelStyle}>ID: </span>
          <span style={valueStyle}>{student.id}</span>
        </div>
        <div style={infoBlock}>
          <span style={labelStyle}>Course: </span>
          <span style={valueStyle}>{student.course}</span>
        </div>
        <div style={infoBlock}>
          <span style={labelStyle}>Email: </span>
          <span style={valueStyle}>{student.email}</span>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveStudentInfo;
