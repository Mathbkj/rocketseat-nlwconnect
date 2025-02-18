import Image from "next/image";
import medalGold from "@/assets/Medal_1.svg";
import medalSilver from "@/assets/Medal_2.svg";
import medalBronze from "@/assets/Medal_3.svg";

export function Ranking(){
    return <div className="w-full max-w-[440px] space-y-5">
        <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
          Ranking de Indicações
        </h2>
        <div className="space-y-4">
          <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center space-y-2">
            <header className="flex items-center gap-2">
            <span className="font-semibold">1</span> |
            <span className="text-sm text-gray-300 leading-none">
              Diego Fernandes
            </span>
            </header>
            <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
              1030
            </span>
            <Image src={medalGold} alt="" className="absolute top-0 right-8"/>
          </div>
          <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center space-y-2">
            <header className="flex items-center gap-2">
            <span className="font-semibold">2</span> |
            <span className="text-sm text-gray-300 leading-none">
              Diego Fernandes
            </span>
            </header>
            <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
              1030
            </span>
            <Image src={medalSilver} alt="" className="absolute top-0 right-8"/>
          </div>
          <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center space-y-2">
            <header className="flex items-center gap-2">
            <span className="font-semibold">3</span> |
            <span className="text-sm text-gray-300 leading-none">
              Diego Fernandes
            </span>
            </header>
            <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
              1030
            </span>
            <Image src={medalBronze} alt="" className="absolute top-0 right-8"/>
          </div>
        </div>
      </div>
}