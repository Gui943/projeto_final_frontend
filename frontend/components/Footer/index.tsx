export default function Footer(){
	return(
		<div className="container-fluid text-white" style={{ backgroundColor: '#0d3b66' }}>
  			<footer className="py-3 my-4">    
    				<p className="text-center text-white-50 mb-0">SENAC ORÇAMENTOS Todos os direitos reservados - {new Date().getFullYear()}&copy;</p>
  			</footer>
		</div>
	)
}