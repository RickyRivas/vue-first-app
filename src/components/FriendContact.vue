<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click='toggleDetails'>{{ detailsAreVisible ? 'Hide Details' : 'Show Details'}}</button>
    <ul v-if='detailsAreVisible'>
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "raul",
        name: "Raul Saucedo",
        phone: "9183128822",
        email: "123@gmail.com",
      },
    };
  },
  methods: {
      toggleDetails(){
          this.detailsAreVisible = !this.detailsAreVisible;
      }
  },   
};
</script>  