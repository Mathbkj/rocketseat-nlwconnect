import Image from "next/image";
import logo from "@/assets/logo.svg";
import { Ranking } from "./ranking";
import { Stats } from "./stats";
import { Input } from "./input";
export default function Invite() {
    const inviteLink = "http://localhost:3000/invites/23131ggre9189f"
  return (
    <div className="min-h-dvh flex items-center justify-between gap-16 flex-col md:flex-row">
      <div className="flex flex-col gap-10 w-full max-w-[550px]">
        <Image src={logo} alt="devstage" width={108.5} height={30} />
        <div className="space-y-2">
          <h1 className="text-4xl font-semibold font-heading text-gray-100 leading-none">
            Inscrição Confirmada
          </h1>
          <p className="text-gray-300">
            Para entrar no evento acesse o link enviado para seu email
          </p>
        </div>
        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
              Indique e Ganhe
            </h2>
            <p className="text-gray-300">
              Convide mais pessoas para o evento e concorra a prêmios
              exclusivos! É só compartilhar o link abaixo e acompanhar as
              inscrições:
            </p>
          </div>
          <Input inviteLink={inviteLink}/>
          <Stats/>
        </div>
      </div>
      <Ranking/>
    </div>
  );
}
