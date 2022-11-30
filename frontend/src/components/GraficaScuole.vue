<template>
    <div>
        <v-container>

        <v-row>
            <v-col>
                <MappaScuole @cambioScuola="cambiaScuola" :posAttiva="(!!scuolaAttiva)?scuolaAttiva.posizione:[10,10]"></MappaScuole>
            </v-col>
            <v-col justify="center">
                <v-card  max-width="600" v-if="scuolaAttiva!=null">
                    <v-img
                        v-if="scuolaAttiva.img"
                            max-width="600"
                            :src="require('@/assets/imgs_scuole/'+scuolaAttiva.img)"
                        ></v-img>
                    <v-card-title >{{scuolaAttiva.nome}}</v-card-title>
                    <v-card-subtitle>
                        <span class=" font-weight-medium"> Citta:</span>
                        <span class=" font-weight-bold"> {{scuolaAttiva.citta}}</span>
                    </v-card-subtitle>
                    <v-card-text>
                        {{scuolaAttiva.descrizione}}
                        <div v-if="scuolaAttiva.sito" class="mt-4">
                            <span class="font-weight-bold mr-2">Sito:</span><a class="mt-5" :href="scuolaAttiva.sito">{{scuolaAttiva.sito}}</a>
                        </div>
                        <div class="mt-3">
                            <a @click="scuolaAttiva=null" >Torna alla lista</a>
                        </div>
                    </v-card-text>
                    
                </v-card>
                <v-card v-else>
                    <v-card-title>
                        Benvenuto nel sito della RIASISSU
                    </v-card-title>
                    <v-card-subtitle>
                        Seleziona una scuola tra quelle in elenco
                    </v-card-subtitle>
                    <v-card-text>
                        <v-list dense><v-list-item-group>
                        <v-list-item   v-for="s in listaScuole" @click="cambiaScuola(s.id)" :key="s.id">
                            {{ s.nome +" di "+ s.citta}}
                        </v-list-item>
                        </v-list-item-group>
                        </v-list>
                    </v-card-text>
                </v-card>
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
            </v-col>
        </v-row>
        </v-container>
        
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
            console.log(s)
            this.scuolaAttiva=datiScuole.listaScuole[s-1]
        }
    },
}
</script>
<style >

</style>