function Contato() {
  return (
    <div id="contato" className="py-24 bg-[#111111] text-center">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-4xl font-bold text-white">Vamos Conversar?</h2>
        <p className="text-lg text-gray-400 mt-4 mb-8">
          Estou sempre de olho a novas oportunidades e colaborações. Se você tem
          um projeto em mente ou uma pergunta, sinta-se à vontade para me enviar
          uma mensagem.
        </p>
        <a
          className="inline-block bg-[#0ACC6C] text-[#111111] font-bold py-3 px-8 rounded-lg text-lg hover:bg-[#0ACC6C] hover:opacity-90 transition-all duration-200 transform hover:scale-105"
          href={"mailto:josehensilva206@gmail.com"}
        >
          Enviar mensagem
        </a>
      </div>
    </div>
  );
}

export default Contato;
