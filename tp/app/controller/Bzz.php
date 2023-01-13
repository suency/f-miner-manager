<?php

namespace app\controller;

use app\BaseController;
use think\facade\Db;
use phpseclib3\Net\SSH2;

class Bzz extends BaseController
{
    public function index()
    {
        $arr = ["a" => "123", "b" => "4563"];
        return json_encode($arr);
    }

    public function getHosts()
    {
        /* $ip_list = [
            "47.104.29.78",
            "47.104.216.155",
            "47.105.78.181",
            "47.105.120.28",
            "47.105.125.179",
            "8.140.130.71",
            "123.56.222.170",
            "8.140.114.65",
            "8.140.177.85",
            "8.140.177.105", //
            "8.140.155.254",
            "8.140.116.25",
            "8.140.132.51",
            "8.140.181.246",
            "8.140.166.66",
            "47.104.142.206",
            "47.105.66.153",
            "47.105.98.177",
            "47.104.141.232",
            "47.105.90.196"
        ]; */

        $ip_list = [
            "121.196.215.38",
            "120.27.217.237",
            "114.55.126.46",
            "121.196.216.25",
            "120.27.223.123",
            "121.196.209.56",
            "116.62.20.122",
            "116.62.58.49",
            "121.43.177.207",
            "120.27.208.131", //
            "8.136.202.160",
            "121.43.188.225",
            "121.196.209.29",
            "121.196.196.20",
            "120.27.238.161",
            "121.43.177.33",
            "121.196.221.58",
            "121.196.220.85",
            "8.136.235.47",
            "116.62.126.63"
        ];

        $result = [];
        $connectionList = [];
        $streamList = [];

        for ($i = 0; $i < sizeof($ip_list); $i++) {
            $connection[$i] = ssh2_connect($ip_list[$i], 22);
            ssh2_auth_password($connection[$i], 'root', 'tianiub');
            $stream[$i] = ssh2_exec($connection[$i], 'curl http://localhost:1635/chequebook/cheque');
            stream_set_blocking($stream[$i], true);

            array_push($result, [$ip_list[$i] => json_decode(stream_get_contents($stream[$i]))]);
        }

        echo json_encode($result);
    }
}
