/**
 * 随机返回颜色值rgba
 * @returns 
 */
export function randomColor() {
  var r = Math.floor(Math.random() * (255 + 1))
  var g = Math.floor(Math.random() * (255 + 1))
  var b = Math.floor(Math.random() * (255 + 1))
  var a = (Math.floor(Math.random() * 11) / 10).toFixed(1)
  if (a == 0 || a == 1) {
    a = Number(a).toFixed(0)
  }
  return `rgb(${r}, ${g}, ${b}, ${a})`
}
