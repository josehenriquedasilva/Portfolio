function DivProjeto(props) {
  return (
    <div className="bg-[#111111] md:h-[320px] rounded-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-500 ease-in-out shadow-lg hover:shadow-[#0ACC6C]/20 group w-130 md:w-[47.7%] lg:w-[31.1%]">
      {props.children}
    </div>
  );
}

export default DivProjeto;