<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RealtorListingController extends Controller
{
    public function index(Request $request)
    {
        return inertia('Realtor/Index', ['listings' => $request->user()->listings]);
    }
}
