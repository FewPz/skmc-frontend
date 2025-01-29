import crypto from "crypto";

export function generateSecureKey(): string {
  return crypto.randomBytes(16).toString("hex");
}
