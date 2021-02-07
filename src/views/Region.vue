<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title><a href="/tabs/accueil">Region</a></ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
        <RegionComponent/>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent  } from '@ionic/vue';
import RegionComponent from '@/components/RegionComponent.vue';


export default ({
  name: 'region',
  data(){
    return{        
      regionName:"",
      
    }
  },
  components: { 
    IonHeader, 
    IonToolbar, 
    IonTitle,
    IonContent, 
    IonPage,
    RegionComponent
    },
});

</script>

<style>

 a{
   text-decoration: none;
   color: white
 }

</style>