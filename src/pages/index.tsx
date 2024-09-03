import Link from "next/link";

export default function Index() {
  return (
    <main className="flex flex-col">
        <div className="flex justify-center pt-12">
          <h2 className="text-2xl">Antes de comecar, insira seu nome no campo abaixo:</h2>
        </div>
        <div className="flex justify-center">
          <input type="text" className="bg-wdc-input m-10 p-7 w-6/12 rounded-md shadow-lg text-4xl text-center focus:outline-none"/>
        </div>
        <Link href="home" className="flex justify-center">
          <button className="transition p-5 bg-wdc-banner rounded-full w-3/12 text-3xl hover:shadow-lg hover:transition active:bg-wdc-active" >
            Jogar!
          </button>
        </Link>
    </main>
  );
}
