function GitHubProjeto(props) {
    return (
        <a {...props} className="text-gray-500 hover:text-[#0ACC6C] transition-colcontainer ors duration-300">
            {props.children}
        </a>
    )
}

export default GitHubProjeto;