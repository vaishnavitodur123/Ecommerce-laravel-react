<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;


class AuthController extends Controller
{
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "email" => "required|email",
            "password" => "required"
        ]);


        if ($validator->fails()) {
            return response()->json([
                "status" => false,
                "message" => $validator->errors()
            ], 422);
        }

        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            $user = User::find(Auth::user()->id);

            if ($user->role == 'admin') {

                $token = $user->createToken('token')->plainTextToken;
                return response()->json([
                    "status" => true,
                    "message" => "Login successfully",
                    "token" => $token,
                    'id' => $user->id,
                    'name' => $user->name
                ], 200);
            } else {
                return response()->json([
                    "status" => false,
                    "message" => "You are not authorized to login"
                ], 401);
            }

        } else {
            return response()->json([
                "status" => false,
                "message" => "Invalid email or password"
            ], 401);
        }
    }
}
