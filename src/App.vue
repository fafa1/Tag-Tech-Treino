<template>
    <div class="corpo">
        <nav>
            <ul>
                <li v-for="route in router"><router-link :to="route.path">{{route.name}}</router-link></li>
            </ul>
        </nav>

        <router-view></router-view>
    </div>
</template>

<script>
//nao reconhece o import deve ser pq da isntancia
import router from './router'

    export default {
        data(){
            return{
                router
            }
        }
    }
</script>

<style>

    .corpo {
        font-family: Helvetica, sans-serif;
        width: 96%;
        margin: 0 auto;
    }
</style>