<template >
    <div>

        <img :src="require('@/assets/italia_grigia.png')" usemap="#citta" >
        <svg viewBox="0 0 200 226"  id="svgPunti">
            <circle  v-for="scuola in listaScuole" :key="scuola.id"
                    :cy="(-inizio[0]+scuola.posizione[0])*rapp[0]" 
                    :cx="(-inizio[1]+scuola.posizione[1])*rapp[1]"  
                    r="2.2" fill="blue"  
                    @mouseover="selScuola(scuola.id)"
            />
            <circle v-if="posAttiva" :cy="(-inizio[0]+posAttiva[0])*rapp[0]" 
                    :cx="(-inizio[1]+posAttiva[1])*rapp[1]"  
                    r="3" fill="blue" stroke="yellow" stroke-width="1.2"/>
            
        </svg>

    </div>
</template>
<script>
import datiScuole from '@/storage'
export default {
    data() {
        return {
            listaScuole:datiScuole.listaScuole,
            rapp:[datiScuole.dim[0]/(datiScuole.fine[0]-datiScuole.inizio[0]),datiScuole.dim[1]/(datiScuole.fine[1]-datiScuole.inizio[1])], 
            inizio:datiScuole.inizio,
        }
    },
    props:['posAttiva'],
        
    methods: {
        selScuola(idScuola){
            this.$emit('cambioScuola',idScuola);
        }
    },
}
</script>
<style scoped>
    div {
        position: relative;
        display: inline-block;
    }
     svg {
        position: absolute;
        top: 0;
        left: 0;
        max-width: 100%;

    }
</style>