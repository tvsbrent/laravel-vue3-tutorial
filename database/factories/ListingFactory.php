<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Listing>
 */
class ListingFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'beds' => $this->faker->numberBetween(1, 5),
            'baths' => $this->faker->numberBetween(1, 5),
            'area' => $this->faker->numberBetween(20, 350),
            'city' => $this->faker->city(),
            'code' => $this->faker->postcode(),
            'street' => $this->faker->streetName(),
            'street_nr' => $this->faker->buildingNumber(),
            'price' => $this->faker->numberBetween(50_000, 2_000_000),
        ];
    }
}
