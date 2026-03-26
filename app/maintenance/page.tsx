export default function Maintenance() {
  return (
    <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "#0f172a",
      color: "white",
      textAlign: "center",
      padding: "20px"
    }}>
      <h1 style={{ fontSize: "36px", marginBottom: "20px" }}>
        Pluto Enerji
      </h1>

      <p style={{ fontSize: "18px", opacity: 0.8 }}>
        Web sitemiz güncellenmektedir.
        <br />
        Yakında yayında olacağız.
      </p>
    </div>
  );
}