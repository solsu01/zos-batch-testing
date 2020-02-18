//functional system test: batch app
import * as fs from "fs";
import { execSync } from "child_process";

describe("functional system test", () => {
    it("should run all jobs in scheduler", () => {
        //following is a placeholder until I figure out how to call CA ESP scheduler from Zowe on our systems
        const jobout1 = execSync(`zowe jobs submit lf /Users/solsu01/gitproj/zos-batch-testing/zosBatchApplication/mimcopy1.jcl --zosmf-p zosmftso1 --vasc`).toString();
        console.log(jobout1);
        expect(jobout1).toContain(`MIMDRVFD HAS BEEN COPIED`);
        expect(jobout1).toContain('The initial working directory was not specified');
        const jobout2 = execSync(`zowe jobs submit lf /Users/solsu01/gitproj/zos-batch-testing/zosBatchApplication/mimcopy2.jcl --zosmf-p zosmftso1 --vasc`).toString();
        console.log(jobout2);
        expect(jobout2).toContain(`MIMCND1A HAS BEEN COPIED`);
        expect(jobout2).toContain('Spool file: STDERR');
    });
    it("should get reports from output viewing tool ca view",() => {
        const reportcmd = execSync(`zowe caview download  report 17 48Xi49nF19bZ4_DxQEBAQEBAQEBAQEBAQEBAQEBAQED__v_8AAAAAAAAAAAAAAAA`).toString();
        console.log(reportcmd);
        const report = fs.readFileSync(`/Users/solsu01/gitproj/zos-batch-testing/TESTREPORT01.txt`).toString();
        expect(report).toContain("VENDOR NAME: JOE'S SUPPLY CO.")
    }
    )
    }, )