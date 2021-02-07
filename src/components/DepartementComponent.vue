<template>
  <form @submit.prevent="cityDepartement">
    <ion-item>
      <ion-select ok-text="Valider"  cancel-text="Annuler" v-model="SELECTED" >
         <ion-select-option v-for="data in dataDepartement" :value="data.code" :key="data">{{data.code}} - {{data.nom }}</ion-select-option> 
      </ion-select>
    </ion-item>
    <ion-button type="submit" color="warning" expand="block">Rechercher</ion-button>
  </form>
   <div class="alerte">
        <ion-badge>
            {{departementlist.length}} resultat(s)
        </ion-badge>
    </div>
  <ion-card v-for="departement in departementlist" :key="departement.id">
    <ion-card-header>
      <ion-card-title>{{departement.nom}}</ion-card-title>
      <ion-card-subtitle>{{departement.region.nom}}</ion-card-subtitle>
      <ion-card-content>
        {{departement.departement.nom}} ({{departement.departement.code}}) <br> {{departement.population}} Habitants <br> Codes Postaux : {{departement.codesPostaux}}
      </ion-card-content>
    </ion-card-header>
  </ion-card>
</template>

<script>
import { IonSelect, IonSelectOption , IonButton , IonItem , IonCard , IonCardHeader , IonCardSubtitle , IonCardTitle} from '@ionic/vue';
import axios from 'axios';

export default {
  name: 'DepartementComponent',
  data(){
    return{
      dataDepartement: [],
      departementlist: "",
      SELECTED:"",
    }
  },

  components: {  
    IonButton,
    IonItem,
    IonSelect, 
    IonSelectOption,
    IonCard , 
    IonCardHeader , 
    IonCardSubtitle , 
    IonCardTitle
    },
    
    mounted(){
    axios
        .get(`https://geo.api.gouv.fr/departements`)
        .then((response) =>{
            console.log(response.data);
            this.dataDepartement = response.data
           
        })
        .catch(() =>{
            
        });
  },
  methods: {
   cityDepartement(){
      axios
        .get(`https://geo.api.gouv.fr/departements/${this.SELECTED}/communes?fields=code,nom,departement,region,codesPostaux,population`)
        .then((response) =>{
            console.log(this.SELECTED);
            this.departementlist = response.data; 
            console.log(this.departementlist)
           
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