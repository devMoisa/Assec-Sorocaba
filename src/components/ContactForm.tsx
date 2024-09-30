const FaleConosco = () => {
  return (
    <div className="w-full flex justify-center items-center bg-white mb-[200px]">
      <div className="flex flex-col justify-between max-w-3xl w-full px-6 sm:px-8 lg:px-0">
        <h2 className="text-center mb-14 text-3xl mt-32 sm:mt-20 lg:text-4xl">
          FALE CONOSCO
        </h2>
        <form className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Nome"
            className="border-b border-gray-300 bg-transparent text-lg text-black placeholder:text-black focus:outline-none"
          />
          <input
            type="email"
            placeholder="E-mail"
            className="border-b border-gray-300 bg-transparent text-lg text-black placeholder:text-black focus:outline-none"
          />
          <input
            type="tel"
            placeholder="Telefone"
            className="border-b border-gray-300 bg-transparent text-lg text-black placeholder:text-black focus:outline-none"
          />
          <label
            htmlFor="message"
            className="text-lg text-black font-normal mt-2 mb-[-20px]"
          >
            Sua mensagem
          </label>
          <textarea
            id="message"
            rows={10}
            className="bg-[#f7f7f7] p-3 border border-gray-300 rounded-lg focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="w-full lg:w-48 text-[#4177a0] border border-[#4177a0] py-3 rounded-none hover:bg-[#4177a0] hover:text-white transition"
          >
            ENVIAR
          </button>
        </form>
      </div>
    </div>
  );
};

export default FaleConosco;
