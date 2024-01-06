import Link from "next/link";

const ProductsList = () => {
  return (
    <div>
      <main className="flex justify-center items-center h-screen flex-col">
        <h1>商品一覧</h1>
        <ul>
          <li><Link href="/products/smartphone">スマートフォン</Link></li>
          <li><Link href="/products/pc">パソコン</Link></li>
          <li><Link href="/products/headphone">ヘッドホン</Link></li>
        </ul>
      </main>
    </div>
  );
};

export default ProductsList;
