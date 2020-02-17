//functional system test: batch app

import { execSync } from "child_process";

describe("functional system test", () => {
    it("run all jobs in scheduler", () => {
        const jobout1 = execSync(`zowe jobs submit lf /Users/solsu01/gitproj/zos-batch-testing/zosBatchApplication/mimcopy1.jcl --zosmf-p zosmftso1 --vasc`).toString();
        console.log(jobout1);
        expect(jobout1).toContain(`MIMDRVFD HAS BEEN COPIED`);
        expect(jobout1).toContain('The initial working directory was not specified');
        const jobout2 = execSync(`zowe jobs submit lf /Users/solsu01/gitproj/zos-batch-testing/zosBatchApplication/mimcopy2.jcl --zosmf-p zosmftso1 --vasc`).toString();
        console.log(jobout2);
        expect(jobout2).toContain(`MIMCND1A HAS BEEN COPIED`);
        expect(jobout2).toContain('Spool file: STDERR');
    }
    )
    }, )