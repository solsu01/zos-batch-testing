import { execSync } from "child_process";

describe("unit test 1", () => {
    it("run every jobstep pgm", () => {
        const gen = execSync(`npm run jclcheck`).toString();
        console.log(gen);
        expect(gen).toContain(`Return Code: "0"`);
    }
    )
    }, )