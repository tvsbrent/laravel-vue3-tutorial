<template>
  <div>
    <form @submit.prevent="create" class="grid grid-cols-6 gap-4">
      <div class="col-span-2">
        <label class="label" for="beds">Beds:</label>
        <input
          v-model.number="form.beds"
          id="beds"
          type="text"
          class="input"
          required />
        <div v-if="form.errors.beds" class="input-error">
          {{ form.errors.beds }}
        </div>
      </div>
      <div class="col-span-2">
        <label class="label" for="baths">Baths:</label>
        <input
          v-model.number="form.baths"
          id="baths"
          type="text"
          class="input"
          required />
        <div v-if="form.errors.baths" class="input-error">
          {{ form.errors.baths }}
        </div>
      </div>
      <div class="col-span-2">
        <label class="label" for="area">Square Feet:</label>
        <input
          v-model.number="form.area"
          id="area"
          type="text"
          class="input"
          required />
        <div v-if="form.errors.area" class="input-error">
          {{ form.errors.area }}
        </div>
      </div>
      <div class="col-span-2">
        <label class="label" for="street_nr">Street Number:</label>
        <input
          v-model="form.street_nr"
          id="street_nr"
          type="text"
          class="input"
          required />
        <div v-if="form.errors.street_nr" class="input-error">
          {{ form.errors.street_nr }}
        </div>
      </div>
      <div class="col-span-4">
        <label class="label" for="street">Street:</label>
        <input
          v-model="form.street"
          id="street"
          type="text"
          class="input"
          required />
        <div v-if="form.errors.street" class="input-error">
          {{ form.errors.street }}
        </div>
      </div>
      <div class="col-span-4">
        <label class="label" for="city">City:</label>
        <input
          v-model="form.city"
          id="city"
          type="text"
          class="input"
          required />
        <div v-if="form.errors.city" class="input-error">
          {{ form.errors.city }}
        </div>
      </div>
      <div class="col-span-2">
        <label class="label" for="code">Postal Code:</label>
        <input
          v-model="form.code"
          id="code"
          type="text"
          class="input"
          required />
        <div v-if="form.errors.code" class="input-error">
          {{ form.errors.code }}
        </div>
      </div>
      <div class="col-span-6">
        <label class="label" for="price">Price:</label>
        <input
          v-model.number="form.price"
          id="price"
          type="number"
          class="input"
          required />
        <div v-if="form.errors.price" class="input-error">
          {{ form.errors.price }}
        </div>
      </div>
      <div class="col-span-6">
        <button type="submit" class="btn-primary">Create</button>
      </div>
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
    street_nr: '',
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
