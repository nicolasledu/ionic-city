<template>
  <form @submit.prevent="cityRegion">
    <ion-item>
      <ion-select ok-text="Valider"  cancel-text="Annuler" v-model="SELECTED" >
         <ion-select-option v-for="data in dataRegion" :value="data.code" :key="data">{{data.code}} - {{data.nom }}</ion-select-option> 
      </ion-select>
    </ion-item>
    <ion-button type="submit" color="warning" expand="block">Rechercher</ion-button>
  </form>
  <div class="alerte">
        <ion-badge>
            {{regionlist.length}} resultat(s)
        </ion-badge>
    </div>
  <ion-card v-for="region in regionlist" :key="region.id">
    <ion-card-header>
      <ion-card-title>{{region.nom}}</ion-card-title><br>
      <ion-card-subtitle><h1>{{region.code}}</h1></ion-card-subtitle>
    </ion-card-header>
  </ion-card>
</template>

<script>
import { IonSelect, IonSelectOption , IonButton , IonItem, IonCard , IonCardHeader , IonCardSubtitle , IonCardTitle} from '@ionic/vue';
import axios from 'axios';

export default {
  name: 'RegionComponent',
  data(){
    return{
      dataRegion: [],
      regionlist:"",
      SELECTED:"",
    }
  },

  components: {  
    IonButton,
    IonItem,
    IonSelect, 
    IonSelectOption ,
    IonCard ,
     IonCardHeader , 
     IonCardSubtitle , 
     IonCardTitle
    },
    
    mounted(){
    axios
        .get(`https://geo.api.gouv.fr/regions`)
        .then((response) =>{
            console.log(response.data);
            this.dataRegion = response.data
           
        })
        .catch(() =>{
            
        });
  },
  methods: {
   cityRegion(){
      axios
        .get(`https://geo.api.gouv.fr/regions/${this.SELECTED}/departements`)
        .then((response) =>{
            console.log(this.SELECTED);
            this.regionlist = response.data; 
            console.log(this.regionlist)
           
        })
        .catch(() =>{
            
        });
    }
  }
}
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

.alerte{
  text-align: center;
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>