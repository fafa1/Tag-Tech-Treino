<template>
  <div>
    <h1 class="centralizado">{{ titulo }}</h1>

    <input type="search" class="filtro"  v-on:input="filtros = $event.target.value" placeholder="filtro por titulo">
    
    <ul class="lista-fotos">      
      <li class="lista-fotos-item" v-for="foto in fotosComFiltro">
            
           <meu-painel :titulo="foto.title"> 
              <imagem-responsiva :url="foto.url" :titulo="foto.title"/>
               <!--  <img class="imagem-responsiva" :src="foto.url" alt="titulo"> -->
          </meu-painel>    

      </li>    
    </ul>     
    
  </div>
</template>   

<script>
import Painel from '../shared/painel/painel.vue'
import ImagemResponsiva from '../../components/shared/imagem-responsiva/imagemResponsiva.vue'

export default {

  components: {
    'meu-painel': Painel,
    'imagem-responsiva': ImagemResponsiva
  },

  data(){
    return {
      titulo: 'Aula',        
      fotos:[],
      filtros: '' 
     
    }
  },

  // toda computed é um método
  computed: { 

    fotosComFiltro(){
      if(this.filtros){
        let exp = new RegExp(this.filtros.trim(), 'i')
        return this.fotos.filter(foto => exp.test(foto.title))
      } else {
        return this.fotos
      }
    }

  },

  // a promise passas dois parametros como atributos o res e o err
  created(){
    let promise = this.$http.get('http://localhost:3000/v1/fotos')
    promise
      .then(res => res.json()) //converter para json e pego as fotos
      .then(fotos => this.fotos = fotos, err => console.log(err))
  }
 
}
</script>

<style>
  
  .filtro{
    display: block;
    width: 70%;
  }

  .imagem-responsiva{
    width: 100%
  }

</style>
