<template>
  <div>
    <h1>Create Listing</h1>
    <form @submit.prevent="create">
      <div>
        <label for="beds">Beds:</label>
        <input v-model.number="form.beds" id="beds" type="text" required />
        <div v-if="form.errors.beds" style="color: red">
          {{ form.errors.beds }}
        </div>
      </div>
      <div>
        <label for="baths">Baths:</label>
        <input v-model.number="form.baths" id="baths" type="text" required />
        <div v-if="form.errors.baths" style="color: red">
          {{ form.errors.baths }}
        </div>
      </div>
      <div>
        <label for="area">Square Feet:</label>
        <input v-model.number="form.area" id="area" type="text" required />
        <div v-if="form.errors.area" style="color: red">
          {{ form.errors.area }}
        </div>
      </div>
      <div>
        <label for="street_nr">Street Number:</label>
        <input
          v-model.number="form.street_nr"
          id="street_nr"
          type="text"
          required />
        <div v-if="form.errors.street_nr" style="color: red">
          {{ form.errors.street_nr }}
        </div>
      </div>
      <div>
        <label for="street">Street:</label>
        <input v-model="form.street" id="street" type="text" required />
        <div v-if="form.errors.street" style="color: red">
          {{ form.errors.street }}
        </div>
      </div>
      <div>
        <label for="city">City:</label>
        <input v-model="form.city" id="city" type="text" required />
        <div v-if="form.errors.city" style="color: red">
          {{ form.errors.city }}
        </div>
      </div>
      <div>
        <label for="code">Postal Code:</label>
        <input v-model="form.code" id="code" type="text" required />
        <div v-if="form.errors.code" style="color: red">
          {{ form.errors.code }}
        </div>
      </div>
      <div>
        <label for="price">Price:</label>
        <input v-model.number="form.price" id="price" type="number" required />
        <div v-if="form.errors.price" style="color: red">
          {{ form.errors.price }}
        </div>
      </div>
      <button type="submit">Create</button>
    </form>
  </div>
</template>

<script setup lang="ts">
  import type { Listing } from '@/types';

  import { useForm } from '@inertiajs/vue3';
  import { route } from 'ziggy-js';

  const form = useForm<Partial<Listing>>({
    beds: 0,
    baths: 0,
    area: 0,
    street_nr: 0,
    street: '',
    city: '',
    code: '',
    price: 0,
  });

  const create = () => form.post(route('listings.store'));
</script>

<style scoped>
  label {
    margin-right: 2em;
  }

  div {
    padding: 2px;
  }
</style>
