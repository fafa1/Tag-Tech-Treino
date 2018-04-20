<template>
    <div class="corpo">        

    <meu-menu></meu-menu>
       
    <transition name="pagina">
        <router-view></router-view>
        
    </transition>
    </div>

</template>

<script>
    import routes from './router'
     /*
     function d (){
        let res 
        for (let i=0 ; i<2; i++ ){
         res = routes.options.routes[i].name
        }
     return res   
    }    
      console.log(d())
      */
    import Menu from '@/components/shared/menu/menu.vue'
    export default {

        data(){
            return{}
        },
    components: {
        'meu-menu' : Menu
    }
}
    
</script>

<style>

    .corpo {
        font-family: Helvetica, sans-serif;
        width: 96%;
        margin: 0 auto;
    }

    .pagina-enter, .pagina-leave-active{
        opacity: 0;
    }    

    .pagina-enter-active, .pagina-leave-active{
        transition: opacity .5s;
    }


</style>