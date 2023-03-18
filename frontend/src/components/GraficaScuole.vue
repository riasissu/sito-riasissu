<template>
    <div class="container">

        <div class="row">
            <div class="col" id="cartina">
                <MappaScuole @cambioScuola="cambiaScuola" :posAttiva="(!!scuolaAttiva)?scuolaAttiva.posizione:[10,10]"></MappaScuole>
            </div>
            
            <div class="col"  style="width: 600px;">
                
                
                <div class="card"   v-if="scuolaAttiva!=null ">
                    
                    <img class="card-img"
                        v-if="scuolaAttiva.img"
                            max-width="600"
                            :src="require('@/assets/imgs_scuole/'+scuolaAttiva.img)"
                        ><img>
                    <div class="card-body">
                        <h5 class="card-title" >{{scuolaAttiva.nome + " di " + scuolaAttiva.citta}}</h5>
                        <!--<div class="card-subtitle">
                            <span class=" font-weight-medium"> Citta:</span>
                            <span class=" font-weight-bold"> {{scuolaAttiva.citta}}</span>
                        </div>-->
                        <div class="card-text">
                            {{scuolaAttiva.descrizione}}
                            <div v-if="scuolaAttiva.sito" class="mt-4">
                                <span class="font-weight-bold mr-2">Sito: </span><a class="mt-5" :href="scuolaAttiva.sito">{{scuolaAttiva.sito}}</a>
                            </div>
                            <div class="mt-3">
                                <a  @click="scuolaAttiva=null" href="#cartina" >Torna alla lista</a>
                            </div>
                        </div>
                    </div>
                
                </div>
                <div v-else class="card">
                    <div class="card-body">
                    <h5 class="card-title pb-2 pl-4  " style="align:center">
                        Le scuole della RIASISSU
                    </h5>
                    <ul class="list-group list-group-flush " style="list-style: none; ">
                        
                        <li  class="list-group-item stretched-link"  v-for="s in listaScuole" @click="cambiaScuola(s.id)" :key="s.id">
                            {{ s.nome +" di "+ s.citta}}
                        </li>
                        
                    </ul
                    ></div>
                </div>
                <!--
                <v-container v-if="scuolaAttiva!=null"> 
                    <v-row justify="center">
                        <v-img
                            v-if="scuolaAttiva.img"
                            :src="require('@/assets/imgs_scuole/'+scuolaAttiva.img)"
                            max-height="300"
                            max-width="500"
                            
                            ></v-img>
                    </v-row>               
                    <v-row :class="['text-h4', 'pt-5']" v-text="scuolaAttiva.nome"></v-row>
                    <div class="mt-4">
                        <span class="text-h5 font-weight-light"> Citta:</span>
                        <span class="text-h5 font-weight-medium"> {{scuolaAttiva.citta}}
                        </span>
                    </div>
                </v-container>-->
            </div>
            
        </div>
        
    </div>
</template>
<script>

import MappaScuole from '@/components/MappaScuole'
import datiScuole from '@/storage'
export default {
    data() {
        return {
            scuolaAttiva:null,
            listaScuole:datiScuole.listaScuole
        };
    },
    created() {
    },
    components: { MappaScuole, },
    methods: {
        cambiaScuola(s){
            this.scuolaAttiva=datiScuole.listaScuole[s-1]
        }
    },
}
</script>


<style scoped lang="scss">

@import "../scss/styles.scss";
.scroll {
  height: 100%;
  overflow:auto;
  background-color: white;
}

@media only screen and (max-width: 600px) {

    #cartina{
        display:  none;
    }
}
</style>