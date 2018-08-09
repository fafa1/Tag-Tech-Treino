<template>       
        <div class="painel">
           <h2 class="painel-titulo" @dblclick="visivel = !visivel" >{{ titulo }}</h2> 
            <transition name="painel-fade">          
                <div class="painel-conteudo" v-show="visivel">      
                <slot></slot><!-- pego tudo que esta na minha tag meu-painel  - imagem e buton--> 
                </div>
            </transition>        
       </div>      
  </div>
</template>


<script>
export default {
    
    props: {
      titulo:{
        type: String,
        required: true
      }
    }, // passar o titulo que vem da classe pai

  data(){
    return {
      visivel: true
    }
  }

  }

  /*
  painel-fade-enter ---antes do elemento ser incluido ou removido, estado atual
  painel-fade-enter-active ---quando o elemento esta sendo incluido
  painel-fade-leave-active ---quando o elemento esta sendo removido
*/

</script>

<style>
  .corp{
    font-family: Helvetica, sans-serif;
    width: 100%;
    margin: 0 auto;
  }

  .centralizado{
    text-align: center;
  }
  .lista-fotos{
    list-style: none;
  }
  
  .lista-fotos .lista-fotos-item{
    display: inline-block;
  }

</style>

