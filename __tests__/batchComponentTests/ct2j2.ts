//component test 2: job 2

import { execSync } from "child_process";

describe("component test 2", () => {
    it("should run job1", () => {
        const jobout = execSync(`zowe jobs submit lf /Users/solsu01/gitproj/zos-batch-testing/zosBatchApplication/mimcopy2.jcl --zosmf-p zosmftso1 --vasc`).toString();
        console.log(jobout);
        expect(jobout).toContain(`MIMCND1A HAS BEEN COPIED`);
        expect(jobout).toContain('Spool file: STDERR');
    }
    )
    }, )