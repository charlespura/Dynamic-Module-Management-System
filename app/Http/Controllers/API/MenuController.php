<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Menu;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class MenuController extends Controller
{
    // Get all menus with tree structure
    public function index()
    {
        $menus = Menu::with(['children' => function($query) {
            $query->orderBy('sort_order');
        }])->whereNull('parent_id')
           ->orderBy('sort_order')
           ->get();

        return response()->json([
            'success' => true,
            'data' => $menus
        ]);
    }

    // Get menu by ID
    public function show($id)
    {
        $menu = Menu::with('children')->find($id);
        
        if (!$menu) {
            return response()->json([
                'success' => false,
                'message' => 'Menu not found'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'data' => $menu
        ]);
    }

    // Create new menu
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'parent_id' => 'nullable|exists:menus,id',
            'icon' => 'nullable|string|max:100',
            'route' => 'nullable|string|max:255',
            'component' => 'nullable|string|max:255',
            'sort_order' => 'nullable|integer',
            'status' => 'nullable|boolean'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        $menu = Menu::create($request->all());

        return response()->json([
            'success' => true,
            'message' => 'Menu created successfully',
            'data' => $menu
        ], 201);
    }

    // Update menu
    public function update(Request $request, $id)
    {
        $menu = Menu::find($id);
        
        if (!$menu) {
            return response()->json([
                'success' => false,
                'message' => 'Menu not found'
            ], 404);
        }

        $validator = Validator::make($request->all(), [
            'name' => 'sometimes|string|max:255',
            'parent_id' => 'nullable|exists:menus,id',
            'icon' => 'nullable|string|max:100',
            'route' => 'nullable|string|max:255',
            'component' => 'nullable|string|max:255',
            'sort_order' => 'nullable|integer',
            'status' => 'nullable|boolean'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        $menu->update($request->all());

        return response()->json([
            'success' => true,
            'message' => 'Menu updated successfully',
            'data' => $menu
        ]);
    }

    // Delete menu
    public function destroy($id)
    {
        $menu = Menu::find($id);
        
        if (!$menu) {
            return response()->json([
                'success' => false,
                'message' => 'Menu not found'
            ], 404);
        }

        $menu->delete();

        return response()->json([
            'success' => true,
            'message' => 'Menu deleted successfully'
        ]);
    }

    // Get menu tree for sidebar
    public function getSidebarMenus()
    {
        $menus = Menu::whereNull('parent_id')
                    ->where('status', 1)
                    ->orderBy('sort_order')
                    ->with(['children' => function($query) {
                        $query->where('status', 1)
                              ->orderBy('sort_order');
                    }])
                    ->get();

        return response()->json([
            'success' => true,
            'data' => $menus
        ]);
    }
}