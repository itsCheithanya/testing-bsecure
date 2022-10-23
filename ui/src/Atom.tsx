import { atom } from "recoil";

export const Loading=atom({
    key:"loading",
    default:false
})
export const scanUrl = atom({
  key: "scanUrl",
  default: "",
});