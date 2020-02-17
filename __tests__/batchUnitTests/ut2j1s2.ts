//unit test 2: job 1: step 2

import { execSync } from "child_process";

describe("unit test 2", () => {
    it("run job1js2", () => {
        const jobout = execSync(`zowe jobs submit lf /Users/solsu01/gitproj/zos-batch-testing/__tests__/batchUnitTests/job1step2.jcl --zosmf-p zosmftso1 --vasc`).toString();
        console.log(jobout);
        expect(jobout).toContain(`The initial working directory was not specified`);
    }
    )
    }, )