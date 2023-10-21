import { debug, getInput, info } from "npm:@actions/core@1.10.1";
import { writeSummary } from "./github.ts";

info("Start main process")
const message = getInput("message", { required: true });

debug(message)
await writeSummary("main", message)

info("Complete main process")
