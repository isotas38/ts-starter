import * as assert from "power-assert";
import {add} from "../src/sub";

it("2 + 3 = 5", () => {
    assert(add(2, 3) === 5);
});
