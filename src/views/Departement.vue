<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title><a href="/tabs/accueil">Departement</a></ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
        <DepartementComponent/>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent  } from '@ionic/vue';
import DepartementComponent from '@/components/DepartementComponent.vue';


export default ({
  name: 'departement',
  data(){
    return{        
      departementName:"",
      
    }
  },
  components: { 
    IonHeader, 
    IonToolbar, 
    IonTitle,
    IonContent, 
    IonPage,
    DepartementComponent
    },
});

</script>

<style>

 a{
   text-decoration: none;
   color: white
 }

</style>