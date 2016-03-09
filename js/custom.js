$(document).ready(function() {
	//Objeto Carrinho
	var Carrinho = function(vlr, qtd) {
		this.vlr = vlr;
		this.qtd = qtd;
		console.log(this.qtd);
		
		this.exibeTotal = function() {
			$('#vlr_total').text(this.vlr);
			$('#qtd_total').text(this.qtd);
		};
		
		this.addValor = function(vlr) {
			this.vlr += parseInt(vlr);
			this.qtd++;
			this.exibeTotal();
		};
		
		this.retiraValor = function(vlr) {
			this.vlr -= parseInt(vlr);
			this.qtd--;
			this.exibeTotal();
		};
	}
	
	//Vars
	var vlr_tmp;
	
	//instancia carrinho
	var carrinho_x = new Carrinho(600, 0); //600 pois é o preço inicial do cel + acessorios
	carrinho_x.exibeTotal(); //Força exibir valor
	
	
	
	
	$(document).on('click','input[type=submit]',function(){
        vlr_tmp = $(this).data( "vlr" );
		
		$('#foods')
           .append('<div><a href="#" class="item" data-vlr="'+ vlr_tmp +'">Remover</a> - ' + $(this).val() + '</div>')
		;
		carrinho_x.addValor(vlr_tmp);
	});

    $('#foods').on('click','.item',function(){
		vlr_tmp = $(this).data( "vlr" );
		carrinho_x.retiraValor(vlr_tmp);
		
		
        $(this).parent().remove();
    });
	
	
});



