import Link from "next/link";
import { useRouter } from "next/router";

type Data = {
  params: {
    id: string;
  };
};

type ProductType = {
  product: {
    image: string;
    name: string;
    id: string;
  };
};

//SSGの場合
// export async function getStaticProps({ params }: Data) {
//   const req = await fetch(`http://localhost:3000/${params.id}.json`);
//   const data = await req.json();
//   return {
//     props: { product: data },
//   };
// }

// export async function getStaticPaths() {
//   const req = await fetch(`http://localhost:3000/products.json`);
//   const data = await req.json();
//   const paths = data.map((product: string) => {
//     return {
//       params: {
//         id: product,
//       },
//     };
//   });
//   return {
//     paths,
//     fallback: false,
//   };
// }

export async function getServerSideProps({ params }: Data) {
  const req = await fetch(`http://localhost:3000/${params.id}.json`);
  const data = await req.json();
  return {
    props: { product: data },
  };
}

const Product = ({ product }: ProductType) => {
  const router = useRouter();
  const { id } = router.query;

  console.log(product);
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1>{id}のページです</h1>
      <img src={product.image} width="300" height="400" />
      <p>{product.name}</p>
      <br />
      <Link href="/products">商品一覧へ</Link>
    </div>
  );
};

export default Product;
