/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Button } from "antd";
import { BaseLayout } from "@/template/BaseLayout";

export default function FourOhFour() {
  return (
      <div className="flex justify-center flex-col items-center">
        <img src="/404.gif" alt="404" />
        <span className="text-gray-500 text-lg mb-5">Desculpe, a página visitada não existe.</span>
        <Link href="/">
          <Button type="primary">Voltar para o início</Button>
        </Link>
      </div>
  );
}
