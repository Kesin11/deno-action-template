import { debug, info } from "npm:@actions/core@1.10.1";
import { writeSummary } from "./github.ts";

info("Start post process")
debug("Debug message")

writeSummary("post", "This is a post process summary")

info("Complete post process")
