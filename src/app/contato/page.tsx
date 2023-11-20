"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";

interface FormData {
  nome: string;
  telefone: string;
  mensagem: string;
}

const Contato = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    telefone: "",
    mensagem: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validação - todos os campos são obrigatórios
    const newErrors: Partial<FormData> = {};
    if (!formData.nome.trim()) {
      newErrors.nome = "Campo obrigatório";
    }
    if (!formData.telefone.trim()) {
      newErrors.telefone = "Campo obrigatório";
    } else if (!/^\d+$/.test(formData.telefone)) {
      newErrors.telefone = "Digite apenas números";
    }
    if (!formData.mensagem.trim()) {
      newErrors.mensagem = "Campo obrigatório";
    }

    // Adicione mais lógica de validação conforme necessário

    if (Object.keys(newErrors).length === 0) {
      // Formulário válido, pode enviar os dados
      console.log("Dados do formulário:", formData);
      // Adicione aqui a lógica para enviar os dados para o backend ou fazer o que for necessário
    } else {
      // Atualiza o estado com os erros encontrados
      setErrors(newErrors);
    }
  };

  return (
    <>
      <section className="flex flex-col p-4 md:p-12 mx-auto font-nunito md:py-10 md:px-36 lg:px-36 lg:mt-5 gap-6 xl:gap-24">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="md:w-1/2">
            <h1 className="text-2xl md:text-3xl font-extrabold pt-6 px-4 md:p-16">
              Entre em Contato
            </h1>
            <p className="mb-4 text-sm md:text-base lg:text-lg font-normal leading-5">
              Ficamos felizes em receber sua mensagem. Entre em contato para
              tirar suas dúvidas, agendar serviços e consultas. Estamos prontos
              para ajudar.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="">
                <input
                  className="w-full h-[58px] t-72 rounded-lg border-2 py-1 px-4 my-2 gap-2 pl-10"
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="Nome"
                />
                {errors.nome && <p className="text-red-500">{errors.nome}</p>}
              </div>
              <div className="">
                <input
                  className="w-full h-[58px] t-72 rounded-lg border-2 py-1 px-4 my-2 gap-2 pl-10"
                  type="text"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  placeholder="Telefone"
                />
                {errors.telefone && (
                  <p className="text-red-500">{errors.telefone}</p>
                )}
              </div>
              <div className="">
                <textarea
                  className="w-full h-[120px] t-72 rounded-lg border-2 py-1 px-4 my-2 gap-2 pl-10"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  placeholder="Mensagem"
                ></textarea>
                {errors.mensagem && (
                  <p className="text-red-500">{errors.mensagem}</p>
                )}
              </div>
              <button className="flex bg-dark-green rounded-md text-white w-80 h-9 md:w-[696px] lg:w-full lg:h-11 text-sm md:text-base items-center justify-center p-1 gap-2 my-6">
                Enviar
              </button>
            </form>
          </div>
          <div className="w-full md:w-1/2 p-4 flex items-center justify-center">
            <Image
              src="/form-dog.png"
              alt="Foto Spitz formulário"
              className="object-top"
              width={602}
              height={398}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contato;
