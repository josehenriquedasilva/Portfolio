function BotaoProjeto(props) {
    return (
        <a {...props} className="text-[#0ACC6C] font-semibold inline-flex items-center group-hover:text-white transition-colors duration-300">
            {props.children}
        </a>
    )
}

export default BotaoProjeto;