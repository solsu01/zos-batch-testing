//unit test 1: job 1: step 1

import { execSync } from "child_process";

describe("unit test 1", () => {
    it("run job1js1", () => {
        const jobout = execSync(`zowe jobs submit lf /Users/solsu01/gitproj/zos-batch-testing/__tests__/batchUnitTests/job1step1.jcl --zosmf-p zosmftso1 --vasc`).toString();
        console.log(jobout);
        expect(jobout).toContain(`MIMDRVFD HAS BEEN COPIED`);
    }
    )
    }, )