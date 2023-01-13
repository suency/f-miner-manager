<?php

namespace app\controller;

use app\BaseController;
use think\facade\Db;
use phpseclib3\Net\SSH2;

class Tiger extends BaseController
{
    public function testssh2()
    {
        $ssh = new SSH2('192.168.2.52:22');
        if (!$ssh->login('suency', '111111')) {
            throw new \Exception('Login failed');
        } else {
            //dump($ssh->exec('ls -l'));
            $ssh->exec('ping 127.0.0.1', function ($str) {
                dump($str);
                //if (strpos($str, 'icmp_seq=5') !== false) {
                //    return true;
                //}
            });
        }
    }
}
