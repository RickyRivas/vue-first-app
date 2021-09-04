// Import from a package
import { createApp } from 'vue';

//Import from custom package and components
import App from './App.vue';

import FriendContact from './components/FriendContact.vue' 
import NewFriend from './components/NewFriend.vue'

const app = createApp(App);

app.component('friend-contact', FriendContact);
app.component('new-friend', NewFriend)

app.mount('#app');
   