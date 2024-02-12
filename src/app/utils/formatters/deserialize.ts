export function deserialize(toDesirialize:string) {
  return toDesirialize.replace(/[^a-zA-Z0-9]/g, "");
}
