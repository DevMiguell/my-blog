import CardArticle from "../components/@App/CardArticle";
import HeaderArticlesSection from "../components/@App/HeaderArticlesSection";

export default function Home() {
  return (
    <>
      <HeaderArticlesSection quantity={2} />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
          gap: "32px",
        }}
      >
        <CardArticle />
        <CardArticle />
      </div>
    </>
  );
}
