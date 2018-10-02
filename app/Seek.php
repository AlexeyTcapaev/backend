<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Exception;

class Seek extends Model
{
    private $file;
    private $filesize;

    function __construct($handle)
    {
        $this->filesize = filesize($handle);
        $this->file = fopen($handle, "r");
    }
    function __destruct()
    {

    }

    public function read_random_line()
    {
        fseek($this->file, rand(0, $this->filesize));
        return stream_get_line($this->file, 4096, "\n");

    }

}
