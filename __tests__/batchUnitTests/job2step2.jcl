//SOLSU01R JOB (123300000),'MSME MKDIR',
//    MSGCLASS=X,MSGLEVEL=(1,1),NOTIFY=SOLSU01
//*
//* Step 2: CREATE USS Directory
//*
// SET ESDDIR='/a/solsu01/MSME'
//*                                                                   *
//MKDIR EXEC PGM=BPXBATCH,
// PARM='sh umask 0000; mkdir -p -m 775 &ESDDIR'
//STDOUT  DD SYSOUT=*
//STDERR  DD SYSOUT=*