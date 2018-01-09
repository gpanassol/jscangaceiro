class NegociacaoController {

    constructor(){
        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona(event){
        //cancela submit
        event.preventDefault();

        let data = new Date(...this._inputData.value
            .split("-")
            .map((item, indice) => {
              return item - indice % 2;
            }));

        let negociacao = new negociacao(
            new Date(this._inputData.value.split('-')),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );

        console.log(negociacao);
    }

}