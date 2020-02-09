//PCCJOB1  JOB MSG,CLASS=A,MSGCLASS=X,NOTIFY=&SYSUID
//* JCL to run PC Credit Batch
//* Simplified with DB2 complications removed
//*
//* RUN PCCTRE
//*
//EDIT EXEC PGM=PCCTRE
//STEPLIB   DD DISP=SHR,DSN=PCS.PCC.LOADPDSE
//* INPUT DAILY TRANSACTIONS - SORTED
//TRAND    DD DISP=SHR,DSN=PCS.PCC.DATA.PCCTRE.DAILY
//* OUTPUT CLEANED DAILY TRANSACTIONS
//TRANC    DD DISP=(NEW,CATLG,DELETE),DSN=PCS.PCC.DATA.PCCTRE.CLEANED,
//             UNIT=SYSDA,VOL=SER=VPWRKD,SPACE=(TRK,(1,1),RLSE),
//             DCB=(LRECL=57,BLKSIZE=5700,RECFM=FB)
//* OUTPUT EXCEPTION DAILY TRANSACTIONS
//TRANE    DD DISP=(NEW,CATLG,DELETE),DSN=PCS.PCC.DATA.PCCTRE.EXCEPT,
//             UNIT=SYSDA,VOL=SER=VPWRKD,SPACE=(TRK,(1,1),RLSE),
//             DCB=(LRECL=58,BLKSIZE=5800,RECFM=FB)
//* OUTPUT REPORT
//REPT     DD DISP=(NEW,CATLG,CATLG),DSN=PCS.PCC.DATA.PCCTRE.REPORT,
//             UNIT=SYSDA,VOL=SER=VPWRKD,SPACE=(TRK,(1,1),RLSE),
//             DCB=(LRECL=71,BLKSIZE=6106,RECFM=FBA)
//SORTWORK DD AVGREC=K,SPACE=(186,(1000,1000),RLSE)
//SYSOUT   DD SYSOUT=*
//*
//* RUN PCCTRC
//*
//CONVERT EXEC PGM=PCCTRC
//STEPLIB  DD DISP=SHR,DSN=PCS.PCC.LOADPDSE
//* INPUT CLEANED DAILY TRANSACTIONS
//TRANC     DD DISP=SHR,DSN=PCS.PCC.DATA.PCCTRE.CLEANED
//* OUTPUT DAILY TRANSACTIONS CONVERTED TO USD
//TRANU    DD DISP=(NEW,CATLG,DELETE),DSN=PCS.PCC.DATA.PCCTRC.CONVERT,
//            UNIT=SYSDA,VOL=SER=VPWRKD,SPACE=(TRK,(1,1),RLSE),
//            DCB=(LRECL=57,BLKSIZE=5700,RECFM=FB)
//* OUTPUT REPORT
//REPT     DD DISP=(NEW,CATLG,CATLG),DSN=PCS.PCC.DATA.PCCTRC.REPORT,
//            UNIT=SYSDA,VOL=SER=VPWRKD,SPACE=(TRK,(1,1),RLSE),
//            DCB=(LRECL=71,BLKSIZE=6106,RECFM=FBA)
//SYSOUT   DD SYSOUT=*
//*
//* RUN PCCTRN
//*
//NAMEADDR EXEC PGM=PCCTRN
//STEPLIB   DD DISP=SHR,DSN=PCS.PCC.LOADPDSE
//* INPUT DAILY TRANSACTIONS
//TRANI     DD DISP=SHR,DSN=PCS.PCC.DATA.PCCTRC.CONVERT
//* OUTPUT DAILY TRANSACTIONS WITH NAME AND ADDRESS
//TRANO     DD DISP=(NEW,CATLG,DELETE),DSN=PCS.PCC.DATA.PCCTRN.NA,
//             UNIT=SYSDA,VOL=SER=VPWRKD,SPACE=(TRK,(1,1),RLSE),
//             DCB=(LRECL=194,BLKSIZE=6014,RECFM=FB)
//* OUTPUT REPORT
//REPT      DD DISP=(NEW,CATLG,CATLG),DSN=PCS.PCC.DATA.PCCTRN.REPORT,
//             UNIT=SYSDA,VOL=SER=VPWRKD,SPACE=(TRK,(1,1),RLSE),
//             DCB=(LRECL=71,BLKSIZE=6106,RECFM=FBA)
//* OUTPUT DAILY TRANSACTIONS WITH INVALID ACCOUNT NUMBER
//TRANE     DD DISP=(NEW,CATLG,DELETE),DSN=PCS.PCC.DATA.PCCTRN.ERROR,
//             UNIT=SYSDA,VOL=SER=VPWRKD,SPACE=(TRK,(1,1),RLSE),
//             DCB=(LRECL=58,BLKSIZE=6032,RECFM=FB)
//SYSOUT   DD SYSOUT=*