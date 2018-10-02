<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Seek;
use Exception;

class SeekController extends Controller
{
    public function index()
    {
        try {
            $s = new Seek(public_path("text.txt"));
            for ($i = 0; $i < 10000; $i++) {
                echo $s->read_random_line();
            }




        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
        return;

    }

}
