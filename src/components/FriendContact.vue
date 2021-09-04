<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? '(favorite)' : ''}}</h2>
    <button @click='toggleDetails'>{{ detailsAreVisible ? 'Hide Details' : 'Show Details'}}</button>
    <button @click='toggleFavorite'>Toggle Favorite</button>
    <ul v-if='detailsAreVisible'>
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ emailAddress }}</li>
    </ul>
    <button @click="$emit('delete', id)">Delete Contact</button>
  </li>
</template>

<script>
export default {
  // props: [
  //   'name',
  //   'phoneNumber',
  //   'emailAddress',
  //   'isFavorite'
  // ],
  emits: ['toggle-favorite', 'delete'],
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true,

    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true
    },
    isFavorite: {
      type: Boolean,
      required: false,
    }
  },
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
      toggleDetails(){
          this.detailsAreVisible = !this.detailsAreVisible;
      },
      toggleFavorite(){
        this.$emit('toggle-favorite', this.id);
      }
  },   
};
</script>  