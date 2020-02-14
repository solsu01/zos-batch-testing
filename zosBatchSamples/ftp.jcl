//JOHTI04F JOB (IZUACCT),
//    'JCLCHECK FTP DEPLOY'
//FTPOUT   EXEC PGM=IKJEFT01,REGION=0M,DYNAMNBR=64
//SYSTCPD  DD   DISP=SHR,DSN=TCPIP.TCP.DATA
//SYSTSPRT DD   SYSOUT=*
//OUTPUT   DD   SYSOUT=*
//SYSTSIN  DD  *
ftp mvsde20.lvn.broadcom.net
/*
//INPUT    DD   *
solsu01
xxxx
binary
lcd '/tmp/johti04/jclcheck'
cd '/SYSTEM/tmp/johti04/jclcheck'
mput *
quit
/*
//
