import { Jua } from "@next/font/google";

const jua = Jua({
    weight: "400", 
    subsets: ["latin"],
   });

export default function Header(){
    return(
        <main className={`${jua.className} flex justify-center`}>
            <div className="bg-wdc-banner rounded-full	flex flex-col mt-32 p-5 w-2/3 drop-shadow-lg">
                <h1 className="text-center text-5xl font-bold pb-5">HistoDicas</h1>
                <p className="text-center text-2xl text-neutral-900 opacity-65	">Aprenda histologia na pratica enquanto joga!</p>
            </div>
        </main>
    );
}