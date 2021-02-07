<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="city" href="/tabs/City">
          <ion-icon :icon="homeOutline" />
          <ion-label>Ville</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="Departement" href="/tabs/Departement">
          <ion-icon :icon="businessOutline" />
          <ion-label>Departement</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="Region" href="/tabs/Region">
          <ion-icon :icon="storefrontOutline" />
          <ion-label>Region</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage } from '@ionic/vue';
import { homeOutline, storefrontOutline, businessOutline } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
  setup() {
    return {
      homeOutline, 
      storefrontOutline, 
      businessOutline,
    }
  }
}
</script>