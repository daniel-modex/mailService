import { z } from "zod";
import { payloadSchema, emailControlSchema } from "./schemas";

export type PayloadSchema = z.infer<typeof payloadSchema>;
// export type PayloadSchemaOTP = z.infer<typeof payloadSchemaOTP>;
export type ControlSchema = z.infer<typeof emailControlSchema>;
