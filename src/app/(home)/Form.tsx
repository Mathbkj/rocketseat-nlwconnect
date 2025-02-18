"use client";
import { Button } from "@/components/Button";
import { InputField, InputIcon, InputRoot } from "@/components/Input";
import { ArrowRight, Mail, User } from "lucide-react";
import type { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(2, { message: "Digite seu nome completo" }),
  email: z.string().email({ message: "Digite um email válido" }),
});
type SchemaType = z.infer<typeof schema>;



export const Form: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	  } = useForm<SchemaType>({ resolver: zodResolver(schema) });
  function onSubmit(data: unknown) {
    console.log(data);
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 w-full md:max-w-[440px]"
    >
      <h2 className="font-heading font-semibold text-gray-200 text-xl">
        Inscrição
      </h2>
      <div className="space-y-3">
        <div className="space-y-2">
          <InputRoot>
            <InputIcon>
              <User />
            </InputIcon>
            <InputField
              type="text"
              placeholder="Nome Completo"
              {...register("name")}
            />
          </InputRoot>
        </div>

        <div className="space-y-2">
          <InputRoot>
            <InputIcon>
              <Mail />
            </InputIcon>
            <InputField
              type="email"
              placeholder="E-mail"
              {...register("email")}
            />
          </InputRoot>
        </div>
      </div>
      <Button type="submit">
        Confirmar <ArrowRight />
      </Button>
    </form>
  );
};
