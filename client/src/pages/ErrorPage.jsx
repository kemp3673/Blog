import ErrorImage from "../assets/images/oops.jpeg";

export default function ErrorPage() {
  return (
    <div
      id="error-page"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        verticalAlign: "middle",
        height: "100%",
        flexDirection: "column",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <img
        src={ErrorImage}
        alt="error"
        style={{
          width: "90vw",
          height: "90vh",
          objectFit: "cover",
        }}
      />
      <a
        href="https://www.vecteezy.com/vector-art/8892186-the-page-not-found-error-404"
        target="_blank"
        rel="noreferrer"
        alt="image attribution"
        style={{
          fontSize: "12px",
          textDecoration: "none",
          position: "fixed",
          bottom: "0",
          left: "0",
          padding: "10px",
          color: "black",
          cursor: "pointer",
        }}
      >
        404 Error Vectors by Vecteezy
      </a>
    </div>
  );
}
