"use client"
export async function getResponse(message: string,uid:string,cid:string,chid:string) {
  const res2 = await fetch(`/api/dummy?uid=${uid}&cid=${cid}&chid=${chid}`, {
    method: "PUT",
  });
  if (!res2.ok) {
    return false;
  }
  return true;
}
