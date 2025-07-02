<template>
  <form @submit.prevent="login">
    <div class="w-1/2 mx-auto">
      <div>
        <label for="email" class="label">Email</label>
        <input id="email" type="text" class="input" v-model="form.email" />
        <div class="input-error" v-if="form.errors.email">
          {{ form.errors.email }}
        </div>
      </div>
      <div class="mt-4">
        <label for="password" class="label">Password</label>
        <input
          id="password"
          type="password"
          class="input"
          v-model="form.password" />
        <div class="input-error" v-if="form.errors.password">
          {{ form.errors.password }}
        </div>
      </div>
      <div class="mt-4">
        <button class="btn-primary w-full" type="submit">Login</button>
        <div class="mt-2 text-centered">
          <Link
            :href="route('user-account.create')"
            class="text-sm text-gray-500"
            >Create Account</Link
          >
        </div>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
  import { useForm, Link } from '@inertiajs/vue3';
  import { route } from 'ziggy-js';

  const form = useForm({
    email: null,
    password: null,
  });

  const login = () => form.post(route('login.store'));
</script>
