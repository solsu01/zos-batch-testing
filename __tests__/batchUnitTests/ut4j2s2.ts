//unit test 4: job 2: step 2

import { execSync } from "child_process";

describe("unit test 4", () => {
    it("run job2js2", () => {
        const jobout = execSync(`zowe jobs submit lf /Users/solsu01/gitproj/zos-batch-testing/__tests__/batchUnitTests/job2step2.jcl --zosmf-p zosmftso1 --vasc`).toString();
       console.log(jobout);
        expect(jobout).toContain(`Spool file: STDERR`);
    }
    )
    }, )