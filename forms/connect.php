<?php
    $fname=$_POST['fname'];
    $lname=$_POST['lname'];
    $locat=$_POST['locat'];
    $no=$_POST['no'];

    $conn=new mysqli('localhost:3307','root','','test1');
    if($conn-> connect_error){
        die('Connection Failed: '.$conn->connect_error);
    }else{
        $stmt=$conn->prepare("insert into registration(fname,lname,locat,no)
            values(?,?,?,?)");
        $stmt->bind_param("sssi",$fname,$lname,$locat,$no);
        $stmt->execute();
        echo "registration succesfully...";
        $stmt->close();
        $conn-> close();
    }
?>
