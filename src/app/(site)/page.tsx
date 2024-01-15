import Link from "next/link";

const Index = () => {
  return (
    <div>
      <div className="mb-5">
        <p>Rotas em desenvolvimento</p>
      </div>
      <Link className="m-2" href="/">
        Site
      </Link>
    </div>
  );
};

export default Index;
