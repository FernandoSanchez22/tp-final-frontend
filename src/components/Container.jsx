function Container({ children }) {
  return (
    <div style={{
      maxWidth: "600px",
      width: "100%",
      margin: "20px auto",
      padding: "20px",
      backgroundColor: "#fff",
      borderRadius: "8px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
    }}>
      {children}
    </div>
  )
}

export default Container