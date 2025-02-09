<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;

class PagesController extends Controller
{
    public function home()
    {
        $projects = Project::where('featured', true)->get();

        return inertia("Home", compact('projects'));
    }

    public function projects()
    {
        $projects = Project::all();

        return inertia("Projects", compact('projects'));
    }
}
