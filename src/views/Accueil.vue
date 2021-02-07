<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Accueil</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
        <div class="accueil"> 
            <h1>Bienvenue sur une application ou tu peux rechercher des régions , <br> des départements et meme des villes.</h1>
        </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent  } from '@ionic/vue';

export default ({
  name: 'accueil',
  data(){
    return{       
      
    }
  },
  components: { 
    IonHeader, 
    IonToolbar, 
    IonTitle,
    IonContent, 
    IonPage,

    },
});

</script>

<style>
    .accueil{
    text-align: center;
    margin-top: 35%
    }
</style>