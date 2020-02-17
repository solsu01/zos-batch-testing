//unit test 3: job 2: step 1

import { execSync } from "child_process";

describe("unit test 3", () => {
    it("run job2js1", () => {
        const jobout = execSync(`zowe jobs submit lf /Users/solsu01/gitproj/zos-batch-testing/__tests__/batchUnitTests/job2step1.jcl --zosmf-p zosmftso1 --vasc`).toString();
        console.log(jobout);
        expect(jobout).toContain(`MIMCND1A HAS BEEN COPIED`);
    }
    )
    }, )