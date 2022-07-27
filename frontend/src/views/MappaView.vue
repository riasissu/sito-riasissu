<template>
    <div>
        <v-container>

        <v-row>
            <v-col>
                <MappaScuole @cambioScuola="cambiaScuola"></MappaScuole>
            </v-col>
            <v-col>
                <div v-if="scuolaAttiva!=null">
                    <div :class="['text-h4']" v-text="scuolaAttiva.nome"></div>
                    <div class="mt-4">
                        <span class="text-h5 font-weight-light"> Citta:</span>
                        <span class="text-h5 font-weight-medium"> {{scuolaAttiva.citta}}
                        </span>
                    </div>
                    <h4>
                        <b>Sede:</b>{{scuolaAttiva.citta}}
                    </h4>
                </div>
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
        };
    },
    created() {
    },
    components: { MappaScuole },
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