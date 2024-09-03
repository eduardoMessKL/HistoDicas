import Image from "next/image";
import Link from "next/link";


const tecidos  = [
  {
    nome: "Epitelial",
    img: "/images/epitelial.png",
  },
  {
    nome: "Conjuntivo",
    img: "/images/conjuntivo.png",
  },
  {
    nome: "Muscular",
    img: "/images/muscular.png"
  },
  {
    nome: "Sanguineo",
    img: "/images/sanguineo.png",
  },
  {
    nome: "Todos",
    img: "/images/todos.png"
  }
]


export default function Index() {
  return (
    <main className="pt-16">
        <div className="flex flex-col justify-center">
          <h2 className="text-center text-2xl">Escolha o tecido que deseja estudar:</h2>
        </div>
        <div className="flex justify-center">
          {tecidos.map((tecido) => (
            <Link key={tecido.nome} href="" className="transition-all p-12 hover:transition-all hover:drop-shadow-2xl 	">
              <div className="text-center">
                <p className="pb-5 text-xl">{tecido.nome}</p>
                <Image
                  src={tecido.img}
                  width={100}
                  height={100}
                  alt="" 
                  className="drop-shadow-md" 
                />
              </div>
            </Link>
          ))}
        </div>
    </main>
  );
}
