"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
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

  //Declaração do método que irá invocar o componente de alerta
  const MySwal = withReactContent(Swal);

  //const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
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

    // Atualiza o estado com os erros encontrados
    setErrors(newErrors);
    // Atualiza o estado com os erros encontrados
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Formulário válido, pode enviar os dados
      console.log("Dados do formulário:", formData);

      // Configuração do Axios
      const url = "https://api.emailjs.com/api/v1.0/email/send";
      const data = {
        service_id: "service_i88yk2u",
        template_id: "template_j4usb0r",
        user_id: "dnO6L1lAESXXK9Now",
        template_params: {
          from_name: formData.nome,
          from_email: "victorgabriel1730@gmail.com",
          message: formData.mensagem,
        },
      };
      // Enviar email usando Axios
      try {
        const response = await axios.post(url, data);

        //invocação do alerta personalizado
        MySwal.fire({
          title: "Enviado!",
          text: `Email enviado com sucesso!`,
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#26682b",
        });

        // Limpa o formulário após o envio
        setFormData({
          nome: "",
          telefone: "",
          mensagem: "",
        });

        // Limpa os erros
        setErrors({});
      } catch (error) {
        MySwal.fire({
          title: "Erro!",
          text: `${error} Ocorreu um erro ao enviar o seu email! tente novamente.`,
          icon: "error",
          confirmButtonText: "OK",
          confirmButtonColor: "red",
        });
      }
    }
  };

  return (
    <section className="flex flex-col p-4 md:p-12 mx-auto md:flex-wrap lg:flex-nowrap font-nunito md:py-10 md:px-6 lg:px-12 lg:mt-5 gap-6 xl:gap-12">
      <h1 className="text-2xl md:text-3xl font-extrabold pt-6 pr-4 md:pr-16">
        Entre em Contato
      </h1>
      <div className="flex flex-col-reverse md:flex-col gap-3 xl:gap-16 lg:flex-row">
        <div className="md:w-[100%] lg:w-[40%] xl:w-1/2">
          <p className="mb-4 mt-4 text-sm md:text-base lg:text-lg font-normal leading-5">
            Ficamos felizes em receber sua mensagem. Entre em contato para tirar
            suas dúvidas, agendar serviços e consultas. Estamos prontos para
            ajudar.
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
            <div className="flex flex-col items-center justify-center">
              <button className="flex bg-dark-green rounded-md text-white w-full h-9 lg:h-11 text-sm md:text-base items-center justify-center p-1 gap-2 my-6 lg:my-0 xl:my-6">
                Enviar
              </button>
            </div>
          </form>
        </div>
        <div className="w-full md:w-[100%] lg:w-[60%] xl:w-1/2 p-4 flex items-center justify-center">
          <Image
            src="/dog-for-contact.jpg"
            alt="Foto Spitz formulário"
            className="rounded-tl-[5rem] rounded-br-[5rem] md:w-[100%] lg:w-[100%]"
            width={602}
            height={396}
          />
        </div>
      </div>
    </section>
  );
  //};
};
export default Contato;
