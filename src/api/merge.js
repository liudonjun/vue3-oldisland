import VueAxios from "./axios"

//get
export function getAction(url, parameter) {
  return VueAxios({
    url: url,
    method: "get",
    params: parameter,
  })
}

//post
export function postAction(url, parameter) {
  return VueAxios({
    url: url,
    method: "post",
    data: parameter,
  })
}
