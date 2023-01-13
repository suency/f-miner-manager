<?php
namespace app\controller;

use app\BaseController;
use think\facade\Db;
use phpseclib3\Net\SSH2;

class Star extends BaseController
{
    public function index()
    {
        $arr = ["a"=>"123","b"=>"456"];
        return json_encode($arr);
    }

    public function getusers()
    {
        $arr = ["a"=>"123","b"=>"456"];

        $result = Db::table('users')->where('id', 1)->find();
        return json_encode($result);
    }

    public function blockWin()
    {
        
        //phpinfo();
        /* $ssh = new SSH2('192.168.2.52');
        if (!$ssh->login('suency', '111111')) {
            throw new \Exception('Login failed');
        }

        $re = $ssh->read('suency@suency:~$');
        $ssh->write("lotus-miner sectors list\n");
        $re = $ssh->read('suency@suency:~$');
        echo "<pre>{$re}</pre>"; */

        
        //echo $ssh->exec('/usr/local/bin/lotus-miner info 2>&1');
        $server   = "192.168.2.52"; // server IP/hostname of the SSH server
        $username = "suency"; // username for the user you are connecting as on the SSH server
        $password = "111111"; // password for the user you are connecting as on the SSH server
        $command  = "/usr/local/bin/lotus-miner info 2>&1"; // could be anything available on the server you are SSH'ing to

        $connection = ssh2_connect($server, 22);
        ssh2_auth_password($connection, $username, $password);


        $shell=ssh2_shell($connection, 'xterm');
        fwrite( $shell, 'lotus-miner info'.PHP_EOL);
        $data="";
        $start = time();
        $end = time();

        //sleep(5);
        while(true) {
            $end = time();
            $data .= stream_get_contents($shell);
            if(strpos($data,'Total') !== false){ 
                break; 
            }

            if(($end-$start)>=10){
                break;
            }
        }

        preg_match_all('/Miner: (\w+)/i',$data,$miner);
        preg_match_all('/Byte Power:(.+)\r/i',$data,$power);
        preg_match_all('/Expected block win rate: (.+)\r/i',$data,$win);
        preg_match_all('/Miner Balance: (.+)\r/i',$data,$minerBalance);
        preg_match_all('/Vesting: (.+)\r/i',$data,$vesting);
        preg_match_all('/Available: (.+)\r/i',$data,$available);
        preg_match_all('/Worker Balance: (.+)\r/i',$data,$workerBalance);
        preg_match_all('/Total: (.+)\r/i',$data,$total);
        preg_match_all('/Proving: (\d|\.)+/i',$data,$proving);
        $result = [
            "miner"=>$miner[1][0],
            "power"=>ltrim($power[1][0]),
            "win"=>$win[1][0],
            "minerBalance"=>ltrim($minerBalance[1][0]),
            "vesting"=>ltrim($vesting[1][0]),
            "available"=>ltrim($available[1][0]),
            "workerBalance"=>$workerBalance[1][0],
            "total"=>$total[1][0],
            "proving"=>str_replace("Proving: ","",$proving[0][1])
        ];


        $newstr = preg_replace('/[^!-~]+/', " ", $data);
        preg_match('/Sectors:.+/',$newstr,$temp);
        $temp = str_replace('Sectors: ','',$temp);
        $temp = preg_split('/(\d{1}\s)/', $temp[0], -1, (PREG_SPLIT_DELIM_CAPTURE | PREG_SPLIT_NO_EMPTY));
        $resultSectors = [];
        for( $i = 0; $i < sizeof($temp); $i+=2)
        {
            if($i == sizeof($temp) -1){
                array_push($resultSectors,trim($temp[$i]));
            }else{
                array_push($resultSectors,trim($temp[$i]) . trim($temp[$i + 1]));
            }
            
        }

        $result["sectors"] = $resultSectors;
        //array_push($result,$resultSectors);
        fclose($shell);
        //echo $data;
        return json_encode($result);

    }

    public function getJobs()
    {
        
        
        $server   = "192.168.2.52"; // server IP/hostname of the SSH server
        $username = "suency"; // username for the user you are connecting as on the SSH server
        $password = "111111"; // password for the user you are connecting as on the SSH server

        $connection = ssh2_connect($server, 22);
        ssh2_auth_password($connection, $username, $password);


        $shell=ssh2_shell($connection, 'xterm');
        fwrite( $shell, 'lotus-miner sealing jobs'.PHP_EOL);
        $data="";
        sleep(5);

        $result = [];
        while($line = fgets($shell)) {
            $data .= $line.'<br>';
            if(strpos($data,'~$ lotus-miner sealing jobs') !== false){ 
                array_push($result,$line);
            }
        }
        fclose($shell);

        /* foreach ($result as $key => $value) {
            echo "键名是：" . $key . "值是：" . $value;
            echo "<br/>";
        } */
        $finalResult = [];
        foreach ($result as $key => $value) {
            if($key!=0 && $key!=1 && $key!=sizeof($result)-1){
                $arr = preg_split('/\s+/', $value);
                array_push($finalResult,$arr);
                /* echo "键名是：" . $key . "值是：" . $value;
                echo "<br/>"; */
            }

        }
        //print_r($finalResult);
        
        //echo $data;
        return json_encode($finalResult);

    }

    public function getWorkers()
    {
        
        
        $server   = "192.168.2.52"; // server IP/hostname of the SSH server
        $username = "suency"; // username for the user you are connecting as on the SSH server
        $password = "111111"; // password for the user you are connecting as on the SSH server

        $connection = ssh2_connect($server, 22);
        ssh2_auth_password($connection, $username, $password);


        $shell=ssh2_shell($connection, 'xterm');
        fwrite( $shell, 'lotus-miner sealing workers'.PHP_EOL);


        $data="";
        $start = time();
        $end = time();
        sleep(1);
        $data .= stream_get_contents($shell);

        fclose($shell);


        preg_match_all('/Worker[^((?!used).)]+.*/',$data,$worker);
        preg_match_all('/CPU[^((?!used).)]+.*/',$data,$cpu);
        preg_match_all('/RAM[^((?!used).)]+.*/',$data,$ram);
        preg_match_all('/VMEM[^((?!used).)]+.*/',$data,$vmem);
        preg_match_all('/GPU[^((?!used).)]+.*/',$data,$gpu);

        $worker2 = $worker[0];
        $cpu2 = $cpu[0];
        $ram2 = $ram[0];
        $vmem2 = $vmem[0];
        $gpu2 = $gpu[0];

        foreach($worker2 as $key=>$value){
            $worker2[$key] = str_replace("\r", '', $worker2[$key]);  
        }

        /* foreach($gpu[0] as $key=>$value){
            if(trim($value) == 'GPU: Quadro M5000, used'){
                unset($gpu[0][$key]);
                break;
            }
        } */

        //gpu
        foreach($gpu[0] as $key=>$value){
            array_push($gpu2,trim(str_replace("GPU:",'',$value)));
        }


        //cpi
        $temp = [];
        foreach($cpu2 as $key=>$value){
            preg_match('/\d+\/\d+/',$value,$r1);
            array_push($temp,$r1[0]);
        }
        $cpu2 = $temp;

        //ram
        $temp = [];
        foreach($ram2 as $key=>$value){
            preg_match('/\d+\%/',$value,$r1);
            array_push($temp,$r1[0]);
        }
        $ram2 = $temp;

        //vmem
        $temp = [];
        foreach($vmem2 as $key=>$value){
            preg_match('/\d+\%/',$value,$r1);
            array_push($temp,$r1[0]);
        }
        $vmem2 = $temp;

        $fianlReuslt = [];

        for($i = 0; $i<sizeof($worker2);$i++){
            if(!isset($gpu[0][$i])){
                $gpu[0][$i] = "NO GPU";
            }
            array_push($fianlReuslt,[$worker2[$i],$cpu2[$i],$ram2[$i],$vmem2[$i],$gpu[0][$i]]);
        }

        /* $fianlReuslt = [
            [$worker2[0],$cpu2[0],$ram2[0],$vmem2[0],$gpu2[0]],
            [$worker2[1],$cpu2[1],$ram2[1],$vmem2[1],$gpu2[1]],
            [$worker2[2],$cpu2[2],$ram2[2],$vmem2[2],$gpu2[2]],
            [$worker2[3],$cpu2[3],$ram2[3],$vmem2[3],$gpu2[3]],
            [$worker2[4],$cpu2[4],$ram2[4],$vmem2[4],$gpu2[4]]
        ]; */

        //print_r($worker2);
        //print_r($cpu2);
        //print_r($ram2);
        //print_r($gpu[0]);
        
        return json_encode($fianlReuslt);

    }

    public function getSectors()
    {
        
        
        $server   = "192.168.2.52"; // server IP/hostname of the SSH server
        $username = "suency"; // username for the user you are connecting as on the SSH server
        $password = "111111"; // password for the user you are connecting as on the SSH server

        $connection = ssh2_connect($server, 22);
        ssh2_auth_password($connection, $username, $password);


        $shell=ssh2_shell($connection, 'xterm');
        fwrite( $shell, 'lotus-miner sectors list'.PHP_EOL);
        $data="";
        sleep(60);

        $result = [];
        while($line = fgets($shell)) {
            $data .= $line.'<br>';
            if(strpos($data,'~$ lotus-miner sectors list') !== false){ 
                //$line = str_replace("\u001b\[32m","",$line);
                $line = preg_replace('#\\x1b[[][^A-Za-z]*[A-Za-z]#', '', $line);
                array_push($result,$line);
            }
        }

        //$data = str_replace("\u001b[32m","",$data);
        fclose($shell);

        /* foreach ($result as $key => $value) {
            echo "键名是：" . $key . "值是：" . $value;
            echo "<br/>";
        } */
        $finalResult = [];
        foreach ($result as $key => $value) {
            if($key!=0 && $key!=1 && $key!=sizeof($result)-1){
                $arr = preg_split('/\s+/', $value);
                array_push($finalResult,$arr);
                /* echo "键名是：" . $key . "值是：" . $value;
                echo "<br/>"; */
            }

        }
        //print_r($finalResult);
        
        //echo $data;
        return json_encode($finalResult);

    }


    public function pledge()
    {
        $n = $this->request->param('n');

        //return json_encode(["n"=>$n]);
        $server   = "192.168.2.52";
        $username = "suency"; 
        $password = "111111";

        $connection = ssh2_connect($server, 22);
        ssh2_auth_password($connection, $username, $password);


        $shell=ssh2_shell($connection, 'xterm');
        for($i = 0; $i < $n; $i++){
            fwrite( $shell, 'lotus-miner sectors pledge'.PHP_EOL);
        }

        $data="";
        sleep(1);
        $info = ["status"=>"ok"];
        return json_encode($info);

    }

    public function bao()
    {
        
        
        $url = 'https://filestar.info/api/v1/address/f0181030/blocks?pageSize=20&page=0';
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url );
        //参数为1表示传输数据，为0表示直接输出显示。
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        //参数为0表示不带头文件，为1表示带头文件
        curl_setopt($ch, CURLOPT_HEADER,0);
        $output = curl_exec($ch);
        echo $output;
        curl_close($ch);


    }

    public function bao2643()
    {
        
        
        $url = 'https://filestar.info/api/v1/address/f0183133/blocks?pageSize=20&page=0';
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url );
        //参数为1表示传输数据，为0表示直接输出显示。
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        //参数为0表示不带头文件，为1表示带头文件
        curl_setopt($ch, CURLOPT_HEADER,0);
        $output = curl_exec($ch);
        echo $output;
        curl_close($ch);


    }

    function get_onlineip() {
        $ch = curl_init("http://ip.42.pl/raw");
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $a = curl_exec($ch);
        //preg_match("/[(.*)]/", $a, $ip);
        //var_dump($a);
        echo json_encode(["ip"=>$a]);
        curl_close($ch);
    }
}
