<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProjectController extends Controller
{
    // Get all projects
    public function index()
    {
        $projects = Project::with('creator')->get();
        
        return response()->json([
            'success' => true,
            'data' => $projects
        ]);
    }

    // Get active projects
    public function active()
    {
        $projects = Project::active()->with('creator')->get();
        
        return response()->json([
            'success' => true,
            'data' => $projects
        ]);
    }

    // Get completed projects
    public function completed()
    {
        $projects = Project::completed()->with('creator')->get();
        
        return response()->json([
            'success' => true,
            'data' => $projects
        ]);
    }

    // Get single project
    public function show($id)
    {
        $project = Project::with('creator')->find($id);
        
        if (!$project) {
            return response()->json([
                'success' => false,
                'message' => 'Project not found'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'data' => $project
        ]);
    }

    // Create new project
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'status' => 'nullable|in:Active,In Progress,Completed,On Hold',
            'start_date' => 'nullable|date',
            'deadline' => 'nullable|date|after_or_equal:start_date',
            'completed_date' => 'nullable|date'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        $project = Project::create([
            'name' => $request->name,
            'description' => $request->description,
            'status' => $request->status ?? 'Active',
            'start_date' => $request->start_date,
            'deadline' => $request->deadline,
            'completed_date' => $request->completed_date,
            'created_by' => auth()->id()
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Project created successfully',
            'data' => $project
        ], 201);
    }

    // Update project
    public function update(Request $request, $id)
    {
        $project = Project::find($id);
        
        if (!$project) {
            return response()->json([
                'success' => false,
                'message' => 'Project not found'
            ], 404);
        }

        $validator = Validator::make($request->all(), [
            'name' => 'sometimes|string|max:255',
            'description' => 'nullable|string',
            'status' => 'nullable|in:Active,In Progress,Completed,On Hold',
            'start_date' => 'nullable|date',
            'deadline' => 'nullable|date|after_or_equal:start_date',
            'completed_date' => 'nullable|date'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        $project->update($request->all());

        return response()->json([
            'success' => true,
            'message' => 'Project updated successfully',
            'data' => $project
        ]);
    }

    // Delete project
    public function destroy($id)
    {
        $project = Project::find($id);
        
        if (!$project) {
            return response()->json([
                'success' => false,
                'message' => 'Project not found'
            ], 404);
        }

        $project->delete();

        return response()->json([
            'success' => true,
            'message' => 'Project deleted successfully'
        ]);
    }

    // Get project statistics
    public function stats()
    {
        $total = Project::count();
        $active = Project::active()->count();
        $completed = Project::completed()->count();
        $inProgress = Project::where('status', 'In Progress')->count();
        $onHold = Project::where('status', 'On Hold')->count();

        return response()->json([
            'success' => true,
            'data' => [
                'total' => $total,
                'active' => $active,
                'completed' => $completed,
                'in_progress' => $inProgress,
                'on_hold' => $onHold
            ]
        ]);
    }
}