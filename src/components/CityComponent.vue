<template>
  <form @submit.prevent="citysearch">
    <ion-item>
      <ion-searchbar placeholder="Paris or 75000" v-model="city"></ion-searchbar>
    </ion-item>
    <ion-button type="submit" color="warning" expand="block">Rechercher</ion-button>
  </form>
  <div class="alerte">
    <ion-badge>
    {{cityArray.length}} resultat(s)
    </ion-badge>
  </div>
  <ion-card v-for="city in cityArray" :key="city.id">
    <ion-card-header>
      <ion-card-title>{{city.nom}}</ion-card-title>
      <ion-card-subtitle>{{city.region.nom}}</ion-card-subtitle>
      <ion-card-content>
        {{city.departement.nom}} ({{city.departement.code}}) <br> {{city.population}} Habitants <br> Codes Postaux : {{city.codesPostaux}}
      </ion-card-content>
    </ion-card-header>
  </ion-card>
</template>

<script>
import { IonSearchbar, IonButton , IonItem , IonCard , IonCardHeader , IonCardSubtitle , IonCardTitle} from '@ionic/vue';
import axios from 'axios';

export default {
  name: 'CityComponent',
  data(){
    return{
      city: "",
      cityArray: [],
    }
  },

  components: { 
    IonSearchbar, 
    IonButton,
    IonItem, 
    IonCard , 
    IonCardHeader , 
    IonCardSubtitle ,
    IonCardTitle
    },

  methods: {
   citysearch(){
     if(isNaN(this.city)){
      axios
        .get(`https://geo.api.gouv.fr/communes?nom=${this.city}&fields=code,nom,population,departement,region,codesPostaux`)
        .then((response) =>{
            console.log(response.data);
            this.cityArray = response.data; 
            console.log(this.cityArray)
           
        })
        .catch(() =>{
            
        });
     }else{
       axios
        .get(`https://geo.api.gouv.fr/communes?codePostal=${this.city}`)
        .then((response) =>{
            console.log(response.data);
            this.cityArray = response.data; 
            console.log(this.cityArray)
           
        })
        .catch(() =>{
            
        });
     }
   }
  },
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