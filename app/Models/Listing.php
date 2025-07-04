<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Listing extends Model
{
    use HasFactory;

    protected $fillable = [
        'beds',
        'baths',
        'area',
        'city',
        'code',
        'street',
        'street_nr',
        'price',
        'owner_id'
    ];

    public function owner(): BelongsTo
    {
        return $this->belongsTo(\App\Models\User::class, 'owner_id');
    }

    public function scopeFilter(Builder $query, array $filters): Builder
    {
        return $query->when(
            $filters['priceFrom'] ?? false,
            fn($query, $value) => $query->where('price', '>=', $value)
        )
            ->when(
                $filters['priceTo'] ?? false,
                fn($query, $value) => $query->where('price', '<=', $value)
            )
            ->when(
                $filters['beds'] ?? false,
                fn($query, $value) => $query->where('beds', (int)$value < 6 ? '=' : '>=', $value)
            )
            ->when(
                $filters['baths'] ?? false,
                fn($query, $value) => $query->where('baths', (int)$value < 6 ? '=' : '>=', $value)
            )
            ->when(
                $filters['areaFrom'] ?? false,
                fn($query, $value) => $query->where('area', '>=', $value)
            )
            ->when(
                $filters['areaTo'] ?? false,
                fn($query, $value) => $query->where('area', '<=', $value)
            );
    }
}
