<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title><a href="/tabs/accueil">Ville</a></ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
        <CityComponent/>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent  } from '@ionic/vue';
import CityComponent from '@/components/CityComponent.vue';


export default ({
  name: 'city',
  data(){
    return{        
      cityName:"",
      
    }
  },
  components: { 
    IonHeader, 
    IonToolbar, 
    IonTitle,
    IonContent, 
    IonPage,
    CityComponent
    },
});

</script>

<style>

 a{
   text-decoration: none;
   color: white
 }

</style>