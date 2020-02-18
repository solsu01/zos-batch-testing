//component test 1: job 1

import { execSync } from "child_process";

describe("component test 1", () => {
    it("should run job1", () => {
        const jobout = execSync(`zowe jobs submit lf /Users/solsu01/gitproj/zos-batch-testing/zosBatchApplication/mimcopy1.jcl --zosmf-p zosmftso1 --vasc`).toString();
        console.log(jobout);
        expect(jobout).toContain(`MIMDRVFD HAS BEEN COPIED`);
        expect(jobout).toContain('The initial working directory was not specified');
    }
    )
    }, )