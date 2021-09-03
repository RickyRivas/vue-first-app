// Import from a package
import { createApp } from 'vue';

//Import from custom package and components
import App from './App.vue';

import FriendContact from './components/FriendContact.vue' 


const app = createApp(App);

app.component('friend-contact', FriendContact);

app.mount('#app');
   